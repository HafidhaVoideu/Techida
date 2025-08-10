import React from "react";
import { type TBanner } from "@/lib/types";

const Banner = ({ path, title, description }: TBanner) => {
  return (
    <div className=" bg-black  w-full text-white p-8 mb-8">
      <p className="uppercase"> {path}</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-6 ">
        {title}
      </h1>
      <p className="max-w-2xl">{description}</p>
    </div>
  );
};

export default Banner;
