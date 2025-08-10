import React from "react";

import Image from "next/image";
import ParticlesComponent from "@/components/UI/Particles";

import Link from "next/link";
import Button from "@/components/UI/Button";

import { ICONS } from "@/lib/contants";
const Hero = () => {
  return (
    <section className="min-h-screen container">
      <ParticlesComponent />

      <div className=" flex flex-col items-start md:items-center justify-center gap-4 text-center py-10  md:flex-row ">
        {/* info container */}
        <div className=" flex flex-col items-start justify-center gap-y-8  mb-8 w-full md:flex-1/2  lg:flex-1/3 ">
          {/* icons */}

          <div>
            <div className="flex items-center  justify-start  gap-4 mb-4">
              {ICONS.map((icon) => (
                <Link
                  key={icon.id}
                  href={icon.href}
                  className="  p-2 rounded-xl  bg-light-gray text-dark-gray hover:text-primary transition-colors duration-300"
                >
                  {icon.icon}
                </Link>
              ))}
            </div>

            <h1 className="  capitalize max-w-[500px] leading-snug  text-4xl text-left lg:text-5xl font-bold text-dark-gray">
              {" "}
              Excellent IT <strong className="text-primary">
                Solutions
              </strong>{" "}
              For your success
            </h1>
          </div>

          <p className=" max-w-[400px] text-left text-dark-gray font-500">
            loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, cumque, quibusdam, voluptates, quisquam voluptatum
            quibusdam voluptates quisquam voluptatum quibusdam voluptates
          </p>

          <Button text="Join now"></Button>
        </div>

        {/* image  container */}

        <Image
          src="/assets/main.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="width-full h-auto  flex-1/2  "
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
