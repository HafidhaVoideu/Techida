import React from "react";
import { type TBanner } from "@/lib/types";
import { motion, Variants } from "framer-motion";

const Banner = ({ path, title, description }: TBanner) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="bg-stable-gray  w-full text-white py-8 mb-8 capitalize overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container-banner"
      >
        <motion.p className="uppercase text-gray-300" variants={itemVariants}>
          {path}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold my-6 "
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p className="max-w-2xl text-gray-300" variants={itemVariants}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
