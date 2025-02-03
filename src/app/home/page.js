"use client"

import Lenis from "lenis";
import Hero from "@/components/Home/Hero";
import OurService from "@/components/Home/OurService";
import OurDomain from "@/components/Home/OurDomain";
import Testimonials from "@/components/Home/Testimonials";
import { useEffect } from "react";

import Platform from "@/components/Home/Platform";

export default function home(){
   useEffect(()=>{
     const lenis = new Lenis();
     const time = 1000;
     const raf = (time) => {
       lenis.raf(time)
       requestAnimationFrame(raf)
     }
     requestAnimationFrame(raf)
   },[])
    return(
        <>
        <Hero/>
        <OurService/>
        <OurDomain/>
        <Testimonials/>
        <Platform/>
     
        </>
        
    )
}