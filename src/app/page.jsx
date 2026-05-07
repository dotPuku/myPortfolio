"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar.jsx";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      router.replace("/about");
    }
  }, [router]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile: Only show Profile Card */}
      <div className="md:hidden mt-8">
        <Sidebar />
      </div>

      {/* Desktop: Show nothing (redirecting to /about) */}
      <div className="hidden md:block">
      </div>
    </motion.div>
  );
}
