import { ProjectStatus } from "@/types";
import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long")
}).refine((data) => data.confirmPassword===data.password,{
    path: ["confirmPassword"],
    message: "Password do not match"
});

export const resetPasswordSchema = z.object({
    newPassword: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm Password is required"),
}).refine((data) => data.confirmPassword === data.newPassword, {
    path: ["confirmPassword"],
    message: "Password do not match"
});

export const forgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
});


export const workspaceSchema = z.object({
    name: z.string().min(3, "Workspace name must be at least 3 characters long"),
    color: z.string().min(3,"Colors must be atleast three characters"),
    description: z.string().optional(),
});

export const projectSchema = z.object({
    title: z.string().min(3, "Project name must be at least 3 characters long"),
    description: z.string().optional(),
    status: z.nativeEnum(ProjectStatus),
    startDate: z.string().min(1, "Start date is required"),
    dueDate: z.string().min(1, "Due date is required"),
    members: z.array(
        z.object({
            user: z.string(),
            role: z.enum(["manager", "contributor", "viewer"]),
        })
    ).optional(),
    tags: z.string().optional()
});
