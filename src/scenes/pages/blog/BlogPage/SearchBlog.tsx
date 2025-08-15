import React from "react";

import { categoriesData, recentPostData, tagsData } from "@/lib/contants";

import { TCateogoriesProps, TRecentPostProps } from "@/lib/types";

import Image from "next/image";

import { Search } from "lucide-react";

import { motion } from "motion/react";

const SearchBlog = () => {
  return (
    <section className="flex-[1] bg-light-gray p-4 flex flex-col gap-8 self-start text-dark-gray">
      <div>
        <SearchTitle title="Search"></SearchTitle>
        <SearchInput></SearchInput>
      </div>

      {/* categories */}

      <div>
        <SearchTitle title="Categories"></SearchTitle>

        {categoriesData.map((x) => (
          <CategoryItem key={x.id} {...x}></CategoryItem>
        ))}
      </div>

      {/* recent posts */}
      <div>
        <SearchTitle title="Recent Post"></SearchTitle>
        {recentPostData.map((x) => (
          <RecentPostItem key={x.id} {...x}></RecentPostItem>
        ))}
      </div>

      {/* tagd */}
      <div>
        <SearchTitle title="Tags"></SearchTitle>
        {tagsData.map((x) => (
          <TagItem key={x.id} {...x}></TagItem>
        ))}
      </div>
    </section>
  );
};

export default SearchBlog;

// ** search section items

const RecentPostItem = ({ date, title, image }: TRecentPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="flex justify-between gap-6 items-center mb-4 group rounded-2xl cursor-pointer"
    >
      <motion.div
        className="relative w-[60px] h-[60px] shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ rotate: 2 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover"
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
        />
      </motion.div>

      <div className="flex-1/2">
        <motion.h1
          className="font-bold my-2 text-sm max-w-[300px]"
          whileHover={{ color: "green" }} // Change to your primary color
        >
          {title}
        </motion.h1>
        <p className="text-xs font-semibold">{date}</p>
      </div>
    </motion.article>
  );
};

const TagItem = ({ title = "" }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-2xl mx-1 my-2
                 transition-all duration-300 ease-in-out
                 hover:bg-primary hover:text-white hover:scale-105 cursor-pointer text-sm lg:text-md  "
    >
      {title}
    </motion.button>
  );
};

const CategoryItem = ({ title, count }: TCateogoriesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileHover={{
        x: 5,
      }}
      className="py-2 px-1 cursor-pointer "
    >
      <p className="text-sm md:text-md hover:text-primary">
        {title} <span className="text-gray-400 mr-3 "> ({count})</span>
      </p>
    </motion.div>
  );
};

const SearchTitle = ({ title = "" }) => {
  return (
    <motion.h1
      className="font-bold text-lg: md:text-xl capitalize mb-4 max-w-[fit-content]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {title}
      <motion.div
        className="h-[2px] bg-primary mt-1"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.h1>
  );
};

const SearchInput = () => {
  return (
    <motion.div className="flex" whileHover={{ scale: 1.01 }}>
      <motion.input
        type="text"
        name="search"
        className="border-gray-400 bg-white py-2 px-3 flex-[8]"
        whileFocus={{
          borderColor: "green", // Your primary color
          boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
        }}
      />
      <motion.button
        className="bg-primary flex-[1] flex items-center justify-center"
        whileHover={{ backgroundColor: "var(rgb(--light-gray))" }} // Darker shade of primary
        whileTap={{ scale: 0.95 }}
      >
        <Search color="white" />
      </motion.button>
    </motion.div>
  );
};
