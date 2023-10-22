using System;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;

namespace LInjector.Classes
{
    public class WSComm
    {
        private static WSComm instance;
        private WebSocket webSocket;

        public WSComm()
        {

        }

        public static WSComm GetInstance()
        {
            if (instance == null)
            {
                instance = new WSComm();
            }
            return instance;
        }

        public async Task Start()
        {
            var listener = new HttpListener();
            listener.Prefixes.Add("http://localhost:5343/");
            listener.Start();

            MessageBox.Show("WebSocket server is running...");

            while (true)
            {
                var context = await listener.GetContextAsync();
                if (context.Request.IsWebSocketRequest)
                {
                    await ProcessWebSocketRequest(context);
                }
            }
        }

        public async Task SendMessage(string message)
        {
            if (webSocket != null && webSocket.State == WebSocketState.Open)
            {
                byte[] messageBuffer = Encoding.UTF8.GetBytes(message);
                await webSocket.SendAsync(new ArraySegment<byte>(messageBuffer), WebSocketMessageType.Text, true, CancellationToken.None);
            }
            else
            {
                MessageBox.Show("WebSocket Error : WebSocket not initialized.", "LInjector | Error", MessageBoxButton.OK);
            }
        }

        private async Task ProcessWebSocketRequest(HttpListenerContext context)
        {
            var wsContext = await context.AcceptWebSocketAsync(null);

            using (WebSocket webSocket = wsContext.WebSocket)
            {
                this.webSocket = webSocket;

                try
                {
                    byte[] buffer = new byte[1024];
                    WebSocketReceiveResult result;

                    do
                    {
                        result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                        if (result.MessageType == WebSocketMessageType.Text)
                        {
                            string message = Encoding.UTF8.GetString(buffer, 0, result.Count);

                            CustomCw.rconsoleprint(message, "lgray");
                            // Do thingies with message

                            string responseMessage = "Received: " + message;
                            await SendMessage(responseMessage);
                        }
                    }
                    while (!result.EndOfMessage);
                }
                catch (WebSocketException ex)
                {
                    MessageBox.Show("WebSocket Error : " + ex.Message, "LInjector | Error", MessageBoxButton.OK);
                }
            }
        }
    }
}
