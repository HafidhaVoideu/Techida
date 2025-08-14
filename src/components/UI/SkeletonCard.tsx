import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <article className="bg-light-gray rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl max-w-[400px]">
      {/* Image */}
      <Skeleton width={400} height={300}></Skeleton>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-between items-center ">
          <div className="w-[80px]">
            <Skeleton></Skeleton>
          </div>
          <div className="w-[60px]">
            <Skeleton></Skeleton>
          </div>
        </div>
        <h2 className="text-dark-gray font-bold text-xl leading-snug line-clamp-2">
          <Skeleton></Skeleton>
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
          <Skeleton count={6}></Skeleton>
        </p>
      </div>
    </article>
  );
};

export default SkeletonCard;
