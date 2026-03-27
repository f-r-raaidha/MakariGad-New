"use client";


import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {useState} from "react";

export default function Header() {

   const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Plant Operations", href: "/operations" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-100px)]">
      <div className="w-full rounded-2xl bg-zinc-100/80 backdrop-blur-md shadow-lg border-b-[3px] border-gray-300">

        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 2, x: -20 }}
            animate={{ opacity: 4, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold"
          >
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    width={120}
                    height={50}
                    className="h-12 w-auto"
                />
            
            </Link>
            
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return(
              <Link
                key={link.name}
                href={link.href}
                className={`text-xl font-semibold transition-colors duration-300 ${isActive ? "text-zinc-900" : "text-neutral-600" } hover:text-sky-600`}
              >
                {link.name}
                {/*Please change hover, select colours later*/}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
                
              </Link>
                );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-neutral-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-gray-300 overflow-hidden"
            >
              <div className="flex flex-col px-8 py-6 gap-4">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return(
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
          text-lg font-medium transition-colors duration-300
          ${isActive ? "text-zinc-900" : "text-neutral-600"} 
          hover:text-sky-500
        `}

                  >
                    {link.name}
                  </Link>
                    );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}