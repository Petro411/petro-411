import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css";

import { Flex, Heading, Text } from "@radix-ui/themes";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import moment from "moment";
import React from "react";

import Container from "./Container";


export const NewCountiesSlider = ({owners}:{owners:any[]}) => {
  return (
    <>
      <Container>
        <Flex direction={"column"} gap={"5"}>
          <Flex direction={"column"} align={"center"} gap={"4"}>
            <Heading as={"h2"} size={"8"} className="text-center text-heading">
              Newly added Mineral Owners
            </Heading>
          </Flex>
          {owners?.length ? (
            <div className="py-5 relative county-swiper-wrapper">
              <Swiper
                modules={[FreeMode, Navigation]}
                spaceBetween={16}
                slidesPerView="auto"
                freeMode={true}
                navigation={{
                  nextEl: ".county-swiper-next",
                  prevEl: ".county-swiper-prev",
                }}
                className="!px-1"
              >
                {owners?.map((item: any, index: number) => (
                  <SwiperSlide key={index} style={{ width: "auto" }}>
                    <Link
                      href={`/owners/${item?._id}`}
                      key={index}
                      className="cursor-pointer flex flex-col p-5 rounded-lg border hover:border-primary transition-all duration-300 hover:shadow-lg shadow-md"
                    >
                      <Heading
                        as="h3"
                        size={"3"}
                        className="text-heading !line-clamp-2"
                      >
                        {item?.names[0]}
                      </Heading>
                      <Text as="p" size={"1"} align={"right"} color="gray">
                        {moment(item?.createdAt).format("MMMM DD YYYY")}
                      </Text>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Optional navigation arrows */}
              <button className="county-swiper-prev border absolute -left-12  flex-col items-center justify-center top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full h-10 w-10 hidden lg:flex">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="county-swiper-next border absolute -right-12 flex-col items-center justify-center top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full h-10 w-10 hidden lg:flex">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ) : null}
        </Flex>
      </Container>
    </>
  );
};
