"use client";

import Button from "@/components/ui/Button";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react"

const NavBarLinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linksStyle = "text-white hover:text-gray-300";

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};


  return (
    <>
      <nav className="relative flex items-center">
        
        <ul className="hidden lg:flex gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={linksStyle}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button
          classname="lg:hidden text-white bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          onclick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <TextAlignJustify className="w-5 h-5" />
          )}
        </Button>


        {mobileMenuOpen && (
  <motion.div
    variants={menuVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="fixed top-16 left-0 w-full bg-[#09090B]/70 backdrop-blur-xl 
    border-b border-white/10 flex flex-col items-center 
    py-8 gap-6 lg:hidden shadow-xl"
  >
    {links.map((link, index) => (
      <motion.a
        key={index}
        variants={linkVariants}
        href={link.href}
        onClick={() => setMobileMenuOpen(false)}
        className="text-white/80 text-lg font-medium tracking-wide 
        hover:text-white transition-all duration-300 
        hover:scale-110"
      >
        {link.name}
      </motion.a>
    ))}
  </motion.div>
)}
      </nav>
    </>
  );
};

export default NavBarLinks;