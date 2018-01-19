using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;



namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    
    {
        static Thread UDPThread = null;
        static Boolean Polling = false;
        public Boolean sleepSwitch;
        public Form1()
        {
            InitializeComponent();
        }

        private void exit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void settings_Click(object sender, EventArgs e)
        {
            tabControl1.SelectTab(tabPage2);
        }

        private void home_Click(object sender, EventArgs e)
        {
            tabControl1.SelectTab(tabPage1);
        }

        public void button1_Click(object sender, EventArgs e)
        {
            Polling = true;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Polling = false;
            UDPThread.Interrupt();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            UDPThread = new Thread(startUDPPolling);
            UDPThread.Start();
        }

        public void startUDPPolling()
        {
            while (true)
            {
                while (Polling == true)
                {
                    Console.WriteLine("Je moeder");
                }
            }
        }

    }
}
