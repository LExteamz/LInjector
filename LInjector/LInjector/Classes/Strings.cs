﻿using System.IO;

namespace LInjector.Classes
{
    internal static class Strings
    {
        private static readonly Dictionary<string, string> values = new()
        {
            { "AppName", "LInjector" },
            { "AppVersion", "v3.0 Closed Beta" },
            { "AppRoot", Path.GetDirectoryName(Environment.ProcessPath)! },
            { "GitHubURL", "https://github.com/LExteamz/LInjector" }
        };

        public static string Get(string key) => values.TryGetValue(key, out var value) ? value : string.Empty;

        public static void Add(string key, string value)
        {
            if (!values.ContainsKey(key))
                values[key] = value;
            else
                return;
        }

        public static void Update(string key, string value)
        {
            if (values.ContainsKey(key))
                values[key] = value;
            else
                return;
        }
    }

}
