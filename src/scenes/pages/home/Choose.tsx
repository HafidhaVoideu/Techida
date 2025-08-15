"use client";
import TitleDescription from "@/components/UI/TitleDescription";
import { chooseData } from "@/lib/contants";
import { TChoose } from "@/lib/types";
import React from "react";

import { motion } from "motion/react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";
const Choose = () => {
  return (
    <section className="container">
      <TitleDescription
        title="Why our clients choose us "
        subtitle="Why choose us "
        des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation "
      ></TitleDescription>

      {/* why choose us items */}

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 "
      >
        {chooseData.map((c) => (
          <ChooseItem key={c.id} {...c}></ChooseItem>
        ))}
      </motion.div>

      {}
    </section>
  );
};

export default Choose;

const ChooseItem = ({ title, desc, id }: TChoose) => {
  return (
    <motion.article
      variants={staggerItemVariants}
      className=" bg-light-gray rounded-2xl p-7 "
    >
      <h2 className="text-4xl md:text-5xl font-bold text-primary ">0{id}.</h2>

      <h1 className="text-dark-gray text-2xl my-4 font-bold">{title}</h1>
      <p className="text-dark-gray">{desc}</p>
    </motion.article>
  );
};
