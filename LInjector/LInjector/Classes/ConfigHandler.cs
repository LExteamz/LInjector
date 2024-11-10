using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace LInjector.Classes
{
    public class ConfigHandler
    {
        private static readonly string ConfigPath = ".\\config.json";

        public static bool debug { get; set; } = false;
        public static bool topmost { get; set; } = false;
        public static bool save_tabs { get; set; } = false;
        public static bool autoattach { get; set; } = false;
        public static bool discord_rpc { get; set; } = false;
        public static bool splashscreen { get; set; } = true;
        public static bool websocket_mode { get; set; } = false;
        public static bool hide_scriptlist { get; set; } = true;
        public static bool hide_internalconsole { get; set; } = true;
        public static bool monaco_minipal_default { get; set; } = true;

        private static readonly Dictionary<string, Action<bool>> ConfigActions = new Dictionary<string, Action<bool>>()
        {
            { "autoattach", value => autoattach = value },
            { "splashscreen", value => splashscreen = value },
            { "debug", value =>
                {
                    debug = value;
                    if (value)
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
                    RPCManager.isEnabled = value;
                }
            },
            { "save_tabs", value => save_tabs = value },
            { "websocket_mode", value => websocket_mode = value },
            { "hide_scriptlist", value => hide_scriptlist = value },
            { "hide_internalconsole", value => hide_internalconsole = value },
            { "monaco_minimap_default", value => monaco_minipal_default = value },
        };

        public static void DoConfig()
        {
            var defaultConfig = new Dictionary<string, bool>
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
                { "monaco_minimap_default", monaco_minipal_default }
            };

            if (!File.Exists(ConfigPath))
            {
                File.WriteAllText(ConfigPath, JsonConvert.SerializeObject(defaultConfig, Formatting.Indented));
            }

            var config = JsonConvert.DeserializeObject<Dictionary<string, bool>>(File.ReadAllText(ConfigPath));
            foreach (var kvp in config)
            {
                if (ConfigActions.TryGetValue(kvp.Key, out var action))
                {
                    action(kvp.Value);
                }
            }
        }

        public static void SetConfigValue(string name, bool value)
        {
            try
            {
                var configDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(File.ReadAllText(ConfigPath));
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
