"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, y = 20}){
    return (
        <motion.div
        initial={{ opacity: 0, y}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}