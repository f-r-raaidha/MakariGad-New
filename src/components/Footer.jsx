"use client";

import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

function Footer() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <footer className="bg-white border-t border-gray-200 mt-24">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            >
                {/* Column 1 */}
                <motion.div variants={item} className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-wide text-gray-900">
                        MyLogo
                    </h2>

                    <div className="flex gap-5 text-xl text-gray-600">
                        {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                            (Icon, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className="cursor-pointer hover:text-black transition-colors duration-300"
                                >
                                    <Icon />
                                </motion.div>
                            )
                        )}
                    </div>
                </motion.div>

                {/* Column 2 */}
                <motion.div variants={item} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Site Map
                    </h3>

                    <div className="flex flex-col gap-3">
                        {["Home", "About", "Services", "Contact"].map((link) => (
                            <Link
                                key={link}
                                href="#"
                                className="relative text-gray-600 hover:text-black transition-all duration-300 group"
                            >
                                {link}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Column 3 */}
                <motion.div variants={item} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Address
                    </h3>

                    <div className="text-gray-600 space-y-2 leading-relaxed">
                        <p>123 Modern Street</p>
                        <p>Business District</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                    </div>
                </motion.div>

                {/* Column 4 */}
                <motion.div variants={item} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Contact
                    </h3>

                    <div className="space-y-3 text-gray-600">
                        <motion.p
                            whileHover={{ x: 5 }}
                            className="cursor-pointer hover:text-black transition-all duration-300"
                        >
                            +1 (123) 456-7890
                        </motion.p>

                        <motion.p
                            whileHover={{ x: 5 }}
                            className="cursor-pointer hover:text-black transition-all duration-300"
                        >
                            hello@example.com
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom line */}
            <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MyCompany. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer