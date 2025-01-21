using System;
using System.IO;

namespace LInjector.Classes
{
    public static class CustomCw
    {
        private static readonly ConsoleColor OriginalForeColor = Console.ForegroundColor;
        private static readonly StreamWriter Writer;

        static CustomCw()
        {
            Writer = new StreamWriter(Console.OpenStandardOutput()) { AutoFlush = true };
            Console.SetOut(Writer);
        }

        public static void Cw(string content, bool timestamp = false, string type = "")
        {
            string prefix = timestamp ? $"{GetTimestamp()} " : string.Empty;
            string message = prefix + GetFormattedMessage(type, content);

            Console.ForegroundColor = GetConsoleColor(type);
            Console.WriteLine(message);
            ResetConsoleColor();
        }

        public static void rconsoleprint(string content, string color = "lgray")
        {
            ConsoleManager.ToFront();
            Console.ForegroundColor = GetConsoleColor(color);
            Console.WriteLine(content);
            ResetConsoleColor();
        }

        private static string GetFormattedMessage(string type, string content)
        {
            switch (type.ToLower())
            {
                case "error":
                    return $"[ERROR] {content}";
                case "warning":
                    return $"[WARNING] {content}";
                case "debug":
                    return $"[DEBUG] {content}";
                case "info":
                    return $"[INFO] {content}";
                case "roblox":
                    return $"[ROBLOX] {content}";
                default:
                    return content;
            }
        }

        private static ConsoleColor GetConsoleColor(string type)
        {
            switch (type.ToLower())
            {
                case "black":
                    return ConsoleColor.Black;
                case "blue":
                    return ConsoleColor.Blue;
                case "dblue":
                    return ConsoleColor.DarkBlue;
                case "green":
                    return ConsoleColor.Green;
                case "cyan":
                    return ConsoleColor.Cyan;
                case "red":
                    return ConsoleColor.Red;
                case "magenta":
                    return ConsoleColor.Magenta;
                case "brown":
                    return ConsoleColor.DarkYellow;
                case "lgray":
                    return ConsoleColor.Gray;
                case "dgray":
                    return ConsoleColor.DarkGray;
                case "white":
                    return ConsoleColor.White;
                case "info":
                    return ConsoleColor.Blue;
                case "warn":
                    return ConsoleColor.Yellow;
                case "err":
                    return ConsoleColor.Red;
                case "error":
                    return ConsoleColor.Red;
                case "warning":
                    return ConsoleColor.Yellow;
                case "debug":
                    return ConsoleColor.DarkGray;
                case "roblox":
                    return ConsoleColor.Red;
                default:
                    return ConsoleColor.Gray;
            }
        }

        private static void ResetConsoleColor() => Console.ForegroundColor = OriginalForeColor;

        private static string GetTimestamp() => $"[{DateTime.Now:HH:mm:ss}]";
    }
}
