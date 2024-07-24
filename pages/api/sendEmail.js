// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, address, city, state, postalCode, phone, products } = req.body;

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Order Confirmation',
            text: `Hello ${name},\n\nYour order has been placed successfully. Here are the details:\n\n
            Address: ${address}, ${city}, ${state}, ${postalCode}\n
            Phone: ${phone}\n
            This is Products ID :\n${products.map(product => `#- ${product.product}  : ${product.quantity}`).join('\n')}\n\n
            Thank you for shopping with us!`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
