"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, ChevronDown, Facebook, MessageCircle, Phone, Mail } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Backend Architecture", "Frontend Engineer"];
  const [statusText, setStatusText] = useState("");
  const fullStatus = "> SYSTEM_CHECK: STABLE // LATENCY: 14MS // READY.";

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setStatusText(fullStatus.slice(0, i));
      i++;
      if (i > fullStatus.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#030014]">
      
      {/* 1. Terminal Header - Thông số kỹ thuật thay vì tên */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 font-mono text-purple-500/40 text-[9px] tracking-[0.4em] uppercase z-20">
        {statusText}<span className="animate-pulse">_</span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 pt-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-purple-500/50" />
            <div className="font-mono text-purple-400 text-xs font-black tracking-[0.2em] uppercase flex items-center h-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <h1 className="text-[3.5rem] md:text-[5rem] font-black leading-[1.1] mb-8 tracking-tighter text-white uppercase">
            Trần Duy <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 italic">
              Minh Kha.
            </span>
          </h1>

          {/* 4. Slogan mới - Tập trung vào giá trị thực thi */}
          <div className="space-y-4 text-gray-400 text-sm md:text-base max-w-lg mb-10 leading-relaxed font-light italic">
            <p className="text-white font-medium not-italic">
              "Xây dựng hệ thống không chỉ là viết code, đó là nghệ thuật tối ưu hóa hiệu suất và khả năng mở rộng."
            </p>
            <p>
              Chuyên sâu <span className="text-purple-400">Java Spring Boot</span> để xử lý các logic nghiệp vụ phức tạp và tích hợp <span className="text-purple-400">AI-Driven Solutions</span> vào vận hành thực tế.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            <a href="/docs/TranDuyMinhKha_Fullstack_CV.pdf" download className="group px-8 py-3 bg-white text-black rounded-full font-black text-[10px] tracking-[0.2em] flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-xl shadow-purple-500/20">
              EXPLORE CV <Download size={16} />
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Kha-Noob" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition text-white"><Github size={18} /></a>
              <a href="https://www.facebook.com/minhhkhaa.td.3" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition text-blue-500"><Facebook size={18} /></a>
              <a href="https://t.me/taokhongban" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition text-sky-400"><MessageCircle size={18} /></a>
              <a href="tel:0777550588" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition text-green-400"><Phone size={18} /></a>
              <a href="mailto:khabt2005@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition text-red-400"><Mail size={18} /></a>
            </div>
          </div>
        </motion.div>

        {/* Cột Phải: Portrait */}
        <div className="relative hidden lg:block group">
          <div className="absolute -inset-10 z-0 pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity duration-1000">
             <img src="https://cdn.pixabay.com/photo/2017/08/30/07/56/dragon-2696140_1280.png" alt="Dragon" className="w-full h-full object-contain filter invert hue-rotate-[280deg]" />
          </div>

          <div className="relative border border-white/10 p-5 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl shadow-2xl overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-900 border border-white/5">
               <img src="/images/your-avatar.jpg" alt="Minh Kha" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" />
            </div>
            <div className="absolute top-0 right-0 p-10"><div className="w-10 h-10 border-t-2 border-r-2 border-purple-500 opacity-40" /></div>
            <div className="absolute bottom-10 left-10 w-full font-mono text-[8px] text-purple-500/40 tracking-[0.5em] uppercase">// LATENCY_OPTIMIZED</div>
          </div>
        </div>
      </div>
    </section>
  );
}