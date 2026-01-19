// src/pages/academic/AcademicCalendar.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import academicsection from "../../assets/images/calender.jpg";
import {
  FaCalendarAlt,
  FaRegClock,
  FaRegCalendarCheck,
  FaPalette,
  FaFutbol,
} from "react-icons/fa";

/* ================= STATIC CALENDAR DATA ================= */
const calendarData = [
  {
    id: 1,
    month: "April",
    events: [
      "New Academic Session Begins",
      "Orientation Program for Students",
      "Class-wise Assessment Planning",
    ],
  },
  {
    id: 2,
    month: "May",
    events: [
      "Unit Test – I",
      "Summer Activities & Workshops",
      "Art & Craft Week",
    ],
  },
  {
    id: 3,
    month: "June",
    events: [
      "Summer Vacation",
      "Holiday Homework Distribution",
      "Teacher Training Workshop",
    ],
  },
  {
    id: 4,
    month: "July",
    events: [
      "School Reopens After Vacation",
      "Inter-House Competitions",
      "Sports Training Camp",
    ],
  },
  {
    id: 5,
    month: "August",
    events: [
      "Independence Day Celebration",
      "Unit Test – II",
      "Cultural Activities Program",
    ],
  },
  {
    id: 6,
    month: "September",
    events: [
      "Teachers’ Day Celebration",
      "Half-Yearly Examination",
      "Parent-Teacher Meeting",
    ],
  },
  {
    id: 7,
    month: "October",
    events: [
      "Annual Sports Meet",
      "Educational Excursion / Trip",
      "Health & Fitness  Program",
    ],
  },
  {
    id: 8,
    month: "November",
    events: [
      "Children’s Day Celebration",
      "Art & Literary Fest",
      "Science Exhibition",
    ],
  },
  {
    id: 9,
    month: "December",
    events: [
      "Annual Function",
      "Pre-Board Assessment",
      "Winter Break Begins",
    ],
  },
  {
    id: 10,
    month: "January",
    events: [
      "New Year Assembly",
      "Republic Day Celebration",
      "Career Guidance Session",
    ],
  },
  {
    id: 11,
    month: "February",
    events: [
      "Final Examinations",
      "Farewell Ceremony",
      "Practical Assessments",
    ],
  },
  {
    id: 12,
    month: "March",
    events: [
      "Result Declaration",
      "Annual Review Meeting",
      "Academic Session Concludes",
    ],
  },
];


const AcademicCalendar = () => {
  return (
    <div className="bg-white py-16">

      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={academicsection}
          alt="Academic Calendar Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

        <div className="relative mx-auto max-w-[1400px] px-6 xl:px-12 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                Academic <br />
                <span className="text-[#EF4444]">Calendar</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl">
                A year-wise academic plan balancing studies, activities, and
                holistic student development.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 rounded-full"></span>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={academicsection}
                alt="Calendar"
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-[220px] sm:h-[280px] lg:h-[340px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CALENDAR CARDS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14 px-6">
        {calendarData.map((monthData) => (
          <Reveal key={monthData.id}>
            <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-2 border border-gray-200">
              {/* Month Header */}
              <div className="flex items-center justify-center gap-2 mb-5">
                <FaCalendarAlt className="text-[#EF4444] text-xl" />
                <h3 className="text-xl font-bold text-[#1f2933]">
                  {monthData.month}
                </h3>
              </div>

              <div className="w-full h-px bg-gray-200 mb-4"></div>

              {/* Events */}
              {monthData.events.length ? (
                <ul className="space-y-3 text-gray-700 text-sm">
                  {monthData.events.map((event, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaRegClock className="text-[#EF4444] mt-1" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 italic text-center text-sm">
                  No scheduled events
                </p>
              )}

              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#EF4444] rounded-b-2xl"></span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ================= EXTRA INFO ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <Reveal>
          <p className="mb-14 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify max-w-5xl mx-auto">
            Our <span className="text-[#EF4444] font-semibold">Academic Calendar</span>{" "}
            ensures a structured academic year with well-planned examinations,
            cultural programs, and sports activities, helping students grow
            academically and personally.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <Reveal>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition border border-gray-200">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444] text-2xl">
                <FaRegCalendarCheck />
              </div>
              <h3 className="text-xl font-bold mb-2">Examination Schedule</h3>
              <p className="text-gray-600 text-sm">
                Planned assessments with sufficient preparation time.
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition border border-gray-200">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444] text-2xl">
                <FaPalette />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Events</h3>
              <p className="text-gray-600 text-sm">
                Activities encouraging creativity and confidence.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal>
            <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition border border-gray-200">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444] text-2xl">
                <FaFutbol />
              </div>
              <h3 className="text-xl font-bold mb-2">Sports & Activities</h3>
              <p className="text-gray-600 text-sm">
                Physical fitness through sports and competitions.
              </p>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
