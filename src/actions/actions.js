"use server";

import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

function sanitize(value) {
    return value.replace(/[<>]/g, "");
}

export async function submitContact(prevState, formData) {

    const data = {
        firstName: sanitize(formData.get("firstName") || ""),
        lastName: sanitize(formData.get("lastName") || ""),
        email: sanitize(formData.get("email") || ""),
        message: sanitize(formData.get("message") || "")
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {

        const errors = {};

        result.error.errors.forEach((err) => {
            errors[err.path[0]] = err.message;
        });

        return {
            success: false,
            errors,
            values: data
        };
    }

    // Example secure backend logic
    // await db.insert(...)

    console.log("Validated form:", result.data);

    return {
        success: true,
        message: "Message sent successfully!"
    };
}