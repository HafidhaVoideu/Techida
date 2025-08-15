"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { motion } from "motion/react";
export const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border-dark-gray border rounded-full"
      whileTap={{ scale: 0.9 }}
      animate={{
        rotate: theme === "dark" ? 0 : 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {theme === "dark" ? (
        <motion.div
          key="sun"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Sun size={24} className="text-dark-gray" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Moon size={24} className="text-dark-gray" />
        </motion.div>
      )}
    </motion.button>
  );
};
