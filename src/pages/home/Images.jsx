import React from "react";
import bannerImg from "../../assets/images/homesection.jpg";
import Reveal from "../../components/Reveal";

const Images = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Students"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="max-w-3xl text-center text-white">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Shaping Bright Futures
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Our school provides a nurturing environment where students grow
              academically, socially, and morally with confidence and care.
            </p>
          </Reveal>

          <Reveal>
            <button
              className="bg-[#EF4444] hover:bg-red-600 text-white
              px-8 py-3 rounded-full font-semibold
              transition duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Images;
