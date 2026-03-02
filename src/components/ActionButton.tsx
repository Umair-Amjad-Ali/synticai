"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function ActionButton({ children, onClick, className = "", type = "button" }: ActionButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "linear-gradient(to right, #1C75BC, #000000)"
      }}
      className={`text-white px-8 py-3 rounded-md font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1C75BC] focus:ring-offset-2 shadow-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}
