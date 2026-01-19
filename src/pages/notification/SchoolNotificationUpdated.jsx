// src/pages/schoolNotification/SchoolNotification.jsx
import React from "react";

/* ================= STATIC NOTIFICATION DATA ================= */
const notificationsData = [
  {
    id: 1,
    heading: "Admission Open",
    title:
      "Admissions for the academic session 2024–25 are now open. Parents are requested to contact the school office for details.",
    date: "2024-04-10",
  },
  {
    id: 2,
    heading: "Holiday Notice",
    title:
      "The school will remain closed on account of Independence Day. Regular classes will resume from the next working day.",
    date: "2024-08-15",
  },
  {
    id: 3,
    heading: "Parent-Teacher Meeting",
    title:
      "A Parent-Teacher Meeting (PTM) is scheduled for all classes to discuss academic progress and student performance.",
    date: "2024-09-05",
  },
  {
    id: 4,
    heading: "Examination Update",
    title:
      "Half-yearly examinations will commence from October. Detailed date-sheet will be shared soon.",
    date: "2024-10-01",
  },
];

const SchoolNotification = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* EMPTY STATE */}
        {notificationsData.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No notifications available.
          </p>
        )}

        {/* NOTIFICATION CARDS */}
        {notificationsData.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {notificationsData.map((notif) => (
              <div
                key={notif.id}
                className="
                  bg-white rounded-2xl shadow-md p-6
                  border-l-4 border-[#EF4444]
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Heading */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {notif.heading}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {notif.title}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#EF4444]">
                    {new Date(notif.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>

                  <span className="text-xs bg-red-50 text-[#EF4444] px-3 py-1 rounded-full font-semibold">
                    Notice
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default SchoolNotification;
