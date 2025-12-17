"use client";
import { Send, Mail, MessageCircle, Phone, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-black italic mb-16 uppercase tracking-tighter">
        Get In <span className="text-purple-500">Touch</span>
      </h2>
      
      {/* Grid 4 cột cho các phương thức liên lạc */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {/* Facebook */}
        <a href="https://www.facebook.com/minhhkhaa.td.3" target="_blank" className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
          <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition">
            <Facebook className="text-blue-500" size={20} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Facebook</span>
        </a>
        
        {/* Telegram */}
        <a href="https://t.me/taokhongban" target="_blank" className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group">
          <div className="p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition">
            <MessageCircle className="text-purple-500" size={20} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Telegram</span>
        </a>

        {/* Phone */}
        <a href="tel:0777550588" className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3 hover:border-green-500/50 hover:bg-green-500/5 transition-all group">
          <div className="p-3 bg-green-500/10 rounded-xl group-hover:scale-110 transition">
            <Phone className="text-green-500" size={20} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Phone</span>
        </a>

        {/* Email */}
        <a href="mailto:khabt2005@gmail.com" className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3 hover:border-red-500/50 hover:bg-red-500/5 transition-all group">
          <div className="p-3 bg-red-500/10 rounded-xl group-hover:scale-110 transition">
            <Mail className="text-red-500" size={20} />
          </div>
          <span className="font-bold text-xs uppercase tracking-widest text-gray-400">Email</span>
        </a>
      </div>

      {/* Form nhắn tin giữ nguyên như bản trước */}
      <div className="max-w-2xl mx-auto bg-white/[0.02] p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500 transition text-white" />
            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500 transition text-white" />
          </div>
          <textarea placeholder="Your message..." rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500 transition text-white"></textarea>
          <button type="button" className="group w-full py-5 bg-purple-600 hover:bg-purple-700 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3">
            Send Signal <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}