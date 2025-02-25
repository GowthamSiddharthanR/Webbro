import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.user_Email,
        pass: process.env.user_Password,
    },
});

async function sendVerificationEmail(email, token) {
    const verificationUrl = `${process.env.BASE_URL}/api/verify?token=${token}`;

    const mailOptions = {
        from: process.env.user_Email,
        to: email,
        subject: "Webbro-Verify your email",
        html: `<h1>Hello,</h1>
<h3>Welcome to WEBBRO!</h3>
<p>Thank you for signing up. Please verify your email address to complete your registration.</p>
<p>Click the link below to verify your email:</p>
<p><a href="${verificationUrl}" style="color: #007bff; text-decoration: none; font-weight: bold;">Verify Email</a></p>
<p>If you didn’t request this, you can safely ignore this email.</p>
<br />
<p>Best regards,</p>
<h3>Gowtham Siddharthan</h3>
<h4>Passionate Software Developer</h4>
`,
    };

    await transporter.sendMail(mailOptions);
}

export default sendVerificationEmail;
