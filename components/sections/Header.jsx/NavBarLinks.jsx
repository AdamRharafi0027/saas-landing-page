"use client";

import Button from "@/components/ui/Button";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";

const NavBarLinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linksStyle = "text-white hover:text-gray-300";

  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];



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
          <div className="absolute top-16 left-0 w-full bg-[#09090B] flex flex-col items-center gap-5 py-6 lg:hidden">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={linksStyle}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBarLinks;