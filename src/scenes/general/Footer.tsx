import React from "react";

import { ourServices, siteMap, socials } from "@/lib/contants";

import Image from "next/image";

import { ICONS } from "@/lib/contants";
import { TFooterList } from "@/lib/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stable-gray ">
      <div className="footer py-8 px-2">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8  lg:place-items-center">
          {/* logo */}
          <div className="text-white capitalize">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className=" mb-4 width-[90px] height-[9px] md:width-[140px] height-[140px]  "
            />

            <p className=" text-sm md:text-md">
              Lorem ipsum dolor sit amet aspernatur exercitationem fugiat.
            </p>

            <div className="mt-4">
              <h3 className="font-bold text-sm md:text-md mb-4 ">follow us</h3>

              <div className="flex gap-2 items-center justify-center md:justify-start">
                {ICONS.map((x) => (
                  <Link
                    href={x.href}
                    key={x.id}
                    className="bg-primary p-2 rounded-full "
                  >
                    {x.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ListItem {...siteMap}></ListItem>

          <ListItem {...ourServices}></ListItem>

          <ListItem {...socials}></ListItem>
        </div>
        <p className="text-light-gray mt-6">
          ©2025 Created by: <span className="text-light-gray"> </span> Hafidha
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const ListItem = ({ id, elements, list }: TFooterList) => {
  return (
    <ul key={id} className="text-white capitalize  ">
      <li className=" text-sm md:text-md font-bold mb-4   ">{list}</li>
      {elements.map((e) => (
        <li
          key={e.id}
          className=" text-sm md:text-md flex ml-2 mb-4  hover:text-primary cursor-pointer transition-all duration-300 ease-in-out "
        >
          {" "}
          <ChevronRight fontSize={22}></ChevronRight>
          <Link href={e.href || "#"}>{e.label}</Link>
        </li>
      ))}
    </ul>
  );
};
