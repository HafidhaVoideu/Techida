import { TypeTitleDescription } from "@/lib/types";
import React from "react";

const TitleDescription = ({
  title,
  subtitle,
  des,
  isTheLastWordHighlighted,
}: TypeTitleDescription) => {
  const classVariable = "text-3xl md:text-5xl font-bold text-dark-gray my-3  ";
  const styledTitle = isTheLastWordHighlighted ? (
    <h1 className={classVariable}>
      {title.split(" ").slice(0, -1).join(" ")}
      <span className="text-primary"> {title.split(" ").slice(-1)[0]} </span>
    </h1>
  ) : (
    <h1 className={classVariable}>{title}</h1>
  );
  return (
    <div className="mb-8 capitalize">
      <h2 className=" text-primary text-md  md:text-lg font-bold  ">
        {" "}
        {subtitle}
      </h2>
      {styledTitle}
      <p>{des}</p>
    </div>
  );
};

export default TitleDescription;
