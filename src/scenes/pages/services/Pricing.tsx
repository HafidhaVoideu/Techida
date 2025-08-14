"use client";
import React from "react";
import TitleDescription from "@/components/UI/TitleDescription";
import { TPricingCard } from "@/lib/types";
import { pricingData } from "@/lib/contants";

import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";

import { motion } from "motion/react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";

const Pricing = () => {
  return (
    <section className="container mt-12">
      <TitleDescription
        subtitle="Pricing "
        title="Our pricing"
        des=" As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation
free
00$
per project

    single user
    no updates
    limited acces library
    lorem ipsum
    dolor sit amet

"
      ></TitleDescription>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8  justify-items-center"
      >
        {pricingData.map((p) => (
          <PricingCard key={p.id} {...p}></PricingCard>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({ options, offerType, price, trial }: TPricingCard) => {
  return (
    <motion.article
      variants={staggerItemVariants}
      className=" group border-2 border-primary/40  max-w-[350px]  w-full flex flex-col gap-8 items-start   shadow-sm p-8 rounded-2xl  hover:bg-primary  flex-1 transition-all duration-300 hover:scale-105"
    >
      {/* <Icon className="text-dark-gray" size={48}></Icon> */}

      <div className="">
        <h2 className="text-primary text-2xl font-bold capitalize mb-3 group-hover:text-light-gray">
          {offerType}
        </h2>

        <div className=" flex item-center justify-center gap-1 ">
          <p className="text-primary text-3xl font-bold group-hover:text-light-gray">
            {" "}
            ${price}
          </p>

          <span className="text-gray-300 font-semibold text-lg"> | Month </span>
        </div>
      </div>

      <button className="bg-primary px-5 py-3 w-full text-white rounded-3xl font-semibold group-hover:bg-white group-hover:text-primary">
        {trial}
      </button>

      <div className="w-full h-[1px] bg-gray-100  "></div>

      <ul className=" text-md group-hover:text-background">
        {options.map((o) => (
          <div key={o.id} className=" mb-4 flex items-center gap-3 flex-wrap ">
            <div className="">
              {o.isAvailable ? (
                <CircleCheck size={22}></CircleCheck>
              ) : (
                <CircleX size={22}></CircleX>
              )}
            </div>

            <li className="flex-1/2 text-md  "> {o.option}</li>
          </div>
        ))}
      </ul>
    </motion.article>
  );
};
