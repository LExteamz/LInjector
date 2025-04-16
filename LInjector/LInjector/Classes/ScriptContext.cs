using System.IO;
using System.Windows.Threading;
using MessageBox = System.Windows.Forms.MessageBox;

namespace LInjector.Classes
{
    public class ScriptContext
    {
        static string path = Path.Combine(Path.GetTempPath(), "LInjector", "Init.lua");

        public static void BeginFunctionTick()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Interval = TimeSpan.FromMilliseconds(1000);
            timer.Tick += (sender, e) =>
            {
                if (DLLInterface.IsAttached())
                {
                    string initContent = File.ReadAllText(path);
                    DLLInterface.RunScript(initContent);
                }
            };
            timer.Start();
        }

        public static async void EnsureFunctionsFile()
        {
            if (!File.Exists(path))
                await ResourceManager.DownloadFileToTempAsync("https://raw.githubusercontent.com/LExteamz/LInjector/refs/heads/main/LInjector/LInjector/Resources/Internal/Init.lua", "Init.lua");
        }
    }
}
