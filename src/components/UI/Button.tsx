"use client";
import React from "react";
import Link from "next/link";

import { motion } from "motion/react";

type TButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;

  customClass?: string;
  href?: string; // if provided, renders as a link
  onClick?: () => void;
};

const Button = ({
  text,
  type = "button",
  disabled = false,
  href,
  onClick,
  customClass,
}: TButtonProps) => {
  const baseClasses = `
    hover:shadow-lg hover:scale-105 shadow-md font-sans tracking-wide border border-primary w-full justify-center max-w-[200px]
    text-sm md:text-md capitalize font-semibold hover:bg-white hover:text-gray-700
    transition-all duration-300 ease-in-out px-4  sm:px-6 py-3 bg-primary text-white rounded-3xl cursor-pointer ${customClass}
  `;

  if (href) {
    return (
      <Link href={href || "/login"} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
      whileHover={{
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
