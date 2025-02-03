"use client"
import Hero from '@/components/About/Hero'
import WhyUs from '@/components/About/WhyUs'
import React from 'react'
import Lenis from "lenis";
import { useEffect } from "react";


export default function page() {
    useEffect(()=>{
      const lenis = new Lenis();
      const time = 1000;
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    },[])
  return (
    <>
    <Hero/>
    <WhyUs/>
    </>
  )
}

