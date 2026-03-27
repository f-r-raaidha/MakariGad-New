"use server"

import axios from "axios";
import {z} from "zod";
import {redirect} from "next/navigation";
// import {connectDB} from "@/lib/helpers";
// import prisma from "../../../prisma";
import {revalidatePath} from "next/cache";

// TODO Created Schema
// const createTopicSchema = z.object({
//     firstName: z.string().min(3).regex(/[a-z-]/, {message: "Must Be Lowercase or With Dashes"}),
//     lastName: z.string().min(3).regex(/[a-z-]/, {message: "Must Be Lowercase or With Dashes"}),
//     email: z.string().min(3).regex(/[a-z-]/, {message: "Must Be Lowercase or With Dashes"}),
//     message: z.string().min(10)
// })

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

// OLD FORM Validation
// export  const handleSubmit=async(formformState,formData)=>{
//
//     // //     TODO Get Form data
//     const firstName = formData.get("firstName");
//     const lastName = formData.get("lastName");
//     const email = formData.get("email");
//     const message = formData.get("message");
//
//     const currentformState={
//         firstName,
//         lastName,
//         email,
//         message
//     };
//
//     const result = createTopicSchema.safeParse(
//         {
//             firstName: formData.get("firstName"),
//             lastName: formData.get("lastName"),
//             email: formData.get("email"),
//             message: formData.get("message"),
//         }
//     )
//
//     if (!result.success) {
//         return {
//             ...currentformState,
//             errors: result.error.flatten().fieldErrors
//         }
//     }
//
//     try {
//
//
//     }catch (e) {
//
//         console.log("Error ", e)
//         if(e instanceof Error) {
//             return {
//                 errors: {
//                     _form:e.message,
//                 }
//             }
//         }else {
//             return {
//                 errors: {
//                     _form:"Something Went Wrong",
//                 }
//             }
//
//         }
//
//     }
//
//     revalidatePath("/contact")
//
//     // TODO Redirect back to Snippets page
//     redirect(("/contact"))
//
// }


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

    try {
        // your API / DB logic here

        return {
            success: true,
            message: "Message sent successfully!",
            values: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
            errors: {},
        };

    } catch (e) {
        return {
            success: false,
            values,
            errors: {
                _form: ["Something went wrong. Please try again."],
            },
        };
    }
};

