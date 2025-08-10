"use client";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen fixed">
      {/* Your page content would go here */}
      <div className="fixed inset-0 bg-gray-100/50 backdrop-blur-sm flex items-center justify-center z-50">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default loading;
