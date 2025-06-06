"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "@/app/assets/ai-animation.json";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-20">
      {/* Left content */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-balance">
          Unleashing the Power of <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI
          </span>{" "}
          Through Words
        </h1>
        <p className="text-gray-400 text-base leading-relaxed tracking-wide">
          Dive into a world of intelligence, ethics, and innovation — explained
          through engaging blogs and real-world insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link href={'/blog'}>
            <Button className="bg-blue-400 hover:bg-blue-500 text-white w-40 h-11 rounded-full text-sm transition-all duration-200">
              Explore Blog
            </Button>
          </Link>
          <Button className="border border-blue-300 text-blue-300 hover:bg-blue-500 hover:text-white w-40 h-11 rounded-full text-sm transition-all duration-200">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Animation */}
      <div className="max-w-md w-full">
        <Lottie
          className="w-full"
          animationData={animationData}
          loop
          autoPlay
        />
      </div>
    </section>
  );
};

export default Hero;
