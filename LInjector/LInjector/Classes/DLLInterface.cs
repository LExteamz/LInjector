﻿using System.Diagnostics;

namespace LInjector.Classes
{
    public static class DLLInterface
    {
        public static void Inject()
        {
            try
            {
                if (Process.GetProcessesByName("RobloxPlayerBeta").Length <= 0)
                {
                    Logs.Console("Please, open Roblox");
                }
                else
                {
                    // Your Inject Logic

                    Logs.Console("Injected");
                    // FunctionWatch.runFuncWatch();
                }
            }
            catch (Exception ex)
            {
                // FunctionWatch.clipboardSetText($"Message: {ex.Message}\nStack Trace: {ex.StackTrace}");
                Logs.Console($"Exception has occurred:\n{ex.Message}\n{ex.StackTrace}");
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
