using Dsafa.WpfColorPicker;
using LInjector.Classes;
using LInjector.WPF.Classes;
using Microsoft.WindowsAPICodePack.Dialogs;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
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

        /// <summary>
        /// Ignores
        /// </summary>
        Action Nothing = () => { };

        #endregion

        #region Window
        public MainWindow()
        {
            InitializeComponent();

            // RunAutoAttachTime
            // The function no longer works, this was used to interact with
            //  the DLL Interface and listen
            //  when THE GAME process was launched and then check if
            //  ConfigHandler.autoattach was enabled.
            //
            // RunAutoAttachTimer();
        }

        private async void Window_Loaded(object sender, RoutedEventArgs e)
        {

            try
            {
                // await Updater.CheckForUpdates
                // Fetches a JSON from any content delivery network, reads the
                // content of it which are file hashes, if the
                // local file hashes mismatch, the application downloads the
                // latest files provided in the JSON.

                await Updater.CheckForUpdates();

            }
            catch (Exception ex)
            {
                // If some of the commands above spit an Error, a MessageBox will show.

                await Notifications.Fire(ex.Message);
            }

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
            RegisterHotKeys();

            // Converts the MainWindow ListBox to a Static Item, this is used to easy-call the item
            // because it is needed from other sources.
            IntConsole.GetListBox = this.ConsoleLogList;
            Notifications.InitVars(StatusListBox, NotificationLabel);
            IntConsole.Log("Loaded");
            await Notifications.Fire("Welcome to LInjector");

            // await ws.Start
            // Starts a WebSocket used to run simple LInjector functions, such as Log, rconsole, etc.

            await ws.Start();
        }

        // Very useless function but it's interesting

        DispatcherTimer TitleTimer = new DispatcherTimer();

        private void TitleBarLabel_Loaded(object sender, RoutedEventArgs e)
        {
            int seconds = 120;

            TitleTimer.Interval = TimeSpan.FromSeconds(seconds);
            TitleTimer.Tick += randomizeTitleEvent;
            TitleTimer.Start();
        }

        private void randomizeTitleEvent(object sender, EventArgs e) => randomizeTitle();

        // ---------------------------- ATTENTION -------------------------------
        // ----------------------------------------------------------------------
        // THIS FUNCTION IS JUST A JOKE, IT'S NOT TO PRETEND TO BE OTHER PROGRAMS
        // ----------------------------------------------------------------------
        private async void randomizeTitle()
        {
            string[] ArrayTitles = {
                Files.ApplicationName,
                "x64dbg",
                "IDA Freeware",
                "HxD Editor",
                "Cheat Engine 7.5",
                "IDA Pro",
                "Ghidra",
                "Radare2",
                "Binary Ninja",
                "ReClass.NET",
                "WinDbg",
                "PE Tools",
                "PE Explorer",
                "Dumping in Progress..."
            };

            Random random = new Random();
            int randomIndex = random.Next(0, ArrayTitles.Length);
            string randomTitle = ArrayTitles[randomIndex];

            await Notifications.AnimateObjectContentAsync(TitleBarLabel, randomTitle);
        }

        private void DragWindow(object sender, MouseButtonEventArgs e)
        {
            try
            {
                DragMove();
            }
            catch { }
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
                new DoubleAnimation
                {
                    From = 1,
                    To = 0,
                    Duration = TimeSpan.FromSeconds(0.10)
                };
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
        private void AttachButton_Click(object sender, RoutedEventArgs e) => DLLInterface.Inject();

        private void ConsoleDebugButton_Click(object sender, RoutedEventArgs e) =>
            ConsoleManager.ToggleConsoleVisibility();

        private async void ScriptPage_Click(object sender, RoutedEventArgs e) => await Notifications.Fire("Not implemented");

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
            try
            {
                // Get the current Monaco Editor instance
                var cm = TabSystemz.current_monaco();

                // Get the script text from the Monaco Editor instance
                string scriptString = await cm.GetText();

                try
                {
                    // Check if Fluxus is not injected
                    var flag = !DLLInterface.IsAttached();
                    if (!flag)
                    {
                        // Run the script if Injected
                        DLLInterface.RunScript(scriptString);
                    }
                    else
                    {
                        // Inject the process and then run the script
                        DLLInterface.Inject();
                        await Task.Delay(500); // Task.Delay to ensure proper injection (bad practice)
                        DLLInterface.RunScript(scriptString);
                    }
                }
                catch (Exception ex)
                {
                    // Handle Exploit Interfacing exception.
                    FunctionWatch.clipboardSetText($"Message: {ex.Message}\nStack Trace: {ex.StackTrace}");
                    await Notifications.Fire("Exception pasted to Clipboard");
                }
            }
            catch
            {
                // Handle anything
                await Notifications.Fire("Unknown error.");
            }
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

            var processesByName = Process.GetProcessesByName("RobloxPlayerBeta");
            foreach (var process in processesByName)
            {
                try
                {
                    var filePath = process.MainModule.FileName;

                    if (DLLInterface.IsAttached())
                    {
                        return;
                    }
                    DLLInterface.Inject();
                }
                catch (Exception ex)
                {
                    IntConsole.Log(ex.Message);
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
                                    (selectedItem != null ? selectedItem.ToString() :
                                        (string)null)));
                        }
                    }
                }
                else
                {
                    string scriptfolder = ScriptListPath;
                    object selectedItem = this.ScriptListHolder.SelectedItem;
                    TabSystemz.add_tab_with_text(
                        File.ReadAllText(scriptfolder + "\\" +
                            (selectedItem != null ? selectedItem.ToString() :
                                (string)null)),
                        selectedItem.ToString());
                }
            }
            catch { }
        }

        #endregion

        #region Open and Save File

        public void RegisterHotKeys()
        {
            CommandBinding SaveFile_BINDING = new CommandBinding(ApplicationCommands.Save,
                (sender, e) => Show_SaveToFileDialog(),
                (sender, e) => e.CanExecute = true);
            this.CommandBindings.Add(SaveFile_BINDING);

            CommandBinding OpenFile_BINDING = new CommandBinding(ApplicationCommands.Open,
                (sender, e) => Show_OpenFileDialog(),
                (sender, e) => e.CanExecute = true);
            this.CommandBindings.Add(OpenFile_BINDING);

            this.InputBindings.Add(new KeyBinding(ApplicationCommands.Save, new KeyGesture(Key.S, ModifierKeys.Control)));
            this.InputBindings.Add(new KeyBinding(ApplicationCommands.Open, new KeyGesture(Key.O, ModifierKeys.Control)));
        }

        public async void Show_SaveToFileDialog()
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

        public async void Show_OpenFileDialog()
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

                if (Directory.Exists(ScriptListPath))
                    openFileDialog.InitialDirectory = ScriptListPath;

                if (openFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string fileContent = File.ReadAllText(openFileDialog.FileName);

                    var dialogResult = System.Windows.Forms.MessageBox.Show(
                        "Open file in new tab?", Files.ApplicationName, MessageBoxButtons.YesNo,
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
        /// Button to open a file and load it into the current Monaco Editor instance.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void OpenFileButton_Click(object sender, RoutedEventArgs e) => Show_OpenFileDialog();

        /// <summary>
        /// Button to save the current Monaco Editor instance content into a file.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SaveToFileButton_Click(object sender, RoutedEventArgs e) => Show_SaveToFileDialog();

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
            SetToggle(HideBottomConsole, ConfigHandler.hide_internalconsole);
            if (ConfigHandler.hide_internalconsole)
            {
                SetToggle(HideBottomConsole, ConfigHandler.hide_scriptlist);
                InternalConsole.Visibility = Visibility.Collapsed;
                LaPeopleII.Height = new GridLength(5, GridUnitType.Star);
            }
            if (ConfigHandler.hide_scriptlist)
            {
                LEFTOpenFileButton.Visibility = Visibility.Visible;
                LEFTSaveFileButton.Visibility = Visibility.Visible;

                SetToggle(HideScriptListAndIO, ConfigHandler.hide_scriptlist);
                ScriptListForMastersMZ.Visibility = Visibility.Collapsed;
                ScriptListAndSaveCDef.Width = new GridLength(0, GridUnitType.Star);
            }
            SetToggle(ToggleWebSocketMode, ConfigHandler.websocket_mode);
            ParseMyThemeSelectors();
        }

        /// <summary>
        /// Easy set for a Toggle Button
        /// </summary>
        /// <param name="toggle"></param>
        /// <param name="value"></param>
        private void SetToggle(System.Windows.Controls.Primitives.ToggleButton toggle, bool value) => toggle.IsChecked = value;

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

        private void HideScriptListAndIO_Checked(object sender, RoutedEventArgs e)
        {

            ConfigHandler.SetConfigValue("hide_scriptlist", true);
            ConfigHandler.hide_scriptlist = true;

            ScriptListForMastersMZ.Visibility = Visibility.Collapsed;
            ScriptListAndSaveCDef.Width = new GridLength(0, GridUnitType.Star);

            LEFTOpenFileButton.Visibility = Visibility.Visible;
            LEFTSaveFileButton.Visibility = Visibility.Visible;
        }

        private void HideScriptListAndIO_Unchecked(object sender, RoutedEventArgs e)
        {
            LEFTOpenFileButton.Visibility = Visibility.Collapsed;
            LEFTSaveFileButton.Visibility = Visibility.Collapsed;

            ConfigHandler.SetConfigValue("hide_scriptlist", false);
            ConfigHandler.hide_scriptlist = false;

            ScriptListForMastersMZ.Visibility = Visibility.Visible;
            ScriptListAndSaveCDef.Width = new GridLength(119, GridUnitType.Star);
        }

        private void HideBottomConsole_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("hide_internalconsole", true);
            ConfigHandler.hide_internalconsole = true;
            InternalConsole.Visibility = Visibility.Collapsed;
            LaPeopleII.Height = new GridLength(5, GridUnitType.Star);
        }

        private void HideBottomConsole_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("hide_internalconsole", false);
            ConfigHandler.hide_internalconsole = false;
            InternalConsole.Visibility = Visibility.Visible;
            LaPeopleII.Height = new GridLength(89, GridUnitType.Star);
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
                    MessageBox.Show("LInjector couldn't run the script.", Files.ApplicationName,
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
            dialog.WindowStartupLocation = WindowStartupLocation.CenterScreen;
            var result = dialog.ShowDialog();
            dialog.Topmost = true;

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
            Resources[PrimaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()] = ParseColor(Themes.GetColor("Text"));
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

            Resources[PrimaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()] = ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()] = ParseColor(Themes.GetColor("Text"));
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
                    $"aRGB must be 8 characters, got {srgb} : {srgb.Length}", nameof(srgb));
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