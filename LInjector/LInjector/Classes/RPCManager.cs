﻿using DiscordRPC;
using Button = DiscordRPC.Button;

namespace LInjector.Classes
{
    public static class RPCManager
    {
        public static DiscordRpcClient? client;
        public static bool isEnabled;

        /// <summary>
        /// Ends the RPC Connection
        /// </summary>
        public static void TerminateConnection()
        {
            client!.Dispose();
        }

        /// <summary>
        /// Sets the RPC Details
        /// </summary>
        /// <param name="Details"></param>
        public static void SetRPCDetails(string Details)
        {
            RichPresence baseRichPresence = new RichPresence
            {

                Details = Details,
                State = "",

                Assets = new Assets
                {
                    LargeImageKey = "https://lexploits.top/Assets/linj_shadow.png",
                    LargeImageText = Strings.Get("AppName")
                },
                Buttons = new[]
                {
                        new Button { Label = "GitHub", Url = $"https://github.com/{Strings.Get("GitHubUsername")}/{Strings.Get("GitHubRepoName")}" }
                }
            };
            if (client!.IsInitialized)
            {
                try
                {
                    client.SetPresence(baseRichPresence);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(
                        "Couldn't update LInjector State (RPC)\nException:\n" + ex.Message, "[WARNING] LInjector",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }

        // public void SetListeningStatus(string name, string artist, string albumFormatted)
        // {
        //     Game activity = new(
        //         artist + albumFormatted,
        //         ActivityType.Listening,
        //         ActivityProperties.Instance,
        //         name
        //     );
        //     this.client.SetActivityAsync(activity);
        //}

        /// <summary>
        /// Initializes the RPC Client
        /// </summary>
        public static void InitRPC()
        {
            client = new DiscordRpcClient("1104489169314660363");
            if (isEnabled)
            {
                client.Initialize();
            }
            SetRPCDetails($"Using {Strings.Get("AppName")} {Strings.Get("AppVersion")}");
        }

        /// <summary>
        /// Sets the detail to the string given
        /// </summary>
        /// <param name="currentFile"></param>
        public static void SetRpcFile(string currentFile)
        {
            if (client!.IsInitialized)
            {
                try
                {
                    SetRPCDetails("Editing File: " + currentFile);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(
                        "Couldn't update LInjector State (RPC)\nException:\n" + ex.Message, "[WARNING] LInjector",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }

        /// <summary>
        /// Sets the default RPC Strings.
        /// </summary>
        public static void SetBaseRichPresence()
        {
            if (client!.IsInitialized)
            {
                try
                {
                    SetRPCDetails($"Using LInjector {Strings.Get("AppVersion")}");
                }
                catch (Exception ex)
                {
                    MessageBox.Show(
                        "Couldn't set base Rich Presence (RPC)\nException:\n" + ex.Message, "[WARNING] LInjector",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }
    }
}