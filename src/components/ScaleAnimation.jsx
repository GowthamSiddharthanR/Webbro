"use client"
import { motion } from "framer-motion"

export default function ScaleAnimation({ children, className }) {
  return (
    <motion.div
    className={className}
    initial={{ scale: 0 }} // Start at size zero
    whileInView={{ scale: 1 }} // Transition to full size
    transition={{
        duration: 1, // Animation duration
        ease: "easeInOut", // Easing function
    }}
   >
     {children}
     </motion.div>
  )
}
