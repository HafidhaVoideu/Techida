"use client";
import React from "react";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import FAQ from "@/components/UI/FAQ";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Tag } from "lucide-react";
import { Calendar } from "lucide-react";

import Image from "next/image";
import page from "./../../../app/signup/page";

const Blog = () => {
  return (
    <section>
      <Banner
        path="Home / Blog"
        title="our blog"
        description="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment"
      ></Banner>

      <section className="container">
        <TitleDescription
          subtitle="blog"
          title="our blog"
          des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation"
        ></TitleDescription>
        {/* blogs */}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
            <BlogItem key={x}></BlogItem>
          ))}
        </div>

        {/* pagination */}

        <div className="flex gap-2 items-center justify-center mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
            <PaginationItem key={x} page={x}></PaginationItem>
          ))}
        </div>
      </section>

      <FAQ></FAQ>
    </section>
  );
};

export default Blog;

const BlogItem = () => {
  return (
    <article className="bg-light-gray rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/assets/portfolio/port4.jpg"
          alt="How to learn JavaScript easily"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-2">
            <Calendar className="text-primary"></Calendar>

            <span className="font-semibold">22/12/2025</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Tag className="text-primary"></Tag>

            <span className="font-semibold">web</span>
          </div>
        </div>
        <h2 className="text-dark-gray font-bold text-xl leading-snug line-clamp-2">
          How to Learn JavaScript Easily With This Method
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          earum id assumenda ad neque recusandae, quasi deleniti voluptatum eos
          vel quas molestias?
        </p>

        <Link
          href="/blog/1"
          aria-label="Read more about learning JavaScript"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          Read More
          <MoveRight size={22} />
        </Link>
      </div>
    </article>
  );
};

const PaginationItem = ({ page = 0 }) => {
  return (
    <button className="bg-primary font-bold  flex items-center justify-center  h-[35px] w-[35px] rounded-full text-white">
      {page}
    </button>
  );
};
