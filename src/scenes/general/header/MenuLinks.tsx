"use client";
import React from "react";
import Link from "next/link";
import { staggerMenuVariants } from "@/lib/variants";
import { TMenuLinksProps } from "@/lib/types";
import { motion } from "motion/react";

export const MenuLinks = ({
  items,
  activeLink,
  setActiveLink,
  setIsMenuOpen,
  variants,
  className = "",
  isMobile = false,
}: TMenuLinksProps) => {
  const newItems = !isMobile ? items.slice(0, -1) : items;

  return (
    <motion.ul
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={` font-bold flex gap-4 ${className}`}
    >
      {newItems.map((item) => (
        <motion.li
          key={item.id}
          variants={staggerMenuVariants} // each item animates separately
          onClick={() => {
            if (setIsMenuOpen) setIsMenuOpen(false);
            setActiveLink(item.label);
          }}
        >
          <Link
            className={`px-4 py-2 rounded-md transition-colors font-semibold duration-200  text-sm xl:text-md ${
              activeLink === item.label
                ? "bg-primary  text-white "
                : "text-dark-gray "
            }`}
            href={item.href}
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
