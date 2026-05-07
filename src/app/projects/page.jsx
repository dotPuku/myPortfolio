"use client";

import { FolderGit2 } from "lucide-react";
import { projectsData } from "../../data/projects.js";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const data = projectsData;

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
    hidden: { opacity: 0, y: 20 },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((project) => (
          <motion.div
            variants={item}
            whileTap={{ scale: 0.98 }}
            key={project.id}
            className="bg-slate-50 dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 group hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 relative transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
                <FolderGit2 size={48} className="opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300" />
              </div>

              {/* Action Buttons - Visible on Mobile, Hover on Desktop */}
              <div className="absolute top-3 right-3 flex gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-200 shadow-md border border-slate-200/50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </motion.a>
                )}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:bg-black hover:text-white transition-all duration-200 shadow-md border border-slate-200/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </motion.a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-primary uppercase">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 transition-colors duration-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
