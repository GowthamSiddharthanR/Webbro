"use client"
import SContent from '@/components/Services/SContent'
import SHero from '@/components/Services/SHero'
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
    <SHero/>
    <SContent/>
    </>
  )
}
