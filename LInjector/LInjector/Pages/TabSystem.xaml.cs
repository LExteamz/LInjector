using LInjector.WPF.Classes;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace LInjector.Pages
{
    public partial class TabSystem : UserControl
    {

        public TabSystem()
        {
            InitializeComponent();
            maintabs.Items.Add(CreateTab("", "Script" + " " + (this.maintabs.Items.Count + 1).ToString()));
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
                title = "Script " + this.maintabs.Items.Count.ToString();
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
            switch (((Button)sender).Name)
            {
                case "AddT":
                    maintabs.Items.Add(CreateTab("", "Script" + " " + (this.maintabs.Items.Count + 1).ToString()));
                    current_monaco().enable_minimap();
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
        private void Clear_Editor(object sender, RoutedEventArgs e)
        {
            var x = maintabs.SelectedContent as monaco_api;
            try
            {
                x.SetText("");
                this.ChangeCurrentTabTitle($"Script {maintabs.Items.Count}");
            }
            catch { }
        }
    }
}
