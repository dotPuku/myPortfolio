"use client";

import { Download, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.aside
      initial={isMounted ? { opacity: 0, x: -20 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full md:w-[320px] shrink-0 bg-white dark:bg-[#1e293b] rounded-3xl overflow-hidden flex flex-col items-center pb-6 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40 relative z-10 transition-colors duration-300 border border-slate-200 dark:border-transparent"
    >
      {/* Banner */}
      <div className="h-32 w-full bg-slate-100 dark:bg-[#1e293b] rounded-t-3xl relative border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Avatar with Green Dot */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative -mt-16 mb-4 w-32 h-32 rounded-full border-4 border-white dark:border-[#1e293b] overflow-visible bg-slate-200 dark:bg-slate-800 transition-colors duration-300"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <Image
            src="https://drive.google.com/uc?export=view&id=1LP3xv5m-3Of177auB2ICBh6ESwrP6SQM"
            alt="Puskar Mondal"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-[#1e293b] rounded-full transition-colors duration-300 z-10"></div>
      </motion.div>

      {/* Name and Title */}
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300 uppercase">PUSKAR MONDAL</h1>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-medium transition-colors duration-300 uppercase">Full Stack Developer</p>

      {/* Social Icons */}
      <div className="flex gap-4 mb-6">
        {/* GitHub */}
        <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://github.com/dotPuku"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-[#181717] dark:hover:bg-[#181717] transition-all duration-300 shadow-sm dark:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          </a>
        </motion.div>
        {/* LinkedIn */}
        <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
          <a
            href="https://www.linkedin.com/in/puku"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all duration-300 shadow-sm dark:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
        </motion.div>
      </div>

      <div className="w-full px-8 mb-6">
        <div className="h-px bg-slate-200 dark:bg-slate-700 w-full mb-6 transition-colors duration-300"></div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <ContactItem 
            icon={<Mail size={18} />} 
            label="Email" 
            value="dotpuku@gmail.com" 
          />
          <ContactItem 
            icon={<MapPin size={18} />} 
            label="Location" 
            value="North 24 Pgs, WB, India" 
          />
        </div>
      </div>

      {/* Download CV */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://drive.google.com/file/d/1dBL2NDR5gUFJYuTExWkz37LUoFem7miX/view"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest overflow-hidden transition-all duration-300 shadow-lg shadow-black/5 bg-primary text-white hover:bg-black dark:hover:bg-white dark:hover:text-slate-900 active:bg-black dark:active:bg-white dark:active:text-slate-900"
      >
        {/* Shimmer overlay */}
        <motion.span 
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" },
            tap: { x: "100%" }
          }}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" 
        />
        
        {/* Icon Container */}
        <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full shrink-0 group-hover:bg-white/30 group-active:bg-white/30 transition-colors">
          <Download size={14} strokeWidth={2.5} />
        </span>
        
        <span className="relative z-10">RESUME</span>
      </motion.a>
    </motion.aside>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-900/20 dark:border-white/10 bg-slate-50/50 dark:bg-slate-800/40 transition-colors duration-300">
      <div className="shrink-0 text-slate-900/60 dark:text-white/40">
        {icon}
      </div>

      <div className="w-px h-8 bg-slate-900/10 dark:bg-white/10"></div>

      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-bold text-slate-900/60 dark:text-white/40 uppercase tracking-widest mb-0.5">{label}</span>
        <span className="text-sm font-semibold truncate text-slate-900/60 dark:text-white/40">
          {value}
        </span>
      </div>
    </div>
  );
}
