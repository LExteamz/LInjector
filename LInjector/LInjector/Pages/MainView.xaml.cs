using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Threading;
using Dsafa.WpfColorPicker;
using LInjector.Classes;
using LInjector.Pages.Elements;
using LInjector.Windows;
using Microsoft.WindowsAPICodePack.Dialogs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Application = System.Windows.Application;
using Button = System.Windows.Controls.Button;
using Color = System.Windows.Media.Color;
using File = System.IO.File;

namespace LInjector.Pages
{
    /// <summary>
    /// Interaction logic for MainView.xaml
    /// </summary>
    public partial class MainView
    {
        public MainView()
        {
            InitializeComponent();
        }

        public static IEnumerable<T> FindVisualChildren<T>(DependencyObject depObj) where T : DependencyObject
        {
            if (depObj != null)
            {
                for (int i = 0; i < VisualTreeHelper.GetChildrenCount(depObj); i++)
                {
                    DependencyObject child = VisualTreeHelper.GetChild(depObj, i);
                    if (child != null && child is T)
                    {
                        yield return (T)child;
                    }

                    foreach (T childOfChild in FindVisualChildren<T>(child!))
                    {
                        yield return childOfChild;
                    }
                }
            }
        }

        private void PlayRandomSound(object sender, RoutedEventArgs e)
        {
            int rand = new Random().Next(1, Splash.soundEvents.Length);
            string RandomEvent = Splash.soundEvents[rand];

            StartupHandler.PlayStartupSound(RandomEvent);
        }


        private void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            Section_Settings.Visibility = Visibility.Hidden;
            Section_Editor.Visibility = Visibility.Hidden;

            TitleBarLabel.Content = $"{Strings.Get("AppName")}";

            TabSystem_.Visibility = Visibility.Visible;
            TabSystem_.IsEnabled = true;

            ParseMyTheme();
            ParseConfig();
            ParseMyThemeSelectors();

            NavigationGridClick(Editor, e);

            ScriptContext.EnsureFunctionsFile();
            ScriptContext.BeginFunctionTick();
            BeginAttachDetection();

            if (DateTime.Now.Month == 4 && DateTime.Now.Day == 1) // April 1st
            {
                foreach (var button in FindVisualChildren<Button>(this))
                {
                    button.Click += PlayRandomSound;
                }
            }
        }

        public void ApplyConfig(object sender, RoutedEventArgs e)
        {
            // Top Most
            Shared.mainWindow!.Topmost = (bool)(SettingsWrapper.Read("top_most"));

            // Show Script List
            Shared.mainView!.ScriptListDimensions.Width = ((bool)SettingsWrapper.Read("show_scriptlist")) ? new GridLength(140) : new GridLength(0, GridUnitType.Star);

            // Show Logs
            Shared.mainView.LInjectorConsoleDimensions.Height = ((bool)SettingsWrapper.Read("show_internalconsole")) ? new GridLength(100, GridUnitType.Star) : new GridLength(0.001);

            // Auto Attach
            RunAutoAttachTimer();

            // Discord RPC
            BeginDiscordRPC();

            // Editor
            bool isBlurred = SettingsWrapper.Read("editor_blurred") == true;
            bool showMinimap = SettingsWrapper.Read("show_minimap") == true;
            foreach (TabItem item in TabSystem_.maintabs.Items)
            {
                MonacoApi TabInstance = (item.Content as MonacoApi)!;

                // Theme
                TabInstance.SetTheme($"\"{(SettingsWrapper.Read("monaco_theme")!.ToObject<string[]>())[0]}\"");

                if (isBlurred)
                    TabInstance.EnableBlur();
                else
                    TabInstance.DisableBlur();

                if (showMinimap)
                    TabInstance.EnableMinimap();
                else
                    TabInstance.DisableMinimap();
            }
        }

        private void ParseConfig()
        {
            var configInitElement = SettingsWrapper.Read("app_init");

            if (configInitElement == false)
            {
                SettingsWrapper.SetDefaultConfig();
                SettingsWrapper.Write("app_init", true);
            }

            Factory factory = new Factory(SettingsItemsHolder);
            var config = JsonConvert.DeserializeObject<Dictionary<string, JToken>>(File.ReadAllText(SettingsWrapper._configFilePath));

            foreach (var x in config!)
            {
                switch (SettingsWrapper.Read(x.Key))
                {
                    case JValue boolValue when boolValue.Type == JTokenType.Boolean:
                        factory.CreateCheckboxOption((Action<bool>)((x) => { }), boolValue.ToObject<bool>(), x.Key);
                        break;

                    case JValue stringValue when stringValue.Type == JTokenType.String:
                        factory.CreateTextFieldOption((Action<string>)((x) => { }), stringValue.ToString(), false, x.Key);
                        break;

                    case JArray stringArray:
                        var array = (stringArray.ToObject<string[]>())!.ToArray();
                        factory.CreateDropdownOption((Action<string[]>)((x) => { }), array, new[] { "", "", "" }, x.Key);
                        break;

                    case JValue numericValue when numericValue.Type == JTokenType.Integer || numericValue.Type == JTokenType.Float:
                        factory.CreateTextFieldOption((Action<string>)((x) => { }), numericValue.ToString(), true, x.Key);
                        break;

                    default:
                        break;
                }
            }

            VersionPlaceHolderCredits.Text = $"{Strings.Get("AppName")} {Strings.Get("AppVersion")}";

            ApplyConfig(null!, null!);
        }

        DispatcherTimer TitleTimer = new DispatcherTimer();
        DispatcherTimer bozoTimer = new DispatcherTimer();
        DispatcherTimer Discordtimer = new DispatcherTimer(DispatcherPriority.Background);

        public void BeginDiscordRPC()
        {
            Discordtimer.Interval = TimeSpan.FromSeconds(5);
            Discordtimer.Tick += DiscordRPCTick!;
            Discordtimer.Start();

        }
        internal void DiscordRPCTick(object sender, EventArgs e)
        {
            if (SettingsWrapper.Read("discord_rpc") == true)
            {
                RPCManager.isEnabled = true;
                if (!RPCManager.client!.IsInitialized)
                    RPCManager.InitRPC();
            }
            else
            {
                RPCManager.isEnabled = false;
                if (RPCManager.client!.IsInitialized)
                    RPCManager.TerminateConnection();
            }
        }

        public void BeginAttachDetection()
        {
            DLLInterface.vApi.StartCommunication();

            bozoTimer.Interval = TimeSpan.FromSeconds(1);
            bozoTimer.Tick += bozoTick!;
            bozoTimer.Start();
        }

        public void RunAutoAttachTimer()
        {
            DispatcherTimer timer = new DispatcherTimer();
            timer.Tick += AttachedDetectorTick!;
            timer.Interval = TimeSpan.FromSeconds(1);
            timer.Start();
        }

        internal void AttachedDetectorTick(object sender, EventArgs e)
        {
            if (SettingsWrapper.Read("auto_attach") == false) return;

            var processesByName = Process.GetProcessesByName("RobloxPlayerBeta");
            foreach (var process in processesByName)
            {
                try
                {
                    var filePath = process.MainModule!.FileName;

                    if (DLLInterface.IsAttached())
                        return;

                    DLLInterface.Inject();
                }
                catch (Exception ex)
                {
                    ConsoleControl.Log(ex.Message);
                }
            }
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

        public void bozoTick(object sender, EventArgs e)
        {
            if (DesignerProperties.GetIsInDesignMode(this)) return;

            bool isAttached = DLLInterface.IsAttached() /* || Shared.ws.GetDevicesConnected() > 0 */;

            AnimateColor(HarderBetterFasterStronger, ConsoleControl.ParseColor(isAttached ? "#FF7B68EE" : "#FF000000").Color);
            AnimateBlur(HarderBetterFasterStronger, isAttached ? 30 : 15);
        }

        public void TitleBarLabel_Loaded(object sender, RoutedEventArgs e)
        {
            if (DesignerProperties.GetIsInDesignMode(this)) { return; }

            int seconds = new Random().Next(45, 60);

            TitleTimer.Interval = TimeSpan.FromSeconds(seconds);
            TitleTimer.Tick += randomizeTitleEvent!;
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
                "LInjector",
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

            await Logs.AnimateObjectContentAsync(TitleBarLabel, randomTitle);
        }

        private void DragWnd(object sender, MouseButtonEventArgs e) => Shared.DragWnd();

        private void TabSystem__Loaded(object sender, RoutedEventArgs e) => LoadSavedTabs();

        private async Task SaveTabs()
        {
            if (SettingsWrapper.Read("save_tabs") == true)
            {
                foreach (TabItem item in TabSystem_.maintabs.Items)
                {
                    var Text = await (item.Content as MonacoApi)!.GetText();
                    if (!string.IsNullOrEmpty(Text))
                        if (!Directory.Exists(Strings.Get("Saved")))
                            Directory.CreateDirectory(Strings.Get("Saved"));

                    File.WriteAllText($"{Strings.Get("Saved")}\\{item.Header.ToString()}", Text);
                }
            }
        }

        public void LoadSavedTabs()
        {
            if (SettingsWrapper.Read("save_tabs") == false)
                return;

            foreach (string file in Directory.EnumerateFiles(Strings.Get("Saved")))
                TabSystem_.Add_tab_with_text(File.ReadAllText(file), Path.GetFileName(file));

            DeleteSavedTabs();
        }

        public void DeleteSavedTabs()
        {
            foreach (var item in Directory.EnumerateFiles(Strings.Get("Saved")))
                File.Delete(item);
        }

        private void GitHub_onClick(object sender, RoutedEventArgs e) => Shared.OpenURL(Strings.Get("GitHubURL"));

        private void Discord_MouseDown(object sender, MouseButtonEventArgs e) => Shared.OpenURL(Strings.Get("DiscordServerURL"));

        public void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            // await Shared.ws.CloseWebSocket();
            Shared.mainWindow!.Close();
            Application.Current.Shutdown();
        }

        private async void ContextMenuClick(object sender, RoutedEventArgs e)
        {
            string action = (sender as FrameworkElement)!.Name;
            switch (action)
            {
                case "Minimise":
                    Shared.mainWindow!.WindowState = WindowState.Minimized;
                    break;

                case "Restore":
                    Shared.mainWindow!.WindowState =
                        Shared.mainWindow!.WindowState == WindowState.Normal
                            ? WindowState.Maximized
                            : WindowState.Normal;
                    break;

                case "Close":
                    await SaveTabs();
                    TabSystem_.Visibility = Visibility.Collapsed;

                    var fadeOutAnimation = new DoubleAnimation { From = 1, To = 0, Duration = TimeSpan.FromSeconds(0.1) };

                    Storyboard fadeOutStoryboard = new();
                    fadeOutStoryboard.Children.Add(fadeOutAnimation);
                    Storyboard.SetTarget(fadeOutAnimation, this);
                    Storyboard.SetTargetProperty(fadeOutAnimation, new PropertyPath(OpacityProperty));
                    fadeOutStoryboard.Completed += OnCloseFadeoutCompleted!;
                    fadeOutStoryboard.Begin();
                    break;

                default:
                    break;
            }
        }

        private void NavigationGridClick(object sender, RoutedEventArgs e)
        {
            FrameworkElement? element = sender as FrameworkElement;
            if (element == null) return;

            ResetBorderAndOpacity(Settings);
            ResetBorderAndOpacity(Editor);

            var actions = new Dictionary<string, Action>
            {
                { "Editor", () => ApplyBorderAnimation(Editor) },
                { "Settings", () => ApplyBorderAnimation(Settings) }
            };

            if (actions.TryGetValue(element.Name, out var action))
            {
                action.Invoke();

                foreach (Grid grid in trakas_hdspm.Children.OfType<Grid>())
                {
                    if (grid.Name.StartsWith("Section_"))
                    {
                        grid.Visibility = grid.Name == $"Section_{element.Name}" ? Visibility.Visible : Visibility.Collapsed;
                    }
                }

                // Logs.Console(element.Name);
            }
        }

        }
        private IEnumerable<T> FindDescendants<T>(DependencyObject parent) where T : DependencyObject
        {
            if (parent == null) yield break;

            for (int i = 0; i < VisualTreeHelper.GetChildrenCount(parent); i++)
            {
                var child = VisualTreeHelper.GetChild(parent, i);

                if (child is T descendant)
                    yield return descendant;

                foreach (var descendantChild in FindDescendants<T>(child))
                    yield return descendantChild;
            }
        }

        private void ResetBorderAndOpacity(Button button)
        {
            AnimateBorderThickness(button, new Thickness(0));
            button.Opacity = 0.75;
        }

        private void ApplyBorderAnimation(Button button)
        {
            AnimateBorderThickness(button, new Thickness(1, 0, 0, 0));
            button.Opacity = 1;
        }

        private void AnimateBorderThickness(Button button, Thickness toValue)
        {
            var animation = new ThicknessAnimation
            {
                To = toValue,
                Duration = TimeSpan.FromSeconds(0.25),
                EasingFunction = new QuadraticEase { EasingMode = EasingMode.EaseInOut }
            };

            var storyboard = new Storyboard();
            storyboard.Children.Add(animation);
            Storyboard.SetTarget(animation, button);
            Storyboard.SetTargetProperty(animation, new PropertyPath(BorderThicknessProperty));
            storyboard.Begin();
        }


        // Script List

        private static string regScriptValue = RegistryHandler.GetValue("ScriptListPath", "0");
        private static string ScriptListPath = string.IsNullOrEmpty(regScriptValue) ? Path.Combine(Strings.Get("AppRoot"), "scripts") : regScriptValue;

        private void ScriptSearch_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e) => RefreshScriptList();

        public void RefreshScriptList()
        {
            NormalStandaloneScriptsHolder.Items.Clear();

            string searchQuery = ScriptSearchBox.Text.ToLower();
            DirectoryInfo scriptsFolder = new(ScriptListPath);

            foreach (FileInfo script in scriptsFolder.GetFiles())
            {
                string fileName = script.Name;
                if (fileName.Contains(searchQuery, StringComparison.CurrentCultureIgnoreCase))
                {
                    NormalStandaloneScriptsHolder.Items.Add(fileName);
                }
            }

            var dir = new DirectoryInfo(ScriptListPath);
            if (dir.FullName.Contains(Strings.Get("AppRoot")))
                ScriptDirLabel.Content = $"root/{dir.Name}";
            else
                ScriptDirLabel.Content = dir.Name;


        }

        private void NormalStandaloneScriptsHolder_Loaded(object sender, RoutedEventArgs e)
        {

            if (Directory.Exists(ScriptListPath))
            {
                DirectoryInfo ScriptsFolder = new(ScriptListPath);
                FileInfo[] Files = ScriptsFolder.GetFiles("*.*");
                foreach (FileInfo Script in Files)
                {
                    NormalStandaloneScriptsHolder.Items.Add(Script.Name);
                }

                ScriptDirLabel.Content = new DirectoryInfo(ScriptListPath).Name;
            }
            else
            {
                ScriptListPath = Path.Combine(Strings.Get("AppRoot"), "scripts");

                if (!Directory.Exists(ScriptListPath))
                {
                    Directory.CreateDirectory(ScriptListPath);
                    File.WriteAllText(Path.Combine(ScriptListPath, "example.lua"), "print(\"LInjector v3, yay!\")");

                    RefreshScriptList();
                }
            }
        }

        private void NormalStandaloneScriptsHolder_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            try
            {
                if (TabSystem_.maintabs.Items.Count != 0)
                {
                    if (this.NormalStandaloneScriptsHolder.SelectedIndex != -1)
                    {
                        string scriptfolder = ScriptListPath;
                        object selectedItem = NormalStandaloneScriptsHolder.SelectedItem;
                        if (this.NormalStandaloneScriptsHolder.Items.Count != 0)
                        {
                            TabSystem_.ChangeCurrentTabTitle(selectedItem.ToString()!);
                            TabSystem_.CurrentMonaco()!.SetText(File.ReadAllText(scriptfolder + "\\" + (selectedItem?.ToString())));
                        }
                    }
                }
                else
                {
                    string scriptfolder = ScriptListPath;
                    object selectedItem = NormalStandaloneScriptsHolder.SelectedItem;
                    TabSystem_.Add_tab_with_text(File.ReadAllText(scriptfolder + "\\" + (selectedItem?.ToString())), selectedItem!.ToString());
                }
            }
            catch { }
        }

        private void ChangeScriptListFolder(object sender, RoutedEventArgs e)
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

        public async void Show_SaveToFileDialog()
        {
            var saveFileDialog = new System.Windows.Forms.SaveFileDialog
            {
                FileName = await TabSystem_.GetCurrentTabTitle(),
                Title = "Save to File | LInjector",
                Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
            };

            if (saveFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                string filePath = saveFileDialog.FileName;

                try
                {
                    var cm = TabSystem_.CurrentMonaco();
                    string text = await cm!.GetText();
                    string result = text;

                    if (string.IsNullOrEmpty(result))
                        Logs.Console("No content detected");
                    else
                    {
                        try
                        {
                            File.WriteAllText(filePath, result);
                            string savedFileName = Path.GetFileName(saveFileDialog.FileName);
                            Logs.Console($"{savedFileName} saved");
                            TabSystem_.ChangeCurrentTabTitle(savedFileName);
                        }
                        catch (Exception)
                        {
                            Logs.Console("Error saving the file");
                        }
                    }

                }
                catch (Exception)
                {
                    Logs.Console("Error saving the file");
                }
            }
        }

        public void Show_OpenFileDialog()
        {
            try
            {
                var openFileDialog = new System.Windows.Forms.OpenFileDialog
                {
                    Title = $"Open Script Files | {Strings.Get("AppVersion")}",
                    Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
                    Multiselect = false
                };

                if (Directory.Exists(ScriptListPath))
                    openFileDialog.InitialDirectory = ScriptListPath;

                if (openFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string fileContent = File.ReadAllText(openFileDialog.FileName);

                    var dialogResult = System.Windows.Forms.MessageBox.Show(
                        "Open file in new tab?", $"{Strings.Get("AppName")}", MessageBoxButtons.YesNo,
                        MessageBoxIcon.Question, MessageBoxDefaultButton.Button2);
                    if (dialogResult == System.Windows.Forms.DialogResult.Yes)
                    {
                        TabSystem_.Add_tab_with_text(fileContent, openFileDialog.SafeFileName);
                    }
                    else
                    {
                        TabSystem_.CurrentMonaco()!.SetText(fileContent);
                        TabSystem_.ChangeCurrentTabTitle(openFileDialog.SafeFileName);
                    }
                }

            }
            catch
            {
                Logs.Console("Error while opening the file.");
            }
        }

        private async void EditorButtonClick(object sender, RoutedEventArgs e)
        {
            string action = (sender as FrameworkElement)!.Name;
            switch (action)
            {
                case "ExecuteButtonMain":
                    try
                    {
                        var cm = TabSystem_.CurrentMonaco();

                        string scriptString = await cm!.GetText();

                        try
                        {
                            var flag = !DLLInterface.IsAttached();
                            if (!flag)
                            {
                                DLLInterface.RunScript(scriptString);
                            }
                            else
                            {
                                DLLInterface.Inject();
                                await Task.Delay(500);
                                DLLInterface.RunScript(scriptString);
                            }
                        }
                        catch (Exception ex)
                        {
                            Logs.Console($"An exception has occurred\n{ex.Message}\n{ex.StackTrace}");
                        }
                    }
                    catch
                    {
                        Logs.Console("Unknown error");
                    }
                    break;
                case "OpenFileButton":
                    Show_OpenFileDialog();
                    break;
                case "SaveFileButton":
                    Show_SaveToFileDialog();
                    break;
                default: break;
            }
        }

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

            Color sigmaColor = Colors.Transparent;
            if (button.Tag.ToString()!.StartsWith("_"))
            {
                sigmaColor = Splash.ParseColor(Themes.GetColor(button.Tag.ToString()!));
            }
            else
            {
                sigmaColor = ConsoleControl.ParseColor(Themes.GetColor(button.Tag.ToString()!)).Color;
            }

            var dialog = new ColorPickerDialog(sigmaColor);
            dialog.WindowStartupLocation = WindowStartupLocation.CenterScreen;
            var result = dialog.ShowDialog();
            dialog.Topmost = true;
            dialog.Owner = Shared.mainWindow;

            if (result.HasValue && result.Value)
            {
                var color = dialog.Color;
                var solidColorBrush = new SolidColorBrush(color);

                if (Application.Current.Resources.Contains(button.Tag.ToString()))
                    Application.Current.Resources[button.Tag.ToString()] = solidColorBrush;

                button.Background = solidColorBrush;
                string colorHexString = color.ToString();

                Themes.SetColor(button.Tag.ToString()!, colorHexString);
            }

            ParseMyTheme();
        }

        /// <summary>
        /// Reads Registry Keys of Colors selected by the user, and then, puts it into a class to be
        /// applied and parsed.
        /// </summary>
        public void ParseMyTheme()
        {
            Application.Current.Resources[PrimaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("PrimaryColor"));
            Application.Current.Resources[SecondaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryColor"));
            Application.Current.Resources[TertiaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("TertiaryColor"));
            Application.Current.Resources[Text.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("Text"));
            Application.Current.Resources[SecondaryText.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryText"));

            Application.Current.Resources["EslScrollbarThumb"] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryText"));

            ThomasShelbyRadialGradient.Color = Splash.ParseColor(Themes.GetColor("_SplashColor1"));
        }

        /// <summary>
        /// Set the background of the Interactuable Buttons that the user uses to match the color in
        /// Registry Had to do it since WPF is not an Immediate Mode GUI
        /// </summary>
        public void ParseMyThemeSelectors()
        {
            SetControlBackground(SSC1, "_SplashColor1");
            SetControlBackground(SSC2, "_SplashColor2");
            SetControlBackground(PrimaryColor, "PrimaryColor");
            SetControlBackground(SecondaryColor, "SecondaryColor");
            SetControlBackground(TertiaryColor, "TertiaryColor");
            SetControlBackground(Text, "Text");
            SetControlBackground(SecondaryText, "SecondaryText");
            SetControlBackground(null!, "_SplashColor1", ThomasShelbyRadialGradient);
        }

        /// <summary>
        /// Used in <see cref="ParseMyThemeSelectors"/>
        /// </summary>
        /// <param name="control"></param>
        /// <param name="colorKey"></param>
        public void SetControlBackground(FrameworkElement control, string colorKey, GradientStop gStop = null!)
        {
            if (gStop != null)
            {
                gStop.Color = Splash.ParseColor(Themes.GetColor(colorKey));
                return;
            }

            PropertyInfo backgroundProperty = control.GetType().GetProperty("Background")!;
            if (backgroundProperty != null)
            {
                SolidColorBrush brush = (SolidColorBrush)new BrushConverter().ConvertFromString(Themes.GetColor(colorKey))!;
                backgroundProperty.SetValue(control, brush);
                return;
            }

            PropertyInfo colorProperty = control.GetType().GetProperty("Color")!;
            if (colorProperty != null)
            {
                Color color = Splash.ParseColor(Themes.GetColor(colorKey));
                colorProperty.SetValue(control, color);
                return;
            }
        }

        /// <summary>
        /// Resets the Theme Values to the Default ones made by me (Excel).
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        public void ResetTheme_Click(object sender, RoutedEventArgs e)
        {
            ResetTheme();
            ParseMyThemeSelectors();

            Application.Current.Resources[PrimaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("PrimaryColor"));
            Application.Current.Resources[SecondaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryColor"));
            Application.Current.Resources[TertiaryColor.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("TertiaryColor"));
            Application.Current.Resources[Text.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("Text"));
            Application.Current.Resources[SecondaryText.Tag.ToString()] = ConsoleControl.ParseColor(Themes.GetColor("SecondaryText"));
        }

        private void ResetTheme()
        {
            Themes.SetColor("_SplashColor1", "#FF460B80");
            Themes.SetColor("_SplashColor2", "#FF570057");

            Themes.SetColor("PrimaryColor", "#FF0F0F0F");
            Themes.SetColor("SecondaryColor", "#FF111111");
            Themes.SetColor("TertiaryColor", "#FF141414");

            Themes.SetColor("Text", "#FFFFFFFF");
            Themes.SetColor("SecondaryText", "#FFD3D3D3");
        }
    }
}
