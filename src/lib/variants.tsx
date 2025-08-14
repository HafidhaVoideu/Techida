import { Variants } from "motion/react";

export const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.8, 0.25, 1], // cubic-bezier for smoothness
      when: "beforeChildren",
      staggerChildren: 0.07, // delay between each menu item
    },
  },
};

export const staggerMenuVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export const mobileMenuContainer: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1], // smooth spring-like ease
      when: "beforeChildren",
      staggerChildren: 0.05, // items appear one after another
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -70 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
      x: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
  },
};

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 70 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
      x: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
    },
  },
};

// stagger animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15, // delay between each child
    },
  },

  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },

  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export const revealTextVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(1px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
    },
  },
};
