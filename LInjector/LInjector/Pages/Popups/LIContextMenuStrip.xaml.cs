using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using LInjector.Classes;

namespace LInjector.Pages.Popups
{
    public partial class LIContextMenuStrip : Window
    {
        public string _selectedText { get; private set; }

        public LIContextMenuStrip()
        {
            InitializeComponent();
        }

        public class MenuItemOption
        {
            public string Text { get; set; }
            public string Icon { get; set; }
            public RoutedEventHandler ClickHandler { get; set; }

            public MenuItemOption(string text, string icon, RoutedEventHandler clickHandler)
            {
                Text = text;
                Icon = icon;
                ClickHandler = clickHandler;
            }
        }

        public void Add(string text, string icon, RoutedEventHandler clickHandler)
        {
            Button newItem = new Button
            {
                Style = TemplateButton.Style,
                Background = TemplateButton.Background,
                Foreground = TemplateButton.Foreground,
                HorizontalAlignment = HorizontalAlignment.Stretch,
                HorizontalContentAlignment = TemplateButton.HorizontalContentAlignment,
                BorderThickness = TemplateButton.BorderThickness,
                OverridesDefaultStyle = TemplateButton.OverridesDefaultStyle,
                Content = new StackPanel
                {
                    Orientation = Orientation.Horizontal,
                    HorizontalAlignment = HorizontalAlignment.Left,
                    Children =
                    {
                        new TextBlock
                        {
                            Text = icon,
                            FontFamily = new FontFamily("Segoe MDL2 Assets"),
                            FontSize = 18,
                            Margin = new Thickness(0, 0, 15, 0),
                            Foreground = TemplateButton.Foreground,
                            HorizontalAlignment = HorizontalAlignment.Left,
                            VerticalAlignment = VerticalAlignment.Center,
                            TextAlignment = TextAlignment.Left,
                        },

                        new TextBlock
                        {
                            Text = text,
                            VerticalAlignment = VerticalAlignment.Center,
                            Margin = new Thickness(0, 0, 0, 0),
                            FontSize = 13,
                            Foreground = TemplateButton.Foreground,
                            HorizontalAlignment = HorizontalAlignment.Stretch,
                            FontFamily = new FontFamily("Arial")
                            //FontWeight = FontWeight.FromOpenTypeWeight(300)
                        }
                    }
                }
            };

            var stackPanel = (StackPanel)newItem.Content;

            for (int i = stackPanel.Children.Count - 1; i >= 0; i--)
            {
                if (stackPanel.Children[i] == null)
                {
                    stackPanel.Children.RemoveAt(i);
                }
            }

            newItem.Click += (sender, e) =>
            {
                if (sender is Button button && button.Content is StackPanel stackPanel1)
                {
                    var textBlock = stackPanel1.Children.OfType<TextBlock>().FirstOrDefault();
                    if (textBlock != null)
                    {
                        _selectedText = textBlock.Text;
                        this.Close();
                    }
                }

                clickHandler?.Invoke(sender, e);
            };

            ((StackPanel)TemplateButton.Parent).Children.Add(newItem);
        }

        public static string ShowMenu(System.Drawing.Point locationInScreen, params MenuItemOption[] options)
        {
            var contextMenu = new LIContextMenuStrip();

            foreach (var option in options)
            {
                contextMenu.Add(option.Text, option.Icon, option.ClickHandler);
            }

            contextMenu.WindowStartupLocation = WindowStartupLocation.Manual;
            contextMenu.Left = locationInScreen.X;
            contextMenu.Top = locationInScreen.Y;

            contextMenu.TemplateButton.Visibility = Visibility.Collapsed;
            contextMenu.Owner = Shared.mainWindow;

            contextMenu.ShowDialog();

            return contextMenu._selectedText;
        }
    }
}
