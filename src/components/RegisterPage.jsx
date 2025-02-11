"use client"
import React, { useState } from 'react'
import "../CSS/RegisterPage.css"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const[success,setSuccess]=useState("");
    const router= useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are required!");
            return;
        } else {
            setError("")
        }
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if(res.ok){
                const form = e.target;
                form.reset();
                setSuccess("Registered Sucessfully");
                router.push("/login");
            }else{
                console.log("error ocurrs")
            }
        } catch (error) {
            console.log("error occured",error)
        }
    }
    return (
        <div className='regbody'>
            <div className="register-container">
            {success && (
                        <div className='bg-blue-500 text-white'>{success}</div>
                    )}
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Username" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button type="submit">Register</button>
                    {error && (
                        <div className='bg-red-500 mt-2 text-white'>{error}</div>
                    )}
                    <Link href={"/login"}><h1 className='mt-5 text-right text-sm '>Already have an account? <span className='underline'>Login</span></h1></Link>
                </form>
            </div>
        </div>
    )
}
