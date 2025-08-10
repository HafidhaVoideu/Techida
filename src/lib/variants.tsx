export const menuVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

export const staggerMenuVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
