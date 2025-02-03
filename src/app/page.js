"use client"
import LoginPage from "@/components/LoginPage";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
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
   <LoginPage/>
    </>
  );
}


