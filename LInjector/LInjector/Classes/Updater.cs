using IWshRuntimeLibrary;
using Microsoft.Win32;
using Newtonsoft.Json.Linq;
using Octokit;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Windows.Forms;
using File = System.IO.File;
using FileMode = System.IO.FileMode;

/*
 * Hi, I'm sorry for the messy code.
 */

namespace LInjector.Classes
{

    #region Collection of Files and Paths used in LInjector
    public static class Files
    {

        public static readonly string currentVersion = "v08.01.2024";
        public static readonly string AccountName = "LExteamz";
        public
        const string AccountNamee = "LExteamz";

        public static readonly string localAppDataFolder = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        public static readonly string localPackagesFolder = Path.Combine(localAppDataFolder, "Packages");
        public static readonly string RobloxACFolder = GetRobloxACFolder();
        public static readonly string workspaceFolder = Path.Combine(RobloxACFolder, "workspace");
        public static readonly string autoexecFolder = Path.Combine(RobloxACFolder, "autoexec");
        public static readonly string exeLocation = System.Reflection.Assembly.GetExecutingAssembly().Location;
        public static readonly string exeDirectory = Path.GetDirectoryName(exeLocation);
        public static readonly string desiredDirectory = Path.GetFullPath(exeDirectory);
        public static readonly string savedtabspath = "Resources\\savedtabs";
        public static readonly string DLLSURl = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/Redistributables/DLLs";
        public static readonly string FluxusAPI = $"{DLLSURl}/FluxteamAPI.dll";
        public static readonly string ModuleAPI = $"{DLLSURl}/Module.dll";
        public static readonly string InitLua = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/LInjector/LInjector/Resources/Internal/Init.lua";
        public static readonly string InitLuaPath = Path.Combine(autoexecFolder, "LInjector.lua");
        public static readonly string DLLsJSON = $"{DLLSURl}/Modules.json";

        /// <returns>Path of the Game Folder "AC"</returns>
        public static string GetRobloxACFolder()
        {
            string[] packageFolders = Directory.GetDirectories(Files.localPackagesFolder);

            foreach (string packageFolder in packageFolders)
            {
                if (packageFolder.Contains("ROBLOXCORPORATION.ROBLOX"))
                {
                    return Path.Combine(packageFolder, "AC");
                }
            }

            // MessageBox.Show("Game was not found at \"AppData\\Local\\Packages\\ROBLOXCORPORATION.ROBLOX\"\nYour temporary default location is your user TEMP folder.", "LInjector", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            return Environment.GetEnvironmentVariable("TEMP");
        }
    }

    #endregion

    #region Auto Module Updater

    public static class Updater
    {
        static WebClient webClient = new WebClient();

        /// <summary>
        /// Fetches a JSON from any content delivery network, reads the
        ///  content of it which are file hashes, if the
        ///  local file hashes mismatch, the application downloads the
        /// latest files provided in the JSON.
        /// </summary>
        /// <returns></returns>
        internal static async Task CheckForUpdates()
        {
            try
            {
                string jsonContent = await webClient.DownloadStringTaskAsync(Files.DLLsJSON);

                if (!string.IsNullOrEmpty(jsonContent))
                {
                    JObject jsonObject = JObject.Parse(jsonContent);

                    string fluxUrl = jsonObject["FluxteamAPI"].ToString();
                    string moduleUrl = jsonObject["Module"].ToString();

                    string localFluxChecksum = DoChecksum(Files.FluxusAPI);
                    string localModuleChecksum = DoChecksum(Files.ModuleAPI);

                    string newFluxChecksum = await GetChecksum(fluxUrl);
                    string newModuleChecksum = await GetChecksum(moduleUrl);

                    if (string.IsNullOrEmpty(localFluxChecksum) || localFluxChecksum != newFluxChecksum ||
                       string.IsNullOrEmpty(localModuleChecksum) || localModuleChecksum != newModuleChecksum)
                    {
                        CreateFiles.RedownloadModules();

                        RegistryHandler.SetValue("FluxVersion", newFluxChecksum);
                        RegistryHandler.SetValue("ModuleVersion", newModuleChecksum);
                    }

                    /*
                        MessageBox.Show(
                            $"Local FluxteamAPI.dll SHA1: {localFluxChecksum}\n" +
                            $"Extrn FluxteamAPI.dll SHA1: {newFluxChecksum}\n" +
                            $"Local Module.dll      SHA1: {localModuleChecksum}\n" +
                            $"Extrn Module.dll      SHA1: {newModuleChecksum}", FluxFiles.Executor);
                    */
                }
                else
                {
                    Console.WriteLine("Could not fetch JSON");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in CheckForUpdates: " + ex.InnerException?.Message);
            }
        }

        /// <summary>
        /// Gets the checksum of an internet file.
        /// </summary>
        /// <param name="url"></param>
        /// <returns>SHA1 checksum</returns>
        private static async Task<string> GetChecksum(string url)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(url);

                    if (response.IsSuccessStatusCode)
                    {
                        Stream stream = await response.Content.ReadAsStreamAsync();
                        using (SHA1 sha1 = SHA1.Create())
                        {
                            byte[] hashBytes = sha1.ComputeHash(stream);
                            return BitConverter.ToString(hashBytes).Replace("-", string.Empty).ToLower();
                        }
                    }
                    return null;
                }
            }
            catch
            {
                return "Couldn't calculate.";
            }
        }

        /// <summary>
        /// Calculates the checksum of a file provided in the <paramref name="path"/>.
        /// </summary>
        /// <param name="path"></param>
        /// <returns>SHA1 checksum</returns>
        private static string DoChecksum(string path)
        {
            try
            {
                using (FileStream fileStream = new FileStream(path, FileMode.Open))
                using (SHA1 sha1 = SHA1.Create())
                {
                    byte[] hashBytes = sha1.ComputeHash(fileStream);
                    return BitConverter.ToString(hashBytes).Replace("-", string.Empty).ToLower();
                }
            }
            catch
            {
                return "Couldn't calculate.";
            }
        }
    }
    #endregion

    #region RegistryHandler, create values and read it from registry.

    public static class RegistryHandler
    {

        /// <summary>
        /// Get the value of a Registry Key located in Local User\Software\LInjector
        /// </summary>
        /// <param name="name"></param>
        /// <param name="fallback"></param>
        /// <returns>Registry Key value</returns>
        public static string GetValue(string name, string fallback)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector";
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress))
                {
                    string returnValue = fallback;
                    if (reg == null)
                    {
                        using (var newKey = Registry.CurrentUser.CreateSubKey(registryAddress))
                        {
                            if (newKey != null)
                            {
                                newKey.Close();
                            }
                            else
                            {
                                Console.WriteLine("Could not create the SubKey");
                                return fallback;
                            }
                        }
                    }

                    var value = reg.GetValue(name);
                    if (value != null)
                    {
                        returnValue = value.ToString();
                    }
                    return returnValue;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in GetValue: " + ex.Message);
                return fallback;
            }
        }

        /// <summary>
        /// Writes to a Registry Key in Local User\Software\LInjector
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        public static void SetValue(string name, string value)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector";
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress, true))
                {
                    if (reg == null)
                    {
                        using (var newKey = Registry.CurrentUser.CreateSubKey(registryAddress))
                        {
                            if (newKey != null)
                            {
                                newKey.Close();
                            }
                            else
                            {
                                Console.WriteLine("Could not create the SubKey");
                                return;
                            }
                        }
                    }

                    reg.SetValue(name, value);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in SetValue: " + ex.Message);
            }
        }

        /// <summary>
        /// Check if a value exists
        /// </summary>
        /// <param name="name"></param>
        /// <returns>boolean</returns>
        public static bool LookValue(string name)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector";
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress))
                {
                    if (reg == null) { }

                    string[] valueNames = reg.GetValueNames();

                    return valueNames.Contains(name);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in LookValue: " + ex.Message);
                return false;
            }
        }

    }

    #endregion

    #region Create files for Initial Ran of LInjector

    public static class CreateFiles
    {
        private static readonly WebClient webClient = new WebClient();
        private static readonly HttpClient httpClient = new HttpClient();
        private static readonly WshShell wsh = new WshShell();

        /// <summary>
        /// Creates the required files for LInjector
        /// </summary>
        public static void Create()
        {
            if (!string.Equals(Directory.GetCurrentDirectory(), Files.desiredDirectory, StringComparison.OrdinalIgnoreCase))
            {
                try
                {
                    Directory.SetCurrentDirectory(Files.desiredDirectory);

                    MessageBox.Show("Friendly reminder to run LInjector from the root folder.", "LInjector", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                catch
                {
                    MessageBox.Show($"Looks like you ran LInjector from another location that is not the LInjector folder. Try opening it from {Files.desiredDirectory}", "LInjector | ERROR", System.Windows.Forms.MessageBoxButtons.OK, System.Windows.Forms.MessageBoxIcon.Error);
                }
            }

            if (!Directory.Exists(".\\scripts"))
            {
                Directory.CreateDirectory(".\\scripts");
            }

            if (!File.Exists(".\\workspace.lnk"))
            {
                var shortcut = (IWshShortcut)wsh.CreateShortcut(".\\workspace.lnk");
                shortcut.TargetPath = Files.workspaceFolder;
                shortcut.Save();
            }

            if (!File.Exists(".\\autoexec.lnk"))
            {
                var shortcut = (IWshShortcut)wsh.CreateShortcut(".\\autoexec.lnk");
                shortcut.TargetPath = Files.autoexecFolder;
                shortcut.Save();
            }

            if (!Directory.Exists(".\\Resources\\libs"))
            {
                Directory.CreateDirectory(".\\Resources\\libs");
            }

            if (!Directory.Exists(Files.workspaceFolder))
            {
                Directory.CreateDirectory(Files.workspaceFolder);
            }

            if (!Directory.Exists(Files.autoexecFolder))
            {
                Directory.CreateDirectory(Files.autoexecFolder);
            }

            if (!Directory.Exists(Files.savedtabspath))
            {
                Directory.CreateDirectory(Files.savedtabspath);
            }

            if (RegistryHandler.LookValue("ScriptListPath") == false)
            {
                RegistryHandler.SetValue("ScriptListPath", ".\\scripts\\");
            }

            if (!File.Exists($"{Files.autoexecFolder}\\LInjector.lua"))
            {
                webClient.DownloadFileAsync(new Uri(Files.InitLua), $"{Files.autoexecFolder}\\LInjector.lua");
            }
        }

        /// <summary>
        /// Resets the user color theme.
        /// </summary>
        internal static void ResetTheme()
        {
            Themes.SetColor("SSC1", "#FF460B80");
            Themes.SetColor("SSC2", "#FF570057");

            Themes.SetColor("PrimaryColor", "#FF0F0F0F");
            Themes.SetColor("SecondaryColor", "#FF111111");
            Themes.SetColor("TertiaryColor", "#FF141414");
            Themes.SetColor("QuaternaryColor", "#FF161616");

            Themes.SetColor("Text", "#FFFFFFFF");
        }

        #endregion

        #region Module / DLL Redownloader

        /// <summary>
        /// Deletes and replaces the old DLLs with the new ones.
        /// </summary>
        internal static void RedownloadModules()
        {
            try
            {
                using (var webClient = new WebClient())
                {
                    string jsonData = webClient.DownloadString(Files.DLLsJSON);
                    JObject jsonObject = JObject.Parse(jsonData);

                    string fluxteamAPI = jsonObject["FluxteamAPI"].ToString();
                    string module = jsonObject["Module"].ToString();

                    if (!string.IsNullOrEmpty(fluxteamAPI) && !string.IsNullOrEmpty(module))
                    {
                        var interfacer = new Uri(fluxteamAPI);
                        var moduleUri = new Uri(module);

                        if (Directory.Exists("Resources\\libs"))
                        {
                            DeleteFilesAndFoldersRecursively("Resources\\libs");
                            Directory.CreateDirectory("Resources\\libs");
                        }
                        else
                        {
                            Directory.CreateDirectory("Resources\\libs");
                        }

                        webClient.DownloadFile(interfacer, Path.Combine("Resources", "libs", "FluxteamAPI.dll"));
                        webClient.DownloadFile(moduleUri, Path.Combine("Resources", "libs", "Module.dll"));
                    }
                    else
                    {
                        return;
                    }
                }
            }
            catch { }
        }

        /// <summary>
        /// Self-explained
        /// </summary>
        /// <param name="target_dir">Target Directory</param>
        private static void DeleteFilesAndFoldersRecursively(string target_dir)
        {
            foreach (string file in Directory.GetFiles(target_dir))
            {
                try
                {
                    File.Delete(file);
                }
                catch { }
            }

            foreach (string subDir in Directory.GetDirectories(target_dir))
            {
                DeleteFilesAndFoldersRecursively(subDir);
            }

            Task.Delay(1000);
            try
            {
                Directory.Delete(target_dir, true);
            }
            catch { }
        }

        #endregion
    }

    #region Log Creator that saves files in user % temp %

    public static class TempLog
    {
        /// <summary>
        /// Creates a file in %TEMP% with the <paramref name="content"/> and <paramref name="fileName"/> provided
        /// </summary>
        /// <param name="content"></param>
        /// <param name="fileName"></param>
        public static void CreateVersionFile(string content, string fileName)
        {
            var tempPath = Path.GetTempPath();
            var linjectorFolderPath = Path.Combine(tempPath, "LInjector");
            var versionFilePath = Path.Combine(linjectorFolderPath, fileName);

            if (!Directory.Exists(linjectorFolderPath))
            {
                Directory.CreateDirectory(linjectorFolderPath);
            }

            if (File.Exists(versionFilePath) || !File.Exists(versionFilePath))
            {
                File.WriteAllText(versionFilePath, content);
            }
        }
    }

    #endregion

    #region VERSION CHECKER MADE WITH POWERSHELL SCRIPTING
    public static class VersionChecker
    {
        public static string Version { get; set; }

        static string appName = "ROBLOXCORPORATION.ROBLOX";
        static string outputDirectory = Path.Combine(Path.GetTempPath(), "LInjector");
        static string versionFilePath = Path.Combine(outputDirectory, "uwpversion");

        // This PowerShell scripts saves the current installed Roblox Version in Temp/LInjector/uwpversion
        // If it's not installed, It will return a message saying "The app is not installed".

        public static string script = @"
            $appxPackage = Get-AppxPackage | Where-Object { $_.Name -eq '" + appName + @"' }
            if ($appxPackage) {
                $appVersion = $appxPackage.Version
            } else {
                $appVersion = 'The application " + appName + @" it''s not installed.'
            }
            $appVersion | Out-File -FilePath '" + versionFilePath + @"'
        ";

        #endregion

        #region WEB VERSION CHECKER

        /// <summary>
        /// Checks the folder name in local computer, and compares it with the string provided.
        /// </summary>
        /// <returns></returns>
        public static async Task DlRbxVersion()
        {
            var rbxverurl = "http://setup.roblox.com/version";

            using (var client = new HttpClient())
            {
                try
                {
                    var content = await client.GetStringAsync(rbxverurl);
                    CustomCw.Cw($"Saving the Game Client (Hyperion Release) version: {content}", false, "debug");
                    Version = content;
                    TempLog.CreateVersionFile(content, "latestrbx");
                }
                catch (HttpRequestException ex)
                {
                    CustomCw.Cw($"Exception:\n{ex.Message}\nStack Trace:\n{ex.StackTrace}");
                }
            }
        }

        private static string Extract(this string input, int len)
        {
            if (string.IsNullOrEmpty(input) || input.Length < len)
            {
                return input;
            };

            return input.Substring(0, len);
        }

        /// <summary>
        /// Self-explainatory
        /// </summary>
        /// <param name="script"></param>
        public static void ExecutePowerShellScript(string script)
        {
            using (Process process = new Process())
            {
                process.StartInfo.FileName = "powershell.exe";
                process.StartInfo.Arguments = $"-NoProfile -ExecutionPolicy Bypass -Command \"{script}\"";
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.CreateNoWindow = true;

                process.Start();
                process.WaitForExit();

                string output = process.StandardOutput.ReadToEnd();
            }
        }

        #endregion

        #region UWP VERSION CHECKER
        /// <summary>
        /// Checks the folder name in local computer, and compares it with the string provided.
        /// </summary>
        /// <returns></returns>

        public static async Task CheckVersionUWP()
        {
            var rbxverurl = "https://lexploits.top/version";
            var client = new HttpClient();
            var asyncedstring = await client.GetStringAsync(rbxverurl);
            string content = asyncedstring.ToString().Extract(5);

            if (!Directory.Exists(outputDirectory))
            {
                Directory.CreateDirectory(outputDirectory);
            }

            ExecutePowerShellScript(script);

            if (File.Exists(versionFilePath))
            {
                Version = File.ReadAllText(versionFilePath).Extract(5);
            }

            if (Directory.Exists(outputDirectory))
            {
                if (!Version.Contains(content))
                {
                    MessageBox.Show($"Your version of UWP version mismatched. LInjector is only working for version {asyncedstring}, you have {Version}. Update or downgrade Roblox.", "LInjector | Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }

        #endregion
    }

    #region GITHUB RELEASE VERSION CHECKER

    public class CheckLatest
    {
        private const string owner = Files.AccountNamee;
        private const string repo = "LInjector";

        /// <summary>
        /// Checks if the current version of LInjector matches with the latest GitHub Release, see: <see cref="Files.currentVersion"/>
        /// </summary>
        /// <param name="currentVersion"></param>
        /// <returns></returns>
        public static bool IsOutdatedVersion(string currentVersion)
        {
            try
            {
                var client = new GitHubClient(new ProductHeaderValue("CheckGitHubRelease"));

                var releases = client.Repository.Release.GetAll(owner, repo).Result;

                var latestRelease = releases
                   .Where(r => r.TagName.StartsWith("v"))
                   .OrderByDescending(r => r.PublishedAt)
                   .FirstOrDefault();

                if (latestRelease == null)
                {
                    return false;
                }

                if (latestRelease != null)
                {
                    var latestVersion = latestRelease.TagName.TrimStart('v');

                    Version current = null;
                    if (Version.TryParse(currentVersion.TrimStart('v'), out current))
                    {
                        Version latest;
                        if (Version.TryParse(latestVersion, out latest))
                        {
                            return current < latest;
                        }
                    }
                }
            }
            catch (RateLimitExceededException)
            {
                return false;
            }

            return false;
        }
    }
    #endregion
}
