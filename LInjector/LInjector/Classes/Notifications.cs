using System;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Animation;

namespace LInjector.Classes
{
    public static class Notifications
    {

        private static Label label;
        private static ListBox listbox;
        private static bool isBusy;

        /// <summary>
        /// Shows a notification that popups in the LInjector contextual menu.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="listBox"></param>
        /// <param name="message"></param>
        /// <param name="targetControl"></param>
        /// <returns></returns>
        ///
        public static async Task Fire(string message)
        {

            if (isBusy)
            {
                while (isBusy)
                {
                    await Task.Delay(100);
                }
            }

            if (label == null)
            {
                return;
            }

            isBusy = true;

            double originalTopMargin = listbox.Margin.Top;

            await AnimateMarginChange(listbox, new Thickness(0, 0, 0, 0), TimeSpan.FromSeconds(0.5));

            label.Content = "";

            foreach (var character in message)
            {
                label.Content += character.ToString();
                await Task.Delay(15);
            }

            await Task.Delay(3000);
            await AnimateMarginChange(listbox, new Thickness(0, originalTopMargin, 0, 0), TimeSpan.FromSeconds(0.8));

            for (int i = label.Content.ToString().Length; i > 0; i--)
            {
                label.Content = label.Content.ToString().Remove(i - 1);
                await Task.Delay(10);
            }

            await AnimateMarginChange(listbox, new Thickness(0, originalTopMargin, 0, 0), TimeSpan.FromSeconds(0.5));

            isBusy = false;
        }

        public static void InitVars(ListBox blud, Label bozo)
        {
            label = bozo;
            listbox = blud;
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