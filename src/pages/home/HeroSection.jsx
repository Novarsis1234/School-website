import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-serif">

      {/* ===== BACKGROUND IMAGE (Fallback) ===== */}
      {!videoLoaded && (
        <img
          src="/Images/about1.avif"   
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/Images/homesection.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 text-white">
        <p className="uppercase tracking-widest text-xs sm:text-sm mb-3">
          Hello Students
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <br /> Education
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-gray-200 leading-relaxed mb-8">
          We provide quality education with modern learning techniques,
          experienced teachers, and a student-friendly environment to build
          a strong future.
        </p>

        <Link
          to="/admission"
          className="inline-block bg-[#EF4444] hover:bg-red-600
          px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base
          font-semibold transition duration-300"
        >
          Join Us Now!
        </Link>
      </div>

      {/* ===== BOTTOM RED CARDS ===== */}
      <div className="relative md:absolute bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 z-20 w-full px-4 sm:px-6 mt-12 md:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Best Students",
            "Online Meeting",
            "Best Networking",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-[#B91C1C] text-white rounded-2xl p-6
              shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-200">
                Suspendisse tempor mauris a sem elementum
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
