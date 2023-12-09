using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LInjector.Classes
{
    internal class FunctionWatch
    {
        private static bool IsRunning = false;
        private static FileSystemWatcher watcher = new FileSystemWatcher();
        private static String WatchFolder = Path.Combine(Files.workspaceFolder, "LINJECTOR");
        public static void runFuncWatch()
        {
            if (IsRunning == true)
            {
                return;
            }
            FunctionWatch.IsRunning = true;
            try
            {
                if (!Directory.Exists(WatchFolder))
                {
                    Directory.CreateDirectory(WatchFolder);
                    Task.Delay(200);
                }

                watcher.Path = WatchFolder;
                watcher.NotifyFilter = NotifyFilters.LastWrite;

                watcher.Changed += new FileSystemEventHandler(OnChanged);
                watcher.EnableRaisingEvents = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        public static bool IsFileReady(string filename)
        {
            try
            {
                using (FileStream inputStream = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.None))
                    return inputStream.Length > 0;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static void CreateLog(string String)
        {
            CustomCw.Cw($"{String}", false, "roblox");
        }

        public static void clipboardSetText(string inTextToCopy)
        {
            var clipboardThread = new Thread(() => clipBoardThreadWorker(inTextToCopy));
            clipboardThread.SetApartmentState(ApartmentState.STA);
            clipboardThread.IsBackground = false;
            clipboardThread.Start();
        }

        private static void clipBoardThreadWorker(string inTextToCopy)
        {
            System.Windows.Clipboard.SetText(inTextToCopy);
        }

        #region Text Parser for the Internal Functions
        private static void OnChanged(object sender, FileSystemEventArgs e)
        {
            if (e.ChangeType != WatcherChangeTypes.Changed || watcher.EnableRaisingEvents == false)
            {
                return;
            }
            try
            {
                watcher.EnableRaisingEvents = false;

                string functioncallfile = Path.Combine(WatchFolder, "LINJECTOR.li");

                while (!IsFileReady(functioncallfile)) { }

                Task.Delay(60);

                string function = "";

                try
                {
                    function = File.ReadAllText(functioncallfile);
                }
                catch
                {
                    CustomCw.Cw("Failed to capture data!", true, "error");
                    return;
                }

                string[] arguments = function.Split(new[] { "|||" }, StringSplitOptions.None).Select(value => value.Trim()).ToArray();

                if (arguments[0] == "messagebox")
                {
                    MessageBox.Show(arguments[1], arguments[2]);
                    return;
                }
                if (arguments[0] == "welcome")
                {
                    CreateLog($"Hello, {arguments[1]}!\nSuccessfully loaded at {arguments[2]}");

                    return;
                }
                if (arguments[0] == "toclipboard")
                {
                    clipboardSetText(arguments[1].ToString());
                    return;
                }
                if (arguments[0] == "rconsoleclose")
                {
                    ConsoleManager.HideConsole();
                    return;
                }
                if (arguments[0] == "rconsoleshow")
                {
                    ConsoleManager.ShowConsole();
                    return;
                }
                if (arguments[0] == "rconsoleprint")
                {
                    ConsoleManager.ShowConsole();
                    CustomCw.rconsoleprint($"{arguments[1]}", "white");
                    return;
                }
                if (arguments[0] == "rconsoleinfo")
                {
                    ConsoleManager.ShowConsole();
                    CustomCw.rconsoleprint($"{arguments[1]}", "info");
                    return;
                }
                if (arguments[0] == "rconsolewarn")
                {
                    ConsoleManager.ShowConsole();
                    CustomCw.rconsoleprint($"{arguments[1]}", "warn");
                    return;
                }
                if (arguments[0] == "rconsoleerr")
                {
                    ConsoleManager.ShowConsole();
                    CustomCw.rconsoleprint($"{arguments[1]}", "err");
                    return;
                }
                if (arguments[0] == "rconsolename")
                {
                    ConsoleManager.ShowConsole();
                    Console.Title = arguments[1];
                    return;
                }

                if (arguments[0] == "rconsoleclear")
                {
                    try { Console.Clear(); } catch { }
                    return;
                }

                if (arguments[0] == "setDiscordRPC")
                {
                    RPCManager.SetRPCDetails($"{arguments[1]}");
                    return;
                }
            }

            finally
            {
                Task.Delay(20);
                watcher.EnableRaisingEvents = true;
            }
        }
        #endregion
    }
}
