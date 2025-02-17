"use client"
import React from 'react'
import { motion } from "framer-motion";

export default function LeftToRightAnimation({ children, className }) {
  return (
    <>
     <motion.div
      className={className}
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
    </>
  )
}
