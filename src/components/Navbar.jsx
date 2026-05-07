"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/skills", label: "SKILLS" },
  { path: "/education", label: "EDUCATION" },
  { path: "/projects", label: "PROJECTS" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.nav 
        initial={mounted ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white dark:bg-[#1e293b] rounded-2xl md:rounded-3xl p-4 md:px-8 shadow-md dark:shadow-lg border border-slate-200 dark:border-transparent relative z-20 transition-colors duration-300"
      >
        <div className="flex justify-between items-center relative w-full">
          {/* Mobile menu toggle (Left side) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-xl flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300 shadow-sm hover:bg-primary hover:text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wider">
            {navItems.filter(item => item.path !== "/").map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={clsx(
                    "relative transition-colors pb-1",
                    pathname === item.path
                      ? "text-primary"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Right side, Mobile & Desktop) */}
          <motion.button
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full transition-colors md:ml-auto bg-slate-100 dark:bg-slate-800 shadow-sm dark:shadow-md text-slate-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 md:bg-slate-100 md:dark:bg-slate-800"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#1e293b] shadow-2xl z-50 border-r border-slate-200 dark:border-slate-700 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                <span className="text-primary font-bold tracking-widest text-lg">MENU</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <ul className="flex flex-col py-4 font-semibold tracking-wider flex-1 overflow-y-auto">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "block px-8 py-4 transition-colors border-l-4",
                        pathname === item.path
                          ? "text-primary border-primary bg-slate-50 dark:bg-slate-800/50"
                          : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/30"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
