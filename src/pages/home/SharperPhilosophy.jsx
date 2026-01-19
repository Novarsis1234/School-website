import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../../components/Reveal";

// image
import researchImg from "../../assets/images/school-research.webp";
import fitnessImg from "../../assets/images/school-physical-fitness.webp";
import exposureImg from "../../assets/images/school-exposure.webp";
import selfdisciplineImg from "../../assets/images/school-self-discipline.webp";
import hardworkImg from "../../assets/images/school-hardwork.webp";
import appliedscienceImg from "../../assets/images/school-applied-science.webp";
import reflectiveImg from "../../assets/images/school-reflective-thinking.webp";

const SharperPhilosophy = () => {
  const items = [
    { letter: "S", text: "Self-discipline" },
    { letter: "H", text: "Hard Work" },
    { letter: "A", text: "Applied Science" },
    { letter: "R", text: "Research" },
    { letter: "P", text: "Physical Fitness" },
    { letter: "E", text: "Exposure" },
    { letter: "R", text: "Reflective & thinking" },
  ];
  const itemss = [
    {
      heading: "Research",
      text: "Research emphasizes the importance of learning in depth and not just in width by inculcating reading and research habits.",
      img: researchImg,
    },
    {
      heading: "Physical Fitness",
      text: "Physical Fitness enhances a healthy body , mind  and increase growth",
      img: fitnessImg,
    },
    {
      heading: "Exposure",
      text: "Through experiential programs such as field trips  for life. and  responsibility",
      img: exposureImg,
    },
    {
      heading: "Self-discipline",
      text: "Developing self-discipline helps children take responsibility and grow  confidence.",
      img: selfdisciplineImg,
    },
    {
      heading: "Hard Work",
      text: "Hard work and perseverance are key elements of success and character building.",
      img: hardworkImg,
    },
    {
      heading: "Applied Science",
      text: "Applied science builds curiosity and problem-solving  through hands-on learning.",
      img: appliedscienceImg,
    },
    {
      heading: "Reflective Thinking",
      text: "Encourages children to think independently and reflect on their experiences.",
      img: reflectiveImg,
    },
  ];

  return (
    <>
  <div
  className="relative py-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/Images/background.png')" }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 "></div>

  <div className="relative max-w-7xl mx-auto px-4 text-center">

    {/* Heading */}
    <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-16">
      Our Philosophy
    </h2>

    {/* SHARPER ROW */}
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-10 items-start">

      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">

          {/* LETTER */}
          <div className="text-5xl md:text-6xl font-extrabold text-[#EF4444] mb-6">
            {item.letter}
          </div>

          {/* connector */}
          <div className="w-[2px] h-6 bg-[#EF4444] mb-4"></div>

          {/* pill box */}
          <div
            className="bg-white text-gray-800 px-6 py-2 rounded-full
            shadow-md border border-[#EF4444]
            text-sm font-medium whitespace-nowrap"
          >
            {item.text}
          </div>

        </div>
      ))}

    </div>
  </div>
</div>


     <div
  className="relative py-36 px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/Images/notification.jpg')", // 👈 parallax image
    backgroundAttachment: "fixed", // 🔥 PARALLAX EFFECT
  }}
>
  {/* overlay for readability */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-20 mySwiper"
    >
      {itemss.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="
              bg-white/90 backdrop-blur-sm
              rounded-2xl shadow-lg p-6
              flex flex-col items-center h-full
              hover:scale-105 transition
            "
          >
            <Reveal>
              <h3 className="text-lg font-bold mb-3 text-center text-[#EF4444]">
                {item.heading}
              </h3>
            </Reveal>

            <Reveal>
              <p className="text-sm text-gray-700 text-center mb-4">
                {item.text}
              </p>
            </Reveal>

            <Reveal>
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-56 object-cover object-center rounded-xl"
              />
            </Reveal>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </>
  );
};

export default SharperPhilosophy;
