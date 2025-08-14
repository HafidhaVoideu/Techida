"use client";
import Banner from "@/components/UI/Banner";
import FAQ from "@/components/UI/FAQ";

import React from "react";

import SearchBlog from "./SearchBlog";
import MainBlog from "./MainBlog";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const BlogPage = () => {
  return (
    <section>
      <Banner
        path="home / blogs/ single post"
        title="single blog page"
        description="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation"
      ></Banner>

      <section className="container flex flex-col lg:flex-row gap-12 justify-between">
        {/* main article */}

        <div>
          <MainBlog></MainBlog>

          <Comments></Comments>
          <CommentForm></CommentForm>
        </div>

        <SearchBlog></SearchBlog>
      </section>

      <FAQ></FAQ>
    </section>
  );
};

export default BlogPage;

// ** main section items

// const BlogInfoItem = ({ icon: Icon, info }: tBlogItemProps) => {
//   return (
//     <div className="flex items-center gap-3 ">
//       <Icon size={22} className="text-primary"></Icon>
//       <span>{info}</span>
//     </div>
//   );
// };
