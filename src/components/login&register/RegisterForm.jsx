import React from "react";
import { Button } from "../ui/button";
import {
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox"

const RegisterForm = ({ handleToggleForm }) => {
    return (
        <div className="px-8 mt-2">
            <CardHeader className="space-y-1">
                <CardTitle className="mb-2 text-2xl font-bold text-center">Register a new account</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5">
                <div className="grid">
                    <Input className="border-2 border-gray-600 py-5 rounded-lg" id="email" type="text" placeholder="Username" />
                </div>
                <div className="grid">
                    <Input className="border-2 border-gray-600 py-5 rounded-lg" id="email" type="email" placeholder="Email" />
                </div>
                <div className="grid">
                    <Input className="border-2 border-gray-600 py-5 rounded-lg" id="password" type="password" placeholder="Password" />
                </div>
                <div className="grid">
                    <Input className="border-2 border-gray-600 py-5 rounded-lg" id="password" type="password" placeholder="Repeat Password" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col">
                <div className="flex gap-16 my-2 items-center">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="term" />
                        <label
                            htmlFor="term"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember Me
                        </label>
                    </div>
                    <a href="/" className="text-blue-500 text-xs">Lost your password?</a>
                </div>
                <Button className="w-full h-10 font-semibold bg-blue-600 rounded-lg mb-2">Sign Up</Button>
                <span>Are you a member? <button onClick={handleToggleForm} className="text-blue-500">Login now</button></span>
                <span className="mt-10 text-center text-sm">Wanna see how Student, Instructor, or Admin look?</span>
                <a href="https://accountlp.thimpress.com/" className="text-blue-500 font-bold" >Click here to access Demo Account</a>
            </CardFooter>
        </div>
    )
}

export default RegisterForm