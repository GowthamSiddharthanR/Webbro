"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../CSS/LoginRegister.css";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                console.log("Login error:", res.error);
                setError(res.error); // Show the exact error message
                return;
            }

            router.replace("/home"); // Redirect on successful login
        } catch (error) {
            console.log("Unexpected error:", error);
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="auth-container">
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="auth-card"
            >
                <button onClick={() => signIn("google")} className='googlebtn flex gap-3'>
                    <img height={25} width={25} src={"/svg/google.svg"} alt="Google Logo" />
                    Sign in with Google
                </button>

                <hr className='m-5' />

                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>

                    {error && (
                        <div className='bg-red-500 mt-2 text-left px-2 rounded-md w-fit text-sm text-white'>
                            {error}
                        </div>
                    )}

                    <Link href="/register">
                        <h1 className='mt-5 text-right text-sm'>
                            Don’t have an account? <span className='underline'>Register</span>
                        </h1>
                    </Link>
                </form>
            </motion.div>
        </div>
    );
}
