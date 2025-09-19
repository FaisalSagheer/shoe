"use client";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

const TopSales = () => {
  return (
    <div className="bg-foreground text-primary text-center py-10">
      <h1 className="text-[2.625rem]">Top Sales</h1>
      <div className="flex justify-evenly items-center pt-20">
        <div>
          <ChevronLeft color="#E93939" className="h-15 lg:h-20 w-3xs" />
        </div>
        <div className="bg-amber-100 p-40">
          This Image Background Will Be Animated{" "}
          <img src="/assets/snicker.jpg" className="w-2xl" alt="/" />
        </div>
        <div>
          <ChevronRight color="#E93939" className="h-15 lg:h-20 w-3xs" />
        </div>
      </div>
      <div className="py-10 text-2xl">
        <h4>White Snickers</h4>
      </div>
    </div>
  );
};

export default TopSales;
