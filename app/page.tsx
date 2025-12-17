"use client";
// 1. Import đầy đủ các components
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Resume from "../components/Resume"; 
import Contact from "../components/Contact";
import Footer from "../components/Footer"; // Đã thêm dòng này

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      
      {/* 2. Hiệu ứng Background Aura */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* 3. Nội dung chính */}
      <div className="relative z-10">
        <NavBar />
        
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Projects - ĐÃ XÓA ĐOẠN H2 THỪA GÂY LẶP TIÊU ĐỀ */}
        <section id="projects">
          {/* Không truyền props thủ công nếu ProjectCard đã có sẵn dữ liệu bên trong */}
          <ProjectCard /> 
        </section>

        {/* Section 3: Skills */}
        <div id="skills">
          <Skills />
        </div>

        {/* Section 4: Resume */}
        <div id="resume">
          <Resume />
        </div>

        {/* Section 5: Contact */}
        <div id="contact">
          <Contact />
        </div>

        {/* 4. ĐÃ THAY THẾ FOOTER SƠ SÀI BẰNG COMPONENT XỊN */}
        <Footer />
      </div>
    </main>
  );
}