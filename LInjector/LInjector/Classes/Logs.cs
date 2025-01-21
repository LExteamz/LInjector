using Label = System.Windows.Controls.Label;

namespace LInjector.Classes
{
    public class Logs
    {
        public static void Console(string message) => Shared.mainView!.OutputLogs.Text += $"\n{message}";
        public static async Task AnimateObjectContentAsync(Label Instance, string Message)
        {
            for (int i = Instance.Content.ToString()!.Length; i > 0; i--)
            {
                Instance.Content = Instance.Content.ToString()!.Remove(i - 1);
                await Task.Delay(20);
            }

            Instance.Content = string.Empty;

            foreach (var character in Message)
            {
                Instance.Content += character.ToString();
                await Task.Delay(30);
            }
        }
    }


}
