using System.ComponentModel;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Threading;
using LInjector.Classes;
using Microsoft.WindowsAPICodePack.Dialogs;
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

        private void UserControl_Loaded(object sender, RoutedEventArgs e)
        {
            TabSystem_.Visibility = Visibility.Visible;
            TabSystem_.IsEnabled = true;

            NavigationGridClick(Editor, e);
        }

        DispatcherTimer TitleTimer = new DispatcherTimer();
        DispatcherTimer bozoTimer = new DispatcherTimer();

        public void BeginAttachDetection()
        {
            bozoTimer.Interval = TimeSpan.FromSeconds(1);
            bozoTimer.Tick += bozoTick!;
            bozoTimer.Start();
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

        public void OnCloseFadeoutCompleted(object sender, EventArgs e)
        {
            Shared.mainWindow!.Close();
            Application.Current.Shutdown();
        }

        private void ContextMenuClick(object sender, RoutedEventArgs e)
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

        private void ResetAllBordersAndOpacity()
        {
            foreach (var button in FindDescendants<Button>(NavigationIndexers))
            {
                ResetBorderAndOpacity(button);
            }
        }
        private IEnumerable<T> FindDescendants<T>(DependencyObject parent) where T : DependencyObject
        {
            if (parent == null) yield break;

            for (int i = 0; i < VisualTreeHelper.GetChildrenCount(parent); i++)
            {
                var child = VisualTreeHelper.GetChild(parent, i);

                if (child is T descendant)
                {
                    yield return descendant;
                }

                foreach (var descendantChild in FindDescendants<T>(child))
                {
                    yield return descendantChild;
                }
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

            ScriptDirLabel.Content = new DirectoryInfo(ScriptListPath).Name;
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
            } else
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
                    Title = "Open Script Files | LInjector",
                    Filter = "Script Files (*.txt;*.lua;*.luau)|*.txt;*.lua;*.luau|All files (*.*)|*.*",
                    Multiselect = false
                };

                if (Directory.Exists(ScriptListPath))
                    openFileDialog.InitialDirectory = ScriptListPath;

                if (openFileDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {
                    string fileContent = File.ReadAllText(openFileDialog.FileName);

                    var dialogResult = System.Windows.Forms.MessageBox.Show(
                        "Open file in new tab?", "LInjector", MessageBoxButtons.YesNo,
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
                        // Get the current Monaco Editor instance
                        var cm = TabSystem_.CurrentMonaco();

                        // Get the script text from the Monaco Editor instance
                        string scriptString = await cm!.GetText();

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
    }
}
