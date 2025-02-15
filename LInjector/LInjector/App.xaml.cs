using System.Windows;
using System.Windows.Media;
using LInjector.Classes;
using Application = System.Windows.Application;
using Color = System.Windows.Media.Color;

namespace LInjector
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : System.Windows.Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            if (!ResourceManager.IsFontInstalled("Segoe Fluent Icons"))
            {
                ResourceManager.InstallFont(Strings.Get(""));
            }
        }
    }
}
