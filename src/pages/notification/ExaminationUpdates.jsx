// src/pages/ExaminationUpdates.js
import React from "react";

/* ================= STATIC EXAM DATA ================= */
const examUpdates = [
  {
    id: 1,
    name: "Unit Test – I",
    class: "Class I – V",
    date: "15 July 2024",
    note: "Syllabus from Chapters 1 to 3",
  },
  {
    id: 2,
    name: "Unit Test – I",
    class: "Class VI – VIII",
    date: "18 July 2024",
    note: "Written examination",
  },
  {
    id: 3,
    name: "Half Yearly Examination",
    class: "Class I – X",
    date: "20 September 2024",
    note: "Admit card compulsory",
  },
  {
    id: 4,
    name: "Practical Examination",
    class: "Class IX – XII",
    date: "05 February 2025",
    note: "Science & Computer practicals",
  },
  {
    id: 5,
    name: "Annual Examination",
    class: "All Classes",
    date: "10 March 2025",
    note: "Final assessment for the session",
  },
];

const ExaminationUpdates = () => {
  return (
    <>
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Scroll Wrapper */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-[700px] w-full border border-gray-200">

              {/* TABLE HEAD */}
              <thead className="bg-[#EF4444] border-b border-gray-300">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-md font-bold text-white whitespace-nowrap">
                    Exam Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-md font-bold text-white whitespace-nowrap">
                    Class
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-md font-bold text-white whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-md font-bold text-white whitespace-nowrap">
                    Notes
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-gray-200">
                {examUpdates.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 sm:px-6 py-6 text-center text-sm text-gray-500"
                    >
                      No examination updates available.
                    </td>
                  </tr>
                ) : (
                  examUpdates.map((exam) => (
                    <tr
                      key={exam.id}
                      className="hover:bg-red-50 transition-colors duration-200"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base text-[#EF4444] whitespace-nowrap">
                        {exam.name}
                      </td>

                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 whitespace-nowrap">
                        {exam.class}
                      </td>

                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 whitespace-nowrap">
                        {exam.date}
                      </td>

                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-600">
                        {exam.note || "-"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExaminationUpdates;
