// src/pages/academicSection/AcademicSection.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import academicsection from "../../assets/images/acadmicSection.jpg";
import Curriculum from "./Curriculum";
import { FaBookOpen, FaBrain, FaGraduationCap } from "react-icons/fa";

/* ================= STATIC ACADEMIC SECTION DATA ================= */
const academicSectionData = [
  {
    title: "Strong Academic Foundation",
    description:
      "Our academic program focuses on building strong fundamentals in all subjects. Emphasis is given to conceptual clarity, regular assessments, and interactive learning to help students develop confidence and consistency in their studies.",
  },
  {
    title: "Innovative Learning Methods",
    description:
      "We adopt modern teaching techniques such as activity-based learning, smart classes, and project work. These methods encourage critical thinking, creativity, and problem-solving skills among students.",
  },
  {
    title: "Preparation for Higher Education",
    description:
      "The academic section prepares students for competitive examinations and higher education. With proper guidance, mentoring, and structured curriculum planning, students are groomed for future academic success.",
  },
];

const AcademicSection = () => {
  const icons = [<FaBookOpen />, <FaBrain />, <FaGraduationCap />];

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={academicsection}
          alt="Academic Section Banner"
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
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
                Academic <br />
                <span className="text-[#EF4444]">Section</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                Dedicated leaders and educators working together to inspire,
                guide and shape the future of every student.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={academicsection}
                alt="Academic Section"
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

      {/* ================= ACADEMIC INFO ================= */}
      <section className="bg-[#f8faff] py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP PARAGRAPH */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              The{" "}
              <span className="text-[#EF4444] font-semibold">
                Academic Section
              </span>{" "}
              of our school is structured to deliver quality education with a
              balance of academics, creativity, and personal development. We
              aim to nurture disciplined learners with strong values and a
              future-ready mindset.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicSectionData.map((item, index) => (
              <div
                key={index}
                className="
                  relative bg-white rounded-2xl p-6
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  border border-gray-200
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 mb-4
                    flex items-center justify-center
                    rounded-full
                    bg-[#EF4444]/10
                    text-[#EF4444] text-xl
                  "
                >
                  {icons[index % icons.length]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1f2933] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {item.description}
                </p>

                {/* Accent Line */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#EF4444] rounded-b-2xl"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <Curriculum />
    </>
  );
};

export default AcademicSection;
