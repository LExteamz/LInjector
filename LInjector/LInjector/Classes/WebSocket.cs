using System.Collections.Concurrent;
using System.Net;
using System.Net.WebSockets;
using System.Text;

namespace LInjector.Classes
{
    public class WebComs
    {
        private static readonly object lockObject = new object();
        private static WebComs? instance;
        private static HttpListener listener = new HttpListener();
        public int Port = 5343; // Default port
        public string Address() => $"http://localhost:{Port}/";

        private static ConcurrentDictionary<string, WebSocket> connectedClients = new ConcurrentDictionary<string, WebSocket>();

        private WebSocket webSocket;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor
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
                        instance = new WebComs();
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
            listener.Start();

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
                    await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "LINJECTOR_DISCONNECT", CancellationToken.None);
                }
                catch (WebSocketException ex)
                {
                    ConsoleControl.Log($"Couldn't close the WebSocket! {ex.Message}", ConsoleControl.LogType.Error);
                }
                finally
                {
                    webSocket.Dispose();
                    webSocket = null!;
                }
            }
            else
            {
                webSocket?.Dispose();
                webSocket = null!;
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
                            ScriptContext.HandleFunction(receivedMessage);
                        }
                    }
                    while (!result.EndOfMessage);
                }
                catch (WebSocketException ex)
                {
                    ConsoleControl.Log($"WebSocket Error (2): {ex.Message}", ConsoleControl.LogType.Error);
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
                    ConsoleControl.Log($"WebSocket Error (3): {ex.Message}", ConsoleControl.LogType.Error);
                }
            }
        }
    }
}