"use client"
import React from 'react'
import "../../CSS/Home/Portfolio.css"
import { motion } from 'framer-motion'
import ScaleAnimation from '../ScaleAnimation'

export default function Portfolio() {
    return (
        <div className='pomain'>
            <div className='poheading'>Portfolio</div>
            <h1 className='text-5xl text-center mt-[-20px] text-[#FF6F61] font-black '>&#x291A;&#x2919;</h1>
            <div className='flex flex-wrap justify-evenly justify-center gap-5 items-center  md:mb-10 py-5 '>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg1.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg7.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg4.png' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg8.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg13.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg10.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg11.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg12.jpg' />
                    </a>
               </ScaleAnimation>
               <ScaleAnimation>
                    <a href="#" >
                        <img className="poimg" src='Images/pimg9.jpg' />
                    </a>
               </ScaleAnimation>
            </div>
        </div>
    )
}
