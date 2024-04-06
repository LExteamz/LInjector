using Microsoft.Win32;
using System;
using System.Linq;

namespace LInjector.Classes
{

    internal static class Themes
    {
        /// <summary>
        /// Reads a color from the Registry Keys
        /// </summary>
        /// <param name="what"></param>
        /// <param name="fallback"></param>
        /// <returns>String in aRGB Format</returns>
        internal static string GetColor(string what, string fallback = "0")
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector\\Theme";
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

                    var value = reg.GetValue(what);
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
        /// Writes to Registry Key
        /// </summary>
        /// <param name="what"></param>
        /// <param name="ColorValue"></param>
        internal static void SetColor(string what, string ColorValue)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector\\Theme";
                RegistryKey reg = null;

                try
                {
                    reg = Registry.CurrentUser.OpenSubKey(registryAddress, true);

                    if (reg == null)
                    {
                        using (var newKey = Registry.CurrentUser.CreateSubKey(registryAddress))
                        {
                            if (newKey == null)
                            {
                                Console.WriteLine("Could not create the SubKey");
                                return;
                            }
                        }

                        reg = Registry.CurrentUser.OpenSubKey(registryAddress, true);
                    }

                    reg.SetValue(what, ColorValue);
                }
                finally
                {
                    reg?.Close();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in SetValue: " + ex.Message);
            }
        }

        /// <summary>
        /// Checks if a color exists on the Registry
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        internal static bool LookColor(string name)
        {
            try
            {
                var registryAddress = "SOFTWARE\\LInjector\\Theme";
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress))
                {
                    if (reg != null)
                    {
                        string[] valueNames = reg.GetValueNames();
                        return valueNames.Contains(name);
                    }
                    else
                    {
                        Console.WriteLine("Registry key not found.");
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in LookColor: " + ex.Message);
                return false;
            }
        }
    }
}
