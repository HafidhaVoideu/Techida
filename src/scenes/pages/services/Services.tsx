import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import React from "react";
import { servicesData } from "@/lib/contants";
import { TServiceItem } from "@/lib/types";
import { MoveRight } from "lucide-react";

import Link from "next/link";
import Opacity from "@/components/Animation/Opacity";
import Pricing from "./Pricing";

const Services = () => {
  return (
    <section>
      <Banner
        path="Home / Services"
        title="our services"
        description="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment "
      ></Banner>

      <ServicesList></ServicesList>

      <Pricing></Pricing>
    </section>
  );
};

const ServiceItem = ({
  icon: Icon,
  id,
  title,
  description,
  link,
}: TServiceItem) => {
  return (
    <article className=" text-dark-gray bg-light-gray  flex flex-col items-start justify-center gap-4 p-6  max-w-[500px]  mx-auto rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className=" text-primary mb-4">
        <Icon size={62}></Icon>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>

      <Link className="capitalize text-primary font-bold" href={link}>
        learn more{" "}
        <MoveRight className="  ml-4 inline-block" size={28}></MoveRight>{" "}
      </Link>
    </article>
  );
};

export const ServicesList = () => {
  return (
    <Opacity>
      <div className="container">
        {/* services list */}

        <TitleDescription
          subtitle="our services "
          title="What We’re Offering?"
          des=" As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation
"
        ></TitleDescription>

        <TitleDescription title="" subtitle="" des=""></TitleDescription>
        <section className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              id={service.id}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </section>
      </div>
    </Opacity>
  );
};

export default Services;
