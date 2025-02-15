using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using LInjector.Classes;
using Newtonsoft.Json.Linq;
using Application = System.Windows.Application;
using CheckBox = System.Windows.Controls.CheckBox;
using ComboBox = System.Windows.Controls.ComboBox;
using HorizontalAlignment = System.Windows.HorizontalAlignment;
using Label = System.Windows.Controls.Label;
using TextBox = System.Windows.Controls.TextBox;

namespace LInjector.Pages.Elements
{
    public class Factory
    {
        private readonly StackPanel _container;

        public Factory(StackPanel container)
        {
            _container = container;
        }

        public void CreateToggleOption(Delegate callback, object defaultValue, string key, string toolTipContent = "")
        {
            var grid = CreateGrid();
            var label = CreateLabel(SettingsWrapper.ReadDescription(key)!);
            var toggle = new ToggleButton { HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(0, 0, 10, 0) };
            if (!string.IsNullOrEmpty(toolTipContent))
                grid.ToolTip = toolTipContent;

            if (defaultValue is bool)
                toggle.IsChecked = (bool)defaultValue;

            toggle.Checked += (s, e) =>
            {
                InvokeCallback(callback, true);
                SettingsWrapper.Write(key, true);
            };
            toggle.Unchecked += (s, e) =>
            {
                InvokeCallback(callback, false);
                SettingsWrapper.Write(key, false);
            };

            toggle.IsEnabled = !key.Contains("app_init");
            toggle.Click += Shared.mainView!.ApplyConfig;

            grid.Children.Add(label);
            grid.Children.Add(toggle);
            _container.Children.Add(grid);
        }

        public void CreateCheckboxOption(Delegate callback, object defaultValue, string key, string toolTipContent = "")
        {
            var grid = CreateGrid();
            var label = CreateLabel(SettingsWrapper.ReadDescription(key)!);
            var checkbox = new CheckBox { HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(0, 0, 15, 0) };
            if (!string.IsNullOrEmpty(toolTipContent))
                grid.ToolTip = toolTipContent;

            if (defaultValue is bool)
                checkbox.IsChecked = (bool)defaultValue;

            checkbox.Checked += (s, e) =>
            {
                InvokeCallback(callback, true);
                SettingsWrapper.Write(key, true);
            };
            checkbox.Unchecked += (s, e) =>
            {
                InvokeCallback(callback, false);
                SettingsWrapper.Write(key, false);
            };

            checkbox.Click += Shared.mainView!.ApplyConfig;

            checkbox.IsEnabled = !key.Contains("app_init");

            grid.Children.Add(label);
            grid.Children.Add(checkbox);
            _container.Children.Add(grid);
        }

        public void CreateDropdownOption(Delegate callback, object options, object defaultValue, string key, string toolTipContent = "")
        {
            var grid = CreateGrid();
            var label = CreateLabel(SettingsWrapper.ReadDescription(key)!);
            var comboBox = new ComboBox
            {
                Foreground = (System.Windows.Media.Brush)System.Windows.Application.Current.Resources["Text"],
                Background = System.Windows.Media.Brushes.Transparent,
                Margin = new Thickness(0, 0, 20, 0),
                Width = 150,
                HorizontalAlignment = HorizontalAlignment.Right,
                BorderThickness = new Thickness(0),
                Text = (options as string[])![0]
            };

            if (options is Array optionArray)
            {
                foreach (var option in optionArray)
                {
                    comboBox.Items.Add(new ComboBoxItem { Content = option });
                }
            }

            if (defaultValue != null)
            {
                comboBox.SelectedIndex = Array.IndexOf((Array)options, defaultValue);
            }

            if (!string.IsNullOrEmpty(toolTipContent))
                grid.ToolTip = toolTipContent;

            comboBox.DropDownClosed += (s, e) =>
            {
                string selection = comboBox.Text;

                if (options is string[])
                {
                    var array = options as string[];
                    if (array!.Contains(selection))
                    {
                        var _array = array!.ToList();
                        _array.Remove(selection);
                        _array.Insert(0, selection);

                        options = _array.ToArray();

                        SettingsWrapper.Write("monaco_theme", new JArray(_array.ToArray()));
                    }
                }

                InvokeCallback(callback, options);
            };


            grid.Children.Add(label);
            grid.Children.Add(comboBox);
            _container.Children.Add(grid);
        }

        public void CreateTextFieldOption(Delegate callback, object defaultValue, bool isNumericOnly = false, string key = "", string toolTipContent = "")
        {
            var grid = CreateGrid();
            var label = CreateLabel(SettingsWrapper.ReadDescription(key)!);
            var textBox = new TextBox
            {
                Width = 150,
                HorizontalAlignment = HorizontalAlignment.Right,
                Margin = new Thickness(0, 0, 20, 0),
                Foreground = (System.Windows.Media.Brush)Application.Current.Resources["Text"]
            };

            if (defaultValue != null)
                textBox.Text = defaultValue.ToString();

            if (isNumericOnly)
            {
                textBox.PreviewTextInput += (s, e) =>
                {
                    var regex = new System.Text.RegularExpressions.Regex("[^0-9]+");
                    e.Handled = regex.IsMatch(e.Text);
                };
            }

            textBox.TextChanged += (s, e) =>
            {
                InvokeCallback(callback, textBox.Text!);

                object valueToWrite = textBox.Text!;

                if (isNumericOnly)
                {
                    if (int.TryParse(textBox.Text, out int intValue))
                    {
                        valueToWrite = intValue;
                    }
                    else if (float.TryParse(textBox.Text, out float floatValue))
                    {
                        valueToWrite = floatValue;
                    }
                    else if (double.TryParse(textBox.Text, out double doubleValue))
                    {
                        valueToWrite = doubleValue;
                    }
                }

                Shared.mainView!.ApplyConfig(null!, null!);
                SettingsWrapper.Write(key, valueToWrite);
            };

            grid.Children.Add(label);
            grid.Children.Add(textBox);
            _container.Children.Add(grid);
        }

        private void InvokeCallback(Delegate callback, object value)
        {
            callback.DynamicInvoke(value);
        }

        private Grid CreateGrid()
        {
            return new Grid { Margin = new Thickness(10, 0, 10, 0) };
        }

        private Label CreateLabel(string text)
        {
            return new Label { Content = text, Foreground = (System.Windows.Media.Brush)Application.Current.Resources["Text"], HorizontalAlignment = HorizontalAlignment.Left };
        }
    }
}