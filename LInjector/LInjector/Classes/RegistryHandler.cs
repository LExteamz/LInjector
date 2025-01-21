using Microsoft.Win32;

namespace LInjector.Classes
{
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
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress)!)
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

                    var value = reg!.GetValue(name);
                    if (value != null)
                    {
                        returnValue = value.ToString()!;
                    }
                    return returnValue!;
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
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress, true)!)
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

                    reg!.SetValue(name, value);
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
                using (RegistryKey reg = Registry.CurrentUser.OpenSubKey(registryAddress)!)
                {
                    if (reg == null) { }

                    string[] valueNames = reg!.GetValueNames();

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
}
