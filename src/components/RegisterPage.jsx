"use client"
import Link from 'next/link';
import '../CSS/LoginPage.css';
import { motion } from 'framer-motion';
export default function RegisterPage() {
    return (
        <>
            <>
                <motion.div className='overflow-hidden'
                    // animate={{ x: 0, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: 500, opacity: 0 }}
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
                                
                                <form className="my-form">
                                    <div className="socials-row">
                                        <a
                                            href="#"
                                            title="Use Google"
                                        >
                                            <img src="/Images/Gmail Icon.png" alt="Google" />
                                            Log in with Google
                                        </a>

                                    </div>
                                    <div className="divider">
                                        <div className="divider-line"></div>
                                        Or
                                        <div className="divider-line"></div>
                                    </div>
                                    <div className="text-field">
                                        <label >User name:</label>
                                        <input
                                            type="text"
                                            id="text"
                                            name="text"
                                            placeholder="First name"
                                            required
                                        ></input>

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
                                        <img className="lock" alt="Password Icon" src="/Images/PASSWORD.png" />
                                    </div>
                                    <input type="submit" className="my-form__button" value="Create Account" />
                                    <div className="my-form__actions">

                                        <div className="text-center flex-column ">
                                            <div><span>Already have an account?</span></div>
                                            <div className="my-form__signup"><Link href="/" title="Create Account" >
                                                Login
                                            </Link></div>
                                        </div>
                                        <span>---------------------------------------------------</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        </>
    )
}