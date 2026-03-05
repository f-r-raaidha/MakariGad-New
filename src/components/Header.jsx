"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);

    // Load saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = !dark;
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Dashboard", href: "/dashboard" },
    ];

    // dark:bg-black/60

    // dark:bg-black/60
    // dark:text-gray-200
    //dark:text-gray-200
    return (
        <header className="sticky my-2 top-0 left-0 right-0 z-50  w-full backdrop-blur-md  rounded-xl  bg-white shadow-md  shadow-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className=" m px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold tracking-wide text-gray-900 "
                >
                    MyLogo
                </motion.div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.name}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href={link.href}
                                className={`relative text-gray-700  font-medium group `}
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black  transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Dark mode button */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-xl text-gray-700 dark:text-gray-200 hover:rotate-180 transition-transform duration-500"
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>
                </nav>

                {/* Mobile controls */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="text-xl text-gray-700 "
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl text-gray-700 "
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-700 dark:text-gray-200 font-medium hover:translate-x-2 transition-transform"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}