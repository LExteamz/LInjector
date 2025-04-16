using System.Windows;
using LInjector.Classes;
using Application = System.Windows.Application;

namespace LInjector
{
    public partial class App : Application
    {
        protected override async void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            if (!ResourceManager.IsFontInstalled("Segoe Fluent Icons"))
                ResourceManager.InstallFont(await ResourceManager.DownloadFileToTempAsync(Strings.Get("SegoeIconsFontURL"), "Segoe Fluent Icons.ttf"));
        }
    }
}