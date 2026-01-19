// src/pages/uniforms/UniformDetails.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import {
  FaUserGraduate,
  FaCalendarDay,
  FaInfoCircle,
  FaTshirt,
} from "react-icons/fa";

/* ================= STATIC UNIFORM DATA ================= */
const uniformData = [
  {
    id: 1,
    class_name: "Nursery – Class V",
    days: "Monday to Friday",
    person: "Boys & Girls",
    title:
      "White shirt, navy blue shorts/skirt, school tie, black shoes with white socks. Designed for comfort and ease of movement for young students.",
    image: "/Images/uniform2.jpg",
  },
  {
    id: 2,
    class_name: "Class VI – X",
    days: "Monday to Friday",
    person: "Boys & Girls",
    title:
      "Light blue shirt, navy blue trousers/skirt, school belt, tie and polished black shoes. Ensures a smart and disciplined appearance.",
    image: "/Images/uniform1.jpg",
  },
 
];

const UniformDetails = () => {
  return (
    <>
      {/* ================= INTRO ================= */}
      <Reveal>
        <p className="mt-10 mb-12 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify px-4 sm:px-6 lg:px-20">
          Our{" "}
          <span className="text-[#EF4444] font-semibold">school uniform</span>{" "}
          reflects discipline, unity, and pride. Designed to be{" "}
          <span className="text-[#EF4444] font-semibold">
            comfortable and durable
          </span>
          , the uniform promotes equality and focus while maintaining a neat and
          professional appearance for all students.
        </p>
      </Reveal>

      {/* ================= UNIFORM CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {uniformData.map((item) => (
            <Reveal key={item.id}>
              <div
                className="
                  bg-white rounded-2xl shadow-lg overflow-hidden
                  flex flex-col md:flex-row
                  hover:shadow-2xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* IMAGE */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={item.image}
                    alt={item.class_name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4">
                  {/* Class */}
                  <div className="flex items-center gap-3">
                    <FaUserGraduate className="text-[#EF4444] text-xl" />
                    <h3 className="text-2xl font-extrabold text-gray-800">
                      {item.class_name}
                    </h3>
                  </div>

                  {/* Days */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCalendarDay className="text-[#EF4444]" />
                    <span className="font-semibold">Days:</span> {item.days}
                  </div>

                  {/* For */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaTshirt className="text-[#EF4444]" />
                    <span className="font-semibold">For:</span>{" "}
                    <span className="font-bold text-gray-900">
                      {item.person}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex items-start gap-3 text-gray-700">
                    <FaInfoCircle className="text-[#EF4444] mt-1" />
                    <p className="text-justify">{item.title}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default UniformDetails;
