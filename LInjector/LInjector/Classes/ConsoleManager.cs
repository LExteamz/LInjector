using System;
using System.IO;
using System.Runtime.InteropServices;

namespace LInjector.Classes
{
    public static class ConsoleManager
    {
        public static bool isConsoleVisible;

        private const int MF_BYCOMMAND = 0x00000000;
        public const int SC_CLOSE = 0xF060;

        [DllImport("user32.dll")]
        public static extern int DeleteMenu(IntPtr hMenu, int nPosition, int wFlags);

        [DllImport("user32.dll")]
        private static extern IntPtr GetSystemMenu(IntPtr hWnd, bool bRevert);

        [DllImport("kernel32.dll", ExactSpelling = true)]
        private static extern IntPtr GetConsoleWindow();

        [DllImport("kernel32.dll")]
        private static extern bool SetConsoleCtrlHandler(ConsoleCtrlHandlerDelegate handlerRoutine, bool add);

        private static bool ConsoleCtrlHandler(int eventType)
        {
            if (eventType == 2)
            {
                HideConsole();
                return true;
            }

            return false;
        }

        public static void ShowConsole()
        {
            if (!isConsoleVisible)
            {
                AllocConsole();
                Console.Title = "LInjector";
                isConsoleVisible = true;
                var writer = new StreamWriter(Console.OpenStandardOutput());
                Console.SetOut(writer);
                DeleteMenu(GetSystemMenu(GetConsoleWindow(), false), SC_CLOSE, MF_BYCOMMAND);
            }
        }

        public static void HideConsole()
        {
            if (isConsoleVisible)
            {
                FreeConsole();
                isConsoleVisible = false;
            }
        }

        public static void Initialize()
        {
            SetConsoleCtrlHandler(ConsoleCtrlHandler, true);
            DeleteMenu(GetSystemMenu(GetConsoleWindow(), false), SC_CLOSE, MF_BYCOMMAND);
        }

        [DllImport("kernel32.dll")]
        private static extern bool AllocConsole();

        [DllImport("kernel32.dll")]
        private static extern bool FreeConsole();

        [DllImport("kernel32.dll")]
        private static extern bool AttachConsole(int dwProcessId);

        [DllImport("user32.dll")]
        private static extern IntPtr GetForegroundWindow();

        [DllImport("user32.dll")]
        private static extern uint GetWindowThreadProcessId(IntPtr hWnd, out int lpdwProcessId);

        private delegate bool ConsoleCtrlHandlerDelegate(int eventType);
    }
}