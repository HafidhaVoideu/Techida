"use client";
import React, { useEffect, useState } from "react";
import { menu_items } from "@/lib/contants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import { MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  menuVariants,
  staggerMenuVariants,
  mobileMenuContainer,
  mobileMenuItem,
} from "@/lib/variants";
import { TMenuLinksProps, TmobileMenuProps } from "@/lib/types";

import dynamic from "next/dynamic";
// ** TOGGLE BUTTON

const ToggleButton = dynamic(
  () => import("./ToggleButton").then((mod) => mod.ToggleButton),
  { ssr: false }
);
// const ToggleButton = ({}) => {
//   const { theme, setTheme, systemTheme } = useTheme();

//   const currentTheme = theme === "system" ? systemTheme : theme;
//   return (
//     <button
//       onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
//       className="p-2 border-dark-gray border rounded-full"
//     >
//       {currentTheme == "dark" ? (
//         <Sun size={24} className="text-dark-gray" />
//       ) : (
//         <Moon size={24} className="text-dark-gray" />
//       )}
//     </button>
//   );
// };

// ** MENU LINKS

const MenuLinks = ({
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

// ** MOBILE MENU

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  menu_items,
  activeLink,
  setActiveLink,
}: TmobileMenuProps) => (
  <AnimatePresence mode="popLayout">
    {isMenuOpen && (
      <motion.div
        variants={mobileMenuContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gradient-to-b from-background via-background/90 to-background/80 lg:hidden absolute top-17 left-0 w-full shadow-lg z-20 py-6"
      >
        <MenuLinks
          items={menu_items}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setIsMenuOpen={setIsMenuOpen}
          variants={mobileMenuItem}
          isMobile
          className="flex-col items-center"
        />
        <div className="flex flex-col items-center gap-4 mt-4">
          <ToggleButton />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollPoistion, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrollPoistion > 100
          ? " bg-gradient-to-b from-background via-background/90 to-background/70   "
          : ""
      }z-50 sticky top-0 `}
    >
      <div className="flex items-center justify-between py-5  container-banner ">
        <MobileMenu
          isMenuOpen={isMenuOpen}
          menu_items={menu_items}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="
        h-auto w-[90px] md:w-[105px]
       lg:w-[120px]"
        />

        <nav className="hidden lg:flex gap-x-1">
          <MenuLinks
            items={menu_items}
            variants={menuVariants}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </nav>

        <div className="flex items-center gap-x-4">
          <div className="hidden lg:block">
            <Link href="/login">
              <Button text="Join now" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ToggleButton />
          </div>

          <MenuIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden cursor-pointer"
            size={26}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
