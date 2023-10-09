using System.Threading;
using System.Windows.Forms;
using MessageBox = System.Windows.Forms.MessageBox;

namespace LInjector.Classes
{
    public static class ThreadBox
    {
        public static void MsgThread(string msgBoxContent = "",
            string msgBoxTitle = "",
            MessageBoxButtons boxButtons = MessageBoxButtons.OK,
            MessageBoxIcon boxIcon = MessageBoxIcon.None,
            MessageBoxDefaultButton boxDefaultButton = MessageBoxDefaultButton.Button1,
            System.Windows.Forms.MessageBoxOptions boxOptions = System.Windows.Forms.MessageBoxOptions.DefaultDesktopOnly)
        {
            var msgBoxThread = new Thread(
                () =>
                {
                    var dialogResult = MessageBox.Show(msgBoxContent, msgBoxTitle, boxButtons, boxIcon,
                        boxDefaultButton, boxOptions);
                }
            );
            msgBoxThread.Start();
            CustomCw.Cw($"Title: {msgBoxTitle}\nContent: {msgBoxContent}", false, "msgbox");
        }
    }
}