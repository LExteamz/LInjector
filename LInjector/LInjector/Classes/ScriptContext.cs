using System.IO;
using System.Windows.Threading;
using MessageBox = System.Windows.Forms.MessageBox;

namespace LInjector.Classes
{
    public class ScriptContext
    {
        static string path = Path.Combine(Path.GetTempPath(), "LInjector", "Init.lua");

        public static void BeginFunctionTick()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Interval = TimeSpan.FromMilliseconds(1000);
            timer.Tick += (sender, e) =>
            {
                if (DLLInterface.IsAttached())
                {
                    string initContent = File.ReadAllText(path);
                    DLLInterface.RunScript(initContent);


                }
            };
            timer.Start();
        }

        public static async void EnsureFunctionsFile()
        {
            if (!File.Exists(path))
                await ResourceManager.DownloadFileToTempAsync("https://raw.githubusercontent.com/LExteamz/LInjector/refs/heads/main/LInjector/LInjector/Resources/Internal/Init.lua", "Init.lua");
        }

        public static void HandleFunction(string args)
        {
            string[] argsArray = args.Split(new[] { "|||" }, StringSplitOptions.None).Select(value => value.Trim()).ToArray();
            if (argsArray.Length == 0) return;

            string command = argsArray[0];
            var actions = new Dictionary<string, Action>
            {
                { "messagebox", () => MessageBox.Show(argsArray[1], argsArray[2], MessageBoxButtons.OK) },
                { "welcome", () => Logs.Console($"Hello, {argsArray[1]}!\nSuccessfully loaded at {argsArray[2]}") },
                { "toclipboard", () => Clipboard.SetText(argsArray[1]) },
                { "rconsoleclose", ConsoleManager.Hide },
                { "rconsoleshow", ConsoleManager.Show },
                { "rconsoleclear", () => { try { Console.Clear(); } catch { } } },
                { "rconsoleprint", () => CustomCw.rconsoleprint(argsArray[1], "white") },
                { "rconsoleinfo", () => CustomCw.rconsoleprint(argsArray[1], "info") },
                { "rconsolewarn", () => CustomCw.rconsoleprint(argsArray[1], "warn") },
                { "rconsoleerr", () => CustomCw.rconsoleprint(argsArray[1], "err") },
                { "rconsolename", () => Console.Title = argsArray[1] },
                { "setdiscordrpc", () => RPCManager.SetRPCDetails(argsArray[1]) },
                { "consolelog", () => Logs.Console(argsArray[1]) }
            };

            if (actions.ContainsKey(command))
                actions[command]();
        }

        public static class CustomCw
        {
            private static readonly ConsoleColor OriginalForeColor = Console.ForegroundColor;
            private static readonly StreamWriter Writer = new StreamWriter(Console.OpenStandardOutput()) { AutoFlush = true };

            static CustomCw() => Console.SetOut(Writer);

            public static void Cw(string content, bool timestamp = false, string type = "")
            {
                Console.ForegroundColor = GetConsoleColor(type);
                Console.WriteLine($"{(timestamp ? $"[{DateTime.Now:HH:mm:ss}] " : "")}{GetFormattedMessage(type, content)}");
                ResetConsoleColor();
            }

            public static void rconsoleprint(string content, string color = "lgray")
            {
                ConsoleManager.Show();
                ConsoleManager.ToFront();
                Console.ForegroundColor = GetConsoleColor(color);
                Console.WriteLine(content);
                ResetConsoleColor();
            }

            private static string GetFormattedMessage(string type, string content) => type.ToLower() switch
            {
                "error" => $"[ERROR] {content}",
                "warning" => $"[WARNING] {content}",
                "debug" => $"[DEBUG] {content}",
                "info" => $"[INFO] {content}",
                "roblox" => $"[ROBLOX] {content}",
                _ => content
            };

            private static ConsoleColor GetConsoleColor(string type) => type.ToLower() switch
            {
                "black" => ConsoleColor.Black,
                "blue" => ConsoleColor.Blue,
                "dblue" => ConsoleColor.DarkBlue,
                "green" => ConsoleColor.Green,
                "cyan" => ConsoleColor.Cyan,
                "red" => ConsoleColor.Red,
                "magenta" => ConsoleColor.Magenta,
                "brown" => ConsoleColor.DarkYellow,
                "lgray" => ConsoleColor.Gray,
                "dgray" => ConsoleColor.DarkGray,
                "white" => ConsoleColor.White,
                "info" => ConsoleColor.Blue,
                "warn" => ConsoleColor.Yellow,
                "err" => ConsoleColor.Red,
                "error" => ConsoleColor.Red,
                "warning" => ConsoleColor.Yellow,
                "debug" => ConsoleColor.DarkGray,
                "roblox" => ConsoleColor.Red,
                _ => ConsoleColor.Gray
            };

            private static void ResetConsoleColor() => Console.ForegroundColor = OriginalForeColor;
        }
    }
}
