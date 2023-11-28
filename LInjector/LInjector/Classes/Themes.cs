using Microsoft.Win32;
using System;
using System.Linq;

namespace LInjector.Classes
{

    internal static class Themes
    {
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
