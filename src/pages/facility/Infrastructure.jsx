// src/pages/infrastructure/InfrastructureImages.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/about1.avif";
import {
  FaSchool,
  FaBookOpen,
  FaFlask,
  FaLaptopCode,
  FaLeaf,
} from "react-icons/fa";

/* ================= STATIC INFRASTRUCTURE DATA ================= */
const infrastructureData = [
  {
    id: 1,
    title: "Modern Classrooms",
    image: "/Images/i1.jpg",
  },
  {
    id: 2,
    title: "School Gardens ",
    image: "/Images/i2.jpg",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting ",
    image: "/Images/i6.jpg",
  },
  {
    id: 4,
    title: "Computer & Smart Labs",
    image: "/Images/i7.jpg",
  },
  {
    id: 5,
    title: "Green Campus & Playgrounds",
    image: "/Images/i3.jpg",
  },
];

const InfrastructureImages = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={transport}
          alt="Infrastructure Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

        <div
          className="
            relative mx-auto w-full
            max-w-[1400px]
            px-6 xl:px-12
            pt-24 pb-10
            grid grid-cols-1 lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* LEFT TEXT */}
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                School <br />
                <span className="text-[#EF4444]">Infrastructure</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                A modern, safe and inspiring campus designed to support learning
                and holistic development.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={transport}
                alt="Infrastructure"
                className="
                  w-full
                  max-w-sm lg:max-w-md xl:max-w-lg
                  h-[220px] sm:h-[280px] lg:h-[340px]
                  object-cover
                  rounded-2xl
                  shadow-2xl
                "
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <p className="mt-10 mb-14 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify px-4 sm:px-6 lg:px-20">
        Our{" "}
        <span className="text-[#EF4444] font-semibold">
          school infrastructure
        </span>{" "}
        provides a secure and engaging environment for students. Spacious
        classrooms,{" "}
        <span className="inline-flex items-center gap-2 text-[#EF4444] font-semibold">
          <FaFlask /> modern laboratories
        </span>
        , and a{" "}
        <span className="inline-flex items-center gap-2 text-[#EF4444] font-semibold">
          <FaBookOpen /> well-stocked library
        </span>{" "}
        enhance academic learning. Technology-enabled{" "}
        <span className="inline-flex items-center gap-2 text-[#EF4444] font-semibold">
          <FaLaptopCode /> smart classrooms
        </span>{" "}
        and eco-friendly initiatives ensure a{" "}
        <span className="inline-flex items-center gap-2 text-[#EF4444] font-semibold">
          <FaLeaf /> healthy campus
        </span>
        .
      </p>

      {/* ================= INFRASTRUCTURE SECTIONS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {infrastructureData.map((item, index) => (
            <div
              key={item.id}
              className={`mb-20 flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TITLE */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <FaSchool className="text-[#EF4444] text-3xl" />
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937]">
                    {item.title}
                  </h2>
                </div>
                <div className="w-24 h-1 bg-[#EF4444] mx-auto md:mx-0 rounded-full"></div>
              </div>

              {/* IMAGE */}
              <div
                className="
                  flex-1 max-w-md rounded-2xl overflow-hidden shadow-xl
                  border-4 border-[#EF4444]
                  transition-transform duration-300 hover:scale-105
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default InfrastructureImages;
