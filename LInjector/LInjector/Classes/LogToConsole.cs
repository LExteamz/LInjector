using System;
using System.Windows.Controls;

namespace LInjector.Classes
{
    public static class LogToConsole
    {

        public static void Log(string message, ListBox lb)
        {
            ListBoxItem toLog = new ListBoxItem();
            DateTime localTime = DateTime.Now;

            string FormattedMessage = $"[{localTime.ToString("HH:mm")}] {message}";
            toLog.Content = FormattedMessage;
            toLog.Visibility = System.Windows.Visibility.Visible;
            lb.Items.Add(toLog);
        }
    }
}