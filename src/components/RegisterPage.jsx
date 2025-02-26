"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "../CSS/LoginRegister.css";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are required!");
            return;
        }
        setError("");
        
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(data.message);
                router.push("/login");
            } else if (res.status === 400) { // Match backend status for existing user
                setError("User already exists with this email.");
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="auth-container">
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="auth-card"
            >
                {success && <div className='bg-blue-500 text-white'>{success}</div>}
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                    {error && <div className='bg-red-500 mt-2 text-left px-2 rounded-md w-fit text-sm text-white'>{error}</div>}
                    <Link href="/login">
                        <h1 className='mt-5 text-right text-sm'>Already have an account? <span className='underline'>Login</span></h1>
                    </Link>
                </form>
            </motion.div>
        </div>
    );
}