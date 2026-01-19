import React, { useState } from "react";
import missionImage from "../../assets/images/homesection.jpg";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const OurMission = () => {
  const [play, setPlay] = useState(false);

  return (
    <section
      className="relative py-28 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${missionImage})`,
        backgroundAttachment: "fixed", // 🔥 PARALLAX
      }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h2
              className="relative text-center text-4xl font-extrabold
              bg-gradient-to-r from-black- via-black to-[#EF4444]
              text-transparent bg-clip-text mb-12 tracking-wide"
            >
              Our Mission
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="w-12 h-[3px] bg-black rounded-full"></span>
                <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
                <span className="w-12 h-[3px] bg-black rounded-full"></span>
              </div>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The International Public School prepares students to understand,
              contribute to, and succeed in a rapidly changing society, thus
              making the world a better and more just place.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "To introduce co-curricular learning and ensure holistic development.",
                "To make the child confident in today’s global scenario.",
                "To promote openness, respect and tolerance.",
                "To provide a vibrant atmosphere for quality education.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-block bg-[#EF4444] text-white
              font-semibold px-6 py-2 rounded-full
              hover:bg-red-600 transition"
            >
              Read More
            </Link>
          </div>

          {/* RIGHT VIDEO (IMAGE STYLE) */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px]">

              {/* OVAL IMAGE */}
              <div className="absolute inset-0 rounded-[45%] overflow-hidden shadow-2xl">
                {!play ? (
                  <img
                    src="/Images/teacher1.jpg"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1"
                    title="Mission Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* PLAY BUTTON */}
              {!play && (
                <button
                  onClick={() => setPlay(true)}
                  className="absolute bottom-6 right-6
                  w-20 h-20 rounded-full
                  bg-gradient-to-r from-blue-600 to-blue-400
                  flex items-center justify-center
                  shadow-2xl hover:scale-110 transition"
                >
                  <FaPlay className="text-white text-2xl ml-1" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;
