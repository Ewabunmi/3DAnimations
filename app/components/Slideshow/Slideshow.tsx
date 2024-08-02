import Marquee from "react-fast-marquee";
import Overlay from "./Overlay";
const Slideshow = () => {
  return (
    <div className="flex justify-center mb-10">
      {/*MArquee Div*/}
      <div className="absolute gap-10  z-10">
        <Marquee>
          <p className="marqueeText text-[50px] text-[#000] md:text-[128px] font-Bold text-left font-[800] opacity-[0.20]">
            rikersiv rikersiv rikersiv rikersiv rikersiv rikersiv
          </p>
        </Marquee>
      </div>
      <Overlay />
    </div>
  );
};

export default Slideshow;
