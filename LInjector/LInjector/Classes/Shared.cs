using LInjector.Windows;
using System;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace LInjector.Classes
{
    public static class ConsoleControl
    {
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
            Shared.mainWindow.MainViewz.ConsoleLogList.Items.Add(toLog);
        }
    }

    public static class Shared
    {
        public static MainWindow mainWindow = null;
    }

    public static class Base
    {
        public static async Task<object> TryCatch(Delegate func, params object[] parameters)
        {
            try
            {

                var result = func.DynamicInvoke(parameters);

                if (result is Task task)
                {
                    await task;
                    var taskResultProperty = task.GetType().GetProperty("Result");
                    return taskResultProperty?.GetValue(task);
                }

                return result;
            }
            catch (Exception ex)
            {
                FunctionWatch.clipboardSetText($"Message: {ex.Message}\nStack Trace: {ex.StackTrace}");
                await Notifications.Fire("Exception copied to clipboard");
                return null;
            }
        }
    }
}