import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/mission.webp";

/* ================= STATIC GALLERY DATA ================= */
const galleryImages = [
  { id: 1, image: "/Images/gallery1.jpg", name: "Annual Function" },
  { id: 2, image: "/Images/gallery2.jpg", name: "Sports Day" },
  { id: 3, image: "/Images/gallery3.jpg", name: "Classroom Activity" },
  { id: 4, image: "/Images/gallery5.jpg", name: "Cultural Program" },
  { id: 5, image: "/Images/gallery6.jpg", name: "Science Exhibition" },
  { id: 6, image: "/Images/gallery7.jpg", name: "Art & Craft" },
  { id: 7, image: "/Images/gallery10.jpg", name: "Yoga Day" },
  { id: 8, image: "/Images/gallery11.jpg", name: "Independence Day" },
  { id: 9, image: "/Images/gallery12.jpg", name: "Republic Day" },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const handleToggleView = () => {
    if (visibleImages >= galleryImages.length) {
      setVisibleImages(6); // View Less
    } else {
      setVisibleImages((prev) =>
        Math.min(prev + 3, galleryImages.length)
      );
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={transport}
          alt="Gallery Banner"
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
          {/* LEFT TEXT */}
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                School <br />
                <span className="text-[#EF4444]">Gallery</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                A glimpse into the vibrant moments, achievements, and daily
                activities that make our school life special.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={transport}
                alt="Gallery"
                className="
                  w-full
                  max-w-sm lg:max-w-md xl:max-w-lg
                  h-[220px] sm:h-[280px] lg:h-[340px]
                  object-cover
                  rounded-2xl
                  shadow-2xl
                "
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
          Explore our{" "}
          <span className="text-[#EF4444] font-semibold">school gallery</span>{" "}
          showcasing memorable moments from cultural events, sports activities,
          classroom learning, and celebrations. Each photograph reflects the
          enthusiasm, creativity, and dedication of our students and teachers.
        </p>
      </div>

      {/* ================= GALLERY GRID ================= */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, visibleImages).map((item) => (
              <Reveal key={item.id}>
                <div className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                
                </div>
              </Reveal>
            ))}
          </div>

          {/* VIEW MORE / LESS */}
          {galleryImages.length > 6 && (
            <div className="text-center mt-10">
              <Reveal>
                <button
                  onClick={handleToggleView}
                  className="px-6 py-3 bg-[#EF4444] text-white text-lg font-semibold rounded-full hover:bg-red-600 transition duration-300"
                >
                  {visibleImages >= galleryImages.length
                    ? "View Less"
                    : "View More"}
                </button>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
