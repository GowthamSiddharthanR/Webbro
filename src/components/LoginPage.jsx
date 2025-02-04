"use client"
import Link from 'next/link';
import '../CSS/LoginPage.css';
import { motion } from 'framer-motion';
export default function LoginPage() {



    return (
        <>
            <motion.div className='overflow-hidden '
                // animate={{ x: 0, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -500, opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "auto",
                }}
                
            > <div >
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
                <div className="login-wrapper">
                    <div className="login-side">

                        <div className="my-form__wrapper">
                            <div className="login-welcome-row">
                                <h1>Welcome back &#x1F44F;</h1>
                                <p>Please enter your details!</p>
                            </div>
                            <form className="my-form">
                                <div className="socials-row">
                                    <a
                                        href="#"
                                        title="Use Google"
                                    >
                                        <img src="/svg/google.svg" alt="Google" />
                                        Log in with Google
                                    </a>

                                </div>
                                <div className="divider">
                                    <div className="divider-line"></div>
                                    Or
                                    <div className="divider-line"></div>
                                </div>
                                <div className="text-field">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                    ></input>
                                    
                                </div>
                                <div className="text-field">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                        required
                                    ></input>
                                   
                                </div>
                                <Link href={"/home"}><input type="submit" className="my-form__button" value="Login" /></Link>
                                <div className="my-form__actions">
                                    <div className="my-form__row">
                                        <span>Did you forget your password? </span>
                                        <a href="#" title="Reset Password">
                                            Reset Password
                                        </a>
                                    </div>
                                    <div className="my-form__signup">

                                        <Link href={"/register"} title="Create Account">
                                            Create Account
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>





        </>
    )
}