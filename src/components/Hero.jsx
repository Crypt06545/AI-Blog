"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "@/app/assets/ai-animation.json";
import { Button } from "./ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".info-sec", {
      y: -30,
      opacity: 0,
      duration: 0.86,
      delay: 0.25,
    });
    tl.from(".info-sec-button", {
      opacity: 0,
      duration: 0.88,
    });
    tl.from(
      ".animate-svg",
      {
        scale: 0,
        opacity: 0,
      },
      "-=1"
    );
  }, []);

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-20">
      {/* Left content */}
      <div className="max-w-xl text-center lg:text-left space-y-6">
        <div className="info-sec">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-balance">
            Unleashing the Power of <br />
            <span className="inline-flex items-baseline">
              {/* <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI..
              </span> */}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                <Typewriter
                  options={{
                    strings: ["AI Through Words"], // Removed leading space
                    autoStart: true,
                    delay: 100,
                    cursor: "",
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed tracking-wide">
            Dive into a world of intelligence, ethics, and innovation —
            explained through engaging blogs and real-world insights.
          </p>
        </div>
        <div className="info-sec-button flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link href={"/blog"}>
            <Button className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white w-40 h-11 rounded-full text-sm transition-all duration-200">
              Explore Blog
            </Button>
          </Link>
          <Button className="border cursor-pointer border-blue-300 text-blue-300 hover:bg-blue-500 hover:text-white w-40 h-11 rounded-full text-sm transition-all duration-200">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Animation */}
      <div className="max-w-md w-full">
        <Lottie
          className="animate-svg w-full"
          animationData={animationData}
          loop
          autoPlay
        />
      </div>
    </section>
  );
};

export default Hero;
