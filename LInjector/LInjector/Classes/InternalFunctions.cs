using System;
using System.IO;
using System.Threading.Tasks;
using System.Windows.Threading;

/*
 * ░▒█░░░░▀█▀░█▀▀▄░░░▀░█▀▀░█▀▄░▀█▀░▄▀▀▄░█▀▀▄░░░▀█▀░█▀▀▄░▀█▀░█▀▀░█▀▀▄░█▀▀▄░█▀▀▄░█░░░░▒█▀▀▀░█░▒█░█▀▀▄░█▀▄░▀█▀░░▀░░▄▀▀▄░█▀▀▄░█▀▀
 * ░▒█░░░░▒█░░█░▒█░░░█░█▀▀░█░░░░█░░█░░█░█▄▄▀░░░▒█░░█░▒█░░█░░█▀▀░█▄▄▀░█░▒█░█▄▄█░█░░░░▒█▀▀░░█░▒█░█░▒█░█░░░░█░░░█▀░█░░█░█░▒█░▀▀▄
 * ░▒█▄▄█░▄█▄░▀░░▀░█▄█░▀▀▀░▀▀▀░░▀░░░▀▀░░▀░▀▀░░░▄█▄░▀░░▀░░▀░░▀▀▀░▀░▀▀░▀░░▀░▀░░▀░▀▀░░░▒█░░░░░▀▀▀░▀░░▀░▀▀▀░░▀░░▀▀▀░░▀▀░░▀░░▀░▀▀▀
 * 
 * Created by depthso/depso (https://github.com/depthso)
 * 
 */

namespace LInjector.Classes
{
    public static class InternalFunctions
    {
        static DispatcherTimer timer = new DispatcherTimer();

        public static void Load(object sender, EventArgs e)
        {

            string Script_Content = File.ReadAllText(Files.InitLuaPath);
            FluxInterfacing.run_script(FluxInterfacing.pid, Script_Content);
        }

        public static void RunInternalFunctions()
        {
            timer.Tick += InternalFunctions.Load;
            timer.Interval = TimeSpan.FromSeconds(5);
            timer.Start();
        }
    }
}
