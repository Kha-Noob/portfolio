"use client";
import { Github, Facebook, MessageCircle, Phone, Mail, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#030014] pt-20 pb-10 px-6 overflow-hidden">
      {/* Hiệu ứng tia sáng quét ngang */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Cột 1: Brand & Status */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-black italic tracking-tighter text-white uppercase">
              <span className="text-purple-500">Minh Kha</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-light">
              Kỹ sư phát triển hệ thống tập trung vào tính ổn định và hiệu suất cao. 
              Hiện đang nghiên cứu sâu về kiến trúc <span className="text-white">Microservices</span> và <span className="text-white">AI Automation</span>.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-500/60 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Status: Available for new opportunities
            </div>
          </div>

          {/* Cột 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Projects", "Skills", "Resume"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 uppercase tracking-tighter">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:khabt2005@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white group">
                <Mail size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                khabt2005@gmail.com
              </a>
              <a href="tel:0777550588" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white group">
                <Phone size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
                0777.550.588
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © 2025 Tran Duy Minh Kha. Build with Next.js & Java Spirit.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Kha-Noob" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://www.facebook.com/minhhkhaa.td.3" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} /></a>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-500 group"
            >
              <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}