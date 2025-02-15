using System;
using System.Collections.Generic;
using System.Drawing.Text;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace LInjector.Classes
{
    public class ResourceManager
    {
        [DllImport("gdi32.dll", EntryPoint = "AddFontResourceW", SetLastError = true)]
        public static extern int AddFontResource([In][MarshalAs(UnmanagedType.LPWStr)] string lpFileName);

        [DllImport("user32.dll", EntryPoint = "SendMessageTimeoutW", SetLastError = true)]
        public static extern IntPtr SendMessageTimeout(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam, uint fuFlags, uint uTimeout, out IntPtr lpdwResult);


        private const uint WM_FONTCHANGE = 0x001D;
        private const uint SMTO_ABORTIFHUNG = 0x0002;

        public static bool IsFontInstalled(string fontName) => (new InstalledFontCollection()).Families.Any(f => f.Name.Equals(fontName, StringComparison.OrdinalIgnoreCase));

        public static void InstallFont(string fontFilePath)
        {
            int result = AddFontResource(fontFilePath);

            if (result == 0)
                return;

            IntPtr hWndBroadcast = new IntPtr(0xFFFF); // HWND_BROADCAST
            IntPtr lpdwResult;
            SendMessageTimeout(hWndBroadcast, WM_FONTCHANGE, IntPtr.Zero, IntPtr.Zero, SMTO_ABORTIFHUNG, 1000, out lpdwResult);
        }
    }
}
