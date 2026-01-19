// src/pages/holidays/Holidays.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import {
  FaCalendarAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

/* ================= STATIC HOLIDAY DATA ================= */
const holidaysData = [
  {
    title: "Summer Vacation",
    dateRange: "20 May 2024 – 30 June 2024",
    studentDate: "Full vacation period",
    teacherDate: "20 May – 15 June",
  },
  {
    title: "Independence Day",
    dateRange: "15 August 2024",
    studentDate: "Holiday",
    teacherDate: "Holiday",
  },
  {
    title: "Gandhi Jayanti",
    dateRange: "02 October 2024",
    studentDate: "Holiday",
    teacherDate: "Holiday",
  },
  {
    title: "Diwali Vacation",
    dateRange: "28 October 2024 – 03 November 2024",
    studentDate: "Full vacation period",
    teacherDate: "Selected working days",
  },
  {
    title: "Christmas",
    dateRange: "25 December 2024",
    studentDate: "Holiday",
    teacherDate: "Holiday",
  },
  {
    title: "Winter Break",
    dateRange: "01 January 2025 – 07 January 2025",
    studentDate: "Holiday",
    teacherDate: "Partial working days",
  },
];

const Holidays = () => {
  return (
    <div>
      {/* ================= HOLIDAY CARDS ================= */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {holidaysData.map((holidayItem, index) => (
            <Reveal key={index}>
              <div
                className="
                  bg-white rounded-xl shadow-md p-6
                  border-l-4 border-[#EF4444]
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {holidayItem.title}
                </h3>

                {/* Duration */}
                <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <FaCalendarAlt className="text-[#EF4444]" />
                  <span className="font-medium text-gray-700">
                    Duration:
                  </span>
                  {holidayItem.dateRange}
                </p>

                {/* Students */}
                <p className="flex items-center gap-2 text-sm text-[#EF4444] mb-1">
                  <FaUserGraduate />
                  <span className="font-medium">
                    Students:
                  </span>
                  {holidayItem.studentDate}
                </p>

                {/* Teachers */}
                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <FaChalkboardTeacher className="text-[#1a237e]" />
                  <span className="font-medium">
                    Teachers:
                  </span>
                  {holidayItem.teacherDate}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Holidays;
