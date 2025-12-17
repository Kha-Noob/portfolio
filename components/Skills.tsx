"use client";
import { motion } from "framer-motion";
import { 
  SiSpringboot, SiTailwindcss, SiNextdotjs, SiReact, 
  SiBootstrap, SiOracle, SiJavascript, SiHtml5, SiCss3, SiOpenai 
} from "react-icons/si";
import { FaJava, FaServer } from "react-icons/fa";

const techStack = [
  { name: "Java Servlet", icon: <FaServer />, color: "#E76F00" },
  { name: "Oracle DB", icon: <SiOracle />, color: "#F80000" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "React JS", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML5/CSS3", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "VNPAY/AI", icon: <SiOpenai />, color: "#412991" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white">
          Technical <span className="text-purple-500">Arsenal</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 15,
              rotateY: -15,
              translateZ: 50
            }}
            className="relative group perspective-1000"
          >
            {/* Hiệu ứng bóng đổ phát sáng phía sau */}
            <div 
              className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ backgroundColor: tech.color }}
            />
            
            <div className="relative bg-[#0d0d1a] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-purple-500/50 group-hover:bg-[#15152e]">
              <div 
                className="text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}