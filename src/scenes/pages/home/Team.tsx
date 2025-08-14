import TitleDescription from "@/components/UI/TitleDescription";
import React from "react";

import { ICONS, teamData } from "@/lib/contants";
import { Tteam } from "@/lib/types";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";

const Team = () => {
  return (
    <section className="container">
      <TitleDescription
        subtitle="Team"
        title="Our Team"
        des="Meet the talented professionals behind our success—dedicated experts who work together to deliver innovative solutions and exceptional results."
      />

      {/* team members */}

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] place-items-center gap-6"
      >
        {teamData.map((t) => (
          <TeamItem key={t.id} {...t}></TeamItem>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;

const TeamItem = ({ name, photo, job }: Tteam) => {
  return (
    <motion.article
      variants={staggerItemVariants}
      className="bg-light-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <Image
        src={photo}
        alt={name}
        width={300}
        height={300}
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      ></Image>

      <div className="p-6 flex flex-col gap-0 items-center">
        <h2 className="text-2xl font-bold text-dark-gray">{name}</h2>

        <h3 className="text-md font-semibold text-dark-gray">{job}</h3>

        <div className="flex gap-2 mt-3">
          {ICONS.map((s) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-gray hover:text-primary-500 transition-colors duration-200"
              key={s.id}
              href={s.href}
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
