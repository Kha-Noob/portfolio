"use client";
import { Github, Play, Cpu, Database, CreditCard, Sparkles, ShieldCheck, Zap, Users, ExternalLink } from "lucide-react";

export default function ProjectCard() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="relative group bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-12 overflow-hidden backdrop-blur-3xl">
        
        {/* Glow hiệu ứng nền đậm chất hệ thống */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -z-10" />

        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] w-16 bg-purple-500" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
            Featured <span className="text-purple-500">Projects.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {/* Header: Title & Description */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400"><Cpu size={20} /></div>
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400"><Database size={20} /></div>
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-2xl text-pink-400"><CreditCard size={20} /></div>
              </div>
              <h3 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase leading-[0.9]">
                LiteFlow ERP
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-lg">
                Hệ thống quản trị tài nguyên doanh nghiệp tập trung, tối ưu hóa vận hành nhà hàng thông qua <span className="text-white font-medium">Auto-Query AI</span> và xử lý giao dịch <span className="text-purple-400">VNPAY</span> bảo mật.
              </p>
            </div>

            {/* Team & Contribution Section - Thể hiện tư duy Lead */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                  <Users size={12} /> Team Size
                </div>
                <p className="text-sm text-white font-bold italic uppercase tracking-tight">02 Developers</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Contribution</h4>
                <p className="text-sm text-purple-400 font-black italic uppercase tracking-tight">~60% Core System</p>
              </div>
            </div>

            {/* My Responsibilities - Chi tiết đóng góp chuyên môn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-2xl group/item hover:bg-white/[0.05] transition-colors">
                <Sparkles className="text-purple-500 shrink-0" size={18} />
                <p className="text-[11px] leading-relaxed text-gray-400">
                  <b className="text-gray-200">Backend Lead:</b> Thiết kế Database Architecture, xây dựng 40+ RESTful APIs lõi.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-2xl group/item hover:bg-white/[0.05] transition-colors">
                <ShieldCheck className="text-blue-500 shrink-0" size={18} />
                <p className="text-[11px] leading-relaxed text-gray-400">
                  <b className="text-gray-200">Payment:</b> Trực tiếp tích hợp luồng VNPAY IPN đảm bảo tính chính xác giao dịch 100%.
                </p>
              </div>
            </div>

            {/* Technical Stack Labels */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">// TECHNICAL STACK</h4>
              <div className="flex flex-wrap gap-2">
                {["Jakarta EE 11", "SQL Server", "OpenAI API", "VNPAY SDK", "Next.js"].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 hover:text-purple-400 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons - SỬA LẠI LINK DẪN TRỰC TIẾP VÀO CODE */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://youtu.be/IKlgj9m4Y84" 
                target="_blank" 
                className="flex items-center gap-3 px-10 py-4 bg-[#ff0000] text-white rounded-full font-black text-[10px] tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-red-500/20"
              >
                <Play size={16} fill="white" /> WATCH DEMO
              </a>
              <a 
                href="https://github.com/Kha-Noob/liteflow.git" 
                target="_blank" 
                className="flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-white/10 transition-all group/btn"
              >
                <Github size={16} /> VIEW SOURCE CODE 
                <ExternalLink size={12} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Visual Showcase: Sticky Mockup */}
          <div className="sticky top-12">
            <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/10 bg-[#050505] group/img shadow-2xl shadow-purple-500/10">
              <img 
                src="/images/liteflow-preview.jpg" 
                alt="LiteFlow ERP Presentation" 
                className="w-full h-auto object-contain transition-transform duration-1000 group-hover/img:scale-[1.05]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Floating Status Tag - Khẳng định chất lượng hệ thống */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase tracking-[0.2em]">System Uptime: 99.9%</span>
                  <Zap size={14} className="text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}