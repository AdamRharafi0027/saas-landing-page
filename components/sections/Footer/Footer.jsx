"use client"
import { Github, Linkedin, Sparkles, Twitter } from "lucide-react";
import Logo from "../../ui/Logo";

const  Footer =()=> {
  const footerLinks = {
    Product: ["Features", "Pricing", "Templates", "Integrations", "API"],
    Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "Status", "Privacy"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"]
  };

  return (
    <footer className="bg-[#09090B] border-t border-white/5 py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm max-w-sm">
              The AI writing assistant that helps teams turn rough ideas into polished content in seconds.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
               <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-white font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Draftly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer