import React from "react";
import Image from "next/image";
import { experienceData, statisticsData } from "@/lib/contants";
import { TExperienceBar, TExperienceItem } from "@/lib/types";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import Button from "@/components/UI/Button";
import FAQ from "@/components/UI/FAQ";
const About = () => {
  return (
    <section>
      <Banner
        title="About"
        path="Home / About"
        description="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment."
      ></Banner>

      <AboutWithoutFaq></AboutWithoutFaq>

      <FAQ></FAQ>
    </section>
  );
};

export default About;

export const AboutWithoutFaq = () => {
  return (
    <>
      <div className="container">
        <BestWorks></BestWorks>

        <ServiceComponent></ServiceComponent>

        <Experience></Experience>
      </div>
    </>
  );
};

//  ** SERVICE COMPONENT **

function ServiceComponent() {
  return (
    <article className="mt-8 flex flex-col items-center justify-between gap-12 md:flex-row ">
      <Image
        src="/assets/service.png"
        alt="Experience"
        width={500}
        height={300}
        className="w-full h-auto  flex-1/2"
      ></Image>
      <div className="flex-1/2">
        <TitleDescription
          isTheLastWordHighlighted
          title="Delivering Professional IT Services"
          des="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment "
        ></TitleDescription>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {experienceData.map((item) => (
            <ServiceCardComponent
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

const ServiceCardComponent = ({ title, icon: Icon }: TExperienceItem) => {
  return (
    <div className=" bg-light-gray  flex px-2 py-6 items-center flex-start gap-4 rounded-lg shadow-md max-w-xl ">
      <div className="text-primary">
        <Icon size={32} />
      </div>
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>
    </div>
  );
};

//  ** BEST WORK **

const BestWorks = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-12 md:flex-row mt-6">
      <div className="flex-1/2">
        <TitleDescription
          isTheLastWordHighlighted
          subtitle="About us"
          title="The best IT solution since 2015"
          des="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment , Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas quibusdam libero quos rem unde, sequi distinctio eum excepturi nobis facere expedita sint nulla aliquam, odio ea laboriosam hic? Consectetur ullam eveniet"
        ></TitleDescription>

        <Button text="Join now"></Button>
      </div>
      <Image
        src="/assets/about.png"
        alt="Experience"
        width={500}
        height={300}
        className="w-full h-auto  flex-1/2"
      ></Image>
    </article>
  );
};

// ** EXPERIENCE **

const Experience = () => {
  return (
    <section className="mt-8 flex flex-col items-center justify-between gap-12 md:flex-row  ">
      <div className="flex-1/2">
        <TitleDescription
          isTheLastWordHighlighted
          title="We Are Here To IT Solution With 20 Years Of Experience"
          des="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment "
        ></TitleDescription>

        {/* Experience Bars */}

        <div>
          {statisticsData.map((x) => (
            <ExperinceBar key={x.id} {...x}></ExperinceBar>
          ))}
        </div>
      </div>

      <Image
        src="/assets/experience.png"
        alt="Experience"
        width={500}
        height={300}
        className="flex-1/2"
      ></Image>
    </section>
  );
};

const ExperinceBar = ({ title, percentage }: TExperienceBar) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between">
        <h2 className="text-md lg: text-lg font-semibold mb-2">{title}</h2>

        <h2 className="text-md lg: text-lg font-semibold mb-2">
          {percentage}%
        </h2>
      </div>

      <div className="w-full rounded-2xl h-2 bg-light-gray">
        <div
          className="h-2 rounded-2xl bg-primary"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
