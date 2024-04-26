using Dsafa.WpfColorPicker;
using LInjector.Classes;
using LInjector.WPF.Classes;
using Microsoft.WindowsAPICodePack.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Threading;
using Button = System.Windows.Controls.Button;
using MessageBox = System.Windows.Forms.MessageBox;
using Window = System.Windows.Window;

namespace LInjector.Windows
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        #region Main Required - Values
        /*
         * IsSettingsShown
         * Controls the Visibility of the Settings Grid
         *
         * IsScriptsShown (INCOMPLETE , MESSY CODE)
         * Controls the Visibility of Scripts Page, this can be enabled by
         * setting the Script Button property to Visible instead of Collapsed
         *
         * IsInfoShown
         * Controls the Visibility of the Information (credits) Grid
         */

        private bool IsSettingsShown = false;
        private bool IsScriptsShown = false;
        private bool IsInfoShown = false;

        internal string ScriptListPath = ".\\scripts\\";

        WebComs ws = new WebComs();

        #endregion

        #region Window
        public MainWindow()
        {
            InitializeComponent();

            // RunAutoAttachTimer (DEPRECATED)
            // The function no longer works, this was used to interact with
            //  the Fluxus DLL Interface and listen
            //  when THE GAME process was launched and then check if
            //  ConfigHandler.autoattach was enabled.
            //
            // RunAutoAttachTimer();
        }

        private async void Window_Loaded(object sender, RoutedEventArgs e)
        {
            /*
            try
            {
                // await Updater.CheckForUpdates
                // Fetches a JSON from any content delivery network, reads the
                //  content of it which are file hashes, if the
                //  local file hashes mismatch, the application downloads the
                //  latest files provided in the JSON.

                // await Updater.CheckForUpdates();

                // FluxInterfacing.create_files
                // Used to create the files needed by the DLL.
                //
                // FluxInterfacing.create_files(Path.GetFullPath("Resources\\libs\\Module.dll"));
            }
            catch (Exception ex)
            {
                // If some of the commands above spit an Error, a MessageBox was shown.

                // MessageBox.Show(
                //     "Couldn't initialize Fluxus Interface\nException:\n" +
                //         ex.Message + "\nPlease, share it on Discord.",
                //     "[ERROR] LInjector", MessageBoxButtons.OK,
                //     MessageBoxIcon.Information);
                // _ = Notifications.Fire(StatusListBox,
                //                        "Couldn't initialize Fluxus Interface.",
                //                        NotificationLabel);
            }
            */

            this.Topmost = ConfigHandler.topmost;

            // The TabSystem (Editor) Grid is hidden by default for Design Purposes
            TabSystemz.Visibility = Visibility.Visible;

            // The Script List path is saved in a Registry Key, if the Key contains anything
            //  it is fetched from it and set into ScriptListPath
            if (RegistryHandler.GetValue("ScriptListPath", "0").Length != 0)
            {
                ScriptListPath = RegistryHandler.GetValue("ScriptListPath", "0");
            }

            RefreshScriptList();
            LoadSavedTabs();
            ParseConfig();
            ParseMyTheme();

            // Converts the MainWindow ListBox to a Static Item, this is used to easy-call the item
            // because it is needed from other sources.
            LogToConsole.GetListBox = this.ConsoleLogList;
            Notifications.InitVars(StatusListBox, NotificationLabel);
            LogToConsole.Log("Loaded");
            await Notifications.Fire("Welcome to LInjector");

            // await ws.Start
            // Starts a WebSocket used to run simple LInjector functions, such as Log, rconsole, etc.

            await ws.Start();
        }

        private void DragWindow(object sender, MouseButtonEventArgs e)
        {
            try { DragMove(); } catch { }
        }

        /// <summary>
        /// When the "outro" fadeout completes, the application does it normal shutdown.
        /// </summary>
        private void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            Close();
            System.Windows.Application.Current.Shutdown();
        }
        #endregion

        #region Script Hub
        // I don't want to comment this, I don't even know. 🗣🗣🗣

        private const string PostsURL = "https://api.mastersmzscripts.com/posts.json";
        public static List<Post> posts = new List<Post>();

        /// <summary>
        /// Don't touch it, it works.
        /// THE FIRST ONE TO SKID IT GETS BOZO'ED
        /// </summary>
        /// <param name="grid"></param>
        /// <param name="PostsItemsControl"></param>
        /// <returns></returns>
        public async Task LoadPostsAsync(Grid grid, ItemsControl PostsItemsControl)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(PostsURL);
                    response.EnsureSuccessStatusCode();
                    string responseBody = await response.Content.ReadAsStringAsync();
                    posts = JsonConvert.DeserializeObject<List<Post>>(responseBody);

                    if (posts.Count > 0)
                    {
                        UniformGrid uniformGrid = new UniformGrid();
                        uniformGrid.Columns = 3;

                        int postIndex = -1;

                        foreach (var post in posts)
                        {
                            int rowIndex = 0;
                            int columnIndex = 0;
                            postIndex++;
                            CreateGrid(post.Title, post.Description, post.Script, post.Creator,
                                       rowIndex, columnIndex, uniformGrid, postIndex);
                        }

                        PostsItemsControl.Items.Clear();
                        PostsItemsControl.Items.Add(uniformGrid);
                    }
                    else
                    {
                        MessageBox.Show("No posts found.", "MastersMZ Scripts");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading posts: " + ex.StackTrace, "Error");
                FunctionWatch.clipboardSetText($"{ex.StackTrace}\n\n{ex.Message}");
            }
        }

        /// <summary>
        /// Don't touch it, it works
        /// </summary>
        /// <param name="title"></param>
        /// <param name="description"></param>
        /// <param name="scriptLink"></param>
        /// <param name="creator"></param>
        /// <param name="rowIndex"></param>
        /// <param name="columnIndex"></param>
        /// <param name="whatgridbozo"></param>
        /// <param name="postIndex"></param>
        public void CreateGrid(string title, string description, string scriptLink, string creator,
                               int rowIndex, int columnIndex, UniformGrid whatgridbozo,
                               int postIndex)
        {
            Border border = new Border
            {
                Background =
                    new SolidColorBrush((Color)ColorConverter.ConvertFromString("#161616")),
                CornerRadius = new CornerRadius(5),
                Margin = new Thickness(10),
                Tag = title,
                BorderBrush = Brushes.DarkGray,
                BorderThickness = new Thickness(0.3),
                MinHeight = 80,
            };

            Grid contentGrid = new Grid { Margin = new Thickness(3) };

            contentGrid.ColumnDefinitions.Add(
                new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) });
            contentGrid.ColumnDefinitions.Add(
                new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) });
            contentGrid.ColumnDefinitions.Add(
                new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) });
            contentGrid.RowDefinitions.Add(
                new RowDefinition { Height = new GridLength(1, GridUnitType.Star) });
            contentGrid.RowDefinitions.Add(
                new RowDefinition { Height = new GridLength(1, GridUnitType.Star) });
            contentGrid.RowDefinitions.Add(
                new RowDefinition { Height = new GridLength(1, GridUnitType.Star) });

            StackPanel stackPanel =
                new StackPanel
                {
                    Orientation = System.Windows.Controls.Orientation.Vertical,
                    VerticalAlignment = VerticalAlignment.Top
                };

            contentGrid.Children.Insert(0, stackPanel);

            Grid.SetRow(stackPanel, 0);
            Grid.SetColumn(stackPanel, 0);
            Grid.SetColumnSpan(stackPanel, 3);

            System.Windows.Controls.TextBlock titleLabel = new System.Windows.Controls.TextBlock
            {
                Text = title,
                Foreground = Brushes.WhiteSmoke,
                FontSize = 13,
                HorizontalAlignment = System.Windows.HorizontalAlignment.Left,
                VerticalAlignment = VerticalAlignment.Top,
                Margin = new Thickness(0, 0, 0, 0)
            };
            stackPanel.Children.Add(titleLabel);

            TextBlock descriptionTextBlock = new TextBlock
            {
                Text = description,
                Foreground = Brushes.Gray,
                FontSize = 11,
                HorizontalAlignment = System.Windows.HorizontalAlignment.Left,
                VerticalAlignment = VerticalAlignment.Top,
                TextWrapping = TextWrapping.WrapWithOverflow,
            };
            stackPanel.Children.Add(descriptionTextBlock);

            StackPanel buttonStackPanel =
                new StackPanel
                {
                    Orientation = System.Windows.Controls.Orientation.Horizontal,
                    HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch,
                    VerticalAlignment = VerticalAlignment.Stretch
                };
            contentGrid.Children.Add(buttonStackPanel);
            Grid.SetRow(buttonStackPanel, 2);
            Grid.SetColumn(buttonStackPanel, 0);
            Grid.SetColumnSpan(buttonStackPanel, 3);

            System.Windows.Controls.Button executeButton = new System.Windows.Controls.Button
            {
                Background =
                    new SolidColorBrush((Color)ColorConverter.ConvertFromString("#141414")),
                BorderBrush = Brushes.Transparent,
                Height = 30,
                Width = 30,
                Margin = new Thickness(0, 0, 3, 0),
                Padding = new Thickness(5),
                VerticalAlignment = VerticalAlignment.Bottom,
                FontFamily = new FontFamily("Segoe MDL2 Assets"),
                HorizontalAlignment = System.Windows.HorizontalAlignment.Left,
                Content = "\xF5B0",
                ToolTip = "Execute",
                FontSize = 14,
                Tag = postIndex
            };
            buttonStackPanel.Children.Add(executeButton);

            System.Windows.Controls.Button loadIntoEditorButton =
                new System.Windows.Controls.Button
                {
                    Background =
                        new SolidColorBrush((Color)ColorConverter.ConvertFromString("#141414")),
                    Foreground = Brushes.White,
                    BorderBrush = Brushes.Transparent,
                    FontFamily = new FontFamily("Segoe MDL2 Assets"),
                    Content = "\xE7AC",
                    Height = 30,
                    Width = 30,
                    Margin = new Thickness(0, 0, 3, 0),
                    Padding = new Thickness(5),
                    VerticalAlignment = VerticalAlignment.Bottom,
                    Tag = postIndex,
                    ToolTip = "Load Into Editor",
                    HorizontalAlignment = System.Windows.HorizontalAlignment.Left
                };
            buttonStackPanel.Children.Add(loadIntoEditorButton);

            System.Windows.Controls.Label creatorLabel = new System.Windows.Controls.Label
            {
                Content = creator,
                Foreground = Brushes.DarkGray,
                FontSize = 10,
                HorizontalAlignment = System.Windows.HorizontalAlignment.Right,
                VerticalAlignment = VerticalAlignment.Bottom
            };
            buttonStackPanel.Children.Add(creatorLabel);

            border.Child = contentGrid;

            whatgridbozo.Children.Add(border);
            Grid.SetRow(border, rowIndex);
            Grid.SetColumn(border, columnIndex);

            loadIntoEditorButton.Click += LoadIntoEditor_ClickAsync;
            executeButton.Click += ExecuteScript_ClickAsync;
        }

        public class Post
        {
            public string Title { get; set; }

            public string Description { get; set; }

            public string Script { get; set; }

            public string Creator { get; set; }
        }

        /// <summary>
        /// Loads the script into the Editor
        /// </summary>
        public async void LoadIntoEditor_ClickAsync(object sender, RoutedEventArgs e)
        {
            if (sender is System.Windows.Controls.Button button)
            {
                if (button.Tag is int index)
                {
                    if (index >= 0 && index < posts.Count)
                    {
                        if (posts[index].Script.Contains("discord"))
                        {
                            var result = MessageBox.Show(
                                "LInjector detected this script contains a Discord invite link, would you like to open it?",
                                "LInjector", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                            if (result == System.Windows.Forms.DialogResult.Yes)
                            {
                                Process.Start(posts[index].Script);
                                return;
                            }
                            else
                            {
                                return;
                            }
                        }

                        if (posts[index].Script.StartsWith("loadstring"))
                        {
                            TabSystemz.add_tab_with_text(posts[index].Script, posts[index].Title);
                            ToggleScriptHub();
                            return;
                        }

                        using (HttpClient client = new HttpClient())
                        {
                            HttpResponseMessage response =
                                await client.GetAsync(new Uri(posts[index].Script));

                            if (response.IsSuccessStatusCode)
                            {
                                string asyncedscript = await response.Content.ReadAsStringAsync();
                                TabSystemz.add_tab_with_text(asyncedscript, posts[index].Title);
                                ToggleScriptHub();
                            }
                            else
                            {
                                await Notifications.Fire($"Script Error : {response.ReasonPhrase}");
                            }
                        }

                    }
                    else
                    {
                        await Notifications.Fire("Script Error : Invalid index.");
                    }
                }
                else
                {
                    await Notifications.Fire("Script Error : Invalid tag type.");
                }
            }
            else
            {
                await Notifications.Fire("Script Error : Invalid int index type.");
            }
        }

        /// <summary>
        /// Executes the Script
        /// </summary>
        public async void ExecuteScript_ClickAsync(object sender, RoutedEventArgs e)
        {
            if (sender is System.Windows.Controls.Button button)
            {
                if (button.Tag is int index)
                {
                    if (index >= 0 && index < posts.Count)
                    {
                        if (posts[index].Script.Contains("discord"))
                        {
                            var result = MessageBox.Show(
                                "LInjector detected this script contains a Discord invite link, would you like to open it?",
                                "LInjector", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                            if (result == System.Windows.Forms.DialogResult.Yes)
                            {
                                Process.Start(posts[index].Script);
                                return;
                            }
                            else
                            {
                                return;
                            }
                        }

                        if (posts[index].Script.StartsWith("loadstring"))
                        {
                            try
                            {
                                var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
                                if (!flag)
                                {
                                    try
                                    {
                                        FluxInterfacing.run_script(FluxInterfacing.pid,
                                                                   posts[index].Script);
                                        await Notifications.Fire("Executed");
                                    }
                                    catch (Exception ex)
                                    {
                                        CustomCw.Cw(
                                            $"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                                            false, "error");
                                    }
                                }
                                else
                                {
                                    Inject();
                                    await Task.Delay(500);
                                    FluxInterfacing.run_script(FluxInterfacing.pid,
                                                               posts[index].Script);
                                    await Notifications.Fire("Executed");
                                }
                            }
                            catch (Exception ex)
                            {
                                MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                                                MessageBoxButtons.OK, MessageBoxIcon.Error);
                                CustomCw.Cw(
                                    $"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                                    false, "error");
                            }
                        }

                        using (HttpClient client = new HttpClient())
                        {
                            HttpResponseMessage response =
                                await client.GetAsync(new Uri(posts[index].Script));

                            if (response.IsSuccessStatusCode)
                            {
                                string asyncedscript = await response.Content.ReadAsStringAsync();
                                try
                                {
                                    try
                                    {
                                        var flag =
                                            !FluxInterfacing.is_injected(FluxInterfacing.pid);
                                        if (!flag)
                                        {
                                            try
                                            {
                                                FluxInterfacing.run_script(FluxInterfacing.pid,
                                                                           asyncedscript);
                                            }
                                            catch (Exception ex)
                                            {
                                                CustomCw.Cw(
                                                    $"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                                                    false, "error");
                                            }
                                        }
                                        else
                                        {
                                            Inject();
                                            await Task.Delay(500);
                                            FluxInterfacing.run_script(FluxInterfacing.pid,
                                                                       asyncedscript);
                                            ToggleScriptHub();
                                        }
                                    }
                                    catch (Exception ex)
                                    {
                                        MessageBox.Show("LInjector couldn't run the script.",
                                                        "LInjector", MessageBoxButtons.OK,
                                                        MessageBoxIcon.Error);
                                        CustomCw.Cw(
                                            $"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                                            false, "error");
                                    }
                                }
                                catch
                                {
                                    await Notifications.Fire("Unknown error.");
                                }
                            }
                            else
                            {
                                await Notifications.Fire($"Script Error : {response.ReasonPhrase}");
                            }
                        }
                    }
                    else
                    {
                        await Notifications.Fire("Script Error : Invalid index.");
                    }
                }
                else
                {
                    await Notifications.Fire("Script Error : Invalid tag type.");
                }
            }
            else
            {
                await Notifications.Fire("Script Error : Invalid int index type.");
            }
        }

        private void SearchScriptHub_TextChanged(object sender, TextChangedEventArgs e)
        {
            UpdatePostsDisplay();
        }

        private void UpdatePostsDisplay()
        {
            string searchQuery = SearchScriptHub.Text.ToLower();
            foreach (var item in PostsItemsControl.Items)
            {
                if (item is FrameworkElement frameworkElement &&
                    frameworkElement.Tag is string tag)
                {
                    Debug.WriteLine(tag);
                    if (tag.Contains(searchQuery.ToLower()))
                    {
                        frameworkElement.Visibility = Visibility.Visible;
                    }
                    else
                    {
                        frameworkElement.Visibility = Visibility.Collapsed;
                    }
                }
            }
        }

        /// <summary>
        /// Hides the Script Hub Grid.
        /// </summary>
        private void HideScriptHub_Click(object sender, RoutedEventArgs e) => ToggleScriptHub();

        /// <summary>
        /// Toggles the only uncommented section of this file.
        /// </summary>
        private void ToggleScriptHub()
        {
            if (IsSettingsShown || IsInfoShown) return;

            IsScriptsShown = !IsScriptsShown;
            ScriptPageGrid.Visibility = IsScriptsShown ? Visibility.Visible : Visibility.Collapsed;
            TabSystemz.Visibility = IsScriptsShown ? Visibility.Collapsed : Visibility.Visible;
        }

        #endregion

        #region Button Functions

        /// <summary>
        /// Simple function for ExitButton.
        /// </summary>
        private async void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            SaveTabs();

            // Useful to make GAME clients don't crash when the WebSocket shutdowns, so they receive
            // a message before the WebSocket Server shutdowns.
            await ws.SendMessage("LINJECTOR_DISCONNECT");

            // Had to do this because UserControls in WPF are sus they act like an overlayed Window.
            TabSystemz.Visibility = Visibility.Hidden;

            // Fade-out animation, pretty cool.
            Storyboard fadeOutStoryboard = new Storyboard();
            DoubleAnimation fadeOutAnimation =
                new DoubleAnimation { From = 1, To = 0, Duration = TimeSpan.FromSeconds(0.10) };
            fadeOutStoryboard.Children.Add(fadeOutAnimation);
            Storyboard.SetTarget(fadeOutAnimation, this);
            Storyboard.SetTargetProperty(fadeOutAnimation,
                                         new PropertyPath(Window.OpacityProperty));
            fadeOutStoryboard.Completed += OnCloseFadeoutCompleted;
            fadeOutStoryboard.Begin();
        }

        private void MaximizeButton_Click(object sender, RoutedEventArgs e)
        {
            WindowState = (WindowState == WindowState.Maximized) ? WindowState.Normal : WindowState.Maximized;
            MaximizeButton.Content = (WindowState == WindowState.Maximized) ? "\xE923" : "\xE922";
        }

        private void MinimizeButton_Click(object sender,
                                          RoutedEventArgs e) => WindowState = WindowState.Minimized;

        /// <summary>
        /// Attach and Inject are the same, this was used to load LInjector into the GAME.
        /// </summary>
        private void AttachButton_Click(object sender, RoutedEventArgs e) => Inject();

        private void ConsoleDebugButton_Click(object sender, RoutedEventArgs e) =>
            ConsoleManager.ToggleConsoleVisibility();

        private void ScriptPage_Click(object sender, RoutedEventArgs e) => ToggleScriptHub();

        /// <summary>
        /// Toggles the Settings Grid
        /// </summary>
        private void SettingsButton_Click(object sender, RoutedEventArgs e)
        {
            IsSettingsShown = !IsSettingsShown;
            TabSystemz.Visibility = IsSettingsShown ? Visibility.Collapsed : Visibility.Visible;
            SettingsGrid.Visibility = IsSettingsShown ? Visibility.Visible : Visibility.Collapsed;
        }

        /// <summary>
        /// Was used to execute the scripts into the GAME, no longer working.
        /// This is bozo code, you're free to judge me.
        /// </summary>
        private async void ExecuteButton_Click(object sender, RoutedEventArgs e)
        {
            /* No longer working.
            try
            {
                // Get the current Monaco Editor instance
                var cm = TabSystemz.current_monaco();

                // Get the script text from the Monaco Editor instance
                string scriptString = await cm.GetText();

                try
                {
                    // Check if Fluxus is not injected
                    var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
                    if (!flag)
                    {
                        // Run the script if Injected
                        //FluxInterfacing.run_script(FluxInterfacing.pid, scriptString);
                    }
                    else
                    {
                        // Inject the process and then run the script
                        // Inject(); NO LONGER WORKING
                        // await Task.Delay(500); // Task.Delay to ensure proper injection (bad
            practice)
                        // FluxInterfacing.run_script(FluxInterfacing.pid, scriptString); NO LOGER
            WORKING
                    }
                }
                catch (Exception ex)
                {
                    // Handle Fluxus Interfacing exception.
                    MessageBox.Show("LInjector couldn't run the script.", "LInjector",
            MessageBoxButtons.OK, MessageBoxIcon.Error); CustomCw.Cw($"(Module) Exception
            thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                }
            }
            catch
            {
                // Handle anything
                _ = Notifications.Fire(StatusListBox, "Unknown error.", NotificationLabel);
            }
            */

            await Notifications.Fire("Execution is no longer working! Thanks for using LInjector.");
        }

        private long ApplicationModel()
        {
            long x = 0x457863656c;
            long y = 0x446570736f;

            return x + y;
        }

        // Self-credits
        private void GitHubButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start($"https://github.com/{Files.AccountName}/LInjector");
        }

        private void DiscordButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start("https://discord.gg/NQY28YSVAb");
        }

        private void InfoButton_Click(object sender, RoutedEventArgs e) => ToggleInfo();

        /// <summary>
        /// Checks for the Visibility of Scripts and Info Grids, depending of it, shows the
        /// Information (Credits) Grid.
        /// </summary>
        public void ToggleInfo()
        {
            if (!IsInfoShown && !IsScriptsShown)
            {
                IsInfoShown = true;
                InfoTab.Focus();
            }
            else
            {
                IsInfoShown = false;
            }
        }
        #endregion

        #region Self - Explainatory

        /// <summary>
        /// This is the core function of the executable, we all know for what it was used.
        /// </summary>
        public void Inject()
        {
            MessageBox.Show(
                "Execution is not working, LInjector currently does not have support for any game client.",
                "LInjector", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);

            /*
            // Create necessary files for the Fluxus DLLs
            FluxInterfacing.create_files(Path.GetFullPath(".\\Resources\\libs\\Module.dll"));

            // Check
            var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
            if (flag)
            {
                try
                {
                    try
                    {
                        // Perform injection
                        FluxInterfacing.inject();

                        // Runs the File System Event watcher, ensuring the UNC compatibility
                        FunctionWatch.runFuncWatch();

                        // Check for Process Id
                        if (FluxInterfacing.pid > 0)
                        {
                            LogToConsole.Log($"Injected to Windows10Universal.exe with PID:
            {FluxInterfacing.pid}");
                        }
                        else
                        {
                            LogToConsole.Log($"Windows10Universal.exe not detected.");
                        }
                    }
                    catch (Exception ex)
                    {
                        _ = Notifications.Fire(StatusListBox, "Something went wrong...",
            NotificationLabel); MessageBox.Show($"Exception Message: {ex.InnerException}\nStack
            Trace: {ex.StackTrace}"); throw ex;
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error on inject:\n" + ex.Message + "\nStack Trace:\n" +
            ex.StackTrace, "LInjector | Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            else // If injected
            {
                _ = Notifications.Fire(StatusListBox, "Already injected", NotificationLabel);
            }
            */
        }
        #endregion

        #region Save Tabs

        /// <summary>
        /// Saves the tabs that are opened in the Monaco Text Editor.
        /// </summary>
        private async void SaveTabs()
        {
            if (ConfigHandler.save_tabs == false)
            {
                return;
            }

            foreach (TabItem item in TabSystemz.maintabs.Items)
            {
                var GetTextzzzz = await (item.Content as monaco_api).GetText();
                if (GetTextzzzz.Length > 1)
                {
                    File.WriteAllText($"{Files.savedtabspath}\\{item.Header.ToString()}",
                                      GetTextzzzz.ToString());
                }
            }
        }

        /// <summary>
        /// Reads the files stored in Resources\savedtabs and loads it into the Tab System (Editor)
        /// UserControl.
        /// </summary>
        private void LoadSavedTabs()
        {
            if (ConfigHandler.save_tabs == false)
            {
                return;
            }

            foreach (string file in Directory.EnumerateFiles(Files.savedtabspath))
            {
                TabSystemz.add_tab_with_text(File.ReadAllText(file), Path.GetFileName(file));
            }

            DeleteSavedTabs();
        }

        /// <summary>
        /// Called when the <see cref="LoadSavedTabs"/> finish to load, so we can delete the old
        /// files and wait for new tabs.
        /// </summary>
        private void DeleteSavedTabs()
        {
            foreach (var item in Directory.EnumerateFiles(Files.savedtabspath))
            {
                File.Delete(item);
            }
        }

        #endregion

        #region Auto Attach

        /// <summary>
        /// Starts the timer for <see cref="AttachedDetectorTick(object, EventArgs)"/>
        /// </summary>
        public void RunAutoAttachTimer()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Tick += AttachedDetectorTick;
            timer.Interval = TimeSpan.FromSeconds(5);
            timer.Start();
        }

        internal void AttachedDetectorTick(object sender, EventArgs e)
        {
            if (!ConfigHandler.autoattach) return;

            var processesByName = Process.GetProcessesByName("Windows10Universal");
            foreach (var process in processesByName)
            {
                try
                {
                    var filePath = process.MainModule.FileName;

                    /* We all know it
                     if (filePath.Contains("ROBLOX") || filePath.Contains("Fluster"))
                     {
                         if (FluxInterfacing.is_injected(FluxInterfacing.pid))
                             return;

                         Inject();
                     }
                     */
                }
                catch (Exception ex)
                {
                    LogToConsole.Log(ex.Message);
                }
            }
        }

        #endregion

        #region Script List

        /// <summary>
        /// Refreshes the script list, see: <see cref="RefreshScriptList"/>
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SearchScriptsBox_TextChanged(object sender,
                                                  System.Windows.Controls.TextChangedEventArgs e)
        {
            RefreshScriptList();
        }

        /// <summary>
        /// When the WPF Element finished loading, then, we add all the elements from the
        /// ScriptListPath.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ScriptListHolder_Loaded(object sender, RoutedEventArgs e)
        {
            DirectoryInfo ScriptsFolder = new DirectoryInfo(ScriptListPath);
            FileInfo[] Files = ScriptsFolder.GetFiles("*.*");
            foreach (FileInfo Script in Files)
            {
                ScriptListHolder.Items.Add(Script.Name);
            }
        }

        /// <summary>
        /// Reads the files in the ScriptListPath directory value and then, it put all the filenames
        /// in a ListBox.
        /// </summary>
        public void RefreshScriptList()
        {
            ScriptListHolder.Items.Clear();

            string searchQuery = SearchScriptsBox.Text.ToLower();
            DirectoryInfo scriptsFolder = new DirectoryInfo(ScriptListPath);

            foreach (FileInfo script in scriptsFolder.GetFiles())
            {
                string fileName = script.Name;
                if (fileName.ToLower().Contains(searchQuery))
                {
                    ScriptListHolder.Items.Add(fileName);
                }
            }
        }

        /// <summary>
        /// Filters the elements in the ListBox to perform a search.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SearchScriptsBox_SelectionChanged(object sender, RoutedEventArgs e)
        {
            try
            {
                if (TabSystemz.maintabs.Items.Count != 0)
                {
                    if (this.ScriptListHolder.SelectedIndex != -1)
                    {
                        string scriptfolder = ScriptListPath;
                        object selectedItem = this.ScriptListHolder.SelectedItem;
                        if (this.ScriptListHolder.Items.Count != 0)
                        {
                            TabSystemz.ChangeCurrentTabTitle(selectedItem.ToString());
                            TabSystemz.current_monaco().SetText(
                                File.ReadAllText(scriptfolder + "\\" +
                                                 (selectedItem != null ? selectedItem.ToString()
                                                  : (string)null)));
                        }
                    }
                }
                else
                {
                    string scriptfolder = ScriptListPath;
                    object selectedItem = this.ScriptListHolder.SelectedItem;
                    TabSystemz.add_tab_with_text(
                        File.ReadAllText(scriptfolder + "\\" +
                                         (selectedItem != null ? selectedItem.ToString()
                                          : (string)null)),
                        selectedItem.ToString());
                }
            }
            catch
            {
            }
        }

        #endregion

        #region Open and Save File

        /// <summary>
        /// Button to open a file and load it into the current Monaco Editor instance.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void OpenFileButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                var openFileDialog = new System.Windows.Forms.OpenFileDialog
                {
                    Title = "Open Script Files | LInjector",
                    Filter =
                        "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
                    Multiselect = false
                };
                if (openFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string fileContent = File.ReadAllText(openFileDialog.FileName);

                    var dialogResult = System.Windows.Forms.MessageBox.Show(
                        "Open file in new tab?", "LInjector", MessageBoxButtons.YesNo,
                        MessageBoxIcon.Question, MessageBoxDefaultButton.Button2);
                    if (dialogResult == System.Windows.Forms.DialogResult.Yes)
                    {
                        TabSystemz.add_tab_with_text(fileContent, openFileDialog.SafeFileName);
                    }
                    else
                    {
                        TabSystemz.current_monaco().SetText(fileContent);
                        TabSystemz.ChangeCurrentTabTitle(openFileDialog.SafeFileName);
                    }
                }

            }
            catch
            {
                await Notifications.Fire("Error while opening the file.");
            }
        }

        /// <summary>
        /// Button to save the current Monaco Editor instance content into a file.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void SaveToFileButton_Click(object sender, RoutedEventArgs e)
        {
            var saveFileDialog = new System.Windows.Forms.SaveFileDialog
            {
                FileName = await TabSystemz.GetCurrentTabTitle(),
                Title = "Save to File | LInjector",
                Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
            };

            if (saveFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                string filePath = saveFileDialog.FileName;

                try
                {
                    var cm = TabSystemz.current_monaco();
                    string text = await cm.GetText();
                    string result = text;

                    if (string.IsNullOrEmpty(result))
                    {
                        await Notifications.Fire("No content detected");
                    }
                    else
                    {
                        try
                        {
                            File.WriteAllText(filePath, result);
                            string savedFileName = Path.GetFileName(saveFileDialog.FileName);
                            await Notifications.Fire($"{savedFileName} saved");
                            TabSystemz.ChangeCurrentTabTitle(savedFileName);
                        }
                        catch (Exception)
                        {
                            await Notifications.Fire("Error saving the file");
                        }
                    }

                }
                catch (Exception)
                {
                    await Notifications.Fire("Error saving the file");
                }
            }
        }
        #endregion

        #region Settings

        /// <summary>
        /// Opens a Folder File Dialog to select the folder in the File Explorer
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ChangeScriptsFolder_Click(object sender, RoutedEventArgs e)
        {
            CommonOpenFileDialog dialog = new CommonOpenFileDialog
            {
                IsFolderPicker = true,
                Multiselect = false,
            };

            if (dialog.ShowDialog() == CommonFileDialogResult.Ok)
            {
                RegistryHandler.SetValue("ScriptListPath", dialog.FileName);
                ScriptListPath = dialog.FileName;
                RefreshScriptList();
            }
        }

        // CONFIGURATION SHIFT

        /// <summary>
        ///  Reads a JSON called config.json, and applies the value of it to a class, see: <see
        ///  cref="ConfigHandler"/>. WPF is not a Immediate mode GUI, so we have to do all of this!
        /// </summary>
        public void ParseConfig()
        {
            SetToggle(AutoAttachToggle, ConfigHandler.autoattach);
            SetToggle(SplashToggle, ConfigHandler.splashscreen);
            SetToggle(DebugModeToggle, ConfigHandler.debug);
            SetToggle(RPCToggle, RPCManager.isEnabled);
            if (RPCManager.isEnabled)
            {
                enablerpc();
            }
            else
            {
                shutdownrpc();
            }
            SetToggle(TopmostToggle, ConfigHandler.topmost);
            SetToggle(SaveTabsToggle, ConfigHandler.save_tabs);
            SetToggle(ToggleWebSocketMode, ConfigHandler.websocket_mode);
            ParseMyThemeSelectors();
        }

        /// <summary>
        /// Easy set for a Toggle Button
        /// </summary>
        /// <param name="toggle"></param>
        /// <param name="value"></param>
        private void SetToggle(System.Windows.Controls.Primitives.ToggleButton toggle, bool value)
        {
            toggle.IsChecked = value;
        }

        // AUTO ATTACH TOGGLE

        private void AutoAttachToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.autoattach = true;
            ConfigHandler.SetConfigValue("autoattach", true);
        }

        private void AutoAttachToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.autoattach = false;
            ConfigHandler.SetConfigValue("autoattach", false);
        }

        // SPLASH SCREEN TOGGLE

        private void SplashToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.splashscreen = true;
            ConfigHandler.SetConfigValue("splashscreen", true);
        }

        private void SplashToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.splashscreen = false;
            ConfigHandler.SetConfigValue("splashscreen", false);
        }

        // DEBUG MODE TOGGLE

        private void DebugModeToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.debug = true;
            ConsoleManager.ShowConsole();
            ConfigHandler.SetConfigValue("debug", true);
        }

        private void DebugModeToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.debug = false;
            ConsoleManager.HideConsole();
            ConfigHandler.SetConfigValue("debug", false);
        }

        // RPC Toggle

        /// <summary>
        /// Enables the Discord RPC for the LInjector Client.
        /// </summary>
        private void enablerpc()
        {
            ConfigHandler.SetConfigValue("discord_rpc", true);
            ConfigHandler.discord_rpc = true;
            RPCManager.isEnabled = true;

            if (!RPCManager.client.IsInitialized)
            {
                RPCManager.InitRPC();
            }
        }

        /// <summary>
        /// Disables the Discord RPC for the LInjector Client.
        /// </summary>
        private void shutdownrpc()
        {
            ConfigHandler.SetConfigValue("discord_rpc", false);
            ConfigHandler.discord_rpc = false;
            RPCManager.isEnabled = false;

            if (RPCManager.client.IsInitialized)
            {
                RPCManager.TerminateConnection();
            }
        }

        private void RPCToggle_Checked(object sender, RoutedEventArgs e) => enablerpc();

        private void RPCToggle_Unchecked(object sender, RoutedEventArgs e) => shutdownrpc();

        // WebSocket Mode
        private void ToggleWebSocketMode_Checked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= ExecuteButton_Click;
            ExecuteButton.Click += HookExecute;
            ConfigHandler.websocket_mode = true;
            ConfigHandler.SetConfigValue("websocket_mode", true);
        }

        private void ToggleWebSocketMode_Unchecked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= HookExecute;
            ExecuteButton.Click += ExecuteButton_Click;
            ConfigHandler.websocket_mode = false;
            ConfigHandler.SetConfigValue("websocket_mode", false);
        }

        private void HelpWebSocket_Click(object sender, RoutedEventArgs e) =>
            Process.Start("https://docs.lexploits.top/docs/usage#websocket-mode");

        // Top Most
        private void TopmostToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("topmost", true);
            ConfigHandler.topmost = true;
            Topmost = true;
        }

        private void TopmostToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("topmost", false);
            ConfigHandler.topmost = false;
            Topmost = false;
        }

        // SAVE TABS TOGGLE
        private void SaveTabsToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("save_tabs", true);
            ConfigHandler.save_tabs = true;
        }

        private void SaveTabsToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("save_tabs", false);
            ConfigHandler.save_tabs = false;
        }

        /// <summary>
        /// Changes the Execute function to make it compatible when the WebSocket server starts.
        /// </summary>
        private async void HookExecute(object sender, RoutedEventArgs e)
        {
            try
            {
                var cm = TabSystemz.current_monaco();
                string scriptString = await cm.GetText();

                try
                {
                    try
                    {
                        await ws.SendMessage(scriptString);
                    }
                    catch (Exception ex)
                    {
                        CustomCw.Cw(
                            $"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                            false, "error");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                                    MessageBoxButtons.OK, MessageBoxIcon.Error);
                    CustomCw.Cw(
                        $"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}",
                        false, "error");
                }
            }
            catch
            {
                await Notifications.Fire("Unknown error.");
            }
        }

        #endregion

        #region Themes

        /// <summary>
        /// Event handler for the color changed event.
        /// Opens a color picker dialog to select a new color for the specified button.
        /// </summary>
        /// <param name="sender">The object that raised the event.</param>
        /// <param name="e">The event arguments.</param>
        private void ColorChanged(object sender,
                                  RoutedEventArgs e) => HandleColorChange((Button)sender);

        /// <summary>
        /// Handles the color change operation for the specified button.
        /// Opens a color picker dialog to select a new color.
        /// Updates the button's background color and saves the color information to the
        /// application's theme.
        /// </summary>
        /// <param name="button">The button for which the color change is being handled.</param>
        private void HandleColorChange(Button button)
        {
            var dialog = new ColorPickerDialog();
            var result = dialog.ShowDialog();

            if (result.HasValue && result.Value)
            {
                var color = dialog.Color;
                var solidColorBrush = new SolidColorBrush(color);

                if (Resources.Contains(button.Tag.ToString()))
                {
                    Resources[button.Tag.ToString()] = solidColorBrush;
                }

                button.Background = solidColorBrush;

                string colorHexString = color.ToString();

                Themes.SetColor(button.Tag.ToString(), colorHexString);
            }
        }

        /// <summary>
        /// Reads Registry Keys of Colors selected by the user, and then, puts it into a class to be
        /// applied and parsed.
        /// </summary>
        private void ParseMyTheme()
        {
            Resources[PrimaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()]
            = ParseColor(Themes.GetColor("Text"));
        }

        /// <summary>
        /// Set the background of the Interactuable Buttons that the user uses to match the color in
        /// Registry Had to do it since WPF is not an Immediate Mode GUI
        /// </summary>
        private void ParseMyThemeSelectors()
        {
            SetControlBackground(SSC1, "SSC1");
            SetControlBackground(SSC2, "SSC2");
            SetControlBackground(PrimaryColor, "PrimaryColor");
            SetControlBackground(SecondaryColor, "SecondaryColor");
            SetControlBackground(TertiaryColor, "TertiaryColor");
            SetControlBackground(Text, "Text");
        }

        /// <summary>
        /// Used in <see cref="ParseMyThemeSelectors"/>
        /// </summary>
        /// <param name="control"></param>
        /// <param name="colorKey"></param>
        private void SetControlBackground(FrameworkElement control, string colorKey)
        {
            PropertyInfo backgroundProperty = control.GetType().GetProperty("Background");
            if (backgroundProperty != null)
            {
                SolidColorBrush brush = (SolidColorBrush)new BrushConverter().ConvertFromString(
                    Themes.GetColor(colorKey));
                backgroundProperty.SetValue(control, brush);
            }
        }

        /// <summary>
        /// Resets the Theme Values to the Default ones made by me (Excel).
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ResetTheme_Click(object sender, RoutedEventArgs e)
        {
            CreateFiles.ResetTheme();
            ParseMyThemeSelectors();

            Resources[PrimaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()]
            = ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()]
            = ParseColor(Themes.GetColor("Text"));
        }

        /// <summary>
        /// Color converter from aRGB to SolidColorBrush
        /// </summary>
        /// <param name="srgb">String in ARGB Fomat (#AABBCCDD)</param>
        /// <returns>SolidColorBrush used in <see cref="ParseColor(string)"/></returns>
        /// <exception cref="ArgumentException"></exception>
        public System.Windows.Media.SolidColorBrush ParseColor(string srgb)
        {
            if (srgb.Contains("#")) srgb = srgb.TrimStart('#');

            if (srgb.Length != 8)
            {
                throw new ArgumentException(
                    $"sRGB must be 8 characters, got {srgb} : {srgb.Length}", nameof(srgb));
            }

            byte a = byte.Parse(srgb.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
            byte r = byte.Parse(srgb.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
            byte g = byte.Parse(srgb.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
            byte b = byte.Parse(srgb.Substring(6, 2), System.Globalization.NumberStyles.HexNumber);

            return new System.Windows.Media.SolidColorBrush(
                System.Windows.Media.Color.FromArgb(a, r, g, b));
        }
        #endregion
    }

}