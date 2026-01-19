// src/pages/topstudents/TopStudents.jsx
import React, { useEffect, useRef } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

/* ===== STATIC DATA (7 STUDENTS) ===== */
const topstudents = [
  {
    id: 1,
    name: "Shivani Sharma",
    studentClass: "10",
    section: "A",
    percentage: 96,
    image: "/Images/student1.webp",
  },
  {
    id: 2,
    name: "Ananya Verma",
    studentClass: "9",
    section: "B",
    percentage: 95,
    image: "/Images/student2.webp",
  },
  {
    id: 3,
    name: "Priya Singh",
    studentClass: "12",
    section: "A",
    percentage: 97,
    image: "/Images/student3.jpg",
  },
  {
    id: 4,
    name: "Shivam Gupta",
    studentClass: "11",
    section: "C",
    percentage: 94,
    image: "/Images/student6.jpg",
  },
  {
    id: 5,
    name: "Sneha Mishra",
    studentClass: "10",
    section: "B",
    percentage: 93,
    image: "/Images/student1.webp",
  },
  {
    id: 6,
    name: "Aditya Patel",
    studentClass: "9",
    section: "A",
    percentage: 92,
    image: "/Images/student7.webp",
  },
  {
    id: 7,
    name: "Kunal Yadav",
    studentClass: "12",
    section: "B",
    percentage: 98,
    image: "/Images/student8.webp",
  },
];

const TopStudents = () => {
  const sliderRef = useRef(null);

  /* ===== CONTINUOUS AUTO SCROLL (NO JUMP) ===== */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 0.6; // speed control

    const animate = () => {
      scrollAmount += speed;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const students = [...topstudents, ...topstudents]; // duplicate for smooth loop

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/background.png')" }}
    >
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ================= LEFT SIDE ================= */}
        <Reveal>
          <div className="bg-white rounded-2xl p-8 shadow-xl h-fit">
            <h3 className="text-lg font-bold mb-6">Top Students</h3>

            <ul className="space-y-4 text-gray-800">
              {topstudents.map((student) => (
                <li
                  key={student.id}
                  className="border-b pb-2 last:border-none"
                >
                  {student.name}
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <button className="mt-8 w-full bg-[#a52a2a] text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </Reveal>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:col-span-2">
          <Reveal>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-10 uppercase tracking-wide">
              Our Top Students
            </h2>
          </Reveal>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden select-none"
          >
            {students.map((student, index) => (
              <div
                key={`${student.id}-${index}`}
                className="min-w-[260px] bg-[#1f2933]/90 backdrop-blur-sm
                rounded-xl shadow-md hover:scale-105 transition"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden rounded-t-xl bg-black/30">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold">
                    {student.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Class {student.studentClass} – {student.section}
                  </p>

                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-emerald-400 font-semibold">
                      {student.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopStudents;
