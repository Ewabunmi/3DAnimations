"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "./Features/Features";
import Digital from "./Digital/Digital";
import Spatial from "./Spatial/Spatial";
import AnimatedLine from "../components/AnimatedLine";

const Home: React.FC = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-center",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Features />
      <Digital />
      <Spatial />
      <AnimatedLine startX={100} startY={100} endX={400} endY={100} />
      <AnimatedLine startX={400} startY={100} endX={400} endY={300} />
      <AnimatedLine startX={400} startY={300} endX={100} endY={300} />
    </div>
  );
};

export default Home;
