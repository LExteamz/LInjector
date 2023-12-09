using System;
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
        private WebSocket webSocket;

        public WebComs() { }

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

        public async Task Start()
        {
            var listener = new HttpListener();
            listener.Prefixes.Add("http://localhost:5343/");
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
                MessageBox.Show("WebSocket Error: " + ex.Message, "LInjector | Error", MessageBoxButton.OK);
            }
            finally
            {
                listener.Close();
            }
        }

        public async Task SendMessage(string message)
        {
            WebSocket socket;

            lock (lockObject)
            {
                socket = webSocket;
            }

            try
            {
                if (socket != null && socket.State == WebSocketState.Open)
                {
                    byte[] messageBuffer = Encoding.UTF8.GetBytes(message);
                    await socket.SendAsync(new ArraySegment<byte>(messageBuffer), WebSocketMessageType.Text, true, CancellationToken.None);
                }
                else { }
            }
            catch (Exception ex)
            {
                MessageBox.Show("WebSocket Error: " + ex.Message, "LInjector | Error", MessageBoxButton.OK);
            }
        }

        private async Task ProcessWebSocketRequest(HttpListenerContext context)
        {
            var wsContext = await context.AcceptWebSocketAsync(null);

            using (WebSocket socket = wsContext.WebSocket)
            {
                this.webSocket = socket;

                try
                {
                    byte[] buffer = new byte[1024];
                    WebSocketReceiveResult result;

                    do
                    {
                        result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                        if (result.MessageType == WebSocketMessageType.Text)
                        {
                            string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                            if (ConfigHandler.websocket_mode == true) { WebSocketFunctions.Parse(message); } else { return; }
                        }
                    }
                    while (!result.EndOfMessage);
                }
                catch (WebSocketException ex)
                {
                    MessageBox.Show("WebSocket Error: " + ex.Message, "LInjector | Error", MessageBoxButton.OK);
                }
                finally
                {
                    socket.Dispose(); // Ensure WebSocket resources are released
                }
            }
        }
    }

    public static class WebSocketFunctions
    {
        public static void Parse(string arguments)
        {
            string[] argsArray = arguments.Split(new[] { "|||" }, StringSplitOptions.None).Select(value => value.Trim()).ToArray();

            if (argsArray[0] == "messagebox")
            {
                MessageBox.Show(argsArray[1], argsArray[2]);
                return;
            }
            if (argsArray[0] == "welcome")
            {
                FunctionWatch.CreateLog($"Hello, {arguments[1]}!\nSuccessfully loaded at {arguments[2]}");

                return;
            }
            if (argsArray[0] == "toclipboard")
            {
                FunctionWatch.clipboardSetText(arguments[1].ToString());
                return;
            }
            if (argsArray[0] == "rconsoleclose")
            {
                ConsoleManager.HideConsole();
                return;
            }
            if (argsArray[0] == "rconsoleshow")
            {
                ConsoleManager.ShowConsole();
                return;
            }
            if (argsArray[0] == "rconsoleprint")
            {
                ConsoleManager.ShowConsole();
                CustomCw.rconsoleprint($"{argsArray [1]}", "white");
                return;
            }
            if (argsArray   [0] == "rconsoleinfo")
            {
                ConsoleManager.ShowConsole();
                CustomCw.rconsoleprint($"{argsArray[1]}", "info");
                return;
            }
            if (argsArray[0] == "rconsolewarn")
            {
                ConsoleManager.ShowConsole();
                CustomCw.rconsoleprint($"{argsArray[1]}", "warn");
                return;
            }
            if (argsArray   [0] == "rconsoleerr")
            {
                ConsoleManager.ShowConsole();
                CustomCw.rconsoleprint($"{argsArray [1]}", "err");
                return;
            }
            if (argsArray[0] == "rconsolename")
            {
                ConsoleManager.ShowConsole();
                Console.Title = argsArray[1];
                return;
            }

            if (argsArray   [0] == "rconsoleclear")
            {
                try { Console.Clear(); } catch { }
                return;
            }

            if (argsArray[0] == "setDiscordRPC")
            {
                RPCManager.SetRPCDetails($"{argsArray[1]}");
                return;
            }
        }
    }
}
