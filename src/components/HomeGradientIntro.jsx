"use client";

import React from 'react';

import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function HomeGradientIntro() {
    const cards = [
        { id: 1, title: "Fast Performance", text: "Optimized and scalable solutions." },
        { id: 2, title: "Modern Design", text: "Clean UI with great UX principles." },
        { id: 3, title: "Secure System", text: "Built with security best practices." },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {cards.map((card) => (
                <motion.div
                    key={card.id}
                    variants={item}
                    whileHover={{ y: -8 }}
                    className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md text-center min-h-[220px] flex flex-col justify-center transition"
                >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {card.text}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default HomeGradientIntro;