import TitleDescription from "@/components/UI/TitleDescription";
import { TtestimonialsProps } from "@/lib/types";
import React from "react";

import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import Image from "next/image";
import { testimonialsData } from "@/lib/contants";

import { TiStarOutline } from "react-icons/ti";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // {
    ],
  };
  return (
    <section>
      <section className="container">
        <TitleDescription
          subtitle="testimonials"
          title="Customers Testmonials "
          des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation "
        ></TitleDescription>
      </section>

      {/* testimonials */}

      {
        <div className="container">
          <Slider {...settings} className="flex  justify-center gap-2 ">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} {...t}></TestimonialCard>
            ))}
          </Slider>
        </div>
      }
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({
  name,
  id,
  image,
  rating,
  testimonial,
}: TtestimonialsProps) => {
  return (
    <article
      className="
      bg-gradient-to-br from-[#A8E6A2]/50 via-[#7de78d]/30 to-[#49AF53]/20
  my-9
           p-2
         md:p-4
        lg:px-4
        lg:py-8
        max-w-[400px]
        rounded-xl
        bg-white/10
        backdrop-blur-md
        border border-white/20


        shadow-lg


        min-h-[250px]
      "
    >
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-start gap-4">
          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            className="rounded-full object-cover w-[70px] h-[70px]"
          />

          <div>
            <h2 className="font-bold mb-2 text-lg text-black">{name}</h2>
            <div className="flex gap-1 items-center">
              {/* Full Stars */}
              {Array.from({ length: Math.floor(rating) }, (_, i) => (
                <TiStarFullOutline
                  key={`full-${i}`}
                  color="#FFD700"
                  size={20}
                />
              ))}

              {/* Half Star */}
              {rating % 1 !== 0 && (
                <TiStarHalfOutline key="half" color="#FFD700" size={20} />
              )}

              {/* Empty Stars */}
              {Array.from(
                { length: 5 - Math.floor(rating) - (rating % 1 !== 0 ? 1 : 0) },
                (_, i) => (
                  <TiStarOutline key={`empty-${i}`} color="#FFD700" size={20} />
                )
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 text-black">{testimonial}</p>
      </div>
    </article>
  );
};
