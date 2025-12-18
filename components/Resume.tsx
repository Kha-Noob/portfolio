"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react";

const educationData = [
  {
    year: "2023 - Present",
    title: "Software Engineering",
    sub: "FPT Universisty(FPTU)",
    desc: "Nghiên cứu sâu về kiến trúc Microservices, Java Spring Boot và tích hợp AI vào giải pháp ERP thực tế."
  },
  {
    year: "2020 - 2023",
    title: "Chuyên Tin Học",
    sub: "THPT Chuyên Lê Thánh Tông (Quảng Nam)",
    desc: "Học tập trong môi trường chuyên biệt, tập trung giải quyết các bài toán thuật toán phức tạp bằng ngôn ngữ C++."
  }
];

const awardData = [
  { year: "2022-2023", title: "Giải Khuyến Khích", event: "Olympic Tin học Miền Trung - Tây Nguyên" },
  { year: "2021", title: "Giải Khuyến Khích", event: "Olympic Tin học Duyên Hải & Đồng Bằng Bắc Bộ" },
  { year: "2022", title: "Giải Khuyến Khích", event: "Sáng tạo KH-KT tỉnh Quảng Nam" },
  { year: "2020-2023", title: "Thành viên", event: "Đội tuyển HSG Chuyên Tin cấp Tỉnh" }
];

const experienceData = [
  {
    year: "2024 - 2025",
    title: "Project Lead // LiteFlow ERP",
    desc: "Xây dựng hệ thống quản lý tích hợp AI Grok và thanh toán VNPAY. Đây là bước nhảy vọt từ tư duy thuật toán sang sản phẩm thực tế."
  },
  {
    year: "2023 - 2024",
    title: "Web Competition & Hackathon Participant",
    desc: "Tích cực tham gia các sân chơi lập trình Web và Hackathon để rèn luyện kỹ năng Next.js và làm việc nhóm dưới áp lực cao."
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 text-white">
          Career <span className="text-purple-500 underline decoration-double">Path.</span>
        </h2>
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase">Algorithm Origins to Modern Web</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Cột 1: Education */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <GraduationCap className="text-purple-500" />
            <h3 className="text-2xl font-black italic uppercase">Education</h3>
          </div>
          <div className="space-y-8 border-l-2 border-white/5 pl-6 ml-2">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-purple-400 font-mono text-[10px] font-bold">{edu.year}</span>
                <h4 className="text-lg font-bold text-white uppercase mt-1">{edu.title}</h4>
                <p className="text-gray-500 text-xs font-bold mb-2">{edu.sub}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cột 2: Awards (Đây là điểm nhấn của ông) */}
        <div className="space-y-10 bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <Trophy className="text-yellow-500" />
            <h3 className="text-2xl font-black italic uppercase">Achievements</h3>
          </div>
          <div className="space-y-6">
            {awardData.map((award, idx) => (
              <motion.div whileHover={{ x: 5 }} key={idx} className="flex gap-4 items-start">
                <div className="mt-1"><Award size={16} className="text-yellow-500/50" /></div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">{award.event}</h4>
                  <p className="text-purple-500 font-mono text-[10px] uppercase mt-1">{award.title} // {award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cột 3: Experience */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <Briefcase className="text-blue-500" />
            <h3 className="text-2xl font-black italic uppercase text-white">Experience</h3>
          </div>
          <div className="space-y-8 border-l-2 border-white/5 pl-6 ml-2">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                <span className="text-blue-400 font-mono text-[10px] font-bold">{exp.year}</span>
                <h4 className="text-lg font-bold text-white uppercase mt-1">{exp.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}