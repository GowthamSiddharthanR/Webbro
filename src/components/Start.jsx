"use client"
import React, { useState } from 'react'
import "../CSS/Start.css"
import Link from 'next/link';
export default function Start() {

    const [isShaking, setIsShaking] = useState(false);

    const handleButtonClick = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);  // Stop shaking after animation
    };

    return (
        <div className='start text-[white] justify-items-center content-center'>
            <h1 className='text-4xl lg:text-7xl font-[poppins] font-bold starthead'>Welcome to
                <span className='text-[#d95245] startsub font-[poppins]'> W</span>
                EB<span className='text-[#d95245] startsub font-[poppins]'>B</span>RO</h1>
            <h1 className=' text-lg lg:text-2xl startsub1 font-medium'>"Transforming Ideas into Reality </h1>
            <h1 className='text-sm lg:text-lg mb-2 startsub2 font-medium'>Start Your Journey Today!"</h1>
           <Link href="/home" > <button
                className={`scale ${"ctaButton"} ${isShaking ? "shake" : ''}`}
                onClick={handleButtonClick}
            >
                <span>Lets get started.</span>
            </button></Link>

        </div>
    )

}

