#if DEBUG
    if (DesignerProperties.GetIsInDesignMode(new DependencyObject())) return;
#endif

using Dsafa.WpfColorPicker;
using LInjector.Classes;
using LInjector.WPF.Classes;
using Microsoft.WindowsAPICodePack.Dialogs;
using System;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Threading;
using Button = System.Windows.Controls.Button;
using MessageBox = System.Windows.Forms.MessageBox;
using Path = System.IO.Path;
using UserControl = System.Windows.Controls.UserControl;

namespace LInjector.Pages
{
    /// <summary>
    /// Interaction logic for MainView.xaml
    /// </summary>
    public partial class MainView : UserControl
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

        public bool IsSettingsShown = false;
        public bool IsScriptsShown = false;
        public bool IsInfoShown = false;

        internal string ScriptListPath = Path.Combine(Files.exeDirectory, "scripts");

        public WebComs ws = new WebComs();

        /// <summary>
        /// Ignores
        /// </summary>
        Action Nothing = () => { };

        #endregion

        #region Window
        public MainView()
        {
            InitializeComponent();


            // RunAutoAttachTimer
            // The function no longer works, this was used to interact with
            //  the DLL Interface and listen
            //  when THE GAME process was launched and then check if
            //  ConfigHandler.autoattach was enabled.
            //
            RunAutoAttachTimer();
        }

        private void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            BeginAttachDetection();
        }

        // Very useless function but it's interesting

        DispatcherTimer TitleTimer = new DispatcherTimer();
        DispatcherTimer bozoTimer = new DispatcherTimer();

        public void BeginAttachDetection()
        {
            bozoTimer.Interval = TimeSpan.FromSeconds(1);
            bozoTimer.Tick += bozoTick;
            bozoTimer.Start();
        }

        public void bozoTick(object sender, EventArgs e)
        {
            if (DesignerProperties.GetIsInDesignMode(this)) return;

            bool isAttached = DLLInterface.IsAttached();

            AnimateColor(HarderBetterFasterStronger, ConsoleControl.ParseColor(isAttached ? "#FF7B68EE" : "#FF000000").Color);
            AnimateBlur(HarderBetterFasterStronger, isAttached ? 30 : 15);
        }

        public void TitleBarLabel_Loaded(object sender, RoutedEventArgs e)
        {
            if (DesignerProperties.GetIsInDesignMode(this)) { return; }

            int seconds = 60;

            TitleTimer.Interval = TimeSpan.FromSeconds(seconds);
            TitleTimer.Tick += randomizeTitleEvent;
            TitleTimer.Start();
        }

        public void randomizeTitleEvent(object sender, EventArgs e) => randomizeTitle();

        // ---------------------------- ATTENTION -------------------------------
        // ----------------------------------------------------------------------
        // THIS FUNCTION IS JUST A JOKE, IT'S NOT TO PRETEND TO BE OTHER PROGRAMS
        // ----------------------------------------------------------------------
        public async void randomizeTitle()
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

        public void DragWindow(object sender, MouseButtonEventArgs e)
        {
            try
            {
                Shared.mainWindow.DragMove();
            }
            catch { }
        }

        /// <summary>
        /// When the "outro" fadeout completes, the application does it normal shutdown.
        /// </summary>
        public void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            Shared.mainWindow.Close();
            System.Windows.Application.Current.Shutdown();
        }
        #endregion

        #region Button Functions

        /// <summary>
        /// Simple function for ExitButton.
        /// </summary>
        public async void ExitButton_Click(object sender, RoutedEventArgs e)
        {
            SaveTabs();

            // Useful to make GAME clients don't crash when the WebSocket shutdowns, so they receive
            // a message before the WebSocket Server shutdowns.
            await ws.SendMessage("LINJECTOR_DISCONNECT");

            // Had to do this because UserControls in WPF are sus they act like an overlayed Window.
            TabSystem__.Visibility = Visibility.Hidden;

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

        public void MaximizeButton_Click(object sender, RoutedEventArgs e)
        {
            Shared.mainWindow.WindowState = (Shared.mainWindow.WindowState == WindowState.Maximized) ? WindowState.Normal : WindowState.Maximized;
            MaximizeButton.Content = (Shared.mainWindow.WindowState == WindowState.Maximized) ? "\xE923" : "\xE922";
        }

        public void MinimizeButton_Click(object sender,
            RoutedEventArgs e) => Shared.mainWindow.WindowState = WindowState.Minimized;

        /// <summary>
        /// Attach and Inject are the same, this was used to load LInjector into the GAME.
        /// </summary>
        public async void AttachButton_Click(object sender, RoutedEventArgs e) => await DLLInterface.Inject();

        public void ConsoleDebugButton_Click(object sender, RoutedEventArgs e) =>
            ConsoleManager.ToggleConsoleVisibility();

        public async void ScriptPage_Click(object sender, RoutedEventArgs e) => await Notifications.Fire("Not implemented");

        /// <summary>
        /// Toggles the Settings Grid
        /// </summary>
        public void SettingsButton_Click(object sender, RoutedEventArgs e)
        {
            IsSettingsShown = !IsSettingsShown;
            TabSystem__.Visibility = IsSettingsShown ? Visibility.Collapsed : Visibility.Visible;
            SettingsGrid.Visibility = IsSettingsShown ? Visibility.Visible : Visibility.Collapsed;
        }

        /// <summary>
        /// Was used to execute the scripts into the GAME, no longer working.
        /// This is bozo code, you're free to judge me.
        /// </summary>
        public async void ExecuteButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Get the current Monaco Editor instance
                var cm = TabSystem__.current_monaco();

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
                        await DLLInterface.Inject();
                        await Task.Delay(500);
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

        /// <summary>
        /// Clears the Text Editor
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ClearButton_Click(object sender, RoutedEventArgs e) => TabSystem__.Clear_Editor(null, null);

        public long ApplicationModel()
        {
            long x = 0x457863656c;
            long y = 0x446570736f;

            return x + y;
        }

        // Self-credits
        public void GitHubButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start($"https://github.com/{Files.AccountName}/LInjector");
        }

        public void DiscordButton_Click(object sender, RoutedEventArgs e)
        {
            Process.Start("https://discord.gg/NQY28YSVAb");
        }

        public void InfoButton_Click(object sender, RoutedEventArgs e) => ToggleInfo();

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
        public async void SaveTabs()
        {
            if (ConfigHandler.save_tabs == false)
            {
                return;
            }

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                var GetTextzzzz = await (item.Content as monaco_api).GetText();
                if (GetTextzzzz.Length > 1)
                {
                    File.WriteAllText($"{Files.SavedTabsPath}\\{item.Header.ToString()}",
                        GetTextzzzz.ToString());
                }
            }
        }

        /// <summary>
        /// Reads the files stored in Resources\savedtabs and loads it into the Tab System (Editor)
        /// UserControl.
        /// </summary>
        public void LoadSavedTabs()
        {
            if (ConfigHandler.save_tabs == false)
            {
                return;
            }

            foreach (string file in Directory.EnumerateFiles(Files.SavedTabsPath))
            {
                TabSystem__.add_tab_with_text(File.ReadAllText(file), Path.GetFileName(file));
            }

            DeleteSavedTabs();
        }

        /// <summary>
        /// Called when the <see cref="LoadSavedTabs"/> finish to load, so we can delete the old
        /// files and wait for new tabs.
        /// </summary>
        public void DeleteSavedTabs()
        {
            foreach (var item in Directory.EnumerateFiles(Files.SavedTabsPath))
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
            timer.Interval = TimeSpan.FromSeconds(1);
            timer.Start();
        }

        internal async void AttachedDetectorTick(object sender, EventArgs e)
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
                    await DLLInterface.Inject();
                }
                catch (Exception ex)
                {
                    ConsoleControl.Log(ex.Message);
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
        public void SearchScriptsBox_TextChanged(object sender,
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
        public void ScriptListHolder_Loaded(object sender, RoutedEventArgs e)
        {
            if (Directory.Exists(ScriptListPath))
            {
                DirectoryInfo ScriptsFolder = new DirectoryInfo(ScriptListPath);
                FileInfo[] Files = ScriptsFolder.GetFiles("*.*");
                foreach (FileInfo Script in Files)
                {
                    ScriptListHolder.Items.Add(Script.Name);
                }
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
        public void SearchScriptsBox_SelectionChanged(object sender, RoutedEventArgs e)
        {
            try
            {
                if (TabSystem__.maintabs.Items.Count != 0)
                {
                    if (this.ScriptListHolder.SelectedIndex != -1)
                    {
                        string scriptfolder = ScriptListPath;
                        object selectedItem = this.ScriptListHolder.SelectedItem;
                        if (this.ScriptListHolder.Items.Count != 0)
                        {
                            TabSystem__.ChangeCurrentTabTitle(selectedItem.ToString());
                            TabSystem__.current_monaco().SetText(
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
                    TabSystem__.add_tab_with_text(
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
                FileName = await TabSystem__.GetCurrentTabTitle(),
                Title = "Save to File | LInjector",
                Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
            };

            if (saveFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                string filePath = saveFileDialog.FileName;

                try
                {
                    var cm = TabSystem__.current_monaco();
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
                            TabSystem__.ChangeCurrentTabTitle(savedFileName);
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
                        TabSystem__.add_tab_with_text(fileContent, openFileDialog.SafeFileName);
                    }
                    else
                    {
                        TabSystem__.current_monaco().SetText(fileContent);
                        TabSystem__.ChangeCurrentTabTitle(openFileDialog.SafeFileName);
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
        public void OpenFileButton_Click(object sender, RoutedEventArgs e) => Show_OpenFileDialog();

        /// <summary>
        /// Button to save the current Monaco Editor instance content into a file.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        public void SaveToFileButton_Click(object sender, RoutedEventArgs e) => Show_SaveToFileDialog();

        #endregion

        #region Settings

        /// <summary>
        /// Opens a Folder File Dialog to select the folder in the File Explorer
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        public void ChangeScriptsFolder_Click(object sender, RoutedEventArgs e)
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
            SetToggle(ShowMonacoToggle, ConfigHandler.monaco_minimap_default);
            SetToggle(BlurCodeEditor, ConfigHandler.monaco_blured);
            foreach (string theme in new[] { "li-dark", "vs-dark", "vs-light" })
            {
                ComboBoxItem comboBoxItem = new ComboBoxItem() { Content = theme };

                if (theme == ConfigHandler.monaco_theme)
                    comboBoxItem.IsSelected = true;

                ComboBoxTheme.Items.Add(comboBoxItem);
            }

            ParseMyThemeSelectors();
        }

        /// <summary>
        /// Easy set for a Toggle Button
        /// </summary>
        /// <param name="toggle"></param>
        /// <param name="value"></param>
        public void SetToggle(System.Windows.Controls.Primitives.ToggleButton toggle, bool value) => toggle.IsChecked = value;

        // AUTO ATTACH TOGGLE

        public void AutoAttachToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.autoattach = true;
            ConfigHandler.SetConfigValue("autoattach", true);
        }

        public void AutoAttachToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.autoattach = false;
            ConfigHandler.SetConfigValue("autoattach", false);
        }

        // SPLASH SCREEN TOGGLE

        public void SplashToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.splashscreen = true;
            ConfigHandler.SetConfigValue("splashscreen", true);
        }

        public void SplashToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.splashscreen = false;
            ConfigHandler.SetConfigValue("splashscreen", false);
        }

        // DEBUG MODE TOGGLE

        public void DebugModeToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.debug = true;
            ConsoleManager.ShowConsole();
            ConfigHandler.SetConfigValue("debug", true);
        }

        public void DebugModeToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.debug = false;
            ConsoleManager.HideConsole();
            ConfigHandler.SetConfigValue("debug", false);
        }

        // RPC Toggle

        /// <summary>
        /// Enables the Discord RPC for the LInjector Client.
        /// </summary>
        public void enablerpc()
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
        public void shutdownrpc()
        {
            ConfigHandler.SetConfigValue("discord_rpc", false);
            ConfigHandler.discord_rpc = false;
            RPCManager.isEnabled = false;

            if (RPCManager.client.IsInitialized)
            {
                RPCManager.TerminateConnection();
            }
        }

        public void RPCToggle_Checked(object sender, RoutedEventArgs e) => enablerpc();

        public void RPCToggle_Unchecked(object sender, RoutedEventArgs e) => shutdownrpc();

        // WebSocket Mode
        public void ToggleWebSocketMode_Checked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= ExecuteButton_Click;
            ExecuteButton.Click += HookExecute;
            ConfigHandler.websocket_mode = true;
            ConfigHandler.SetConfigValue("websocket_mode", true);
        }

        public void ToggleWebSocketMode_Unchecked(object sender, RoutedEventArgs e)
        {
            ExecuteButton.Click -= HookExecute;
            ExecuteButton.Click += ExecuteButton_Click;
            ConfigHandler.websocket_mode = false;
            ConfigHandler.SetConfigValue("websocket_mode", false);
        }

        public void HelpWebSocket_Click(object sender, RoutedEventArgs e) =>
            Process.Start("https://docs.lexploits.top/docs/usage#websocket-mode");

        // Top Most
        public void TopmostToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("topmost", true);
            ConfigHandler.topmost = true;
            Shared.mainWindow.Topmost = true;
        }

        public void TopmostToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("topmost", false);
            ConfigHandler.topmost = false;
            Shared.mainWindow.Topmost = false;
        }

        // SAVE TABS TOGGLE
        public void SaveTabsToggle_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("save_tabs", true);
            ConfigHandler.save_tabs = true;
        }

        public void SaveTabsToggle_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("save_tabs", false);
            ConfigHandler.save_tabs = false;
        }

        public void HideScriptListAndIO_Checked(object sender, RoutedEventArgs e)
        {

            ConfigHandler.SetConfigValue("hide_scriptlist", true);
            ConfigHandler.hide_scriptlist = true;

            ScriptListForMastersMZ.Visibility = Visibility.Collapsed;
            ScriptListAndSaveCDef.Width = new GridLength(0, GridUnitType.Star);

            LEFTOpenFileButton.Visibility = Visibility.Visible;
            LEFTSaveFileButton.Visibility = Visibility.Visible;
        }

        public void HideScriptListAndIO_Unchecked(object sender, RoutedEventArgs e)
        {
            LEFTOpenFileButton.Visibility = Visibility.Collapsed;
            LEFTSaveFileButton.Visibility = Visibility.Collapsed;

            ConfigHandler.SetConfigValue("hide_scriptlist", false);
            ConfigHandler.hide_scriptlist = false;

            ScriptListForMastersMZ.Visibility = Visibility.Visible;
            ScriptListAndSaveCDef.Width = new GridLength(119, GridUnitType.Star);
        }

        public void HideBottomConsole_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("hide_internalconsole", true);
            ConfigHandler.hide_internalconsole = true;
            InternalConsole.Visibility = Visibility.Collapsed;
            LaPeopleII.Height = new GridLength(5, GridUnitType.Star);
        }

        public void HideBottomConsole_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("hide_internalconsole", false);
            ConfigHandler.hide_internalconsole = false;
            InternalConsole.Visibility = Visibility.Visible;
            LaPeopleII.Height = new GridLength(89, GridUnitType.Star);
        }

        public void ShowMonaco_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("monaco_minimap_default", true);
            ConfigHandler.monaco_minimap_default = true;

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                monaco_api TabInstance = item.Content as monaco_api;
                TabInstance.enable_minimap();
            }
        }

        public void ShowMonaco_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("monaco_minimap_default", false);
            ConfigHandler.monaco_minimap_default = false;

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                monaco_api TabInstance = item.Content as monaco_api;
                TabInstance.disable_minimap();
            }
        }

        private void ComboBoxTheme_DropDownClosed(object sender, EventArgs e)
        {
            ConfigHandler.SetConfigValue("monaco_theme", ComboBoxTheme.Text);
            ConfigHandler.monaco_theme = ComboBoxTheme.Text;

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                monaco_api TabInstance = item.Content as monaco_api;
                TabInstance.SetTheme($"\"{ConfigHandler.monaco_theme}\"");
            }

            // MessageBox.Show($"{ConfigHandler.monaco_theme}\n{ComboBoxTheme.Text}\n");
        }


        /// <summary>
        /// Changes the Execute function to make it compatible when the WebSocket server starts.
        /// </summary>
        public async void HookExecute(object sender, RoutedEventArgs e)
        {
            try
            {
                var cm = TabSystem__.current_monaco();
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

        private void BlurCodeEditor_Checked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("monaco_blured", true);
            ConfigHandler.monaco_blured = true;

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                monaco_api TabInstance = item.Content as monaco_api;
                TabInstance.EnableBlur();
            }
        }

        private void BlurCodeEditor_Unchecked(object sender, RoutedEventArgs e)
        {
            ConfigHandler.SetConfigValue("monaco_blured", false);
            ConfigHandler.monaco_blured = false;

            foreach (TabItem item in TabSystem__.maintabs.Items)
            {
                monaco_api TabInstance = item.Content as monaco_api;
                TabInstance.DisableBlur();
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
        public void ColorChanged(object sender,
            RoutedEventArgs e) => HandleColorChange((Button)sender);

        /// <summary>
        /// Handles the color change operation for the specified button.
        /// Opens a color picker dialog to select a new color.
        /// Updates the button's background color and saves the color information to the
        /// application's theme.
        /// </summary>
        /// <param name="button">The button for which the color change is being handled.</param>
        public void HandleColorChange(Button button)
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
        public void ParseMyTheme()
        {
            Resources[PrimaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("Text"));
        }

        /// <summary>
        /// Set the background of the Interactuable Buttons that the user uses to match the color in
        /// Registry Had to do it since WPF is not an Immediate Mode GUI
        /// </summary>
        public void ParseMyThemeSelectors()
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
        public void SetControlBackground(FrameworkElement control, string colorKey)
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
        public void ResetTheme_Click(object sender, RoutedEventArgs e)
        {
            CreateFiles.ResetTheme();
            ParseMyThemeSelectors();

            Resources[PrimaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("PrimaryColor"));
            Resources[SecondaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryColor"));
            Resources[TertiaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("TertiaryColor"));
            Resources[Text.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("Text"));
        }

        public void AnimateColor(DropShadowEffect element, Color final, double duration = 1)
        {
            var currentColor = element.Color;
            if (currentColor.Equals(final)) return;


            var colorAnim = new ColorAnimation
            {
                From = currentColor,
                To = final,
                Duration = new Duration(TimeSpan.FromSeconds(duration)),
                FillBehavior = FillBehavior.HoldEnd
            };

            element.BeginAnimation(DropShadowEffect.ColorProperty, colorAnim);

        }


        public void AnimateBlur(DropShadowEffect element, double target, double duration = 1)
        {
            if (Math.Abs(target - element.BlurRadius) < 0.01) return;

            var blurRadiusAnim = new DoubleAnimation
            {
                To = target,
                Duration = new Duration(TimeSpan.FromSeconds(duration)),
                FillBehavior = FillBehavior.HoldEnd
            };

            element.BeginAnimation(DropShadowEffect.BlurRadiusProperty, blurRadiusAnim);
        }


        #endregion
    }

}
