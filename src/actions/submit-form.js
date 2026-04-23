"use server"

import { z } from "zod";
import nodemailer from "nodemailer";

const createTopicSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long")
        .regex(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes allowed"),
    lastName: z
        .string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name is too long")
        .regex(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes allowed"),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address")
        .max(100, "Email is too long"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long"),
});

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

let transporter = null;

function getTransporter() {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            pool: true,
            maxConnections: 3,
        });
    }
    return transporter;
}

export const handleSubmit = async (formState, formData) => {
    const values = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const result = createTopicSchema.safeParse(values);

    if (!result.success) {
        return {
            success: false,
            values,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { firstName, lastName, email, message } = result.data;

    try {
        await getTransporter().sendMail({
            from: `"Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Response from Makarigad Contact Form`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
            `,
        });

        return {
            success: true,
            message: "Message sent successfully!",
            values: { firstName: "", lastName: "", email: "", message: "" },
            errors: {},
        };

    } catch (e) {
        console.error("Email error:", e);
        return {
            success: false,
            values,
            errors: {
                _form: ["Something went wrong. Please try again."],
            },
        };
    }
};