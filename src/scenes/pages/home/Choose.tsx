import TitleDescription from "@/components/UI/TitleDescription";
import { chooseData } from "@/lib/contants";
import { TChoose } from "@/lib/types";
import React from "react";

const Choose = () => {
  return (
    <section className="container">
      <TitleDescription
        title="why our clients choose us "
        subtitle="why choose us "
        des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation "
      ></TitleDescription>

      {/* why choose us items */}

      <div className=" grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8  place-items-center">
        {chooseData.map((c) => (
          <ChooseItem key={c.id} {...c}></ChooseItem>
        ))}
      </div>

      {}
    </section>
  );
};

export default Choose;

const ChooseItem = ({ title, desc, id }: TChoose) => {
  return (
    <article className=" bg-light-gray rounded-2xl p-7">
      <h2 className="text-5xl font-bold text-primary ">0{id}.</h2>

      <h1 className="text-2xl my-4 font-bold">{title}</h1>
      <p>{desc}</p>
    </article>
  );
};
