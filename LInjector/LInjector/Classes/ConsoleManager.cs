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
        private static extern bool SetConsoleCtrlHandler(ConsoleCtrlHandlerDelegate handlerRoutine,
                                                         bool add);

        [DllImport("user32.dll")]
        [return: MarshalAs(UnmanagedType.Bool)]
        public static extern bool SetForegroundWindow(IntPtr hWnd);

        /// <summary>
        /// Auxiliar function used in ConsoleManager.Initialize function: <see cref="Initialize"/>
        /// </summary>
        /// <param name="eventType"></param>
        /// <returns>I don't know</returns>
        private static bool ConsoleCtrlHandler(int eventType)
        {
            if (eventType == 2)
            {
                HideConsole();
                return true;
            }

            return false;
        }

        /// <summary>
        /// Toggles the Visibility of the Windows Console used for debug prints and rconsole, also
        /// known as "CMD Window".
        /// </summary>
        public static void ToggleConsoleVisibility()
        {
            if (isConsoleVisible)
                HideConsole();
            else
                ShowConsole();
        }

        /// <summary>
        /// Self-explainatory
        /// </summary>
        public static void ShowConsole()
        {
            if (!isConsoleVisible)
            {
                AllocConsole();
                Console.Title = "";
                isConsoleVisible = true;
                var writer = new StreamWriter(Console.OpenStandardOutput());
                Console.SetOut(writer);
                DeleteMenu(GetSystemMenu(GetConsoleWindow(), false), SC_CLOSE, MF_BYCOMMAND);
            }
        }

        /// <summary>
        /// Self-explainatory
        /// </summary>
        public static void HideConsole()
        {
            if (isConsoleVisible)
            {
                FreeConsole();
                isConsoleVisible = false;
            }
        }

        /// <summary>
        /// Initializes the Console to make it only closable from the WPF Button.
        /// </summary>
        public static void Initialize()
        {
            SetConsoleCtrlHandler(ConsoleCtrlHandler, true);
            DeleteMenu(GetSystemMenu(GetConsoleWindow(), false), SC_CLOSE, MF_BYCOMMAND);
        }

        /// <summary>
        /// Brings the Windows Console to the front of all the Windows.
        /// </summary>
        public static void ToFront() { SetForegroundWindow(GetConsoleWindow()); }

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