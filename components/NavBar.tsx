"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Theo dõi hành động cuộn chuột để đổi màu thanh Nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 px-4"
    >
      <div 
        className={`
          flex items-center gap-2 md:gap-8 px-6 md:px-10 py-3 rounded-full border transition-all duration-500
          ${isScrolled 
            ? "bg-black/60 backdrop-blur-xl border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]" 
            : "bg-white/[0.03] backdrop-blur-md border-white/10"
          }
        `}
      >
        {/* Logo hoặc Tên viết tắt */}
        <div className="hidden md:block mr-4">
          <span className="text-white font-black text-sm tracking-tighter uppercase italic">
            <span className="text-purple-500">Minh Kha</span>
          </span>
        </div>

        {/* Danh sách các Link điều hướng */}
        <div className="flex gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Nút Hire Me nhanh */}
        <div className="ml-4 pl-4 border-l border-white/10">
          <a 
            href="mailto:khabt2005@gmail.com"
            className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}