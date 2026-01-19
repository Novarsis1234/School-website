import React from "react";
import { Link } from "react-router-dom";
import { FaSchool, FaBullhorn, FaGlobe } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import Reveal from "../../components/Reveal";

const links = [
  {
    icon: <FaSchool />,
    label: "School Information",
    path: "/about",
  },
  {
    icon: <FaBullhorn />,
    label: "News & Updates",
    path: "/news",
  },
  {
    icon: <FaPersonCircleCheck />,
    label: "Faculty & Management",
    path: "/management",
  },
  {
    icon: <FaGlobe />,
    label: "Events & Activities",
    path: "/events",
  },
];

const QuickLinks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-14">
            Quick Links
            <span className="block w-20 h-1 bg-[#EF4444] mx-auto mt-4 rounded-full"></span>
          </h3>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
          {links.map((link, index) => (
            <Reveal key={index}>
              <Link
                to={link.path}
                className="group w-full max-w-[200px] bg-white
                           border border-gray-200 rounded-2xl p-6
                           flex flex-col items-center text-center
                           shadow-md transition-all duration-300
                           hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full
                             bg-[#EF4444]/10 text-[#EF4444] text-3xl
                             group-hover:bg-[#EF4444]
                             group-hover:text-white
                             transition-all duration-300"
                >
                  {link.icon}
                </div>

                {/* Text */}
                <p className="mt-4 font-semibold text-sm text-gray-700 tracking-wide">
                  {link.label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickLinks;
