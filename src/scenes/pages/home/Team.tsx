import TitleDescription from "@/components/UI/TitleDescription";
import React from "react";

import { ICONS, teamData } from "@/lib/contants";
import { Tteam } from "@/lib/types";

import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="container">
      <TitleDescription
        subtitle="team"
        title="our team"
        des=" As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation"
      ></TitleDescription>

      {/* team members */}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-6">
        {teamData.map((t) => (
          <TeamItem key={t.id} {...t}></TeamItem>
        ))}
      </div>
    </section>
  );
};

export default Team;

const TeamItem = ({
  name,
  photo,
  job,
  id,
  facebook,
  Linkedin,
  youtube,
  Instagram,
}: Tteam) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <Image
        src={photo}
        alt={name}
        width={300}
        height={300}
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      ></Image>

      <div className="p-6 flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">{name}</h2>

        <h3 className="text-md font-semibold">{job}</h3>

        <div className="flex gap-2">
          {ICONS.map((s) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 transition-colors duration-200"
              key={s.id}
              href={s.href}
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
