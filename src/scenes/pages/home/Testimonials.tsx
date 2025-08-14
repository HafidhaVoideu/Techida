import TitleDescription from "@/components/UI/TitleDescription";
import { TtestimonialsProps } from "@/lib/types";
import React from "react";
import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import Image from "next/image";
import { testimonialsData } from "@/lib/contants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/UI/carousel/EmblaCarousel";

const Testimonials = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <section className="container px-4">
      <TitleDescription
        subtitle="Testimonials"
        title="Customers Testimonials"
        des="Hear from our satisfied clients who have experienced the quality, reliability, and results our solutions deliver."
      />

      <EmblaCarousel slides={testimonialsData} options={OPTIONS} />
    </section>
  );
};

export const TestimonialCard = ({
  name,
  image,
  rating,
  testimonial,
}: TtestimonialsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const baseClass = "text-amber-400 star-icon";

  const MAX_CHARACTERS = 100;
  const truncatedTestimonial =
    testimonial.length > MAX_CHARACTERS
      ? `${testimonial.substring(0, MAX_CHARACTERS)}...`
      : testimonial;

  return (
    <article className="bg-light-gray px-6 mb-4 py-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[280px]  min-h-[250px] mx-2">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-4 mb-4">
        <div className="relative w-16 h-16 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-dark-gray">{name}</h3>
          <div className="flex justify-center md:justify-start gap-1 mt-1">
            {[...Array(fullStars)].map((_, i) => (
              <TiStarFullOutline key={`full-${i}`} className={baseClass} />
            ))}
            {hasHalfStar && (
              <TiStarHalfOutline key="half" className={baseClass} />
            )}
            {[...Array(emptyStars)].map((_, i) => (
              <TiStarOutline key={`empty-${i}`} className={baseClass} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-dark-gray italic">
        &quot;{truncatedTestimonial}&quot;
      </p>
    </article>
  );
};

export default Testimonials;
