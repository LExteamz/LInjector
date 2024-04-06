using System;
using System.Windows.Controls;

namespace LInjector.Classes
{
    public static class LogToConsole
    {
        public static ListBox GetListBox = new ListBox();

        /// <summary>
        /// Logs a message into the Status Listbox
        /// </summary>
        /// <param name="message"></param>
        public static void Log(string message)
        {
            ListBoxItem toLog = new ListBoxItem();
            DateTime localTime = DateTime.Now;

            string FormattedMessage = $"[{localTime.ToString("HH:mm")}] {message}";
            toLog.Content = FormattedMessage;
            toLog.Visibility = System.Windows.Visibility.Visible;
            GetListBox.Items.Add(toLog);
        }
    }
}