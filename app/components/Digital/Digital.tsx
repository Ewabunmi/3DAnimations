import Image from "next/image";
import Framer from "../../../public/images/frame.jpg";

const Digital = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Text Content */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="4000"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="text-[30px] text-red-600  md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Digital
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            We conduct extensive coherence analysis on your idea and design the
            most strategic, efficient, and successful path to market
          </p>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-14 py-3 rounded-lg text-black font-medium">
              sustainability
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-12 py-3 rounded-lg text-black font-medium">
              human centric
            </button>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-24 py-3 rounded-lg text-black font-medium">
              depth
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-10 py-3 rounded-lg text-black font-medium">
              nature
            </button>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-14 py-3 rounded-lg text-black font-medium">
              innovation
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-12 py-3 rounded-lg text-black font-medium">
              good
            </button>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <button className="text-[18px] bg-[#c5c1c1] px-24 py-3 rounded-lg text-black font-medium">
              creativity
            </button>
            <button className="text-[18px] bg-[#c5c1c1] px-10 py-3 rounded-lg text-black font-medium">
              excellence
            </button>
          </div>
        </div>
        {/* Image */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="4000"
          data-aos-anchor-placement="top-center"
        >
          <Image src={Framer} alt="delivery" />
        </div>
      </div>
    </div>
  );
};

export default Digital;
