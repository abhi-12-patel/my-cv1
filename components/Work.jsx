"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "Next js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Javascript",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "xyzd wwf",
    description:
      "Work  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius laboriosam, excepturi rerum commodi ipsam",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className=" container max-auto">
        {/* text  */}
        <div className="max-w-[400px] max-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Some of my recent works and possible projects with you.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* showe first project 4  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
