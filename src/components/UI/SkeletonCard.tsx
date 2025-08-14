import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <article className="bg-light-gray rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl w-full">
      {/* Image - Using aspect ratio to maintain proportion */}
      <div className="aspect-video w-full">
        {" "}
        {/* 16:9 aspect ratio */}
        <Skeleton height="100%" className="!leading-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            {" "}
            {/* Responsive width */}
            <Skeleton className="!leading-none" />
          </div>
          <div className="w-1/4">
            {" "}
            {/* Responsive width */}
            <Skeleton className="!leading-none" />
          </div>
        </div>

        <h2 className="text-dark-gray font-bold text-xl leading-snug line-clamp-2">
          <Skeleton count={1} className="!leading-none" />
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
          <Skeleton count={3} className="!leading-none" />
        </p>
      </div>
    </article>
  );
};

export default SkeletonCard;
