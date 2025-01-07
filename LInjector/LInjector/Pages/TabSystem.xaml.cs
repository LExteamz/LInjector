using System;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Forms;
using System.Windows.Media;
using LInjector.Classes;
using LInjector.Pages.Popups;
using LInjector.WPF.Classes;
using Brushes = System.Windows.Media.Brushes;
using MessageBox = System.Windows.Forms.MessageBox;
using Point = System.Drawing.Point;

namespace LInjector.Pages
{
    public partial class TabSystem : System.Windows.Controls.UserControl
    {

        [DllImport("user32.dll")]
        static extern bool GetCursorPos(ref System.Drawing.Point lpPoint);

        public TabSystem()
        {
            InitializeComponent();
            maintabs.Items.Add(CreateTab("", $"Script {(this.maintabs.Items.Count + 1).ToString()}.lua"));
        }

        /// <summary>
        /// Returns the current Monaco Editor instance
        /// </summary>
        /// <returns>Current Monaco Editor instance</returns>
        public monaco_api current_monaco()
        {
            return maintabs.SelectedContent as monaco_api;
        }

        /// <summary>
        /// Creates a new tab in the TabSystem control with a separated Monaco Editor instance
        /// </summary>
        /// <param name="text"></param>
        /// <param name="title"></param>
        public void add_tab_with_text(string text, string title = null)
        {
            if (title == null)
            {
                title = $"Script {this.maintabs.Items.Count.ToString()}.lua";
            }

            maintabs.Items.Add(CreateTab(text, title));
        }

        /// <summary>
        /// Changes the current open Monaco Editor tab title
        /// </summary>
        /// <param name="title"></param>
        public void ChangeCurrentTabTitle(string title)
        {
            if (maintabs.SelectedItem is TabItem selectedTab)
            {
                selectedTab.Header = title;
            }
        }

        /// <returns>Current open Monaco Editor instance tab title (name)</returns>
        public Task<string> GetCurrentTabTitle()
        {
            if (maintabs.SelectedItem is TabItem selectedTab)
            {
                return Task.FromResult(selectedTab.Header.ToString());
            }

            return Task.FromResult(string.Empty);
        }


        public void ButtonTabs(object sender, RoutedEventArgs e)
        {
            switch (((System.Windows.Controls.Button)sender).Name)
            {
                case "AddT":
                    maintabs.Items.Add(CreateTab("", $"Script {(this.maintabs.Items.Count + 1).ToString()}.lua"));
                    break;
                case "RemoveT":
                    try
                    {
                        maintabs.Items.Remove(maintabs.SelectedItem);
                    }
                    catch { }
                    break;
            }
        }

        public monaco_api CreateEditor(string Start) => new monaco_api(Start);

        public TabItem CreateTab(string content, string Title = "Untitled") =>
            new TabItem
            {
                Header = Title,
                Style = TryFindResource("EETABSSSSSS") as Style,
                Foreground = Brushes.White,
                FontSize = 12,
                Content = CreateEditor(content),
                IsSelected = true,
            };


        /// <summary>
        /// Clears the Monaco Editor content and resets the title to its index.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        public void Clear_Editor(object sender, RoutedEventArgs e)
        {
            var x = maintabs.SelectedContent as monaco_api;
            try
            {
                x.SetText("");
                this.ChangeCurrentTabTitle($"Script {maintabs.Items.Count}.lua");
            }
            catch { }
        }

        private void maingrid_PreviewMouseRightButtonUp(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            var clickedTabItem = FindAncestor<TabItem>((DependencyObject)sender);

            if (clickedTabItem != null)
            {
                var options = new[]
                {
                    new LIContextMenuStrip.MenuItemOption("Run", "\uF5B0", async (s, ev) =>
                    {
                        if (ConfigHandler.websocket_mode && Shared.ws.IsRunning)
                        {
                            try
                            {
                                var cm = clickedTabItem.Content as monaco_api;
                                string scriptString = await cm.GetText();

                                try
                                {
                                    try
                                    {
                                        await Shared.ws.SendMessage(scriptString);
                                    }
                                    catch (Exception ex)
                                    {
                                        CustomCw.Cw($"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                                    }
                                }
                                catch (Exception ex)
                                {
                                    MessageBox.Show("LInjector couldn't run the script.", Files.ApplicationName, MessageBoxButtons.OK, MessageBoxIcon.Error);
                                    CustomCw.Cw($"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                                }
                            }
                            catch
                            {
                                await Notifications.Fire("Unknown error.");
                            }
                        } else
                        {
                            DLLInterface.RunScript(await (clickedTabItem.Content as monaco_api).GetText());
                        }
                        
                    }),

                    new LIContextMenuStrip.MenuItemOption("Rename", "\uE8AC", (s, ev) =>
                    {
                        string input = InputText.ShowInputDialog("Change Tab Header", "Write the new below.");
                        if (!string.IsNullOrWhiteSpace(input))
                        {
                            if (!new[] { ".lua", ".luau", ".txt" }.Any(ext => input.EndsWith(ext, StringComparison.OrdinalIgnoreCase)))
                            {
                                input += ".lua";
                            }

                            clickedTabItem.Header = input;
                        }
                    }),

                    new LIContextMenuStrip.MenuItemOption("Toggle Editor Blur", "\uE727", (s, ev) =>
                    {
                        (clickedTabItem.Content as monaco_api)?.ToggleLocalBlur();
                    }),

                    /*
                    new LIContextMenuStrip.MenuItemOption("Close", "\uE8BB", (s, ev) => {
                        maintabs.Items.Remove(clickedTabItem);
                    })
                    */
                };

                Point defPnt = new Point();
                GetCursorPos(ref defPnt);

                string selectedOption = LIContextMenuStrip.ShowMenu(defPnt, options);
            }
        }


        private T FindAncestor<T>(DependencyObject current) where T : DependencyObject
        {
            while (current != null && !(current is T))
            {
                current = VisualTreeHelper.GetParent(current);
            }
            return current as T;
        }
    }
}
