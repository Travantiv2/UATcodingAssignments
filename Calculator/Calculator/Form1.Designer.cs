
namespace Calculator
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            TxtBox = new TextBox();
            SevenBtn = new Button();
            FourBtn = new Button();
            OneBtn = new Button();
            ZeroBtn = new Button();
            EqualBtn = new Button();
            TwoBtn = new Button();
            FiveBtn = new Button();
            EightBtn = new Button();
            DotBtn = new Button();
            ThreeBtn = new Button();
            SixBtn = new Button();
            NineBtn = new Button();
            PercentBtn = new Button();
            DivideBtn = new Button();
            PlusBtn = new Button();
            ClearBtn = new Button();
            PlusMinusBtn = new Button();
            MultiplyBtn = new Button();
            MinusBtn = new Button();
            SuspendLayout();
            // 
            // TxtBox
            // 
            TxtBox.Font = new Font("Comic Sans MS", 20F, FontStyle.Bold, GraphicsUnit.Point, 0);
            TxtBox.Location = new Point(18, 12);
            TxtBox.Name = "TxtBox";
            TxtBox.ReadOnly = true;
            TxtBox.Size = new Size(722, 63);
            TxtBox.TabIndex = 0;
            TxtBox.TextAlign = HorizontalAlignment.Right;
            TxtBox.TextChanged += textBox1_TextChanged;
            // 
            // SevenBtn
            // 
            SevenBtn.Location = new Point(18, 81);
            SevenBtn.Name = "SevenBtn";
            SevenBtn.Size = new Size(106, 85);
            SevenBtn.TabIndex = 1;
            SevenBtn.Text = "7";
            SevenBtn.UseVisualStyleBackColor = true;
            SevenBtn.Click += button1_Click;
            // 
            // FourBtn
            // 
            FourBtn.Location = new Point(18, 172);
            FourBtn.Name = "FourBtn";
            FourBtn.Size = new Size(106, 85);
            FourBtn.TabIndex = 2;
            FourBtn.Text = "4";
            FourBtn.UseVisualStyleBackColor = true;
            FourBtn.Click += FourBtn_Click;
            // 
            // OneBtn
            // 
            OneBtn.Location = new Point(18, 263);
            OneBtn.Name = "OneBtn";
            OneBtn.Size = new Size(106, 85);
            OneBtn.TabIndex = 3;
            OneBtn.Text = "1";
            OneBtn.UseVisualStyleBackColor = true;
            OneBtn.Click += button3_Click;
            // 
            // ZeroBtn
            // 
            ZeroBtn.Location = new Point(18, 354);
            ZeroBtn.Name = "ZeroBtn";
            ZeroBtn.Size = new Size(106, 85);
            ZeroBtn.TabIndex = 4;
            ZeroBtn.Text = "0";
            ZeroBtn.UseVisualStyleBackColor = true;
            ZeroBtn.Click += ZeroBtn_Click;
            // 
            // EqualBtn
            // 
            EqualBtn.Location = new Point(130, 354);
            EqualBtn.Name = "EqualBtn";
            EqualBtn.Size = new Size(106, 85);
            EqualBtn.TabIndex = 8;
            EqualBtn.Text = "=";
            EqualBtn.UseVisualStyleBackColor = true;
            EqualBtn.Click += EqualBtn_Click;
            // 
            // TwoBtn
            // 
            TwoBtn.Location = new Point(130, 263);
            TwoBtn.Name = "TwoBtn";
            TwoBtn.Size = new Size(106, 85);
            TwoBtn.TabIndex = 7;
            TwoBtn.Text = "2";
            TwoBtn.UseVisualStyleBackColor = true;
            TwoBtn.Click += TwoBtn_Click;
            // 
            // FiveBtn
            // 
            FiveBtn.Location = new Point(130, 172);
            FiveBtn.Name = "FiveBtn";
            FiveBtn.Size = new Size(106, 85);
            FiveBtn.TabIndex = 6;
            FiveBtn.Text = "5";
            FiveBtn.UseVisualStyleBackColor = true;
            FiveBtn.Click += FiveBtn_Click;
            // 
            // EightBtn
            // 
            EightBtn.Location = new Point(130, 81);
            EightBtn.Name = "EightBtn";
            EightBtn.Size = new Size(106, 85);
            EightBtn.TabIndex = 5;
            EightBtn.Text = "8";
            EightBtn.UseVisualStyleBackColor = true;
            EightBtn.Click += EightBtn_Click;
            // 
            // DotBtn
            // 
            DotBtn.Location = new Point(242, 354);
            DotBtn.Name = "DotBtn";
            DotBtn.Size = new Size(106, 85);
            DotBtn.TabIndex = 12;
            DotBtn.Text = ".";
            DotBtn.UseVisualStyleBackColor = true;
            DotBtn.Click += button9_Click;
            // 
            // ThreeBtn
            // 
            ThreeBtn.Location = new Point(242, 263);
            ThreeBtn.Name = "ThreeBtn";
            ThreeBtn.Size = new Size(106, 85);
            ThreeBtn.TabIndex = 11;
            ThreeBtn.Text = "3";
            ThreeBtn.UseVisualStyleBackColor = true;
            ThreeBtn.Click += ThreeBtn_Click;
            // 
            // SixBtn
            // 
            SixBtn.Location = new Point(242, 172);
            SixBtn.Name = "SixBtn";
            SixBtn.Size = new Size(106, 85);
            SixBtn.TabIndex = 10;
            SixBtn.Text = "6";
            SixBtn.UseVisualStyleBackColor = true;
            SixBtn.Click += SixBtn_Click;
            // 
            // NineBtn
            // 
            NineBtn.Location = new Point(242, 81);
            NineBtn.Name = "NineBtn";
            NineBtn.Size = new Size(106, 85);
            NineBtn.TabIndex = 9;
            NineBtn.Text = "9";
            NineBtn.UseVisualStyleBackColor = true;
            NineBtn.Click += NineBtn_Click;
            // 
            // PercentBtn
            // 
            PercentBtn.Location = new Point(634, 354);
            PercentBtn.Name = "PercentBtn";
            PercentBtn.Size = new Size(106, 85);
            PercentBtn.TabIndex = 16;
            PercentBtn.Text = "%";
            PercentBtn.UseVisualStyleBackColor = true;
            PercentBtn.Click += PercentBtn_Click;
            // 
            // DivideBtn
            // 
            DivideBtn.Location = new Point(634, 263);
            DivideBtn.Name = "DivideBtn";
            DivideBtn.Size = new Size(106, 85);
            DivideBtn.TabIndex = 15;
            DivideBtn.Text = "/";
            DivideBtn.UseVisualStyleBackColor = true;
            DivideBtn.Click += DivideBtn_Click;
            // 
            // PlusBtn
            // 
            PlusBtn.Location = new Point(634, 172);
            PlusBtn.Name = "PlusBtn";
            PlusBtn.Size = new Size(106, 85);
            PlusBtn.TabIndex = 14;
            PlusBtn.Text = "+";
            PlusBtn.UseVisualStyleBackColor = true;
            PlusBtn.Click += PlusBtn_Click;
            // 
            // ClearBtn
            // 
            ClearBtn.Location = new Point(522, 81);
            ClearBtn.Name = "ClearBtn";
            ClearBtn.Size = new Size(218, 85);
            ClearBtn.TabIndex = 13;
            ClearBtn.Text = "Clear";
            ClearBtn.UseVisualStyleBackColor = true;
            ClearBtn.Click += ClearBtn_Click;
            // 
            // PlusMinusBtn
            // 
            PlusMinusBtn.Location = new Point(522, 354);
            PlusMinusBtn.Name = "PlusMinusBtn";
            PlusMinusBtn.Size = new Size(106, 85);
            PlusMinusBtn.TabIndex = 20;
            PlusMinusBtn.Text = "+/-";
            PlusMinusBtn.UseVisualStyleBackColor = true;
            PlusMinusBtn.Click += PlusMinusBtn_Click;
            // 
            // MultiplyBtn
            // 
            MultiplyBtn.Location = new Point(522, 263);
            MultiplyBtn.Name = "MultiplyBtn";
            MultiplyBtn.Size = new Size(106, 85);
            MultiplyBtn.TabIndex = 19;
            MultiplyBtn.Text = "*";
            MultiplyBtn.UseVisualStyleBackColor = true;
            MultiplyBtn.Click += MultiplyBtn_Click;
            // 
            // MinusBtn
            // 
            MinusBtn.Location = new Point(522, 172);
            MinusBtn.Name = "MinusBtn";
            MinusBtn.Size = new Size(106, 85);
            MinusBtn.TabIndex = 18;
            MinusBtn.Text = "-";
            MinusBtn.UseVisualStyleBackColor = true;
            MinusBtn.Click += MinusBtn_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(15F, 35F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(752, 454);
            Controls.Add(PlusMinusBtn);
            Controls.Add(MultiplyBtn);
            Controls.Add(MinusBtn);
            Controls.Add(PercentBtn);
            Controls.Add(DivideBtn);
            Controls.Add(PlusBtn);
            Controls.Add(ClearBtn);
            Controls.Add(DotBtn);
            Controls.Add(ThreeBtn);
            Controls.Add(SixBtn);
            Controls.Add(NineBtn);
            Controls.Add(EqualBtn);
            Controls.Add(TwoBtn);
            Controls.Add(FiveBtn);
            Controls.Add(EightBtn);
            Controls.Add(ZeroBtn);
            Controls.Add(OneBtn);
            Controls.Add(FourBtn);
            Controls.Add(SevenBtn);
            Controls.Add(TxtBox);
            Font = new Font("Comic Sans MS", 12F, FontStyle.Bold, GraphicsUnit.Point, 0);
            FormBorderStyle = FormBorderStyle.FixedSingle;
            Margin = new Padding(4);
            MaximizeBox = false;
            Name = "Form1";
            Text = "Calculator";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox TxtBox;
        private Button SevenBtn;
        private Button FourBtn;
        private Button OneBtn;
        private Button ZeroBtn;
        private Button EqualBtn;
        private Button TwoBtn;
        private Button FiveBtn;
        private Button EightBtn;
        private Button DotBtn;
        private Button ThreeBtn;
        private Button SixBtn;
        private Button NineBtn;
        private Button PercentBtn;
        private Button DivideBtn;
        private Button PlusBtn;
        private Button ClearBtn;
        private Button PlusMinusBtn;
        private Button MultiplyBtn;
        private Button MinusBtn;
        private EventHandler textBox1_TextChanged;
    }
}
