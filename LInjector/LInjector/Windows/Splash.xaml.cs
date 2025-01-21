using System.Windows;
using System.Windows.Media.Animation;
using System.Windows.Threading;
using LInjector.Classes;
using Application = System.Windows.Application;

namespace LInjector.Windows
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>

    public partial class Splash : Window
    {
        readonly int RGBSpinSpeed = 4;
        DispatcherTimer RGBTime = new();
        readonly Storyboard StoryBoard = new();

        private IEasingFunction Smooth { get; set; } = new QuarticEase
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
            ThicknessAnimation Animation = new()
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

        public Splash() => InitializeComponent();

        private void DoubleAnimation_Completed(object sender, EventArgs e)
        {
            Storyboard fadeOutStoryboard = new();
            DoubleAnimation fadeOutAnimation = new()
            {
                From = 1,
                To = 0,
                Duration = TimeSpan.FromSeconds(0.3)
            };
            fadeOutStoryboard.Children.Add(fadeOutAnimation);
            Storyboard.SetTarget(fadeOutAnimation, this);
            Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(Window.OpacityProperty));
            fadeOutStoryboard.Completed += OnFadeOutCompleted!;
            fadeOutStoryboard.Begin();
        }

        private void OnFadeOutCompleted(object sender, EventArgs e)
        {
            Hide();
            ShowWindow();
        }

        private static void ShowWindow()
        {
            Shared.mainWindow = new MainWindow();
            Shared.mainWindow.Show();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            RGBTime = new DispatcherTimer(TimeSpan.FromMilliseconds(10), DispatcherPriority.Normal, delegate { rgbRotation.Angle += RGBSpinSpeed; }, dispatcher: Application.Current.Dispatcher);
            RGBTime!.Start();

            ObjectShift(TimeSpan.FromSeconds(1), LInjectorIcon, LInjectorIcon.Margin, new Thickness(0, 0, 0, 0));
        }
    }
}