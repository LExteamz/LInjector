﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;

namespace LInjector.Classes
{
    public class WebComs
    {
        private static readonly object lockObject = new object();
        private static WebComs instance;
        private static HttpListener listener = new HttpListener();
        public int Port { get; set; }
        public string Address() => $"http://localhost:{Port}/";

        private static ConcurrentDictionary<string, WebSocket> connectedClients = new ConcurrentDictionary<string, WebSocket>();

        private WebSocket webSocket;

        public WebComs() { }

        public bool IsRunning => listener.IsListening;

        /// <summary>
        /// Retrieves a singleton instance of the WebComs class.
        /// </summary>
        /// <returns>Instance of WebComs</returns>
        public static WebComs GetInstance()
        {
            if (instance == null)
            {
                lock (lockObject)
                {
                    if (instance == null)
                    {
                        instance = new WebComs();
                    }
                }
            }
            return instance;
        }

        /// <summary>
        /// Returns the number of devices currently connected to the WebSocket server.
        /// </summary>
        /// <returns>Number of connected devices</returns>
        public int GetDevicesConnected() => connectedClients.Count;

        /// <summary>
        /// Starts the WebSocket server on localhost:5343.
        /// </summary>
        /// <returns></returns>
        public async Task Start()
        {
            listener.Prefixes.Add(Address());
            try
            {
                listener.Start();
                ConsoleControl.Log($"WebSocket running @ {Address()}");
                await Notifications.Fire("WebSocket is running!");
            }
            catch (HttpListenerException ex)
            {
                Shared.mainView.ToggleWebSocketMode.IsChecked = false;
                await CloseWebSocket();
                Port = 5343;
                ConfigHandler.SetConfigValue("websocket_port", 5343);
                ConfigHandler.websocket_port = 5343;
                Shared.mainView.WebSocketPortText.Text = "5343";
                ConsoleControl.Log("Port set to 5343 to avoid critical errors");
                await Notifications.Fire("Invalid Port, try another one");
                ConsoleControl.Log($"{ex.ErrorCode} {ex.Message}", ConsoleControl.LogType.Error);
            }

            try
            {
                while (true)
                {
                    var context = await listener.GetContextAsync();
                    if (context.Request.IsWebSocketRequest)
                    {
                        await ProcessWebSocketRequest(context);
                    }
                }
            }
            catch (Exception ex)
            {
                ConsoleControl.Log($"WebSocket Error (1): {ex.Message}", ConsoleControl.LogType.Error);
                return;
            }
            finally
            {
                listener.Close();
            }
        }

        /// <summary>
        /// Restarts the WebSocket server.
        /// </summary>
        public async Task RestartWebSocket()
        {
            await CloseWebSocket();
            await Start();
        }

        /// <summary>
        /// Closes the current WebSocket connection.
        /// </summary>
        public async Task CloseWebSocket()
        {
            listener.Prefixes.Clear();

            if (webSocket != null && (webSocket.State == WebSocketState.Open || webSocket.State == WebSocketState.CloseReceived))
            {
                try
                {
                    await webSocket.CloseAsync(WebSocketCloseStatus.InternalServerError, "LINJECTOR_DISCONNECT", CancellationToken.None);
                }
                catch (WebSocketException ex)
                {
                    ConsoleControl.Log($"Couldn't close the WebSocket! {ex.Message}", ConsoleControl.LogType.Error);
                }
                finally
                {
                    webSocket.Dispose();
                    webSocket = null;
                }
            }
            else
            {
                webSocket?.Dispose();
                webSocket = null;
            }

        }


        /// <summary>
        /// Processes WebSocket client requests and manages connections.
        /// </summary>
        /// <param name="context">HTTP request context</param>
        private async Task ProcessWebSocketRequest(HttpListenerContext context)
        {
            var wsContext = await context.AcceptWebSocketAsync(null);
            string clientId = Guid.NewGuid().ToString(); // Unique identifier for each client

            using (WebSocket socket = wsContext.WebSocket)
            {
                this.webSocket = socket;
                connectedClients.TryAdd(clientId, socket);

                try
                {
                    byte[] buffer = new byte[4096];
                    WebSocketReceiveResult result;

                    do
                    {
                        result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                        if (result.MessageType == WebSocketMessageType.Text)
                        {
                            string receivedMessage = Encoding.UTF8.GetString(buffer, 0, result.Count);
                            if (ConfigHandler.websocket_mode)
                            {
                                WebSocketFunctions.Parse(receivedMessage);
                            }
                            else
                            {
                                return;
                            }
                        }
                    }
                    while (!result.EndOfMessage);
                }
                catch (WebSocketException ex)
                {
                    ConsoleControl.Log($"WebSocket Error (3): {ex.Message}", ConsoleControl.LogType.Error);
                }
                finally
                {
                    // Remove client from the list when disconnected
                    connectedClients.TryRemove(clientId, out _);
                    socket.Dispose();
                }
            }
        }

        /// <summary>
        /// Sends a message to all connected clients.
        /// </summary>
        /// <param name="message">Message to be sent</param>
        /// <returns></returns>
        public async Task SendMessage(string message)
        {
            foreach (var client in connectedClients.Values)
            {
                try
                {
                    if (client != null && client.State == WebSocketState.Open)
                    {
                        byte[] messageBuffer = Encoding.UTF8.GetBytes(message);
                        await client.SendAsync(new ArraySegment<byte>(messageBuffer), WebSocketMessageType.Text, true, CancellationToken.None);
                    }
                }
                catch (WebSocketException ex)
                {
                    ConsoleControl.Log($"WebSocket Error (2): {ex.Message}", ConsoleControl.LogType.Error);
                }
            }
        }
    }

    public static class WebSocketFunctions
    {
        /// <summary>
        /// Parses the WebSocket request messages.
        /// </summary>
        /// <param name="arguments"></param>
        public static void Parse(string arguments)
        {
            string[] argsArray = arguments.Split(new[] { "|||" }, StringSplitOptions.None).Select(value => value.Trim()).ToArray();
            if (argsArray.Length == 0) return;

            var commandActions = new Dictionary<string, Action>
            {
                { "messagebox", () => MessageBox.Show(argsArray[1], argsArray[2]) },
                { "welcome", () => FunctionWatch.CreateLog($"Hello, {argsArray[1]}!\nSuccessfully loaded at {argsArray[2]}") },
                { "toclipboard", () => FunctionWatch.clipboardSetText(argsArray[1]) },
                { "rconsoleclose", ConsoleManager.HideConsole },
                { "rconsoleshow", ConsoleManager.ShowConsole },
                { "rconsoleprint", () => { ConsoleManager.ShowConsole(); CustomCw.rconsoleprint(argsArray[1], "white"); } },
                { "rconsoleinfo", () => { ConsoleManager.ShowConsole(); CustomCw.rconsoleprint(argsArray[1], "info"); } },
                { "rconsolewarn", () => { ConsoleManager.ShowConsole(); CustomCw.rconsoleprint(argsArray[1], "warn"); } },
                { "rconsoleerr", () => { ConsoleManager.ShowConsole(); CustomCw.rconsoleprint(argsArray[1], "err"); } },
                { "rconsolename", () => { ConsoleManager.ShowConsole(); Console.Title = argsArray[1]; } },
                { "rconsoleclear", () => { try { Console.Clear(); } catch { } } },
                { "setDiscordRPC", () => RPCManager.SetRPCDetails(argsArray[1]) },
                { "consolelog", () => ConsoleControl.Log(argsArray[1]) }
            };

            if (commandActions.TryGetValue(argsArray[0], out var action))
                action.Invoke();
        }
    }
}
