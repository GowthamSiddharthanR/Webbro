"use client"
import Link from 'next/link';
import { useState } from 'react';
import 'typeface-poppins';
import { signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

const Header = () => {

    const {data:session}=useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };


    return (
        <header className="bg-[#4A90E2] text-white py-1 sticky top-0 z-50 px-2 md:px-10 ">
            <div className="w-auto mx-auto flex justify-between items-center">
                {/* Logo and Name */}
                <div className="flex items-center space-x-2">
                    <img className="h-[60px] w-[70px] " alt="Logo Icon" title="Logo Icon" src="/Images/logoupdate.png" />
                    <h1 className='text-2xl tracking-[1px] font-bold font-poppins animate-bounce'>
                        <span className='text-[#d95245] '>W</span>EB<span className='text-[#d95245]'>B</span>RO</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">

                    <Link href="/home" className=" hover:text-gray-900">Home</Link>
                    <Link href="/products" className="hover:text-gray-900 ">Products</Link>
                    <Link href="/services" className="hover:text-gray-900 ">Services</Link>
                    <Link href="/about" className="hover:text-gray-900">About</Link>
                    <Link href="/contact" className="hover:text-gray-900">Contact</Link>
                    
                    {/* Logout Button */}
                    <div className="relative items-center inline-block text-left">
                   
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="py-1 pl-1  pr-4 hover:bg-[#e3e3e3ed] hover:text-[#302f2f] text-[#ffffffe1] bg-[#000000ac]  flex gap-2 items-center font-bold rounded-full"
                        >
                          
                            <img className='h-[30px] rounded-full w-[30px]' src={session?.user?.image||"svg/user.svg"} /><span>{session?.user?.name}</span>
                        </button>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute left-[-10px] mt-1 w-32 text-white rounded-md shadow-xl"
                            >
                                <ul className="py-2">
                                    <li className="px-4 py-2  cursor-pointer"> <button

                                        onClick={() => signOut()}
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                                    >
                                        Sign Out
                                    </button></li>

                                </ul>
                            </motion.div>
                        )}
                    </div>

                </nav>

                {/* Mobile Menu Button */}
                <div
                    type="button"
                    className="md:hidden text-3xl focus:outline-none cursor-pointer"
                    onClick={toggleMobileMenu}
                >
                    &#9776;
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="absolute top-16 left-0 right-0 bg-[#4A90E2] text-white md:hidden z-10">
                        <div className="flex justify-between items-center px-6 ">
                            <div className="text-sm font-semibold"></div>
                            <div
                                type="button"
                                onClick={closeMobileMenu}
                                className="text-white cursor-pointer text-3xl"
                            >
                                &times;
                            </div>
                        </div>
                        <ul className="flex flex-col items-center space-y-3 pb-4">
                        <li>
                                <div className="relative inline-block text-left">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="px-3 py-2 bg-[#d95245]  hover:bg-gray-500 flex items-center text-white rounded-md"
                                    >
                                        <img className='h-[25px] mr-3 w-[25px]' src='/svg/user.svg' /><span>{session?.user?.name}</span>
                                    </button>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute bottom-[-10px] left-28 mt-1 w-32 text-white rounded-md shadow-xl"
                                        >
                                            <ul className="py-2">
                                                <li className="px-4 py-2  cursor-pointer"> <button

                                                    onClick={() => signOut()}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                                                >
                                                    Sign Out
                                                </button></li>

                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            </li>
                            <li><Link href="/home" className="hover:text-gray-400" onClick={closeMobileMenu}>Home</Link></li>
                            <li><Link href="/services" className="hover:text-gray-400" onClick={closeMobileMenu}>Services</Link></li>
                            <li><Link href="/products" className="hover:text-gray-400" onClick={closeMobileMenu}>Products</Link></li>
                            <li><Link href="/about" className="hover:text-gray-400" onClick={closeMobileMenu}>About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400" onClick={closeMobileMenu}>Contact</Link></li>
                            
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
