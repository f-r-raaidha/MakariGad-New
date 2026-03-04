"use client";

import { motion } from "framer-motion";

 function HomeGradientIntroText() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white py-16 px-8 rounded-3xl shadow-xl text-center max-w-3xl mx-auto"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Our Platform
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                We combine innovation, technology, and creativity to deliver
                impactful digital solutions tailored for growth.
            </p>
        </motion.div>
    );
}

export default HomeGradientIntroText;