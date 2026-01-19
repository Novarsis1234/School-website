import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Briefcase,
  IdCard,
  BarChart3,
  Users,
  Sun,
  CalendarDays,
} from "lucide-react";
import Reveal from "../../components/Reveal";
// import ParallaxBG from "../../assets/images/parallex1.webp";

const features = [
  {
    title: "OUR AIM",
    icon: <Briefcase className="text-white w-6 h-6" />,
    desc: "The school aims at building students of competence, conscience, compassion and commitment...",
  },
  {
    title: "OUR MISSION",
    icon: <IdCard className="text-white w-6 h-6" />,
    desc: "Our Mission is to provide a comprehensive environment that stimulates multi-dimensional development...",
  },
  {
    title: "OUR VISION",
    icon: <BarChart3 className="text-white w-6 h-6" />,
    desc: "Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills...",
  },
  {
    title: "CBSE MANDATE",
    icon: <Users className="text-white w-6 h-6" />,
    desc: "Children exemplify hopes, dreams for the future and just like the skilled hands of potter school molds the child...",
  },
  {
    title: "PHYSICAL TRAINING",
    icon: <Sun className="text-white w-6 h-6" />,
    desc: "Students have facilities to take part in various physical training courses like P.T., Karate, Skating etc...",
  },
  {
    title: "CONVEYANCE",
    icon: <CalendarDays className="text-white w-6 h-6" />,
    desc: "The School has the best possible transport arrangements to pickup and drop all day scholar students...",
  },
  {
    title: "DIGITAL LEARNING",
    icon: <CalendarDays className="text-white w-6 h-6" />,
    desc: "Smart classrooms with interactive digital boards to enhance student learning experience...",
  },
  {
    title: "CULTURAL PROGRAMS",
    icon: <Users className="text-white w-6 h-6" />,
    desc: "We organize cultural fests, competitions and events to showcase student talent...",
  },
];

const SchoolFeatures = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/Images/background.png')", // 🔥 BG IMAGE
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 "></div>

      <div className="relative px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Heading */}
          <Reveal>
            <h2 className="relative text-center text-4xl md:text-4xl font-extrabold
            text-white mb-12 tracking-wide">
              What Makes Us Special
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="w-14 h-[3px] bg-white rounded-full"></span>
                <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
                <span className="w-14 h-[3px] bg-white rounded-full"></span>
              </div>
            </h2>
          </Reveal>

          {/* Swiper */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full max-w-5xl"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index} className="max-w-[350px]">
                <div
                  className="relative bg-white/90 backdrop-blur-sm rounded-xl
                  shadow-lg p-6 text-center border border-white/30
                  flex flex-col h-full hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a] mb-3 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-grow text-justify mb-6">
                    {item.desc}
                  </p>

                  <div className="mx-auto bg-[#EF4444] rounded-full p-4 shadow-md w-fit">
                    {item.icon}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-8"></div>
        </div>
      </div>

      {/* Pagination styles */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            background: #cbd5e1;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: linear-gradient(to right, #22c55e, #EF4444);
            transform: scale(1.3);
          }
        `}
      </style>
    </section>
  );
};

export default SchoolFeatures;
