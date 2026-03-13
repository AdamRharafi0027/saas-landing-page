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
        className="flex w-full h-20 border-white/10 border-b justify-between items-center px-2 lg:px-10"
      >
        <Logo />
        <NavBarLinks />
        <HeaderCTA />
      </motion.header>
    </>
  );
};

export default Header;
