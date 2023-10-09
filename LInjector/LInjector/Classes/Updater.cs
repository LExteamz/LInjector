using IWshRuntimeLibrary;
using Microsoft.Win32;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Octokit;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Windows.Forms;
using File = System.IO.File;

namespace LInjector.Classes
{
    public static class Files
    {

        public static readonly string currentVersion = "v08.10.2023";
        public static readonly string AccountName    = "NeverExcel";
        public const string           AccountNamee   = "NeverExcel";

        public static readonly string localAppDataFolder = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        public static readonly string RobloxACFolder = Path.Combine(localAppDataFolder, "Packages", "ROBLOXCORPORATION.ROBLOX_55nm5eh3cm0pr", "AC");
        public static readonly string workspaceFolder = Path.Combine(RobloxACFolder, "workspace");
        public static readonly string autoexecFolder = Path.Combine(RobloxACFolder, "autoexec");
        public static readonly string exeLocation = System.Reflection.Assembly.GetExecutingAssembly().Location;
        public static readonly string exeDirectory = Path.GetDirectoryName(exeLocation);
        public static readonly string desiredDirectoryName = "LInjector";
        public static readonly string ModulePath = "Resources\\libs\\Module.dll";
        public static readonly string savedtabspath = "Resources\\savedtabs";
        public static readonly string GithubAPI = $"https://api.github.com/repos/{AccountName}/LInjector/commits?path={0}&page=1&per_page=1";
        public static readonly string DLLSURl = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/Redistributables/DLLs";
        public static readonly string FluxusAPI = $"{DLLSURl}/FluxteamAPI.dll";
        public static readonly string ModuleAPI = $"{DLLSURl}/Module.dll";
        public static readonly string InitLua = $"https://raw.githubusercontent.com/{AccountName}/LInjector/master/LInjector/LInjector/Resources/Internal/Init.lua";
        public static readonly string InitLuaPath = Path.Combine(autoexecFolder, "LInjector.lua");
        public static readonly string DLLsJSON = $"{DLLSURl}/Modules.json";
    }

    public static class Updater
    {
        public static async Task CheckForUpdates()
        {
            try
            {
                string Local_Flux = RegistryHandler.GetValue("FluxVersion", "0");
                string Local_Module = RegistryHandler.GetValue("ModuleVersion", "0");

                string GitHub_Module = await GetHash("Redistributables/DLLs/Module.dll");
                string GitHub_Flux = await GetHash("Redistributables/DLLs/FluxteamAPI.dll");

                if (!File.Exists(Files.ModulePath) || Local_Flux != GitHub_Flux || Local_Module != GitHub_Module)
                {
                    CreateFiles.RedownloadModules();

                    RegistryHandler.SetValue("FluxVersion", GitHub_Flux);
                    RegistryHandler.SetValue("ModuleVersion", GitHub_Module);
                }

                return;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in CheckForUpdates: " + ex.InnerException.Message);
            }
        }

        private static async Task<string> GetHash(string path)
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.UserAgent.ParseAdd("Mozilla/5.0 (compatible; AcmeInc/1.0)");
                    string url = string.Format(Files.GithubAPI, path);
                    HttpResponseMessage response = await client.GetAsync(url);

                    if (response.IsSuccessStatusCode)
                    {
                        string json = await response.Content.ReadAsStringAsync();
                        dynamic data = JsonConvert.DeserializeObject(json);

                        if (data != null && data.Count > 0)
                        {
                            return data[0].sha;
                        }
                    }
                    return null;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in GetHash: " + ex.Message);
                return null;
            }
        }
    }

    public static class RegistryHandler
    {
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

        public static bool LookValue(string name)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector";
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress))
                {
                    if (reg == null)
                    {
                    }

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


    public static class CreateFiles
    {
        private static readonly WebClient webClient = new WebClient();
        private static readonly HttpClient httpClient = new HttpClient();
        private static readonly WshShell wsh = new WshShell();

        public static void Create()
        {
            if (!Files.exeDirectory.Contains(Files.desiredDirectoryName))
            {
                try
                {
                    string newDirectory = Path.GetDirectoryName(Files.exeDirectory);
                    Directory.SetCurrentDirectory(newDirectory);

                    Console.WriteLine($"Set current directory to: {newDirectory}");
                }
                catch { ThreadBox.MsgThread($"Looks like you ran LInjector from another location that is not the LInjector folder. Try opening it from {Files.desiredDirectoryName}", "LInjector | ERROR", System.Windows.Forms.MessageBoxButtons.OK, System.Windows.Forms.MessageBoxIcon.Error); }
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

            if (!Directory.Exists(".\\scripts"))
            {
                Directory.CreateDirectory(".\\scripts");
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

        public static void RedownloadModules()
        {
            string jsonUrl = Files.DLLsJSON;

            try
            {
                using (var webClient = new WebClient())
                {
                    string jsonData = webClient.DownloadString(jsonUrl);
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

                        webClient.DownloadFile(interfacer, "Resources\\libs\\FluxteamAPI.dll");
                        webClient.DownloadFile(moduleUri, "Resources\\libs\\Module.dll");

                        Console.WriteLine("Módulos descargados exitosamente.");
                    }
                    else
                    {
                        Console.WriteLine("URLs de módulos no válidas en el JSON descargado.");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ocurrió un error al descargar y procesar el JSON: " + ex.Message);
            }
        }

        public static void DownloadInterfacer()
        {
            var Interfacer = new Uri($"https://raw.githubusercontent.com/{Files.AccountName}/LInjector/master/Redistributables/DLLs/FluxteamAPI.dll");
            webClient.DownloadFile(Interfacer, "Resources\\libs\\FluxteamAPI.dll");
        }

        public static void DownloadModule()
        {
            var Module = new Uri($"https://raw.githubusercontent.com/{Files.AccountName}/LInjector/master/Redistributables/DLLs/Module.dll");
            webClient.DownloadFile(Module, "Resources\\libs\\Module.dll");
        }

        public static void DeleteFilesAndFoldersRecursively(string target_dir)
        {
            foreach (string file in Directory.GetFiles(target_dir))
            {
                try { File.Delete(file); } catch { }
            }

            foreach (string subDir in Directory.GetDirectories(target_dir))
            {
                DeleteFilesAndFoldersRecursively(subDir);
            }

            Task.Delay(1000);
            try { Directory.Delete(target_dir, true); } catch { }
        }
    }

    public static class TempLog
    {
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


        // This is for Hyperion (x64 Client)

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

        public static string Extract(this string input, int len)
        {
            if (string.IsNullOrEmpty(input) || input.Length < len)
            {
                return input;
            };

            return input.Substring(0, len);
        }

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
                    ThreadBox.MsgThread($"Your version of UWP version mismatched. LInjector is only working for version {asyncedstring}, you have {Version}. Update or downgrade Roblox.", "LInjector | Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
        }
    }

    public class CheckLatest
    {
        private const string owner = Files.AccountNamee;
        private const string repo = "LInjector";

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
}