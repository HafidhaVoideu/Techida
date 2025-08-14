"use client";
import React from "react";
import Image from "next/image";
import { experienceData, statisticsData } from "@/lib/contants";
import { TExperienceBar, TExperienceItem } from "@/lib/types";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import Button from "@/components/UI/Button";
import FAQ from "@/components/UI/FAQ";

import { motion } from "motion/react";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/variants";
const About = () => {
  return (
    <section>
      <Banner
        title="About"
        path="Home / About"
        description="Learn more about who we are, our mission, and how we’ve been delivering trusted IT solutions that empower businesses to succeed."
      />

      <AboutWithoutFaq></AboutWithoutFaq>

      <FAQ></FAQ>
    </section>
  );
};

export default About;

export const AboutWithoutFaq = () => {
  return (
    <>
      <BestWorks></BestWorks>

      <ServiceComponent></ServiceComponent>

      <Experience></Experience>
    </>
  );
};

//  ** SERVICE COMPONENT **

function ServiceComponent() {
  return (
    <motion.article className="container flex flex-col  justify-between gap-12 lg:flex-row ">
      <motion.div
        variants={slideFromLeft}
        initial="initial"
        whileInView="animate"
        className="flex-1/2  order-2 lg:order-1"
        viewport={{ once: true, amount: 0.2 }} // triggers only when in view
      >
        <Image
          src="/assets/serviceW.svg"
          alt="Experience"
          width={400}
          height={400}
          priority
          className="w-full h-auto  order-2 lg:order-1"
        ></Image>
      </motion.div>

      <div className="flex-1/2  order-1 lg:order-2">
        <TitleDescription
          isTheLastWordHighlighted
          title="Delivering Professional IT Services"
          des="We provide end-to-end IT solutions that ensure a seamless experience, from initial planning to final delivery, helping your business thrive in a fast-changing digital environment."
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-2 gap-6  "
        >
          {experienceData.map((item) => (
            <ServiceCardComponent
              key={item.id}
              variants={staggerItemVariants}
              id={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

const ServiceCardComponent = ({
  title,
  icon: Icon,
  variants,
}: TExperienceItem) => {
  return (
    <motion.article variants={variants}>
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        className=" group relative overflow-hidden bg-light-gray  flex px-2 py-6 items-center justify-center md:justify-start gap-3 rounded-lg shadow-md w-full max-w-[300px] "
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

        <div className="text-primary  relative z-10 font-semibold group-hover:text-white">
          <Icon size={32} />
        </div>
        <h2 className="  text-sm md:text-md lg:text-lg relative z-10  text-center font-bold group-hover:text-white   ">
          {title}
        </h2>
      </motion.div>
    </motion.article>
  );
};

//  ** BEST WORK **

const BestWorks = () => {
  return (
    <motion.article className="container flex flex-col items-center justify-center gap-12 lg:flex-row ">
      <div className="flex-1/2 ">
        <TitleDescription
          isTheLastWordHighlighted
          subtitle="About us"
          title="The Best IT Solution Since 2015"
          des="Since 2015, we have been delivering innovative IT solutions that empower businesses to grow and adapt in the digital age. Our team combines expertise, creativity, and dedication to provide reliable services and exceptional results for our clients."
        />
        <Button href="/login" text="Join now"></Button>
      </div>

      <motion.div
        variants={slideFromRight}
        initial="initial"
        animate="animate"
        whileInView="animate"
        className="flex-1/2 order-1 md:order-2"
        viewport={{ once: true, amount: 0.2 }} // triggers only when in view
      >
        <Image
          src="/assets/serviceX.svg"
          alt="Experience"
          width={500}
          height={300}
          className="w-full h-auto"
          priority
        ></Image>
      </motion.div>
    </motion.article>
  );
};

// ** EXPERIENCE **

const Experience = () => {
  return (
    <section className=" container flex flex-col items-center justify-between gap-12 lg:flex-row   ">
      <div className="flex-1/2">
        <TitleDescription
          isTheLastWordHighlighted
          title="We Are Here To Provide IT Solutions With 20 Years Of Experience"
          des="With two decades of expertise, we deliver reliable and innovative IT solutions designed to meet your unique business needs and drive lasting success."
        />

        {/* Experience Bars */}

        <div className="max-w-[800px]">
          {statisticsData.map((x) => (
            <ExperinceBar key={x.id} {...x}></ExperinceBar>
          ))}
        </div>
      </div>

      <motion.div
        variants={slideFromRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1/2"
      >
        <Image
          src="/assets/serviceY.svg"
          alt="Experience"
          width={500}
          height={300}
          priority
          className="w-full h-auto"
        ></Image>
      </motion.div>
    </section>
  );
};

const ExperinceBar = ({ title, percentage }: TExperienceBar) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <h2 className="text-md lg: text-lg font-semibold mb-2">{title}</h2>

        <h2 className="text-md lg: text-lg font-semibold mb-2">
          {percentage}%
        </h2>
      </div>

      <div className="w-full rounded-2xl h-2 bg-light-gray">
        <motion.div
          className="h-2 rounded-2xl bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};
