"use client";

import { educationData } from "../../data/education.js";
import { motion } from "framer-motion";

export default function EducationPage() {
  const data = educationData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40 border border-slate-200 dark:border-transparent h-full text-slate-600 dark:text-slate-300 transition-colors duration-300"
    >
      <motion.div variants={item} className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300 uppercase">{data.title}</h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"
        ></motion.div>
      </motion.div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-4 transition-colors duration-300">
        {data.timeline.map((edu, index) => (
          <motion.div 
            variants={item}
            whileHover="hover"
            whileTap="tap"
            key={index} 
            className="mb-10 ml-8 relative cursor-pointer"
          >
            <motion.div 
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.25 },
                tap: { scale: 0.9 }
              }}
              initial="initial"
              className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_#ffffff] dark:shadow-[0_0_0_4px_#1e293b] transition-all duration-300"
            ></motion.div>
            <motion.div 
              variants={{
                initial: { x: 0 },
                hover: { x: 4 },
                tap: { x: 0 }
              }}
              className="text-primary text-sm font-bold mb-2 tracking-wider transition-transform duration-300"
            >
              {edu.year}
            </motion.div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300 uppercase">{edu.degree}</h3>
            <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
