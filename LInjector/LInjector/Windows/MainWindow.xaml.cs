using System.Windows;
using LInjector.Classes;
using LInjector.Pages;

namespace LInjector.Windows
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Shared.mainView = new MainView
            {
                Name = "MainView_",
                Visibility = Visibility.Visible,
                IsEnabled = false,
                Padding = new Thickness(30, 25, 25, 30)
            };

            HolderGrid.Children.Add(Shared.mainView);
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            Shared.mainView!.IsEnabled = true;
        }
    }
}