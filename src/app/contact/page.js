"use client"
import Contact from '@/components/Contact/Contact'
import React from 'react'
import { useEffect } from "react";
import Lenis from "lenis";


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
            <Contact />
        </>
    )
}
