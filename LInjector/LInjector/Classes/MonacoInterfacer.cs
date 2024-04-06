using Microsoft.Web.WebView2.Wpf;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;

namespace LInjector.WPF.Classes
{
    public class monaco_api : WebView2
    {
        // Thanks to parex for this awesome base!
        // I will not touch this

        public bool isDOMLoaded { get; set; } = false;
        private string ToSetText;
        private string LatestRecievedText;
        public bool isMinimapEnabled { get; set; }

        /// <summary>
        /// Event for when the editor is fully loaded.
        /// </summary>
        public event EventHandler EditorReady;

        public monaco_api(string Text)
        {
            this.Source = new Uri("https://lexploits.top/monaco");

            this.CoreWebView2InitializationCompleted += monaco_api_CoreWebView2InitializationCompleted;
            this.ToSetText = Text;
        }

        protected virtual void OnEditorReady()
        {
            EventHandler handler = EditorReady;
            if (handler != null)
                handler(this, new EventArgs());

        }

        public void monaco_api_CoreWebView2InitializationCompleted(object sender, Microsoft.Web.WebView2.Core.CoreWebView2InitializationCompletedEventArgs e)
        {
            this.CoreWebView2.DOMContentLoaded += CoreWebView2_DOMContentLoaded;
            this.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;
            this.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
            this.CoreWebView2.Settings.AreDevToolsEnabled = false;
            this.CoreWebView2.Settings.IsZoomControlEnabled = false;
            this.CoreWebView2.Settings.AreBrowserAcceleratorKeysEnabled = false;
        }

        private void CoreWebView2_WebMessageReceived(object sender, Microsoft.Web.WebView2.Core.CoreWebView2WebMessageReceivedEventArgs e) => LatestRecievedText = e.TryGetWebMessageAsString();

        private async void CoreWebView2_DOMContentLoaded(object sender, Microsoft.Web.WebView2.Core.CoreWebView2DOMContentLoadedEventArgs e)
        {
            await Task.Delay(1000);
            isDOMLoaded = true;
            SetText(ToSetText);
            OnEditorReady();
        }
        public async Task<string> GetText()
        {
            if (isDOMLoaded)
            {
                var script = "monaco.editor.getModels()[0].getValue()";
                var result = await CoreWebView2.ExecuteScriptAsync(script);
                var text = JsonConvert.DeserializeObject<string>(result);

                return text;
            }
            return string.Empty;
        }

        public async void SetText(string text)
        {
            text = text.Replace("\\", "\\\\");
            await CoreWebView2.ExecuteScriptAsync("editor.setValue('');");
            await CoreWebView2.ExecuteScriptAsync($"editor.setValue(`{text.Replace("`", "\\`")}`)");
        }

        public void AddIntellisense(string label, Types type, string description, string insert)
        {
            if (isDOMLoaded)
            {
                string selectedType = type.ToString();
                if (type == Types.None)
                    selectedType = "";
                this.ExecuteScriptAsync($"AddIntellisense({label}, {selectedType}, {description}, {insert});");
            }
        }
        public void refresh()
        {
            if (isDOMLoaded)
                this.ExecuteScriptAsync($"Refresh();");
        }

        public void enable_minimap()
        {
            if (isDOMLoaded)
                this.ExecuteScriptAsync("SwitchMinimap(true);");
            isMinimapEnabled = true;
        }

        public void disable_minimap()
        {
            if (isDOMLoaded)
                this.ExecuteScriptAsync("SwitchMinimap(false);");
            isMinimapEnabled = false;
        }

        public void enable_autocomplete()
        {
            if (isDOMLoaded)
                this.ExecuteScriptAsync("EnableAutoComplete();");
        }

        public void disable_autocomplete()
        {
            if (isDOMLoaded)
                this.ExecuteScriptAsync("DisableAutoComplete();");
        }
    }

    public enum Types
    {
        Class,
        Color,
        Constructor,
        Enum,
        Field,
        File,
        Folder,
        Function,
        Interface,
        Keyword,
        Method,
        Module,
        Property,
        Reference,
        Snippet,
        Text,
        Unit,
        Value,
        Variable,
        None
    }
}