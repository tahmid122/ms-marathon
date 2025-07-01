import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Banner = ({ bannerData }) => {
  return (
    <div>
      <Swiper
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-[calc(100vh-150px)] md:h-auto lg:h-[60vh] bg-gray-50"
      >
        {bannerData?.map((banner) => (
          <SwiperSlide>
            <div className="h-full w-full grid grid-cols-1 gap-5 lg:grid-cols-2 lg:p-10 lg:gap-5 dark:bg-slate-900 dark:text-white">
              <div className="relative h-[250px] md:h-[300px] lg:h-auto">
                <img
                  className="h-full w-full object-cover absolute top-0 left-0"
                  src={banner.image}
                  alt="image"
                />
                <div className="z-20 absolute text-white w-full p-5 flex flex-col justify-between h-full">
                  <div className="flex lg:items-center lg:flex-row flex-col justify-between">
                    <span className="text-base font-medium opacity-90">
                      {banner.location}
                    </span>
                    <span className="text-base font-bold">{banner.date}</span>
                  </div>
                  <div className="flex flex-col gap-5 items-start">
                    <span className="text-base bg-black p-2 text-white">
                      {banner.category}
                    </span>
                    <h1 className="text-2xl lg:text-3xl font-bold">
                      {banner.title}
                    </h1>
                    <div>
                      <span className="border border-white p-1 mr-2 text-sm font-bold">
                        {banner.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 flex flex-col lg:justify-end items-start gap-5 md:mt-10 lg:mt-0">
                <h3 className="uppercase text-xl font-semibold">
                  {banner.rules}
                </h3>
                <p className="text-sm lg:hidden">
                  {banner.description.slice(0, 300)}...
                </p>
                <p className="text-sm hidden lg:block">{banner.description}</p>
                <Link to={"/marathons"}>
                  <button className="btn btn-style">FIND OUT MORE</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
