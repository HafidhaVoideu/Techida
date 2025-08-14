"use client";
import React from "react";

import Image from "next/image";
import ParticlesComponent from "@/components/UI/Particles";

import Link from "next/link";
import Button from "@/components/UI/Button";

import { ICONS } from "@/lib/contants";

import { motion } from "motion/react";

import { slideFromLeft, slideFromRight } from "@/lib/variants";
import { Icon } from "lucide-react";
const Hero = () => {
  return (
    <section className=" container">
      {/* <ParticlesComponent id="hero-particles" /> */}

      <div className=" flex flex-col items-start md:items-center justify-center gap-4 text-center  md:flex-row ">
        {/* info container */}
        <motion.div
          variants={slideFromLeft}
          initial="initial"
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // triggers only when in view
          whileInView="animate"
          className=" flex flex-col items-start justify-center gap-y-8  mb-8 w-full md:flex-1/2  lg:flex-1/3 "
        >
          {/* icons */}

          <div>
            <div className="flex items-center  justify-start  gap-4 mb-4">
              {ICONS.map(({ id, href, icon }) => (
                <Link
                  key={id}
                  href={href}
                  className=" p-2 rounded-xl  bg-light-gray text-dark-gray hover:text-primary transition-colors duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>

            <h1 className="capitalize max-w-[500px] leading-snug  text-4xl 2xl:text-5xl text-left font-bold text-dark-gray">
              {" "}
              Excellent IT <strong className="text-primary">
                Solutions
              </strong>{" "}
              For your success
            </h1>
          </div>

          <p className=" max-w-[600px] text-left text-dark-gray font-500">
            We provide innovative and reliable IT services tailored to meet your
            business goals. From cutting-edge software development to seamless
            system integration, our solutions empower your growth and ensure
            long-term success.
          </p>

          <Button href="/login" text="Join now"></Button>
        </motion.div>

        {/* image  container */}

        <motion.div
          variants={slideFromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className=" flex-1/2"
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/main.png"
            alt="Hero Image"
            height={500}
            width={500}
            priority
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
