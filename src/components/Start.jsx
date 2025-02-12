"use client"
import React, { useState } from 'react'
import "../CSS/Start.css"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function Start() {

    const [isShaking, setIsShaking] = useState(false);

    const handleButtonClick = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);  // Stop shaking after animation
    };

    return (
        <div>

            <div className='start text-[white] justify-items-center content-center'>
                <h1 className='text-4xl lg:text-7xl font-[poppins] font-bold starthead animate-bounce'>Welcome to
                    <span className='text-[#FF6F61] startsub font-[poppins]'> W</span>
                    EB<span className='text-[#FF6F61] startsub font-[poppins]'>B</span>RO</h1>
                <h1 className=' text-lg lg:text-2xl startsub1 font-medium'>"Transforming Ideas into Reality </h1>
                <h1 className='text-sm lg:text-lg mb-2 startsub2 font-medium'>Start Your Journey Today!"</h1>
                <Link href="/login" > <button
                    className={`scale ${"ctaButton"} ${isShaking ? "shake" : ''}`}
                    onClick={handleButtonClick}
                >
                    <span className='animate-pulse'>Lets get started.</span>
                </button></Link>
                <div className='absolute bottom-5 text-sm'>powered by Spartans <FontAwesomeIcon icon={faFire} className="text-red-500 text-2xl" /></div>
            </div>
        </div>
    )

}

