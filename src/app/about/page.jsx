"use client";

import { aboutData } from "../../data/about.js";
import { motion } from "framer-motion";

export default function AboutPage() {
  const data = aboutData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40 border border-slate-200 dark:border-transparent h-full text-slate-600 dark:text-slate-300 transition-colors duration-300"
    >
      <motion.div variants={item} className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300 uppercase">{data.title}</h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"
        ></motion.div>
      </motion.div>

      <motion.p variants={item} className="leading-relaxed mb-8 text-slate-600 dark:text-slate-400 transition-colors duration-300 whitespace-pre-wrap">
        {data.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data.details).map(([key, value]) => (
          <motion.div variants={item} key={key} className="flex gap-2 group">
            <span className="font-semibold text-primary w-24 group-hover:translate-x-1 transition-transform duration-200">{key}:</span>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">{String(value)}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
