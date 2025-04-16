using System.Runtime.InteropServices;
using System.Security;

namespace LInjector.Classes
{

    [SuppressUnmanagedCodeSecurity]
    public static class ConsoleManager
    {

        [DllImport("kernel32.dll")]
        private static extern bool AllocConsole();

        [DllImport("kernel32.dll")]
        private static extern bool FreeConsole();

        [DllImport("kernel32.dll")]
        private static extern IntPtr GetConsoleWindow();

        [DllImport("user32.dll")]
        [return: MarshalAs(UnmanagedType.Bool)]
        public static extern bool SetForegroundWindow(IntPtr hWnd);

        public static bool HasConsole() => GetConsoleWindow() != IntPtr.Zero;
        public static void Show() => AllocConsole();
        public static void Hide() => FreeConsole();
        public static void Toggle() { if (HasConsole()) Hide(); else Show(); }
        public static void ToFront() => SetForegroundWindow(GetConsoleWindow());
    }
}
