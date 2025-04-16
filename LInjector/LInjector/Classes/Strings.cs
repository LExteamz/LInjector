﻿using System.IO;

namespace LInjector.Classes
{
    internal static class Strings
    {
        private static string appRoot = Path.GetDirectoryName(Environment.ProcessPath)!;

        private static readonly Dictionary<string, string> values = new()
        {
            { "AppName", "LInjector" },
            { "AppVersion", "v3.1 Beta" },
            { "Saved", Path.Combine(appRoot, "Saved Content") },
            { "AppRoot", appRoot },
            { "GitHubURL", "https://github.com/LExteamz/LInjector" },
            { "GitHubUsername", "LExteamz" },
            { "GitHubRepoName", "LInjector" },
            { "DiscordServerURL", "https://discord.com/invite/NQY28YSVAb" },

            { "EmbeddedResource", "pack://application:,,,/LInjector;component/" },
            { "SegoeIconsFontURL", "https://raw.githubusercontent.com/LExteamz/LInjector/refs/heads/main/LInjector/LInjector/Resources/Icons/Segoe%20Fluent%20Icons.ttf" }
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
