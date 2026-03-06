"use client";

import { motion } from "framer-motion";

const LtlMap = () => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[500px]"
        >
            <iframe
                src="https://www.google.com/maps?q=Colombo&output=embed"
                className="w-full h-full rounded-xl"
                loading="lazy"
            ></iframe>
        </motion.div>
    );
}

export default LtlMap;