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
        readonly int RGBSpinSpeed = 4;
        DispatcherTimer RGBTime;
        Storyboard StoryBoard = new Storyboard();

        private IEasingFunction Smooth { get; set; }
        = new QuarticEase
        {
            EasingMode = EasingMode.EaseInOut
        };

        /// <summary>
        /// Moves an object to a desired position
        /// </summary>
        /// <param name="speed">Speec in Miliseconds</param>
        /// <param name="Object">WPF Object</param>
        /// <param name="Get">Initial Position</param>
        /// <param name="Set">Final Position</param>
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

            if (!(Themes.LookColor("SSC1") && Themes.LookColor("SSC2") && Themes.LookColor("PrimaryColor") && Themes.LookColor("SecondaryColor") && Themes.LookColor("TertiaryColor") && Themes.LookColor("Text")))
            {
                Themes.SetColor("SSC1", "#FF460B80");
                Themes.SetColor("SSC2", "#FF570057");

                Themes.SetColor("PrimaryColor", "#FF0F0F0F");
                Themes.SetColor("SecondaryColor", "#FF111111");
                Themes.SetColor("TertiaryColor", "#FF141414");

                Themes.SetColor("Text", "#FFFFFFFF");
            }
            CreateFiles.Create();
            if (CheckLatest.IsOutdatedVersion(Files.currentVersion))
            {
                var outDatedResult = System.Windows.Forms.MessageBox.Show(
                    "LInjector is outdated, please, re-download LInjector via GitHub or LInjector Website.\n" +
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
            GradientStop1.Color = ParseColor(Themes.GetColor("SSC1"));
            GradientStop2.Color = ParseColor(Themes.GetColor("SSC2"));

            BSG1.Color = ParseColor(Themes.GetColor("SSC2"));
            BSG2.Color = ParseColor(Themes.GetColor("SSC1"));

            RGBTime = new DispatcherTimer(TimeSpan.FromMilliseconds(10), DispatcherPriority.Normal, delegate
            {
                rgbRotation.Angle += RGBSpinSpeed;
            }, dispatcher: System.Windows.Application.Current.Dispatcher);
            RGBTime.Start();

            ObjectShift(TimeSpan.FromMilliseconds(1000), LInjectorIcon, LInjectorIcon.Margin, new Thickness(0, 0, 0, 0));
        }

        public System.Windows.Media.Color ParseColor(string srgb)
        {
            if (srgb.Contains("#"))
                srgb = srgb.TrimStart('#');

            if (srgb.Length != 8)
            {
                throw new ArgumentException($"sRGB must be 8 characters, got {srgb} : {srgb.Length}", nameof(srgb));
            }

            byte a = byte.Parse(srgb.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
            byte r = byte.Parse(srgb.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
            byte g = byte.Parse(srgb.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
            byte b = byte.Parse(srgb.Substring(6, 2), System.Globalization.NumberStyles.HexNumber);

            return System.Windows.Media.Color.FromArgb(a, r, g, b);
        }
    }
}