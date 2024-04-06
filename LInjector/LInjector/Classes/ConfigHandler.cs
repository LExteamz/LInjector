using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace LInjector.Classes
{
    public class ConfigHandler
    {
        private static readonly string ConfigPath = ".\\config.json";

        public static bool topmost = false;
        public static bool autoattach = false;
        public static bool splashscreen = true;
        public static bool debug = false;
        public static bool discord_rpc = false;
        public static bool save_tabs = false;
        public static bool websocket_mode = false;

        /// <summary>
        /// Reads the config and parse it to the bools of the <see cref="ConfigHandler"/> class.
        /// </summary>
        public static void DoConfig()
        {
            var defaultConfig = new Dictionary<string, bool>
            {
                { "autoattach", false },
                { "splashscreen", true },
                { "debug", false },
                { "topmost", false },
                { "discord_rpc", false },
                { "save_tabs", false },
                { "websocket_mode", false }
            };

            if (!File.Exists(ConfigPath))
            {
                string jsonString = JsonConvert.SerializeObject(defaultConfig, Formatting.Indented);
                File.WriteAllText(ConfigPath, jsonString);
            }

            string fileContents = File.ReadAllText(ConfigPath);
            var config = JsonConvert.DeserializeObject<Dictionary<string, bool>>(fileContents);

            AssignConfigValue(config, "websocket_mode", ref websocket_mode);
            AssignConfigValue(config, "autoattach", ref autoattach);
            AssignConfigValue(config, "splashscreen", ref splashscreen);
            AssignConfigValue(config, "debug", ref debug, () =>
            {
                ConsoleManager.Initialize();
                ConsoleManager.ShowConsole();
            });
            AssignConfigValue(config, "topmost", ref topmost);
            AssignConfigValue(config, "discord_rpc", ref RPCManager.isEnabled, () => discord_rpc = true);
            AssignConfigValue(config, "save_tabs", ref save_tabs);
        }

        /// <summary>
        /// Auxiliar function. See: <see cref="DoConfig"/>
        /// </summary>
        /// <param name="config"></param>
        /// <param name="key"></param>
        /// <param name="field"></param>
        /// <param name="customAction"></param>
        private static void AssignConfigValue(Dictionary<string, bool> config, string key, ref bool field, Action customAction = null)
        {
            if (config.TryGetValue(key, out bool value))
            {
                field = value;
                if (customAction != null && value)
                {
                    customAction();
                }
            }
        }

        /// <summary>
        /// Writes config value into the config.json file.
        /// </summary>
        /// <param name="Name"></param>
        /// <param name="Value"></param>
        public static void SetConfigValue(string Name, bool Value)
        {
            try
            {
                string jsonContent = File.ReadAllText(ConfigPath);
                var configDict = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonContent);

                if (configDict.ContainsKey(Name))
                {
                    configDict[Name] = Value;
                }
                else
                {
                    CustomCw.Cw($"The value '{Name}' doesn't exist in the config", false, "error");
                    return;
                }

                string updatedJson = JsonConvert.SerializeObject(configDict, Formatting.Indented);
                File.WriteAllText(ConfigPath, updatedJson);
            }
            catch { }
        }
    }
}