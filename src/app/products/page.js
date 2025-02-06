"use client"

import Lenis from "lenis";
import Content from '@/components/Products/Content'
import Hero from '@/components/Products/Hero'
import React from 'react'
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
    <div>
        <Hero/>
        <Content/>
    </div>
  )
}
