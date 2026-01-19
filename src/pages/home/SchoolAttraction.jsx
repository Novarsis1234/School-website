import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SchoolAttraction = () => {
  const features = [
    "A positive campus climate",
    "Professional development",
    "Self Defence Activity",
    "Sports Education",
    "End-of-year assessments",
    "Social Performance",
    "Classroom discussions",
    "Communication Skills",
  ];

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleFeatures = features.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className="relative py-34 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/about1.avif')", // ✅ PARALLAX IMAGE
        backgroundAttachment: "fixed", // 🔥 PARALLAX EFFECT
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE ONLY */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/Images/about1.avif"
            alt="School"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* Heading (ONE LINE) */}
          <Reveal>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-12">
              Why Choose Our School
            </h2>
          </Reveal>

          {/* Cards + Arrows */}
          <div className="relative">

            {/* LEFT ARROW */}
            <button
              onClick={handlePrev}
              className="absolute -left-14 top-1/2 -translate-y-1/2
              bg-white text-black w-12 h-12 rounded-full
              flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Cards Grid (2 per row) */}
            <div className="grid grid-cols-2 gap-6">
              {visibleFeatures.map((feature, index) => (
                <Reveal key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="
                      bg-white/10 backdrop-blur-md
                      text-white rounded-xl p-6
                      shadow-xl hover:scale-105 transition
                    "
                  >
                    <h3 className="text-yellow-400 text-2xl font-bold mb-2">
                      {index + 1 + page * itemsPerPage}
                    </h3>
                    <p className="text-sm">{feature}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={handleNext}
              className="absolute -right-14 top-1/2 -translate-y-1/2
              bg-white text-black w-12 h-12 rounded-full
              flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolAttraction;
