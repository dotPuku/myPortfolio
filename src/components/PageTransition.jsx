"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isMounted ? { opacity: 0, y: 20, filter: "blur(5px)" } : false}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
