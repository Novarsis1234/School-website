import React from "react";
import Reveal from "../../components/Reveal";
import awardBanner from "../../assets/images/about.avif";

/* ================= STATIC BOARD MESSAGES (2) ================= */
const boardMessages = [
  {
    id: 1,
    name: "Mr. Monoj Kumar Sharma (Chairman)",
    image: "/Images/chairman.jpg",
    description:
      "Education is the strongest foundation of a progressive and responsible society. As Chairman, I strongly believe that true education goes beyond textbooks and examinations. Our institution is committed to nurturing young minds with knowledge, discipline, moral values, and leadership qualities. We strive to provide a safe, inclusive, and motivating environment where students are encouraged to think independently, act responsibly, and grow into confident individuals. Our aim is to prepare students not only for academic success but also for meaningful contributions to society and the nation.",
  },
  {
    id: 2,
    name: "Mr. R. K. Verma (Principal)",
    image: "/Images/teacher1.jpg",
    description:
      "At our school, we are dedicated to providing quality education that balances academic excellence with character development. As Principal, my focus is on nurturing curiosity, creativity, and critical thinking among students. We emphasize ethical values, discipline, and a strong sense of responsibility to help students become confident and compassionate individuals. Through innovative teaching practices, continuous guidance, and teamwork between teachers and parents, we aim to create lifelong learners who are prepared to face future challenges with confidence, integrity, and determination.",
  },
];


const BoardMassage = () => {
  return (
    <div className="bg-white py-16">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={awardBanner}
          alt="Board Banner"
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
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
                Board <br />
                <span className="text-[#EF4444]">Message</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                Inspiring words from our board members, guiding the vision and
                values of our institution.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={awardBanner}
                alt="Board"
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

      {/* ================= BOARD MESSAGES ================= */}
      <div className="max-w-7xl mx-auto px-6 space-y-20 mt-16">
        {boardMessages.map((msg) => (
          <div
            key={msg.id}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Image */}
            <Reveal>
              <img
                src={msg.image}
                alt={msg.name}
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </Reveal>

            {/* Text */}
            <div>
              <div className="text-justify border-l-4 border-[#EF4444] pl-6 space-y-6 text-gray-700 text-lg leading-relaxed italic">
                <Reveal>
                  <p>{msg.description}</p>
                </Reveal>
              </div>

              <p className="mt-4 font-bold text-[#EF4444] text-xl">
                – {msg.name}
              </p>
            </div>
          </div>
        ))}

        {/* ================= COMMON BOARD TEXT ================= */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans text-justify px-4 sm:px-6 lg:px-20">
          The{" "}
          <span className="text-[#EF4444] font-semibold">
            Board of Directors
          </span>{" "}
          is committed to maintaining the highest standards of{" "}
          <span className="text-[#EF4444] font-semibold">
            education and governance
          </span>{" "}
          at our school. Their guidance ensures a safe, innovative, and
          student-focused learning environment, fostering holistic development
          and lifelong success.
        </p>

        {/* ================= VISION / MISSION / VALUES ================= */}
        <div className="grid md:grid-cols-3 gap-8 pt-10">
          <div className="bg-white rounded-xl shadow-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#EF4444] mb-2">Vision</h3>
            <p className="text-gray-600">
              To inspire excellence and holistic growth in every learner.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#EF4444] mb-2">Mission</h3>
            <p className="text-gray-600">
              Providing quality education through innovation and values.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-[#EF4444] mb-2">Values</h3>
            <p className="text-gray-600">
              Integrity, Discipline, Compassion, Excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMassage;
