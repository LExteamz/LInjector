using LInjector.Classes;
using LInjector.Pages;
using System;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Interop;
using Window = System.Windows.Window;

namespace LInjector.Windows
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        [DllImport("user32.dll")]
        private static extern int GetWindowLong(IntPtr hWnd, int nIndex);
        [DllImport("user32.dll")]
        private static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

        private const int GWL_STYLE = -16;
        private const int WS_MAXIMIZEBOX = 0x10000;

        public MainWindow()
        {
            InitializeComponent();

            Shared.mainView = new MainView
            {
                Name = "MainViewz",
                Visibility = Visibility.Visible,
                IsEnabled = false,
                Padding = new Thickness(50),
                MinWidth = 650,
                MinHeight = 450,
            };

            HolderGrid.Children.Add(Shared.mainView);

            // RunAutoAttachTime
            // The function no longer works, this was used to interact with
            //  the DLL Interface and listen
            //  when THE GAME process was launched and then check if
            //  ConfigHandler.autoattach was enabled.
            //
            // RunAutoAttachTimer();
        }

        private async void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Shared.mainView.IsEnabled = true;
            await Base.TryCatch((Action)(async () => { await Updater.CheckForUpdates(); }));

            Shared.mainWindow.Topmost = ConfigHandler.topmost;

            // The TabSystem (Editor) Grid is hidden by default for Design Purposes
            Shared.mainView.TabSystemz.Visibility = Visibility.Visible;

            // The Script List path is saved in a Registry Key, if the Key contains anything
            //  it is fetched from it and set into ScriptListPath
            if (RegistryHandler.GetValue("ScriptListPath", "0").Length != 0)
            {
                Shared.mainView.ScriptListPath = RegistryHandler.GetValue("ScriptListPath", "0");
            }

            Shared.mainView.RefreshScriptList();
            Shared.mainView.LoadSavedTabs();
            Shared.mainView.ParseConfig();
            Shared.mainView.ParseMyTheme();
            Shared.mainView.RegisterHotKeys();

            Notifications.InitVars(Shared.mainView.StatusListBox, Shared.mainView.NotificationLabel);
            ConsoleControl.Log("Loaded");
            await Notifications.Fire("Welcome to LInjector");

            Window window = Window.GetWindow(this);
            var wih = new WindowInteropHelper(window);
            IntPtr hWnd = wih.Handle;

            ConsoleManager.SetForegroundWindow(hWnd);
            this.Activate();

            // await ws.Start
            // Starts a WebSocket used to run simple LInjector functions, such as Log, rconsole, etc.

            await Shared.mainView.ws.Start();
        }

        private void Window_SourceInitialized(object sender, EventArgs e)
        {
            var hwnd = new WindowInteropHelper((Window)sender).Handle;
            var value = GetWindowLong(hwnd, GWL_STYLE);
            SetWindowLong(hwnd, GWL_STYLE, (int)(value & ~WS_MAXIMIZEBOX));
        }
    }

}