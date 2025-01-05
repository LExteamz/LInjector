using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace LInjector.Classes
{
    public class ConfigHandler
    {
        private static readonly string ConfigPath = ".\\config.json";

        public static dynamic debug { get; set; } = false;
        public static dynamic topmost { get; set; } = false;
        public static dynamic save_tabs { get; set; } = false;
        public static dynamic autoattach { get; set; } = false;
        public static dynamic discord_rpc { get; set; } = false;
        public static dynamic splashscreen { get; set; } = true;
        public static dynamic websocket_mode { get; set; } = false;
        public static dynamic hide_scriptlist { get; set; } = true;
        public static dynamic hide_internalconsole { get; set; } = true;
        public static dynamic monaco_minimap_default { get; set; } = true;
        public static string monaco_theme { get; set; } = "li-dark";
        public static dynamic monaco_blured { get; set; } = false;

        private static readonly Dictionary<string, Action<dynamic>> ConfigActions = new Dictionary<string, Action<dynamic>>()
        {
            { "autoattach", value => autoattach = value },
            { "splashscreen", value => splashscreen = value },
            { "debug", value =>
                {
                    debug = value;
                    if (value is bool boolValue && boolValue)
                    {
                        ConsoleManager.Initialize();
                        ConsoleManager.ShowConsole();
                    }
                }
            },
            { "topmost", value => topmost = value },
            { "discord_rpc", value =>
                {
                    discord_rpc = value;
                    RPCManager.isEnabled = value is bool boolValue && boolValue;
                }
            },
            { "save_tabs", value => save_tabs = value },
            { "websocket_mode", value => websocket_mode = value },
            { "hide_scriptlist", value => hide_scriptlist = value },
            { "hide_internalconsole", value => hide_internalconsole = value },
            { "monaco_minimap_default", value => monaco_minimap_default = value },
            { "monaco_theme", value => monaco_theme = value },
            { "monaco_blured", value => monaco_blured = value },
        };

        public static void DoConfig()
        {
            var defaultConfig = new Dictionary<string, dynamic>
            {
                { "autoattach", autoattach },
                { "splashscreen", splashscreen },
                { "debug", debug },
                { "topmost", topmost },
                { "discord_rpc", discord_rpc },
                { "save_tabs", save_tabs },
                { "websocket_mode", websocket_mode },
                { "hide_scriptlist", hide_scriptlist },
                { "hide_internalconsole", hide_internalconsole },
                { "monaco_minimap_default", monaco_minimap_default },
                { "monaco_theme", monaco_theme },
                { "monaco_blured", monaco_blured },
            };

            if (!File.Exists(ConfigPath))
            {
                File.WriteAllText(ConfigPath, JsonConvert.SerializeObject(defaultConfig, Formatting.Indented));
            }

            var config = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(File.ReadAllText(ConfigPath));
            foreach (var kvp in config)
            {
                if (ConfigActions.TryGetValue(kvp.Key, out var action))
                {
                    action(kvp.Value);
                }
            }
        }

        public static void SetConfigValue(string name, dynamic value)
        {
            try
            {
                var configDict = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(File.ReadAllText(ConfigPath));
                if (configDict.ContainsKey(name))
                {
                    configDict[name] = value;
                    File.WriteAllText(ConfigPath, JsonConvert.SerializeObject(configDict, Formatting.Indented));
                }
                else
                {
                    CustomCw.Cw($"The value '{name}' doesn't exist in the config", false, "error");
                }
            }
            catch (Exception) { }
        }
    }
}
