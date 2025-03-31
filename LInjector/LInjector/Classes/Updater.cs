using System;
using System.IO;
using System.Linq;
using System.Media;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Windows.Forms;
using IWshRuntimeLibrary;
using Microsoft.Win32;
using Octokit;
using File = System.IO.File;
using FileMode = System.IO.FileMode;
using MessageBox = System.Windows.Forms.MessageBox;

/*
 * Hi, I'm sorry for the messy code.
 */

namespace LInjector.Classes
{

    #region Collection of Files and Paths used in LInjector
    public static class Files
    {
        public static readonly string CurrentVersion = "v25.12.2024";
        public static readonly string AccountName = "LExteamz";
        public static readonly string ApplicationName = "LInjector";

        private static readonly string localAppDataFolder = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        public static readonly string LocalPackagesFolder = Path.Combine(localAppDataFolder, "Packages");

        private static readonly string assemblyLocation = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? string.Empty;
        public static readonly string AssemblyLocation = Path.GetFullPath(assemblyLocation);
        public static readonly string RobloxACFolder = AssemblyLocation;

        public static readonly string WorkspaceFolder = Path.Combine(RobloxACFolder, "workspace");
        public static readonly string AutoexecFolder = Path.Combine(RobloxACFolder, "autoexec");

        private static readonly string exeLocation = Assembly.GetExecutingAssembly().Location;
        public static readonly string exeDirectory = Path.GetDirectoryName(exeLocation) ?? string.Empty;
        public static readonly string DesiredDirectory = Path.GetFullPath(exeDirectory);

        public static readonly string SavedTabsPath = Path.Combine(AssemblyLocation, "Resources", "savedtabs");

        private static readonly string dllBaseUrl = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/Redistributables/DLLs";
        public static readonly string DLLSURl = dllBaseUrl;
        public static readonly string InitLua = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/LInjector/LInjector/Resources/Internal/Init.lua";
        public static readonly string DLLsJSON = $"{dllBaseUrl}/Modules.json";
    }


    #endregion

    #region Auto Module Updater

    public static class StartupHandler
    {
        private static readonly string baseUrl = "https://masteremmapee.netlify.app";
        private static readonly string metalpipeURL = $"{baseUrl}/Assets/40506d549f23856071e7beed4b35c097.wav";
        private static readonly string bamboopipeURL = $"{baseUrl}/Assets/40e0cc9d289d38f0acfeb076eeb785eb.wav";
        private static readonly string windowsURL = $"{baseUrl}/Assets/0f4137ed1502b5045d6083aa258b5c42.wav";

        private static readonly string TempPath = Path.Combine(Path.GetTempPath(), Files.ApplicationName);

        private static async Task<string> DownloadFileAsync(string url)
        {
            Directory.CreateDirectory(TempPath);
            string filePath = Path.Combine(TempPath, Path.GetFileName(url));

            using (WebClient client = new WebClient())
            {
                await client.DownloadFileTaskAsync(new Uri(url), filePath);
            }

            return filePath;
        }

        private static void PlaySound(string filePath)
        {
            try
            {
                using (var player = new SoundPlayer(filePath))
                {
                    player.Play();
                }
            }
            catch { }
        }

        public static async void PlayStartupSound(string sound)
        {
            string url = null;

            switch (sound)
            {
                case "metal":
                    url = metalpipeURL;
                    break;
                case "bamboo":
                    url = bamboopipeURL;
                    break;
                case "windows":
                    url = windowsURL;
                    break;
                default:
                    return;
            }

            if (url != null)
            {
                string filePath = Path.Combine(TempPath, Path.GetFileName(url));

                if (!File.Exists(filePath))
                {
                    filePath = await DownloadFileAsync(url);
                }

                PlaySound(filePath);
            }
        }
    }

    public static class Updater
    {
        static WebClient webClient = new WebClient();


        internal static Task CheckForUpdates()
        {
            /*
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

                        RegistryHandler.SetValue("FluxVersion", newFluxChecksum);
                        RegistryHandler.SetValue("ModuleVersion", newModuleChecksum);
                    }
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
           */

            /*
            using (HttpClient client = new HttpClient())
            {
                string hi = await client.GetStringAsync("https://lexploits.top/version");
                Console.WriteLine(hi);
            }
             */

            return Task.CompletedTask;
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
            if (!string.Equals(Directory.GetCurrentDirectory(), Files.DesiredDirectory, StringComparison.OrdinalIgnoreCase))
            {
                try
                {
                    Directory.SetCurrentDirectory(Files.DesiredDirectory);

                    MessageBox.Show("Friendly reminder to run LInjector from the root folder.", Files.ApplicationName, MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
                catch
                {
                    MessageBox.Show($"Looks like you ran LInjector from another location that is not the LInjector folder. Try opening it from {Files.DesiredDirectory}", "LInjector | ERROR", System.Windows.Forms.MessageBoxButtons.OK, System.Windows.Forms.MessageBoxIcon.Error);
                }
            }

            if (!Directory.Exists(".\\scripts"))
            {
                Directory.CreateDirectory(".\\scripts");
            }

            /*
            if (!File.Exists(".\\workspace.lnk"))
            {
                var shortcut = (IWshShortcut)wsh.CreateShortcut(".\\workspace.lnk");
                shortcut.TargetPath = Files.WorkspaceFolder;
                shortcut.Save();
            }

            if (!File.Exists(".\\autoexec.lnk"))
            {
                var shortcut = (IWshShortcut)wsh.CreateShortcut(".\\autoexec.lnk");
                shortcut.TargetPath = Files.autoexecFolder;
                shortcut.Save();
            }
            */

            if (!Directory.Exists(".\\Resources\\libs"))
            {
                Directory.CreateDirectory(".\\Resources\\libs");
            }

            if (!Directory.Exists(Files.WorkspaceFolder))
            {
                Directory.CreateDirectory(Files.WorkspaceFolder);
            }

            if (!Directory.Exists(Files.AutoexecFolder))
            {
                Directory.CreateDirectory(Files.AutoexecFolder);
            }

            if (!Directory.Exists(Files.SavedTabsPath))
            {
                Directory.CreateDirectory(Files.SavedTabsPath);
            }

            if (RegistryHandler.LookValue("ScriptListPath") == false)
            {
                RegistryHandler.SetValue("ScriptListPath", ".\\scripts\\");
            }

            if (!File.Exists($"{Files.AutoexecFolder}\\LInjector.lua"))
            {
                webClient.DownloadFileAsync(new Uri(Files.InitLua), $"{Files.AutoexecFolder}\\LInjector.lua");
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
            // unused: Themes.SetColor("QuaternaryColor", "#FF161616");

            Themes.SetColor("Text", "#FFFFFFFF");
        }

        #endregion

        #region Module / DLL Redownloader


        /*
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

                    string fluxteamAPI = jsonObject["Interface"].ToString();
                    string module = jsonObject["Module"].ToString();

                    if (!string.IsNullOrEmpty(fluxteamAPI) && !string.IsNullOrEmpty(module))
                    {
                        var interfacer = new Uri(fluxteamAPI);
                        var moduleUri = new Uri(module);

                        if (Directory.Exists("Resources\\libs"))
                        {
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
        */

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

    #region Log Creator that saves files in user %temp%

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
            var linjectorFolderPath = Path.Combine(tempPath, Files.ApplicationName);
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

    #region GITHUB RELEASE VERSION CHECKER

    public class CheckLatest
    {

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

                var releases = client.Repository.Release.GetAll(Files.AccountName, Files.ApplicationName).Result;

                var latestRelease = releases
                   .Where(r => r.TagName.StartsWith("v"))
                   .OrderByDescending(r => r.PublishedAt)
                   .FirstOrDefault();

                if (latestRelease == null)
                {
                    return false;
                }

                var latestVersion = latestRelease.TagName.TrimStart('v');

                DateTime currentDate;
                DateTime latestDate;

                if (DateTime.TryParseExact(currentVersion.TrimStart('v'), "dd.MM.yyyy", null, System.Globalization.DateTimeStyles.None, out currentDate) &&
                    DateTime.TryParseExact(latestVersion, "dd.MM.yyyy", null, System.Globalization.DateTimeStyles.None, out latestDate))
                {
                    return currentDate < latestDate;
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
