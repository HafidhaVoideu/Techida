"use client";
import React, { forwardRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { mobileMenuContainer, mobileMenuItem } from "@/lib/variants";
import { TmobileMenuProps } from "@/lib/types";
import dynamic from "next/dynamic";
import { MenuLinks } from "./MenuLinks";

const ToggleButton = dynamic(
  () => import("./ToggleButton").then((mod) => mod.ToggleButton),
  { ssr: false }
);

export const MobileMenu = forwardRef<HTMLDivElement, TmobileMenuProps>(
  (
    { isMenuOpen, setIsMenuOpen, menu_items, activeLink, setActiveLink },
    ref
  ) => (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          key="mobile-menu"
          variants={mobileMenuContainer}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={ref}
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-gradient-to-b from-background/70 via-background/90 to-background lg:hidden absolute top-[100%] left-0 w-full shadow-lg z-20 py-6 backdrop-blur-md "
        >
          <MenuLinks
            items={menu_items}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setIsMenuOpen={setIsMenuOpen}
            variants={mobileMenuItem}
            isMobile
            className="flex-col items-center text-lg font-bood"
          />
          <div className="flex flex-col items-center gap-4 mt-4">
            <ToggleButton />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
);
MobileMenu.displayName = "MobileMenu";
