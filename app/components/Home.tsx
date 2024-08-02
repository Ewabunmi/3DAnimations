"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Features from "./Features/Features";
import Digital from "./Digital/Digital";
import Spatial from "./Spatial/Spatial";
import Slideshow from "./Slideshow/Slideshow";
import MarqueeApp from "./MarqueeText/MarqueeText";

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
      <MarqueeApp />
      <Digital />
      <Slideshow />
      <Spatial />
    </div>
  );
};

export default Home;
