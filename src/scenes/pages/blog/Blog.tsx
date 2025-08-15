"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import FAQ from "@/components/UI/FAQ";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Tag } from "lucide-react";
import { Calendar } from "lucide-react";

import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

import { staggerContainerVariants, staggerItemVariants } from "@/lib/variants";

import { motion } from "motion/react";
import SkeletonCard from "@/components/UI/SkeletonCard";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const blogItems = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Banner
        path="Home / Blog"
        title="Our Blog"
        description="Stay updated with the latest insights, tips, and trends in technology, business, and innovation."
      />
      <section className="container">
        <TitleDescription
          subtitle="Blog"
          title="Our blog"
          des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation"
        ></TitleDescription>
        {/* blogs */}

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-content-center place-items-center gap-8"
        >
          {loading
            ? Array(blogItems)
                .fill(0)
                .map((x, i) => (
                  <SkeletonCard key={`skeleton-${i}`}></SkeletonCard>
                ))
            : Array(blogItems)
                .fill(0)
                .map((x, i) => (
                  <BlogItem id={i} key={`blogItem-${i}`}></BlogItem>
                ))}
        </motion.div>

        {/* pagination */}

        {/* <div className="flex gap-2 items-center justify-center mt-12">
          {[1, 2, 3, 4].map((x) => (
            <PaginationItem key={x} page={x}></PaginationItem>
          ))}
        </div> */}
      </section>

      <FAQ></FAQ>
    </section>
  );
};

export default Blog;

const BlogItem = ({ id = 1 }) => {
  return (
    <motion.article
      variants={staggerItemVariants}
      className="bg-light-gray rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl max-w-[400px]"
    >
      {/* Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/assets/blogItem.jpg"
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
            <Calendar size={20} className="text-primary"></Calendar>

            <span className="text-xm md:text-sm font-semibold">22/12/2025</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Tag size={20} className="text-primary "></Tag>

            <span className="font-semibold text-xm md:text-sm ">web</span>
          </div>
        </div>
        <h2 className="text-dark-gray font-bold text-lg md:text-xl leading-snug line-clamp-2">
          How to Learn JavaScript Easily With This Method
        </h2>

        <p className="text-dark-gray text-sm md:text-base leading-relaxed line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          earum id assumenda ad neque recusandae, quasi deleniti voluptatum eos
          vel quas molestias?
        </p>

        <Link
          href={`blog/${id}`}
          aria-label="Read more about learning JavaScript"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
        >
          Read More
          <MoveRight size={22} />
        </Link>
      </div>
    </motion.article>
  );
};

// const PaginationItem = ({ page = 0 }) => {
//   return (
//     <button className="bg-primary font-bold  flex items-center justify-center  h-[35px] w-[35px] rounded-full text-white">
//       {page}
//     </button>
//   );
// };
