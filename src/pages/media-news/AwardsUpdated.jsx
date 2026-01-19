import React from "react";
import Reveal from "../../components/Reveal";

/* ================= STATIC AWARDS DATA ================= */
const awardsData = [
  {
    id: 1,
    title: "Best Academic Excellence Award",
    description:
      "Awarded for outstanding academic performance and consistent results achieved by students through innovative teaching methods.",
    year: "2024",
    image: "/Images/awards1.jpg",
  },
  {
    id: 2,
    title: "Excellence in Best Sports Award",
    description:
      "Recognized for promoting sportsmanship, physical fitness, and achieving excellence in inter-school competitions.",
    year: "2023",
    image: "/Images/awards2.webp",
  },
  {
    id: 3,
    title: "Innovative Teaching Practices",
    description:
      "Honored for adopting modern teaching techniques and integrating technology into classroom learning and Education.",
    year: "2023",
    image: "/Images/awards3.jpg",
  },
  {
    id: 4,
    title: "Best School Infrastructure Award",
    description:
      "Awarded for maintaining a safe, modern, and student-friendly infrastructure that supports holistic learning.",
    year: "2022",
    image: "/Images/awards4.jpg",
  },
  
];

const Awards = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-rose-50 to-orange-50">
      {/* ================= AWARDS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <Reveal>
            <h2
              className="
                text-3xl sm:text-4xl lg:text-5xl font-extrabold
                bg-gradient-to-r from-[#EF4444] to-red-600
                text-transparent bg-clip-text
                mb-12 tracking-wide
              "
            >
              Our Awards
              <span className="block mx-auto mt-3 w-24 h-1 bg-[#EF4444] rounded-full"></span>
            </h2>
          </Reveal>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {awardsData.map((award) => (
              <Reveal key={award.id}>
                <div
                  className="
                    group bg-white rounded-3xl overflow-hidden
                    shadow-md hover:shadow-2xl
                    transition-all duration-500
                    hover:-translate-y-2
                    border border-gray-100
                  "
                >
                  {/* Image */}
                  <div className="relative bg-gray-50 flex items-center justify-center h-56">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="
                        max-h-44 object-contain
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full text-left">
                    <h3
                      className="
                        text-lg font-bold mb-2
                        text-[#EF4444]
                        group-hover:text-[#EF4444]
                        transition-colors
                      "
                    >
                      {award.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                      {award.description}
                    </p>

                    <span
                      className="
                        mt-auto inline-block self-start
                        bg-[#EF4444]
                        text-white text-xs font-semibold
                        px-4 py-1.5 rounded-full
                      "
                    >
                      Year • {award.year}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
