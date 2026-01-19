import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/event.jpg";

/* ================= STATIC EVENTS DATA ================= */
const eventsData = [
  {
    id: 1,
    event_date: "12 August 2024",
    heading: "Cultural Event",
    title: "Annual Cultural Fest",
    description:
      "Our Annual Cultural Fest is a vibrant celebration of creativity, talent, and cultural diversity. Students participate in dance, music, drama, and art performances that boost confidence and self-expression. The event encourages teamwork, creativity, and appreciation of different cultures. It also provides a platform for students to showcase their talents while building stage confidence and communication skills.",
    picture: "/Images/event1.jpg",
  },
  {
    id: 2,
    event_date: "05 September 2024",
    heading: "School Celebration",
    title: "Teachers’ Day Celebration",
    description:
      "Teachers’ Day was celebrated with great enthusiasm and heartfelt appreciation. Students expressed gratitude through speeches, cultural performances, and creative activities. The celebration highlighted the importance of teachers in shaping young minds and values. It strengthened the bond of respect, trust, and admiration between students and educators.",
    picture: "/Images/event5.jpg",
  },
  {
    id: 3,
    event_date: "20 October 2024",
    heading: "Sports Activity",
    title: "Annual Sports Meet",
    description:
      "The Annual Sports Meet promoted physical fitness, discipline, and sportsmanship among students. Participants competed in various indoor and outdoor sports with energy and enthusiasm. The event encouraged teamwork, perseverance, and healthy competition. It helped students understand the importance of physical activity alongside academic learning.",
    picture: "/Images/event3.webp",
  },
  {
    id: 4,
    event_date: "14 November 2024",
    heading: "Student Activity",
    title: "Children’s Day Celebration",
    description:
      "Children’s Day was celebrated with joy, laughter, and excitement across the campus. Students enjoyed games, fun activities, and cultural programs designed especially for them. The celebration focused on creativity, happiness, and emotional well-being. It created memorable moments that strengthened the bond between students and teachers.",
    picture: "/Images/events2.jpg",
  },
  {
    id: 5,
    event_date: "26 January 2025",
    heading: "National Event",
    title: "Republic Day Celebration",
    description:
      "Republic Day was celebrated with pride and patriotic spirit throughout the school. The program included flag hoisting, patriotic songs, speeches, and cultural performances. The event emphasized national unity, discipline, and respect for the Constitution. Students gained a deeper understanding of their duties and responsibilities as responsible citizens.",
    picture: "/Images/event4.jpg",
  },
];


const CulturalActivities = () => {
  const [visibleEvents, setVisibleEvents] = useState(4);

  const handleToggleView = () => {
    if (visibleEvents >= eventsData.length) {
      setVisibleEvents(4);
    } else {
      setVisibleEvents(eventsData.length);
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={transport}
          alt="Events Banner"
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
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                Events & <br />
                <span className="text-[#EF4444]">Activities</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                A glimpse into the vibrant events and activities that enrich
                student life and promote holistic development.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={transport}
                alt="Events"
                className="
                  w-full max-w-sm lg:max-w-md xl:max-w-lg
                  h-[220px] sm:h-[280px] lg:h-[340px]
                  object-cover rounded-2xl shadow-2xl
                "
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO PARAGRAPH ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          Our school regularly organizes{" "}
          <span className="text-[#EF4444] font-semibold">events and activities</span>{" "}
          that encourage creativity, leadership, teamwork, and confidence.
          These programs provide students with opportunities to explore their
          talents beyond academics and create memorable learning experiences.
        </p>
      </div>

      {/* ================= EVENTS SECTION ================= */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="space-y-10">
          {eventsData.slice(0, visibleEvents).map((activity) => (
            <Reveal key={activity.id}>
              <div
                className="
                  flex flex-col md:flex-row
                  bg-white rounded-2xl
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  overflow-hidden
                  border-l-4 border-[#EF4444]
                "
              >
                {/* IMAGE */}
                <div className="md:w-1/3 h-60 md:h-auto">
                  <img
                    src={activity.picture}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:w-2/3 p-6 flex flex-col gap-3">
                  <p className="text-sm text-gray-500 font-medium">
                    📅 {activity.event_date}
                  </p>

                  <p className="text-sm font-semibold text-[#EF4444] uppercase tracking-wide">
                    {activity.heading}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900">
                    {activity.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-justify">
                    {activity.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* VIEW MORE / LESS */}
        {eventsData.length > 4 && (
          <div className="text-center mt-10">
            <Reveal>
              <button
                onClick={handleToggleView}
                className="
                  px-8 py-3 rounded-full
                  bg-[#EF4444] text-white
                  text-lg font-semibold
                  hover:bg-red-600
                  transition
                  shadow-lg
                "
              >
                {visibleEvents >= eventsData.length
                  ? "View Less"
                  : "View More"}
              </button>
            </Reveal>
          </div>
        )}
      </section>
    </>
  );
};

export default CulturalActivities;
