
import nodemailer from 'nodemailer'

export const ContactUs = async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: process.env.USER, 
            pass: process.env.PASS, 
        },
    });
    const mailOptions = {
        from: process.env.USER, 
        to: process.env.USER,
        subject: name, 
        text: message,
        replyTo: email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
} 