"use client";
import React, { useEffect, useRef, useState } from "react";
import { menu_items } from "@/lib/contants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import { MenuIcon, X } from "lucide-react";
import { menuVariants } from "@/lib/variants";

import dynamic from "next/dynamic";
import { MenuLinks } from "./MenuLinks";
import { MobileMenu } from "./MobileMenu";

import { motion } from "motion/react";
// ** TOGGLE BUTTON

const ToggleButton = dynamic(
  () => import("./ToggleButton").then((mod) => mod.ToggleButton),
  { ssr: false }
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollPoistion, setScrollPosition] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  // SCROLL EVENT

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //clickoutside event

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`${
        scrollPoistion > 1
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
          ref={ref}
        />

        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="
        h-auto w-[100px] md:w-[110px]
       lg:w-[120px]"
          />
        </Link>

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

          {!isMenuOpen ? (
            <motion.div
              className="block lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key="menu"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <MenuIcon size={28} className="text-dark-gray" />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              className="block lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <X size={28} className="text-dark-gray" />
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
