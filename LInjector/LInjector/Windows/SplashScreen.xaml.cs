using LInjector.Classes;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Media.Animation;
using System.Windows.Threading;

namespace LInjector.Windows
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>

    public partial class SplashScreen : Window
    {
        DispatcherTimer RGBTime;
        readonly int RGBSpinSpeed = 4;
        Storyboard StoryBoard = new Storyboard();

        private IEasingFunction Smooth { get; set; }
        = new QuarticEase
        {
            EasingMode = EasingMode.EaseInOut
        };

        public void ObjectShift(Duration speed, DependencyObject Object, Thickness Get, Thickness Set)
        {
            ThicknessAnimation Animation = new ThicknessAnimation()
            {
                From = Get,
                To = Set,
                Duration = speed,
                EasingFunction = Smooth,
            };
            Storyboard.SetTarget(Animation, Object);
            Storyboard.SetTargetProperty(Animation, new PropertyPath(MarginProperty));
            StoryBoard.Children.Add(Animation);
            StoryBoard.Begin();
            StoryBoard.Children.Remove(Animation);
        }

        public SplashScreen()
        {
            InitializeComponent();
            CreateFiles.Create();
            if (CheckLatest.IsOutdatedVersion(Files.currentVersion))
            {
                var outDatedResult = System.Windows.Forms.MessageBox.Show(
                    "LInjector is outdated, please, re-download LInjector via GitHub or LInjector Webiste.\n" +
                    "Go to LInjector Download Page?",
                    "LInjector | Outdated", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                if (outDatedResult == System.Windows.Forms.DialogResult.Yes)
                {
                    Process.Start("https://lexploits.top/download");
                    CustomCw.Cw("LInjector is outdated", false, "warning");
                }
            }
            TempLog.CreateVersionFile(Files.currentVersion, "version");
            ConfigHandler.DoConfig();
            ConsoleManager.Initialize();
            RPCManager.InitRPC();

            if (ConfigHandler.splashscreen == false)
            {
                this.Hide();
                new MainWindow().Show();
            }
        }

        private void DoubleAnimation_Completed(object sender, EventArgs e)
        {
            Storyboard fadeOutStoryboard = new Storyboard();
            DoubleAnimation fadeOutAnimation = new DoubleAnimation
            {
                From = 1,
                To = 0,
                Duration = TimeSpan.FromSeconds(0.3)
            };
            fadeOutStoryboard.Children.Add(fadeOutAnimation);
            Storyboard.SetTarget(fadeOutAnimation, this);
            Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(Window.OpacityProperty));
            fadeOutStoryboard.Completed += OnFadeOutCompleted;
            fadeOutStoryboard.Begin();
        }

        private void OnFadeOutCompleted(object sender, EventArgs e)
        {
            Hide();
            new MainWindow().Show();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {

            RGBTime = new DispatcherTimer(TimeSpan.FromMilliseconds(10), DispatcherPriority.Normal, delegate
            {
                rgbRotation.Angle += RGBSpinSpeed;
            }, dispatcher: System.Windows.Application.Current.Dispatcher);
            RGBTime.Start();

            ObjectShift(TimeSpan.FromMilliseconds(1000), LInjectorIcon, LInjectorIcon.Margin, new Thickness(0, 0, 0, 0));
        }
    }
}