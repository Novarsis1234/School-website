import React from "react";
import Reveal from "../../components/Reveal";
import {
  FaChild,
  FaBookOpen,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const curriculumData = [
  {
    title: "Pre-Primary",
    description:
      "A joyful learning environment focusing on play-based activities, creativity and early foundational skills.",
    image: "/Images/curriculum1.webp",
    icon: <FaChild />,
  },
  {
    title: "Primary",
    description:
      "Encouraging curiosity and conceptual clarity through interactive learning and structured academics.",
    image: "/Images/curriculum2.webp",
    icon: <FaBookOpen />,
  },
  {
    title: "Middle School",
    description:
      "Building analytical thinking, subject depth and teamwork while nurturing leadership skills.",
    image: "/Images/curriculum3.webp",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Secondary",
    description:
      "Preparing students for board examinations and future academic pathways with confidence.",
    image: "/Images/curriculum4.webp",
    icon: <FaGraduationCap />,
  },
];

const Curriculum = () => {
  return (
    <section className="bg-[#f8faff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <Reveal>
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-14">
            <span className="text-[#1f2933]">Our </span>
            <span className="text-[#EF4444]">Curriculum</span>
            <span className="block w-20 h-1 bg-[#EF4444] mx-auto mt-4 rounded-full"></span>
          </h2>
        </Reveal>

        {/* ===== CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {curriculumData.map((item, index) => (
            <Reveal key={index}>
              <div
                className="
                  relative bg-white rounded-2xl p-6
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  border border-gray-200
                  group
                "
              >
                {/* Top Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />

                {/* Icon */}
                <div
                  className="
                    absolute -top-6 left-1/2 -translate-x-1/2
                    w-12 h-12 rounded-full
                    bg-[#EF4444]
                    flex items-center justify-center
                    text-white text-xl
                    shadow-lg
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-center text-[#1f2933] mb-3 mt-6">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 text-justify leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#EF4444] rounded-b-2xl"></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
