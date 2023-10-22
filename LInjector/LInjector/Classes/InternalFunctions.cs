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

        static async Task ProcessWebSocketRequest(HttpListenerContext context)
        {
            var wsContext = await context.AcceptWebSocketAsync(null);

            using (WebSocket webSocket = wsContext.WebSocket)
            {
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

                            // CustomCw.rconsoleprint(message, "lgray");
                            // Do thingies with the received message

                            string responseMessage = "Received: " + message;
                            byte[] responseBuffer = Encoding.UTF8.GetBytes(responseMessage);

                            await webSocket.SendAsync(new ArraySegment<byte>(responseBuffer), WebSocketMessageType.Text, true, CancellationToken.None);
                        }
                    }
                    while (!result.EndOfMessage);
                }
                catch (WebSocketException ex)
                {
                    MessageBox.Show("WebSocket error: " + ex.Message);
                }
            }
        }
    }
}
