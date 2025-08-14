"use client";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import React from "react";
import { servicesData } from "@/lib/contants";
import { TServiceItem } from "@/lib/types";
import { MoveRight } from "lucide-react";

import Link from "next/link";
import Pricing from "./Pricing";

import { motion } from "motion/react";

import { Variants } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";

const Services = () => {
  return (
    <section>
      <Banner
        path="Home / Services"
        title="Our Services"
        description="Discover our wide range of professional IT solutions designed to help your business grow, innovate, and stay ahead in today’s competitive market."
      />
      <ServicesList></ServicesList>

      <Pricing></Pricing>
    </section>
  );
};

const ServiceItem = ({
  icon: Icon,
  id,
  title,
  description,
  link,
  variants,
}: TServiceItem & { variants?: Variants }) => {
  return (
    <motion.div variants={variants}>
      <motion.article
        className="group relative overflow-hidden text-dark-gray bg-light-gray flex flex-col items-start justify-center gap-4 p-6 max-w-[500px] mx-auto rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Animated overlay */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary z-0  pointer-events-none "
          variants={{
            rest: { width: "0%" },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Content */}
        <div className="relative z-10 text-primary mb-4 group-hover:text-white">
          <Icon className="service-icon" />
        </div>
        <h3 className="relative z-10  text-xl  md:text-2xl font-bold group-hover:text-white">
          {title}
        </h3>
        <p className="relative z-10 group-hover:text-white">{description}</p>

        <motion.div
          className="relative z-10"
          variants={{
            rest: { x: 0 },
            hover: { x: 5 },
          }}
        >
          <Link
            className="capitalize text-primary font-bold inline-flex items-center group-hover:text-white "
            href={link}
          >
            learn more <MoveRight className="ml-4 inline-block" size={28} />
          </Link>
        </motion.div>
      </motion.article>
    </motion.div>
  );
};

export const ServicesList = () => {
  return (
    <div className="container">
      {/* services list */}

      <TitleDescription
        subtitle="our services "
        title="What We’re Offering?"
        des="We deliver tailored software solutions that unify technology and innovation, giving you complete control over your projects and ensuring accurate, measurable results every time.
"
      ></TitleDescription>

      <TitleDescription title="" subtitle="" des=""></TitleDescription>
      <motion.section
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {servicesData.map((service) => (
          <ServiceItem
            key={service.id}
            variants={staggerItemVariants}
            icon={service.icon}
            id={service.id}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </motion.section>
    </div>
  );
};

export default Services;
