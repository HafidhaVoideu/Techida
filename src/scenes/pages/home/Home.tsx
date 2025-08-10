"use client";
import React from "react";
import Hero from "./Hero";
import { ServicesList } from "../services/Services";
import { AboutWithoutFaq } from "../about/About";
import FAQ from "@/components/UI/FAQ";
import Choose from "./Choose";
import Statistics from "./Statistics";
import Team from "./Team";
import { ContactWithoutBanner } from "../Contact";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ServicesList></ServicesList>
      <AboutWithoutFaq></AboutWithoutFaq>
      <Choose></Choose>
      <Statistics></Statistics>
      <Team></Team>

      <Testimonials></Testimonials>
      <ContactWithoutBanner></ContactWithoutBanner>

      <FAQ></FAQ>
    </div>
  );
};

export default Home;
