using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using System.Windows.Threading;
using UserControl = System.Windows.Controls.UserControl;

namespace LInjector.Pages.Elements
{
    /// <summary>
    /// Interaction logic for WebPplayer.xaml
    /// </summary>
    public partial class WebPplayer : UserControl
    {
        private BitmapImage? spriteSheet;
        private int frameWidth;
        private int frameHeight;
        private int frameCount;
        private int columns;
        private int rows;
        private DispatcherTimer timer;
        private Stopwatch stopwatch;
        private double totalPlayTimeSeconds;

        public WebPplayer()
        {
            InitializeComponent();
            timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(16) };
            timer.Tick += Timer_Tick!;
            stopwatch = new Stopwatch();
        }

        public void LoadSpriteSheet(string filePath, int frameWidth, int frameHeight, int frameCount = 0, int columns = 0, int rows = 0, double totalPlayTimeSeconds = 1.0)
        {
            spriteSheet = new BitmapImage(new Uri(filePath, UriKind.Absolute));
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;

            if (columns == 0 || rows == 0)
            {
                this.columns = spriteSheet.PixelWidth / frameWidth;
                this.rows = spriteSheet.PixelHeight / frameHeight;
            }
            else
            {
                this.columns = columns;
                this.rows = rows;
            }

            int totalAvailable = this.columns * this.rows;
            this.frameCount = (frameCount <= 0 || frameCount > totalAvailable) ? totalAvailable : frameCount;

            this.totalPlayTimeSeconds = totalPlayTimeSeconds;
            stopwatch.Reset();
            stopwatch.Start();
            timer.Start();
        }

        private void Timer_Tick(object? sender, EventArgs e)
        {
            if (spriteSheet == null)
                return;

            double elapsed = stopwatch.Elapsed.TotalSeconds;
            double progress = elapsed / totalPlayTimeSeconds;

            if (progress >= 1.0)
            {
                progress = 1.0;
                timer.Stop();
                stopwatch.Stop();
            }

            int index = (int)Math.Floor(progress * frameCount);
            if (index >= frameCount) index = frameCount - 1;

            int col = index % columns;
            int row = index / columns;
            int x = col * frameWidth;
            int y = row * frameHeight;

            var rect = new Int32Rect(x, y, frameWidth, frameHeight);
            ImagePlayer.Source = new CroppedBitmap(spriteSheet, rect);
        }

        public int Columns => columns;
        public int Rows => rows;
        public bool IsPlaying => timer.IsEnabled;
        public double TotalDurationSeconds => totalPlayTimeSeconds;
    }
}
