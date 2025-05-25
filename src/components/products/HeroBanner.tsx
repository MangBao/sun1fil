"use client";
import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/image/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";
import { productSlide } from "@/constants";

const HeroBanner = () => {
  return (
    <div className="w-full bg-primary text-white p-0 rounded-lg overflow-hidden">
      {/* Banner Image */}
      <Image
        src={bannerImage}
        alt="App Banner"
        className="object-contain w-full"
        priority
      />

      {/* Product Slider */}
      <div className="p-12 relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
            1280: { slidesPerView: 5.5 },
          }}
        >
          {productSlide.map((product, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard key={idx} {...product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute left-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1 bg-[#CDE4FE] rounded-full">
          <Icon
            icon="solar:alt-arrow-left-linear"
            className="w-7 h-7 text-blue-end drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>

        <div className="custom-next absolute right-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1 bg-[#CDE4FE] rounded-full">
          <Icon
            icon="solar:alt-arrow-right-linear"
            className="w-7 h-7 text-blue-end drop-shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
