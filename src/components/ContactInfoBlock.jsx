"use client";

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 }
    }
};

const item = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

 function ContactInfoBlock() {
    return (
        <section className="py-8">
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-10"
                >

                    {/* CALL US */}
                    <motion.div
                        variants={item}
                        whileHover={{ x: 5 }}
                        className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8"
                    >
                        <h3 className="text-sky-500 text-lg font-semibold">
                            Call Us
                        </h3>

                        <div className="text-black space-y-1">
                            <p>Nepal - +977 9800000000</p>
                            <p>SL - +94 0710000000</p>
                        </div>
                    </motion.div>


                    {/* LOCATION */}
                    <motion.div
                        variants={item}
                        whileHover={{ x: 5 }}
                        className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8"
                    >
                        <h3 className="text-sky-500 text-lg font-semibold">
                            Location
                        </h3>

                        <div className="text-black space-y-1">
                            <p>Kathmandu, Nepal</p>
                            <p>Colombo, Sri Lanka</p>
                        </div>
                    </motion.div>


                    {/* EMAIL */}
                    <motion.div
                        variants={item}
                        whileHover={{ x: 5 }}
                        className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8"
                    >
                        <h3 className="text-sky-500 text-lg font-semibold">
                            Email
                        </h3>

                        <div className="text-black">
                            <p>info@company.com</p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}


export default ContactInfoBlock;