const MarqueeText = () => {
  return (
    <div className="overflow-hidden flex-col text-justify md:mt-10 mt-[340px] lg:inline md:inline">
      <div className="marquee1 font-Bold text-7xl text-[#64c200] leading-72px tracking-widest ">
        <span>
          CREATIVE <span className="text-red-400"> HUMAN CENTRIC</span>{" "}
          INNOVATION
        </span>
        <span>
          AUTHENTICITY{" "}
          <span className="text-[#2b2828]"> DESIGN EXCELLENCE</span> TRUSTWORTHY
        </span>
        <span>
          COLLABORATION<span className="text-[#2b2828]"> INTEGRITY</span>{" "}
          AMBITIOUS
        </span>
        <span>
          HARMONY <span className="text-[#2b2828]"> GOOD</span> NATURE
        </span>
        <span>
          CREATIVE <span className="text-[#2b2828]"> HUMAN CENTRIC</span>{" "}
          INNOVATION
        </span>
        <span>
          AUTHENTICITY{" "}
          <span className="text-[#2b2828]"> DESIGN EXCELLENCE</span> TRUSTWORTHY
        </span>
        <span>
          COLLABORATION<span className="text-[#2b2828]"> INTEGRITY</span>{" "}
          AMBITIOUS
        </span>
        <span>
          HARMONY <span className="text-[#2b2828]"> GOOD</span> NATURE
        </span>
        <p className="marquee2">
          <span>
            CREATIVE <span className="text-[#2b2828]"> HUMAN CENTRIC</span>{" "}
            INNOVATION
          </span>
          <span>
            AUTHENTICITY{" "}
            <span className="text-[#2b2828]"> DESIGN EXCELLENCE</span>{" "}
            TRUSTWORTHY
          </span>
          <span>
            COLLABORATION<span className="text-[#2b2828]"> INTEGRITY</span>{" "}
            AMBITIOUS
          </span>
          <span>
            CREATIVE <span className="text-[#2b2828]"> HUMAN CENTRIC</span>{" "}
            INNOVATION
          </span>
          <span>
            AUTHENTICITY{" "}
            <span className="text-[#2b2828]"> DESIGN EXCELLENCE</span>{" "}
            TRUSTWORTHY
          </span>
          <span>
            COLLABORATION<span className="text-[#2b2828]"> INTEGRITY</span>{" "}
            AMBITIOUS
          </span>
          <span>
            HARMONY <span className="text-[#2b2828]"> GOOD</span> NATURE
          </span>
        </p>
      </div>
    </div>
  );
};

const MarqueeApp = () => {
  return (
    <div className="overflow-hidden">
      <MarqueeText />
    </div>
  );
};

export default MarqueeApp;
