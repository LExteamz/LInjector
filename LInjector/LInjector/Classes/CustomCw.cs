using System;
using System.IO;

namespace LInjector.Classes
{
    public static class CustomCw
    {
        private static ConsoleColor OriginalForeColor = Console.ForegroundColor;

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
                        rscolor();
                        break;
                    case "warning":
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        Console.WriteLine($"{ts()} [WARNING] {content}");
                        rscolor();
                        break;
                    case "debug":
                        Console.ForegroundColor = ConsoleColor.DarkGray;
                        Console.WriteLine($"{ts()} [DEBUG] {content}");
                        rscolor();
                        break;
                    case "info":
                        Console.ForegroundColor = ConsoleColor.Blue;
                        Console.WriteLine($"{ts()} [INFO] {content}");
                        rscolor();
                        break;
                    case "roblox":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"{ts()} [ROBLOX] {content}");
                        rscolor();
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Gray;
                        Console.WriteLine($"{ts()}{content}");
                        rscolor();
                        break;
                }
            }
            else
            {
                switch (type)
                {
                    case "error":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"[ERROR] {content}");
                        rscolor();
                        break;
                    case "warning":
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        Console.WriteLine($"[WARNING] {content}");
                        rscolor();
                        break;
                    case "info":
                        Console.ForegroundColor = ConsoleColor.Blue;
                        Console.WriteLine($"[INFO] {content}");
                        rscolor();
                        break;
                    case "debug":
                        Console.ForegroundColor = ConsoleColor.DarkGray;
                        Console.WriteLine($"[DEBUG] {content}");
                        rscolor();
                        break;
                    case "roblox":
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine($"[ROBLOX] {content}");
                        rscolor();
                        break;
                    default:
                        Console.ForegroundColor = ConsoleColor.Gray;
                        Console.WriteLine($"{content}");
                        rscolor();
                        break;
                }
            }
        }

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
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "blue":
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "dblue":
                    Console.ForegroundColor = ConsoleColor.Magenta;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "green":
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "cyan":
                    Console.ForegroundColor = ConsoleColor.Cyan;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "red":
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "magenta":
                    Console.ForegroundColor = ConsoleColor.Magenta;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "brown":
                    Console.ForegroundColor = ConsoleColor.DarkYellow;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "lgray":
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "dgray":
                    Console.ForegroundColor = ConsoleColor.DarkGray;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "white":
                    Console.ForegroundColor = ConsoleColor.White;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "info":
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "warn":
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                case "err":
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine(content);
                    rscolor();
                    break;
                default:
                    Console.ForegroundColor = ConsoleColor.Gray;
                    Console.WriteLine(content);
                    rscolor();
                    break;
            }
        }

        private static void rscolor()
        {
            Console.ForegroundColor = OriginalForeColor;
        }

        private static string ts()
        {
            return "[ " + DateTime.Now.ToString("HH:mm:ss") + " ]";
        }
    }
}