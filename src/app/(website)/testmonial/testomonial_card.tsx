"use client";

import { Testmonial } from "@prisma/client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import SuccessStoriesCard from "../success-stories/_components/SuccessStoriesCard";

interface Props {
  data: Testmonial[];
}

export default function TestimonialCard({ data }: Props) {
  return (
    <div className="">
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-[100px]"
      >
        {data.map((test) => (
          <SwiperSlide key={test.id} className="mb-10 px-2">
            <SuccessStoriesCard data={test} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
