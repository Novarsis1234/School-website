// PodarInfoSection.jsx
import React from "react";
import {
  FaUserPlus,
  FaRupeeSign,
  FaUsers,
  FaRegClipboard,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

const InfoSection = () => {
  const items = [
    {
      icon: <FaUserPlus className="text-white text-4xl" />,
      label: "Admission Process",
      link: "/admission",
    },
    {
      icon: <FaRupeeSign className="text-white text-4xl" />,
      label: "Fee Structure",
      link: "/fees",
    },
    {
      icon: <FaUsers className="text-white text-4xl" />,
      label: "Online Admission",
      link: "/online",
    },
    {
      icon: <FaRegClipboard className="text-white text-4xl" />,
      label: "Enquiry Form",
      link: "/contact",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/background.png')", // 🔁 background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <h2 className="relative text-center text-4xl md:text-4xl font-extrabold
          text-white mb-14 tracking-wide">
            Information of Our School

            {/* underline */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-14 h-[3px] bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-14 h-[3px] bg-white rounded-full"></span>
            </div>
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, index) => (
            <Reveal key={index}>
              <Link
                to={item.link}
                className="
                  w-64 p-8
                  bg-white/10 backdrop-blur-md
                  rounded-2xl shadow-lg
                  flex flex-col items-center
                  hover:scale-105 hover:bg-white/20
                  transition duration-300
                "
              >
                {item.icon}
                <p className="mt-4 text-lg text-white text-center font-medium">
                  {item.label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
