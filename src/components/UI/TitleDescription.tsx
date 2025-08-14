"use client";
import React from "react";
import { TypeTitleDescription } from "@/lib/types";
import { motion } from "motion/react";
import { revealTextVariant } from "@/lib/variants";

const TitleDescription = ({
  title,
  subtitle,
  des,
  isTheLastWordHighlighted,
}: TypeTitleDescription) => {
  const classVariable = "text-3xl md:text-5xl font-bold text-dark-gray my-3 ";
  const styledTitle = isTheLastWordHighlighted ? (
    <h1 className={classVariable}>
      {title.split(" ").slice(0, -1).join(" ")}
      <span className="text-primary text-md">
        {" "}
        {title.split(" ").slice(-1)[0]}{" "}
      </span>
    </h1>
  ) : (
    <h1 className={classVariable}>{title}</h1>
  );
  return (
    <motion.div
      variants={revealTextVariant}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="my-12 "
    >
      <h2 className="text-primary text-sm  lg:text-md 2xl:text-xl font-bold ">
        {" "}
        {subtitle}
      </h2>
      {styledTitle}
      <p className="text-dark-gray">{des}</p>
    </motion.div>
  );
};

export default TitleDescription;
