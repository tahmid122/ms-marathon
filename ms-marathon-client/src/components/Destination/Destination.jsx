import React from "react";
import SpotlightCard from "../../reactBits/SpotlightCard";
import Title from "../Title/Title";

const Destination = () => {
  return (
    <div className="my-10 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <div className="lg:col-span-2">
          <Title
            title={"Destination highlights"}
            tagline={"MS Marathon Is Everywhere!"}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/pYNFmxb/Adobe-Stock-298277186-bscsck.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">UNITED STATES</h3>
            </SpotlightCard>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/xKXv0ZL7/Kavval-Allemagne-b9hbhg.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">GERMANY</h3>
            </SpotlightCard>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/bMxRztCC/Kavval-Espagne-oyjj3m.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">SPAIN</h3>
            </SpotlightCard>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/Kjfp2X4h/Kavval-Italie-p5jmb4.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">ITALY</h3>
            </SpotlightCard>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/C3M00gQ2/Adobe-Stock-308400026-jpxhuu.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">BANGLADESH</h3>
            </SpotlightCard>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="h-[200px] bg-black overflow-hidden relative"
        >
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/ymy4XrxS/unsplash-6r-POy-Wzj1-Xo.jpg"
            alt=""
          />
          <div className="h-full w-full absolute left-0 top-0  flex items-center justify-center bg-[#00000038] hover:bg-[#00000070]  transition-all duration-300">
            <SpotlightCard
              className="w-full h-full rounded-none flex items-center justify-center bg-none"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <h3 className="text-2xl text-white font-bold">FRANCE</h3>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
