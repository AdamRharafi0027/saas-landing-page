"use client";
import Logo from "@/components/ui/Logo";
import NavBarLinks from "./NavBarLinks";
import HeaderCTA from "./HeaderCTA";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex w-full h-20 backdrop-blur-lg bg-[#09090B]/80 border-b border-white/5 justify-between items-center px-2 lg:px-10 "
      >
        <Logo />
        <NavBarLinks />
        <HeaderCTA />
      </motion.header>
    </>
  );
};

export default Header;
