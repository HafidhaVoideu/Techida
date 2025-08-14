import React from "react";

import { ourServices, siteMap, socials } from "@/lib/contants";

import Image from "next/image";

import { ICONS } from "@/lib/contants";
import { TFooterList } from "@/lib/types";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stable-gray ">
      <div className="footer py-8 px-2">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8  place-items-center">
          {/* logo */}
          <div className="text-white capitalize">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className=" mb-4 width-[90px] height-[9px] md:width-[140px] height-[140px]  "
            />

            <p className=" text-md">
              Lorem ipsum dolor sit amet aspernatur exercitationem fugiat.
            </p>

            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-4">follow us</h3>

              <div className="flex gap-2 items-center justify-center md:justify-start">
                {ICONS.map((x) => (
                  <Link
                    href={x.href}
                    key={x.id}
                    className="bg-primary p-2 rounded-full text-sm"
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
          ©2025 Created by: <span className="text-light-gray"> </span> erramix
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const ListItem = ({ id, elements, list }: TFooterList) => {
  return (
    <ul key={id} className="text-white capitalize text-center lg:text-left">
      <li className=" text-md font-bold mb-4 min-w-[180px]  ">{list}</li>
      {elements.map((e) => (
        <li
          key={e.id}
          className="ml-2 mb-4 min-w-[180px] hover:text-primary cursor-pointer transition-all duration-300 ease-in-out "
        >
          {" "}
          <Link href="#">{e.label}</Link>
        </li>
      ))}
    </ul>
  );
};
