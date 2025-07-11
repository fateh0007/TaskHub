import { signInSchema} from "@/lib/schema";
import type { Sign } from "crypto";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Links, useNavigate } from "react-router";
import { useLoginMutation } from "@/hooks/use-auth";
import {toast} from "sonner";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/provider/auth-context";

type SigninFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
    const navigate = useNavigate();
    const {login} = useAuth();

    const form = useForm<SigninFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const {mutate, isPending}= useLoginMutation();

    const handleOnSubmit = (values: SigninFormData)=>{
        mutate(values, {
            onSuccess: (data) => {
                login(data);
                console.log(data);
                toast.success("Login successful");
                navigate("/dashboard");
            },
            onError: (error: any) => {
                const errorMessage = error.response?.data?.message || "An error occurred";
                console.log(error);
                toast.error(errorMessage)
            }
        });
    }

    return <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
        <Card className="max-w-md w-full shadow-xl ">
            <CardHeader className="text-center mb-3 justify-center">
                <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6">
                        <FormField
                            control = {form.control}
                            name = "email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="email@example.com"
                                            {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control = {form.control}
                            name = "password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex justify-between">
                                    <FormLabel>Password</FormLabel>
                                    <Link to="/forgot-password" className="text-blue-600 text-sm">Forgot password?</Link>
                                    </div>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type = "submit" className="w-full cursor-pointer" disabled={isPending}>
                            {isPending ? <Loader2 className="w-4 h-4 mr-2"/> : "Sign In"}
                        </Button>
                    </form>
                </Form>
                <CardFooter className="flex items-center justify-center mt-5">
                    <div className="flex items-center justify-center">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account? {" "} 
                                <Link to="/sign-up" className="text-blue-600 underline cursor-pointer ">Sign up</Link>
                            </p>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    </div>
}

export default SignIn;