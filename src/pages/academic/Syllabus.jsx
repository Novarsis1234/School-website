// src/pages/syllabus/Syllabus.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/syllabus.jpg";
import { FaBookOpen, FaRedoAlt, FaBullseye } from "react-icons/fa";

/* ================= STATIC SYLLABUS DATA ================= */
const syllabusData = [
  {
    class_name: "Nursery",
    subjects: [
      "English Basics",
      "Hindi Rhymes",
      "Numbers & Counting",
      "Drawing & Coloring",
      "Physical Activities",
    ],
  },
  {
    class_name: "KG",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "General Awareness",
      "Art & Craft",
      "Physical Education",
    ],
  },
  {
    class_name: "Class I – V",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "Computer Basics",
      "Moral Education",
    ],
  },
  {
    class_name: "Class VI – VIII",
    subjects: [
      "English",
      "Hindi / Sanskrit",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Science",
    ],
  },
  {
    class_name: "Class IX – X",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Information Technology",
    ],
  },
  {
    class_name: "Class XI – XII",
    subjects: [
      "English",
      "Physics",
      "Chemistry",
      "Mathematics / Biology",
      "Economics / Commerce",
      "Computer Science",
    ],
  },
];

const Syllabus = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={transport}
          alt="Syllabus Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

        <div className="relative mx-auto max-w-[1400px] px-6 xl:px-12 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                School <br />
                <span className="text-[#EF4444]">Syllabus</span>
              </h1>
              <p className="mt-5 text-gray-200 max-w-xl">
                A well-structured curriculum designed to ensure academic
                excellence and holistic development.
              </p>
              <span className="block w-24 h-1 bg-[#EF4444] mt-6 rounded-full"></span>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={transport}
                alt="Syllabus"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-[220px] sm:h-[280px] lg:h-[340px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          Our <span className="text-[#EF4444] font-semibold">school syllabus</span>{" "}
          is thoughtfully designed to nurture academic excellence, creativity,
          and confidence. It balances core subjects with co-curricular
          activities, ensuring students are well prepared for examinations and
          future challenges.
        </p>
      </div>

      {/* ================= SYLLABUS CARDS ================= */}
      <section className="bg-[#f9fafb] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {syllabusData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col"
              >
                {/* Class Header */}
                <div className="bg-[#0f172a] text-white text-center py-4 rounded-t-2xl">
                  <h3 className="text-xl font-extrabold">
                    {item.class_name}
                  </h3>
                  <span className="block w-12 h-1 bg-[#EF4444] mx-auto mt-2 rounded-full"></span>
                </div>

                {/* Subjects */}
                <div className="p-5 flex-grow space-y-3">
                  {item.subjects.map((sub, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm hover:border-[#EF4444] transition"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIPS ================= */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text mb-12">
            Important Tips & Notes
            <div className="mx-auto mt-3 w-24 h-1 bg-[#EF4444] rounded-full"></div>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen />,
                title: "Study Regularly",
                text: "Develop a habit of daily study for better understanding.",
              },
              {
                icon: <FaRedoAlt />,
                title: "Practice & Revise",
                text: "Consistent revision strengthens memory and clarity.",
              },
              {
                icon: <FaBullseye />,
                title: "Focus on Weak Areas",
                text: "Give extra time to subjects that need improvement.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-gray-200"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444] text-2xl">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;
