using System.Windows;
using System.Windows.Controls;
using LInjector.Pages;
using LInjector.Windows;

namespace LInjector.Classes
{
    public static class Shared
    {
        public static MainWindow? mainWindow = null;
        public static MainView? mainView = null;

        public static void DragWnd() { try { mainWindow!.DragMove(); } catch { } }

        public static void OpenURL(string url)
        {
            try
            {
                System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo
                {
                    FileName = url,
                    UseShellExecute = true
                });
            }
            catch { }
        }
    }

    public static class ConsoleControl
    {

        public enum LogType
        {
            Normal = 1,
            Error = 2,
            Warning = 3,
            Information = 4,
            Success = 5
        }

        /// <summary>
        /// Color converter from aRGB to SolidColorBrush
        /// </summary>
        /// <param name="srgb">String in ARGB Fomat (#AABBCCDD)</param>
        /// <returns>SolidColorBrush used in <see cref="ParseColor(string)"/></returns>
        /// <exception cref="ArgumentException"></exception>
        public static System.Windows.Media.SolidColorBrush ParseColor(string srgb)
        {
            if (srgb.Contains("#")) srgb = srgb.TrimStart('#');

            if (srgb.Length != 8)
            {
                throw new ArgumentException(
                    $"aRGB must be 8 characters, got {srgb} : {srgb.Length}", nameof(srgb));
            }

            byte a = byte.Parse(srgb.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
            byte r = byte.Parse(srgb.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
            byte g = byte.Parse(srgb.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
            byte b = byte.Parse(srgb.Substring(6, 2), System.Globalization.NumberStyles.HexNumber);

            return new System.Windows.Media.SolidColorBrush(
                System.Windows.Media.Color.FromArgb(a, r, g, b));
        }

        /// <summary>
        /// Logs a message into the Status Listbox
        /// </summary>
        /// <param name="message">The message to log.</param>
        /// <param name="type">The type of log (default is Normal).</param>
        /// <summary>
        /// Logs a message into the Status Listbox
        /// </summary>
        /// <param name="message">The message to log.</param>
        /// <param name="type">The type of log (default is Normal).</param>
        public static void Log(string message, LogType type = LogType.Normal)
        {
            var localTime = DateTime.Now.ToString("HH:mm");
            var formattedMessage = $"[{localTime}] {message}";

            // Create a TextBlock for text wrapping
            var textBlock = new TextBlock
            {
                Text = formattedMessage,
                TextWrapping = TextWrapping.Wrap, // Enable wrapping
                Foreground = GetLogColor(type) // Assign the color based on log type
            };

            var toLog = new ListBoxItem
            {
                Content = textBlock,
                Visibility = System.Windows.Visibility.Visible,
            };

            Logs.Console(message: message);
        }


        /// <summary>
        /// Returns the color brush for the given log type.
        /// </summary>
        private static System.Windows.Media.Brush GetLogColor(LogType type)
        {
            switch (type)
            {
                case LogType.Error:
                    return ParseColor("#FFE57373");
                case LogType.Warning:
                    return ParseColor("#FFFFF176");
                case LogType.Information:
                    return ParseColor("#FF4FC3F7");
                case LogType.Success:
                    return ParseColor("#FFA5D6A7");
                case LogType.Normal:
                default:
                    return ParseColor("#FFFAFAFA");
            }
        }
    }
}
