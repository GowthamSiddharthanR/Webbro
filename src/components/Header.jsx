"use client"
import Link from 'next/link';
import { useState } from 'react';
import 'typeface-poppins';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#4A90E2] text-white py-1 sticky top-0 z-50 px-10 ">
            <div className="w-auto mx-auto flex justify-between items-center">
                {/* Logo and Name */}
                <div className="flex items-center space-x-2">
                <img className = "h-[60px] w-[70px] " alt="Logo Icon" title="Logo Icon" src="/Images/logoupdate.png" />
                <h1 className='text-2xl tracking-[1px] font-bold font-poppins '>
                    <span className='text-[#d95245]'>W</span>EB<span className='text-[#d95245]'>B</span>RO</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/home" className="hover:text-gray-400">Home</Link>
                    <Link href="/products" className="hover:text-gray-400">Products</Link>
                    <Link href="/services" className="hover:text-gray-400">Services</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>

                    {/* Logout Button */}
                  <Link href={"/"}>  <div
                        type="button"
                        onClick={() => alert('Back to Dashboard?')}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                    >
                        Dashboard
                    </div></Link>
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
                            <li><Link href="/home" className="hover:text-gray-400" onClick={closeMobileMenu}>Home</Link></li>
                            <li><Link href="/services" className="hover:text-gray-400" onClick={closeMobileMenu}>Services</Link></li>
                            <li><Link href="/products" className="hover:text-gray-400" onClick={closeMobileMenu}>Products</Link></li>
                            <li><Link href="/about" className="hover:text-gray-400" onClick={closeMobileMenu}>About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-400" onClick={closeMobileMenu}>Contact</Link></li>
                            <li>
                                <Link href={"/"}> <div
                                    type="button"
                                    onClick={() => alert('Back to Dashboard?')}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                                >
                                   Dashboard
                                </div></Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
