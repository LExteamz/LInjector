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
                ResourceManager.InstallFont(await ResourceManager.DownloadFileToTempAsync("https://raw.githubusercontent.com/LExteamz/LInjector/refs/heads/unstable-v3/LInjector/LInjector/Resources/Icons/Segoe%20Fluent%20Icons.ttf", "Segoe Fluent Icons.ttf"));
        }
    }
}