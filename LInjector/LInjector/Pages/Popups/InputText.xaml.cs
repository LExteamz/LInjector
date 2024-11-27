﻿using LInjector.Classes;
using System;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media.Animation;

namespace LInjector.Pages.Popups
{
    /// <summary>
    /// Interaction logic for InputText.xaml
    /// </summary>
    public partial class InputText : Window
    {
        [DllImport("user32.dll")]
        private static extern int GetWindowLong(IntPtr hWnd, int nIndex);
        [DllImport("user32.dll")]
        private static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

        private const int GWL_STYLE = -16;
        private const int WS_MAXIMIZEBOX = 0x10000;

        public string Caption { get; set; }
        public string Text { get; set; }

        public string Result { get; private set; }

        public InputText()
        {
            InitializeComponent();
            this.Loaded += OnLoaded;
        }

        private void OnLoaded(object sender, RoutedEventArgs e)
        {
            TitleBarLabel.Content = Caption;
            TuUltimaCancion.Text = Text;
        }

        public static string ShowInputDialog(string caption, string text)
        {
            var inputTextWindow = new InputText
            {
                Caption = caption,
                Text = text,
                WindowStartupLocation = WindowStartupLocation.CenterOwner
            };

            inputTextWindow.Owner = Shared.mainWindow;

            bool? dialogResult = inputTextWindow.ShowDialog();
            return dialogResult == true ? inputTextWindow.ContentReturn.Text : null;
        }

        private void DragWindow(object sender, MouseButtonEventArgs e)
        {
            // try { this.DragMove(); } catch { }
        }

        public void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            this.Close();
        }

        private void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            // Fade-out animation, pretty cool.
            Storyboard fadeOutStoryboard = new Storyboard();
            DoubleAnimation fadeOutAnimation =
                new DoubleAnimation
                {
                    From = 1,
                    To = 0,
                    Duration = TimeSpan.FromSeconds(0.10)
                };
            fadeOutStoryboard.Children.Add(fadeOutAnimation);
            Storyboard.SetTarget(fadeOutAnimation, this);
            Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(Window.OpacityProperty));
            fadeOutStoryboard.Completed += OnCloseFadeoutCompleted;
            fadeOutStoryboard.Begin();
        }
        private void MaximizeButton_Click(object sender, RoutedEventArgs e) => this.WindowState = WindowState.Maximized;
        private void MinimizeButton_Click(object sender, RoutedEventArgs e) => this.WindowState = WindowState.Minimized;
        private void Button_Click_1(object sender, RoutedEventArgs e) => ExitButton_Click(null, null);

        private void Window_SourceInitialized(object sender, EventArgs e)
        {
            var hwnd = new WindowInteropHelper((Window)sender).Handle;
            var value = GetWindowLong(hwnd, GWL_STYLE);
            SetWindowLong(hwnd, GWL_STYLE, (int)(value & ~WS_MAXIMIZEBOX));
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrEmpty(ContentReturn.Text)) return;

            Result = ContentReturn.Text;
            this.DialogResult = true;
            ExitButton_Click(null, null);
        }

        private void ContentReturn_PreviewKeyUp(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
                Button_Click(null, null);
        }
    }
}
