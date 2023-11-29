using System;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Animation;

namespace LInjector.Classes
{
    public static class Notifications
    {
        private static bool isBusy;

        public static async Task Fire<T>(ListBox listBox, string message, T targetControl) where T : Label
        {

            if (isBusy)
            {
                while (isBusy)
                {
                    await Task.Delay(100);
                }
            }

            if (targetControl == null)
            {
                return;
            }

            isBusy = true;

            double originalTopMargin = listBox.Margin.Top;

            await AnimateMarginChange(listBox, new Thickness(0, 0, 0, 0), TimeSpan.FromSeconds(0.5));

            targetControl.Content = "";

            foreach (var character in message)
            {
                targetControl.Content += character.ToString();
                await Task.Delay(15);
            }

            await Task.Delay(3000);
            await AnimateMarginChange(listBox, new Thickness(0, originalTopMargin, 0, 0), TimeSpan.FromSeconds(0.8));

            for (int i = targetControl.Content.ToString().Length; i > 0; i--)
            {
                targetControl.Content = targetControl.Content.ToString().Remove(i - 1);
                await Task.Delay(10);
            }

            await AnimateMarginChange(listBox, new Thickness(0, originalTopMargin, 0, 0), TimeSpan.FromSeconds(0.5));

            isBusy = false;
        }

        private static async Task AnimateMarginChange(FrameworkElement element, Thickness newMargin, TimeSpan duration)
        {
            var storyboard = new Storyboard();

            var marginAnimation = new ThicknessAnimation
            {
                From = element.Margin,
                To = newMargin,
                Duration = new Duration(duration)
            };

            Storyboard.SetTarget(marginAnimation, element);
            Storyboard.SetTargetProperty(marginAnimation, new PropertyPath("Margin"));

            storyboard.Children.Add(marginAnimation);
            storyboard.Begin();

            await Task.Delay(duration);
        }
    }
}