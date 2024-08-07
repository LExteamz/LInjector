using System;
using System.Diagnostics;
using System.IO;
using System.Windows;

namespace LInjector.Classes
{
    public static class DLLInterface
    {
        private const string DLL_PATH = "Resources\\libs\\Module.dll"; // Change this if you need

        public static async void Inject()
        {
            if (!File.Exists(DLL_PATH))
            {
                MessageBox.Show("DLL was not found!", "LInjector | Error", MessageBoxButton.OK, MessageBoxImage.Error);
                // throw new FileNotFoundException();
            }

            try
            {
                if (Process.GetProcessesByName("RobloxPlayerBeta").Length <= 0)
                {
                    await Notifications.Fire("Please, open Roblox");
                }
                else
                {
                    // Your Inject Logic

                    await Notifications.Fire("Injected");
                    FunctionWatch.runFuncWatch();
                }
            }
            catch (Exception ex)
            {
                FunctionWatch.clipboardSetText($"Message: {ex.Message}\nStack Trace: {ex.StackTrace}");
                await Notifications.Fire("Exception copied to clipboard");
            }
        }

        public static bool IsAttached()
        {
            // Your IsAttached Logic

            return false;
        }

        public static bool RunScript(string src)
        {
            if (!IsAttached())
            {
                return false;
            }

            RunScript(src);

            return true;
        }

    }
}
