using LInjector.Classes;
using LInjector.WPF.Classes;
using Microsoft.WindowsAPICodePack.Dialogs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Threading;
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
            RunAutoAttachTimer();
        }

        private async void Window_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                await Updater.CheckForUpdates();
                FluxInterfacing.create_files(Path.GetFullPath("Resources\\libs\\Module.dll"));
            }
            catch (Exception ex)
            {
                MessageBox.Show("Couldn't initialize Fluxus Interface\nException:\n" +
                    ex.Message +
                    "\nPlease, share it on Discord.",
                    "[ERROR] LInjector", MessageBoxButtons.OK,
                    MessageBoxIcon.Information);
                _ = Notifications.Fire(StatusListBox, "Couldn't initialize Fluxus Interface.", NotificationLabel);
            }

            if (ConfigHandler.topmost)
            {
                this.Topmost = true;
            }

            TabSystemz.Visibility = Visibility.Visible;
            if (RegistryHandler.GetValue("ScriptListPath", "0").Length != 0)
            {
                ScriptListPath = RegistryHandler.GetValue("ScriptListPath", "0");
            }
            RefreshScriptList();
            LoadSavedTabs();
            ParseConfig();
            LogToConsole.Log("Loaded", ConsoleLogList);
            await LoadPostsAsync(ScriptPageGrid, PostsItemsControl);
            await ws.Start();
            _ = Notifications.Fire(StatusListBox, "Welcome to LInjector", NotificationLabel);
        }

        private void DragWindow(object sender, MouseButtonEventArgs e)
        {
            try
            {
                DragMove();
            }
            catch { }
        }

        private void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            Close();
            System.Windows.Application.Current.Shutdown();
        }
        #endregion

        #region Script Hub

        private
        const string PostsURL = "https://api.mastersmzscripts.com/posts.json";
        public static List<Post> posts = new List<Post>();

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
                            CreateGrid(post.Title, post.Description, post.Script, post.Creator, rowIndex, columnIndex, uniformGrid, postIndex);
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

        public void CreateGrid(string title, string description, string scriptLink, string creator, int rowIndex, int columnIndex, UniformGrid whatgridbozo, int postIndex)
        {
            Border border = new Border
            {
                Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#161616")),
                CornerRadius = new CornerRadius(5),
                Margin = new Thickness(10),
                Tag = title,
                BorderBrush = Brushes.DarkGray,
                BorderThickness = new Thickness(0.3),
                MinHeight = 80,
            };

            Grid contentGrid = new Grid
            {
                Margin = new Thickness(3)
            };

            contentGrid.ColumnDefinitions.Add(new ColumnDefinition
            {
                Width = new GridLength(1, GridUnitType.Star)
            });
            contentGrid.ColumnDefinitions.Add(new ColumnDefinition
            {
                Width = new GridLength(1, GridUnitType.Star)
            });
            contentGrid.ColumnDefinitions.Add(new ColumnDefinition
            {
                Width = new GridLength(1, GridUnitType.Star)
            });
            contentGrid.RowDefinitions.Add(new RowDefinition
            {
                Height = new GridLength(1, GridUnitType.Star)
            });
            contentGrid.RowDefinitions.Add(new RowDefinition
            {
                Height = new GridLength(1, GridUnitType.Star)
            });
            contentGrid.RowDefinitions.Add(new RowDefinition
            {
                Height = new GridLength(1, GridUnitType.Star)
            });

            StackPanel stackPanel = new StackPanel
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

            StackPanel buttonStackPanel = new StackPanel
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
                Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#141414")),
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

            System.Windows.Controls.Button loadIntoEditorButton = new System.Windows.Controls.Button
            {
                Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#141414")),
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
                            var result = MessageBox.Show("LInjector detected this script contains a Discord invite link, would you like to open it?", "LInjector", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
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
                            HttpResponseMessage response = await client.GetAsync(new Uri(posts[index].Script));

                            if (response.IsSuccessStatusCode)
                            {
                                string asyncedscript = await response.Content.ReadAsStringAsync();
                                TabSystemz.add_tab_with_text(asyncedscript, posts[index].Title);
                                ToggleScriptHub();
                            }
                            else
                            {
                                _ = Notifications.Fire(StatusListBox, $"Script Error : {response.ReasonPhrase}", NotificationLabel);
                            }
                        }

                    }
                    else
                    {
                        _ = Notifications.Fire(StatusListBox, "Script Error : Invalid index.", NotificationLabel);
                    }
                }
                else
                {
                    _ = Notifications.Fire(StatusListBox, "Script Error : Invalid tag type.", NotificationLabel);
                }
            }
            else
            {
                _ = Notifications.Fire(StatusListBox, "Script Error : Invalid int index type.", NotificationLabel);
            }
        }

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
                            var result = MessageBox.Show("LInjector detected this script contains a Discord invite link, would you like to open it?", "LInjector", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
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
                                        FluxInterfacing.run_script(FluxInterfacing.pid, posts[index].Script);
                                        await Notifications.Fire(StatusListBox, "Executed", NotificationLabel);
                                    }
                                    catch (Exception ex)
                                    {
                                        CustomCw.Cw($"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                                    }
                                }
                                else
                                {
                                    Inject();
                                    await Task.Delay(500);
                                    FluxInterfacing.run_script(FluxInterfacing.pid, posts[index].Script);
                                    await Notifications.Fire(StatusListBox, "Executed", NotificationLabel);
                                }
                            }
                            catch (Exception ex)
                            {
                                MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                                    MessageBoxButtons.OK, MessageBoxIcon.Error);
                                CustomCw.Cw($"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                            }
                        }

                        using (HttpClient client = new HttpClient())
                        {
                            HttpResponseMessage response = await client.GetAsync(new Uri(posts[index].Script));

                            if (response.IsSuccessStatusCode)
                            {
                                string asyncedscript = await response.Content.ReadAsStringAsync();
                                try
                                {
                                    try
                                    {
                                        var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
                                        if (!flag)
                                        {
                                            try
                                            {
                                                FluxInterfacing.run_script(FluxInterfacing.pid, asyncedscript);
                                            }
                                            catch (Exception ex)
                                            {
                                                CustomCw.Cw($"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                                            }
                                        }
                                        else
                                        {
                                            Inject();
                                            await Task.Delay(500);
                                            FluxInterfacing.run_script(FluxInterfacing.pid, asyncedscript);
                                            ToggleScriptHub();
                                        }
                                    }
                                    catch (Exception ex)
                                    {
                                        MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                                            MessageBoxButtons.OK, MessageBoxIcon.Error);
                                        CustomCw.Cw($"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                                    }
                                }
                                catch
                                {
                                    _ = Notifications.Fire(StatusListBox, "Unknown error.", NotificationLabel);
                                }
                            }
                            else
                            {
                                _ = Notifications.Fire(StatusListBox, $"Script Error : {response.ReasonPhrase}", NotificationLabel);
                            }
                        }
                    }
                    else
                    {
                        _ = Notifications.Fire(StatusListBox, "Script Error : Invalid index.", NotificationLabel);
                    }
                }
                else
                {
                    _ = Notifications.Fire(StatusListBox, "Script Error : Invalid tag type.", NotificationLabel);
                }
            }
            else
            {
                _ = Notifications.Fire(StatusListBox, "Script Error : Invalid int index type.", NotificationLabel);
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
                if (item is FrameworkElement frameworkElement && frameworkElement.Tag is string tag)
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

        private void HideScriptHub_Click(object sender, RoutedEventArgs e)
        {
            ToggleScriptHub();
        }

        private void ToggleScriptHub()
        {
            if (IsSettingsShown == true || IsInfoShown)
            {
                return;
            }

            if (ScriptPageGrid.Visibility == Visibility.Visible)
            {
                IsScriptsShown = false;
                ScriptPageGrid.Visibility = Visibility.Collapsed;
                TabSystemz.Visibility = Visibility.Visible;
            }
            else
            {
                IsScriptsShown = true;
                ScriptPageGrid.Visibility = Visibility.Visible;
                TabSystemz.Visibility = Visibility.Collapsed;
            }
        }

        #endregion

        #region Button Functions

        private async void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            SaveTabs();

            await ws.SendMessage("LINJECTOR_DISCONNECT");

            TabSystemz.Visibility = Visibility.Hidden;
            Storyboard fadeOutStoryboard = new Storyboard();
            DoubleAnimation fadeOutAnimation = new DoubleAnimation
            {
                From = 1,
                To = 0,
                Duration = TimeSpan.FromSeconds(0.25)
            };
            fadeOutStoryboard.Children.Add(fadeOutAnimation);
            Storyboard.SetTarget(fadeOutAnimation, this);
            Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(Window.OpacityProperty));
            fadeOutStoryboard.Completed += OnCloseFadeoutCompleted;
            fadeOutStoryboard.Begin();
        }

        private void MaximizeButton_Click(object sender, RoutedEventArgs e)
        {
            if (WindowState == WindowState.Maximized)
            {
                WindowState = WindowState.Normal;
                MaximizeButton.Content = "\xE922";
            }
            else
            {
                WindowState = WindowState.Maximized;
                MaximizeButton.Content = "\xE923";
            }
        }

        private void MinimizeButton_Click(object sender, RoutedEventArgs e)
        {
            WindowState = WindowState.Minimized;
        }

        private void AttachButton_Click(object sender, RoutedEventArgs e)
        {
            Inject();
        }

        private void ConsoleDebugButton_Click(object sender, RoutedEventArgs e)
        {
            if (ConsoleManager.isConsoleVisible)
            {
                ConsoleManager.HideConsole();
            }
            else
            {
                ConsoleManager.ShowConsole();
            }
        }

        private void ScriptPage_Click(object sender, RoutedEventArgs e)
        {
            ToggleScriptHub();
        }

        private void SettingsButton_Click(object sender, RoutedEventArgs e)
        {
            if (IsSettingsShown == false)
            {
                if (IsScriptsShown == true)
                {
                    return;
                }
                IsSettingsShown = true;
                TabSystemz.Visibility = Visibility.Collapsed;
                SettingsGrid.Visibility = Visibility.Visible;
            }
            else
            {
                IsSettingsShown = false;
                TabSystemz.Visibility = Visibility.Visible;
                SettingsGrid.Visibility = Visibility.Collapsed;
            }
        }

        private async void ExecuteButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                var cm = TabSystemz.current_monaco();
                string scriptString = await cm.GetText();

                try
                {
                    var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
                    if (!flag)
                    {
                        try
                        {
                            FluxInterfacing.run_script(FluxInterfacing.pid, scriptString);
                        }
                        catch (Exception ex)
                        {
                            CustomCw.Cw($"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                        }
                    }
                    else
                    {
                        Inject();
                        await Task.Delay(500);
                        FluxInterfacing.run_script(FluxInterfacing.pid, scriptString);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                        MessageBoxButtons.OK, MessageBoxIcon.Error);
                    CustomCw.Cw($"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                }
            }
            catch
            {
                _ = Notifications.Fire(StatusListBox, "Unknown error.", NotificationLabel);
            }
        }

        private void GitHubButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start($"https://github.com/{Files.AccountName}/LInjector");
        }

        private void DiscordButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start("https://discord.gg/NQY28YSVAb");
        }

        private void InfoButton_Click(object sender, RoutedEventArgs e)
        {
            ToggleInfo();
        }

        public void ToggleInfo()
        {
            if (IsInfoShown == false)
            {
                if (IsScriptsShown == true)
                {
                    return;
                }
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
        public void Inject()
        {
            FluxInterfacing.create_files(Path.GetFullPath(".\\Resources\\libs\\Module.dll"));
            var flag = !FluxInterfacing.is_injected(FluxInterfacing.pid);
            if (flag)
            {
                try
                {
                    try
                    {

                        FluxInterfacing.inject();
                        FunctionWatch.runFuncWatch();
                        if (FluxInterfacing.pid > 0)
                        {
                            LogToConsole.Log($"Injected to Windows10Universal.exe with PID: {FluxInterfacing.pid}", ConsoleLogList);
                        }
                        else
                        {
                            LogToConsole.Log($"Windows10Universal.exe not detected.", ConsoleLogList);
                        }
                    }
                    catch (Exception ex)
                    {
                        _ = Notifications.Fire(StatusListBox, "Something went wrong...", NotificationLabel);
                        MessageBox.Show($"Exception Message: {ex.InnerException}\nStack Trace: {ex.StackTrace}");
                        throw ex;
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error on inject:\n" + ex.Message +
                        "\nStack Trace:\n" + ex.StackTrace,
                        "LInjector | Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            else
            {
                _ = Notifications.Fire(StatusListBox, "Already injected", NotificationLabel);
            }
        }
        #endregion

        #region Save Tabs
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
                    File.WriteAllText($"{Files.savedtabspath}\\{item.Header.ToString()}", GetTextzzzz.ToString());
                }
            }
        }

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

        private void DeleteSavedTabs()
        {
            foreach (var item in Directory.EnumerateFiles(Files.savedtabspath))
            {
                File.Delete(item);
            }
        }

        #endregion

        #region Auto Attach

        public void RunAutoAttachTimer()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Tick += AttachedDetectorTick;
            timer.Interval = TimeSpan.FromSeconds(5);
            timer.Start();
        }

        internal void AttachedDetectorTick(object sender, EventArgs e)
        {
            if (ConfigHandler.autoattach == false)
            {
                return;
            }

            var processesByName = Process.GetProcessesByName("Windows10Universal");
            foreach (var Process in processesByName)
            {
                var FilePath = Process.MainModule.FileName;

                if (FilePath.Contains("ROBLOX") || FilePath.Contains("Fluster"))
                {
                    try
                    {
                        var flag = FluxInterfacing.is_injected(FluxInterfacing.pid);
                        if (flag)
                        {
                            return;
                        }

                        Inject();
                    }
                    catch { }
                }
            }
        }

        #endregion

        #region Script List
        private void SearchScriptsBox_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            RefreshScriptList();
        }

        private void ScriptListHolder_Loaded(object sender, RoutedEventArgs e)
        {
            DirectoryInfo ScriptsFolder = new DirectoryInfo(ScriptListPath);
            FileInfo[] Files = ScriptsFolder.GetFiles("*.*");
            foreach (FileInfo Script in Files)
            {
                ScriptListHolder.Items.Add(Script.Name);
            }
        }

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
                            TabSystemz.current_monaco().SetText(File.ReadAllText(scriptfolder + "\\" + (selectedItem != null ? selectedItem.ToString() : (string)null)));
                        }
                    }
                }
                else
                {
                    string scriptfolder = ScriptListPath;
                    object selectedItem = this.ScriptListHolder.SelectedItem;
                    TabSystemz.add_tab_with_text(File.ReadAllText(scriptfolder + "\\" + (selectedItem != null ? selectedItem.ToString() : (string)null)), selectedItem.ToString());
                }
            }
            catch { }
        }

        #endregion

        #region Open and Save File
        private void OpenFileButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                var openFileDialog = new System.Windows.Forms.OpenFileDialog
                {
                    Title = "Open Script Files | LInjector",
                    Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
                    Multiselect = false
                };
                if (openFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string fileContent = File.ReadAllText(openFileDialog.FileName);

                    var dialogResult = System.Windows.Forms.MessageBox.Show(
                        "Open file in new tab?",
                        "LInjector",
                        MessageBoxButtons.YesNo,
                        MessageBoxIcon.Question,
                        MessageBoxDefaultButton.Button2);
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
                _ = Notifications.Fire(StatusListBox, "Error while opening the file.", NotificationLabel);
            }
        }

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
                        _ = Notifications.Fire(StatusListBox, "No content detected", NotificationLabel);
                    }
                    else
                    {
                        try
                        {
                            File.WriteAllText(filePath, result);
                            string savedFileName = Path.GetFileName(saveFileDialog.FileName);
                            _ = Notifications.Fire(StatusListBox, $"{savedFileName} saved", NotificationLabel);
                            TabSystemz.ChangeCurrentTabTitle(savedFileName);
                        }
                        catch (Exception)
                        {
                            _ = Notifications.Fire(StatusListBox, "Error saving the file", NotificationLabel);
                        }
                    }

                }
                catch (Exception)
                {
                    _ = Notifications.Fire(StatusListBox, "Error saving the file", NotificationLabel);
                }
            }
        }
        #endregion

        #region Settings
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

        public void ParseConfig()
        {
            SetToggle(AutoAttachToggle, ConfigHandler.autoattach);
            SetToggle(SplashToggle, ConfigHandler.splashscreen);
            SetToggle(DebugModeToggle, ConfigHandler.debug);

            if (RPCManager.isEnabled)
            {
                SetToggle(RPCToggle, true);
                enablerpc();
            }
            else
            {
                SetToggle(RPCToggle, false);
                shutdownrpc();
            }

            SetToggle(TopmostToggle, ConfigHandler.topmost);
            SetToggle(SaveTabsToggle, ConfigHandler.save_tabs);
            SetToggle(ToggleEmuMode, ConfigHandler.emulator_mode);
        }

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

        private void shutdownrpc()
        {
            ConfigHandler.SetConfigValue("discord_rpc", false);
            ConfigHandler.discord_rpc = false;
            RPCManager.isEnabled = false;

            if (RPCManager.client.IsInitialized)
            {
                RPCManager.client.Dispose();
            }
        }

        private void RPCToggle_Checked(object sender, RoutedEventArgs e)
        {
            enablerpc();
        }

        private void RPCToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            shutdownrpc();
        }

        // Emulator Mode
        private void ToggleEmuMode_Checked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= ExecuteButton_Click;
            ExecuteButton.Click += HookExecute;
            ConfigHandler.emulator_mode = true;
            ConfigHandler.SetConfigValue("emulator_mode", true);
        }

        private void ToggleEmuMode_Unchecked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= HookExecute;
            ExecuteButton.Click += ExecuteButton_Click;
            ConfigHandler.emulator_mode = false;
            ConfigHandler.SetConfigValue("emulator_mode", false);
        }

        private void HelpEmulator_Click(object sender, RoutedEventArgs e)
        {
            Process.Start("https://docs.lexploits.top/docs/usage#emulator-mode");
        }

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
                        CustomCw.Cw($"LInjector couldn't run the script.\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("LInjector couldn't run the script.", "LInjector",
                        MessageBoxButtons.OK, MessageBoxIcon.Error);
                    CustomCw.Cw($"(Module) Exception thrown\n{ex.Message}\nStack Trace:\n{ex.StackTrace}", false, "error");
                }
            }
            catch
            {
                _ = Notifications.Fire(StatusListBox, "Unknown error.", NotificationLabel);
            }
        }

        #endregion
    }

}