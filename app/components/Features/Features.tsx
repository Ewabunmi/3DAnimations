import Image from "next/image";
import React from "react";
import FeaturesImg from "../../../public/images/studio_banner.png";

const Features = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="4000"
        >
          <Image src={FeaturesImg} alt="delivery" />
        </div>
        {/* Text Content */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="3500"
        >
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Con<span className="text-red-600">cept</span>
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            We conduct extensive coherence analysis on your idea and design the
            most strategic, efficient, and successful path to market
          </p>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-14 py-3 rounded-lg text-black font-medium">
              Optimist
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-12 py-3 rounded-lg text-black font-medium">
              humanity
            </button>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-12 py-3 rounded-lg text-black font-medium">
              sustainability
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-20 py-3 rounded-lg text-black font-medium">
              depth
            </button>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-24 py-3 rounded-lg text-black font-medium">
              energetic
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-10 py-3 rounded-lg text-black font-medium">
              truthworthy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
