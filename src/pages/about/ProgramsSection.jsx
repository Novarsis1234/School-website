import React from "react";
import Reveal from "../../components/Reveal";

// program images
import PR1 from "../../assets/images/PR1.webp";
import PR2 from "../../assets/images/PR2.webp";
import PR3 from "../../assets/images/PR3.webp";
import PR4 from "../../assets/images/PR4.webp";

// 👇 Parallax background image
import ParallaxBG from "../../assets/images/curriculum.jpg";

const programs = [
  {
    title: "Symphonics",
    image: PR1,
    description:
      "An in-house phonics program for students from Pre-school to Std. V that aims to develop a strong foundation in the English language.",
  },
  {
    title: "Remedial Learning",
    image: PR2,
    description:
      "As every child learns at their own pace, the Innovation Center provides additional academic support for students.",
  },
  {
    title: "Spell The Beans",
    image: PR3,
    description:
      "A fun and engaging spelling program that improves vocabulary and language retention skills.",
  },
  {
    title: "Theatre In Education",
    image: PR4,
    description:
      "An experiential learning program integrating drama and theatre to enhance creativity and confidence.",
  },
];

const ProgramsSection = () => {
  return (
    <section
      className="relative py-24 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${ParallaxBG})`,
        backgroundAttachment: "fixed", // 🔥 PARALLAX EFFECT
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-16 tracking-wide">
            A Glimpse into a Student’s Journey
            <span className="block w-24 h-1 bg-[#EF4444] mx-auto mt-4 rounded-full"></span>
          </h2>
        </Reveal>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden
                         transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <Reveal>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
              </Reveal>

              {/* Content */}
              <div className="p-5 relative">
                <Reveal>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                </Reveal>

                <Reveal>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>

                {/* Red hover bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#EF4444] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
