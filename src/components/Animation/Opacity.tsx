"use client";
import React from "react";
import { motion } from "motion/react";

type tOpacityProps = { children: React.ReactNode };

const Opacity = ({ children }: tOpacityProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Opacity;
