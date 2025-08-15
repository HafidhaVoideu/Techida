import React from "react";
import Link from "next/link";
const CustomLink = ({ title = "", subtitle = "", href = "" }) => {
  return (
    <p className="mt-8 text-md">
      {title}
      <Link
        href={href}
        className="relative font-semibold text-primary transition-all duration-300 ease-in-out ml-1
               hover:text-primary/80 hover:-translate-y-[2px] after:content-[''] after:absolute after:left-0 after:bottom-0
               after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      >
        {subtitle}
      </Link>
    </p>
  );
};

export default CustomLink;
