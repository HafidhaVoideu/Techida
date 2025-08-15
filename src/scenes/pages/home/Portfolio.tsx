import Banner from "@/components/UI/Banner";
import FAQ from "@/components/UI/FAQ";
import TitleDescription from "@/components/UI/TitleDescription";
import { TportfolioProps } from "@/lib/types";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { filtersData, portfolioData } from "@/lib/contants";

import { AnimatePresence, motion } from "motion/react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const filterdData = useMemo(() => {
    return activeTab == "all"
      ? portfolioData
      : portfolioData.filter((x) => x.projectType == activeTab);
  }, [activeTab]);

  return (
    <section>
      <Banner
        path="Home / Portfolio"
        title="Our Portfolio"
        description="Explore our past projects and see how we’ve helped clients achieve success through innovative and reliable IT solutions."
      />
      <section className="container">
        <TitleDescription
          subtitle="Portfolio "
          title="Our portfolio"
        ></TitleDescription>

        {/* filter */}

        <ul className="flex items-center gap-6 mb-8">
          {filtersData.map((f) => (
            <li
              key={f.id}
              className={`relative font-bold text-md capitalize cursor-pointer transition-colors duration-300
        ${activeTab === f.label ? "text-primary" : "text-dark-gray"}
        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:rounded-full after:transition-all after:duration-300
        ${
          activeTab === f.label
            ? "after:w-full after:bg-primary"
            : "after:w-0 after:bg-transparent"
        }
      `}
              style={{}}
              onClick={() => setActiveTab(f.label)}
            >
              {f.label}
            </li>
          ))}
        </ul>
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  md:grid-cols-3  gap-6 auto-rows-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filterdData.map((p) => (
              <PortfolioItem key={`${p.id}-${p.projectName}`} {...p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <FAQ></FAQ>
    </section>
  );
};

export default Portfolio;

const PortfolioItem = ({
  projectName,
  projectType,
  image,
  technologies,
}: TportfolioProps) => {
  return (
    <motion.article
      variants={staggerItemVariants}
      layout
      exit="exit"
      className="relative overflow-hidden group rounded-lg shadow-lg "
    >
      <Image
        src={image}
        alt={projectName}
        width={300}
        height={300}
        objectFit="cover"
        className="w-full h-full  transition-transform duration-500 group-hover:scale-110 "
      ></Image>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Project name */}
        <h3 className="text-white text-lg font-semibold mb-2">{projectName}</h3>

        {/* Project type */}
        <p className="text-gray-300 text-sm mb-3">{projectType}</p>

        {/* Technologies list */}
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
