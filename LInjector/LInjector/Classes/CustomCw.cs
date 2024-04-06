using System;
using System.IO;

namespace LInjector.Classes
{
    public static class CustomCw
    {
        private static ConsoleColor OriginalForeColor = Console.ForegroundColor;

        /// <summary>
        /// Writes text to the Windows CMD Console, this is LInjector-used.
        /// </summary>
        public static void Cw(string content, bool timestamp = false, string type = "")
        {
            var writer = new StreamWriter(Console.OpenStandardOutput());
            writer.AutoFlush = true;
            Console.SetOut(writer);

            if (timestamp == true)
            {
                switch (type)
                {
                    case "error":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"{ts()} [ERROR] {content}");
                        break;
                    case "warning":
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        Console.WriteLine($"{ts()} [WARNING] {content}");
                        break;
                    case "debug":
                        Console.ForegroundColor = ConsoleColor.DarkGray;
                        Console.WriteLine($"{ts()} [DEBUG] {content}");
                        break;
                    case "info":
                        Console.ForegroundColor = ConsoleColor.Blue;
                        Console.WriteLine($"{ts()} [INFO] {content}");
                        break;
                    case "roblox":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"{ts()} [ROBLOX] {content}");
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Gray;
                        Console.WriteLine($"{ts()}{content}");
                        break;
                }

                rscolor();
            }
            else
            {
                switch (type)
                {
                    case "error":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"[ERROR] {content}");
                        break;
                    case "warning":
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        Console.WriteLine($"[WARNING] {content}");
                        break;
                    case "info":
                        Console.ForegroundColor = ConsoleColor.Blue;
                        Console.WriteLine($"[INFO] {content}");
                        break;
                    case "debug":
                        Console.ForegroundColor = ConsoleColor.DarkGray;
                        Console.WriteLine($"[DEBUG] {content}");
                        break;
                    case "roblox":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"[ROBLOX] {content}");
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Gray;
                        Console.WriteLine($"{content}");
                        break;
                }

                rscolor();
            }
        }

        /// <summary>
        /// Writes text to the Windows CMD console in rconsole format. This is script-used.
        /// </summary>
        public static void rconsoleprint(string content, string color = "lgray")
        {
            var writer = new StreamWriter(Console.OpenStandardOutput());
            writer.AutoFlush = true;
            Console.SetOut(writer);
            ConsoleManager.ToFront();

            switch (color)
            {
                case "black":
                    Console.ForegroundColor = ConsoleColor.Black;
                    break;
                case "blue":
                    Console.ForegroundColor = ConsoleColor.Blue;
                    break;
                case "dblue":
                    Console.ForegroundColor = ConsoleColor.Magenta;
                    break;
                case "green":
                    Console.ForegroundColor = ConsoleColor.Green;
                    break;
                case "cyan":
                    Console.ForegroundColor = ConsoleColor.Cyan;
                    break;
                case "red":
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                case "magenta":
                    Console.ForegroundColor = ConsoleColor.Magenta;
                    break;
                case "brown":
                    Console.ForegroundColor = ConsoleColor.DarkYellow;
                    break;
                case "lgray":
                    Console.ForegroundColor = ConsoleColor.Gray;
                    break;
                case "dgray":
                    Console.ForegroundColor = ConsoleColor.DarkGray;
                    break;
                case "white":
                    Console.ForegroundColor = ConsoleColor.White;
                    break;
                case "info":
                    Console.ForegroundColor = ConsoleColor.Blue;
                    break;
                case "warn":
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    break;
                case "err":
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                default:
                    Console.ForegroundColor = ConsoleColor.Gray;
                    break;
            }

            Console.WriteLine(content);
            rscolor();
        }

        /// <summary>
        /// Restarts the console color
        /// </summary>
        private static void rscolor()
        {
            Console.ForegroundColor = OriginalForeColor;
        }

        /// <summary>
        /// Returns timestamp in [HH:mm:ss] format
        /// </summary>
        /// <returns></returns>
        private static string ts()
        {
            return "[ " + DateTime.Now.ToString("HH:mm:ss") + " ]";
        }
    }
}