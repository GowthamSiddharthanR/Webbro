import React from 'react'
import "../CSS/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function Footer1() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img className="h-[70%] w-[80%] ml-8" alt="Logo Icon" title="Logo Icon" src="Images/logoupdate.png" />
                    <h1 className='text-2xl tracking-[1px] font-bold text-center font-poppins animate-bounce'><span className='text-[#d95245]'>W</span>EB<span className='text-[#d95245]'>B</span>RO</h1>

                    {/* <a href="/about">Learn More</a> */}
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:info@webbro.com">info@webbro.com</a></p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: No: 01, Whitefield cross, </p>
                    <p>Main road, Pondicherry</p>
                    <p>605100</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons ">
                        <a className="hover:animate-bounce" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} /> </a>
                        <a className="hover:animate-bounce" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className="hover:animate-bounce" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className="hover:animate-bounce" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 WEBBRO. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
