"use client";
import React, { useState } from "react";

import { menu_items } from "@/lib/contants";

import Image from "next/image";

import { MenuIcon } from "lucide-react";

import Link from "next/link";
import Button from "@/components/UI/Button";

import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { menuVariants, staggerMenuVariants } from "@/lib/variants";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [togggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header className="shadow-md z-50 sticky top-0 left-0 right-0 bg-background  ">
      <div className="relative flex items-center justify-between py-5 px-4 max-w-[1300px] mx-auto">
        {/* menu dev */}

        <AnimatePresence>
          {togggleMenu && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-background  md:hidden  absolute  top-21 left-0 w-full  shadow-lg z-20"
            >
              <motion.ul
                variants={menuVariants}
                className="text-dark-gray  font-bold  text-sm lg:text-lg flex flex-col items-center gap-y-4 py-4"
              >
                {menu_items.map((item) => (
                  <motion.li
                    onClick={() => setActiveLink(item.label)}
                    variants={staggerMenuVariants}
                    key={item.id}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className=" flex flex-col items-center gap-2">
                <Link href="/login">
                  <Button text="join now"></Button>
                </Link>
                <ToggleButton toggle={toggle} setToggle={setToggle} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DESKTOP  */}

        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="width-[90px] height-[9px] md:width-[140px] height-[140px]  "
        />

        <nav>
          {/* menu */}
          <ul className=" hidden md:flex gap-x-1   ">
            {menu_items.map((item) => (
              <li
                key={item.id}
                className="text-dark-gray font-[700]  text-sm  xl:text-md "
              >
                <Link
                  className={`px-4 py-2 rounded-md transition-colors duration-200
          ${
            activeLink === item.label
              ? "bg-primary text-white"
              : "text-gray-700 hover:bg-gray-100"
          }
        focus:outline-none focus:ring-2 focus:ring-primary`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/*  buttons*/}
        </nav>
        <div className="flex items-center gap-x-4">
          <div className="hidden md:block">
            <Link href="/login">
              <Button text="Join now"></Button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <ToggleButton toggle={toggle} setToggle={setToggle} />
          </div>

          <MenuIcon
            onClick={() => setToggleMenu(!togggleMenu)}
            className="block md:hidden"
            size={28}
          ></MenuIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ToggleButton = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="p-2 border-green-600 border-1 rounded-full md"
    >
      {toggle ? (
        <Sun size={24} className="text-dark-gray" />
      ) : (
        <Moon size={24} className="text-dark-gray" />
      )}
    </button>
  );
};
