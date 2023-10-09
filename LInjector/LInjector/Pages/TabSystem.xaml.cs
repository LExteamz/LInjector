using LInjector.WPF.Classes;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace LInjector.Pages
{
    public partial class TabSystem : UserControl
    {

        public string latestTabName { get; set; }
        public TabSystem()
        {
            InitializeComponent();
            maintabs.Items.Add(CreateTab("", "Script" + " " + (this.maintabs.Items.Count + 1).ToString()));
        }

        public monaco_api current_monaco()
        {
            return maintabs.SelectedContent as monaco_api;
        }

        public void add_tab_with_text(string text, string title = null)
        {
            if (title == null)
            {
                title = "Script " + this.maintabs.Items.Count.ToString();
            }

            maintabs.Items.Add(CreateTab(text, title));

        }

        public void ChangeCurrentTabTitle(string title)
        {
            if (maintabs.SelectedItem is TabItem selectedTab)
            {
                selectedTab.Header = title;
            }
        }

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
