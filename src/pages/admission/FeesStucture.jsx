import React from "react";
import Reveal from "../../components/Reveal";
import fees from "../../assets/images/fees.jpg";
import FeeStructure from "./FeeStructureUpdated";

// const feeData = [
//   {
//     className: "Nursery",
//     admission: 5000,
//     tuition: 18000,
//     installment1: 6000,
//     installment2: 6000,
//     installment3: 6000,
//     exam: 1000,
//     extra: 2000,
//   },
//   {
//     className: "LKG",
//     admission: 6000,
//     tuition: 20000,
//     installment1: 7000,
//     installment2: 7000,
//     installment3: 6000,
//     exam: 1200,
//     extra: 2000,
//   },
//   {
//     className: "UKG",
//     admission: 6000,
//     tuition: 22000,
//     installment1: 8000,
//     installment2: 7000,
//     installment3: 7000,
//     exam: 1500,
//     extra: 2500,
//   },
//   {
//     className: "Class 1",
//     admission: 7000,
//     tuition: 24000,
//     installment1: 8000,
//     installment2: 8000,
//     installment3: 8000,
//     exam: 2000,
//     extra: 3000,
//   },
//   {
//     className: "Class 12",
//     admission: 12000,
//     tuition: 48000,
//     installment1: 16000,
//     installment2: 16000,
//     installment3: 16000,
//     exam: 4000,
//     extra: 5000,
//   },
// ];

const FeesStructure = () => {
  return (
    <div>
      {/* ===== Heading ===== */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">

  {/* BLURRED BACKGROUND */}
  <img
    src={fees}
    alt="Management Banner"
    className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

  {/* CONTENT */}
  <div
    className="
      relative mx-auto w-full
      max-w-[1400px]
      px-6 xl:px-12
      pt-24 pb-10          /* 🔥 bottom gap reduced */
      grid grid-cols-1 lg:grid-cols-2
      gap-10               /* 🔥 gap reduced */
      items-center
    "
  >
    {/* LEFT TEXT */}
    <Reveal>
      <div className="text-white text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
        Fees <br />
          <span className="text-[#EF4444]">Structure</span>
        </h1>

        <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
          Dedicated leaders and educators working together to inspire,
          guide and shape the future of every student.
        </p>

        <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
      </div>
    </Reveal>

    {/* RIGHT IMAGE */}
    <Reveal>
      <div className="flex justify-center lg:justify-end">
        <img
          src={fees}
          alt="Management Team"
          className="
            w-full
            max-w-sm lg:max-w-md xl:max-w-lg
            h-[220px] sm:h-[280px] lg:h-[340px]  /* 🔥 height reduced */
            object-cover
            rounded-2xl
            shadow-2xl
          "
        />
      </div>
    </Reveal>
  </div>
</section>


      <p className="mt-10 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans text-justify px-4 sm:px-6 lg:px-20">
        Our <span className="text-[#EF4444] font-semibold">fees structure</span>{" "}
        is designed to be{" "}
        <span className="text-[#EF4444] font-semibold">
          transparent and affordable
        </span>{" "}
        for all families. It covers{" "}
        <span className="text-[#EF4444] font-semibold">
          tuition, extracurricular activities, transport, and other facilities
        </span>{" "}
        provided by the school. Clear details ensure parents can{" "}
        <span className="text-[#EF4444] font-semibold">
          plan their finances effectively
        </span>{" "}
        for the entire academic year. The structure is periodically updated to
        reflect{" "}
        <span className="text-[#EF4444] font-semibold">
          new programs and resources
        </span>{" "}
        offered by the school. Timely payments help students access{" "}
        <span className="text-[#EF4444] font-semibold">
          all facilities without interruptions
        </span>{" "}
        and maintain smooth school operations. Our goal is to ensure a{" "}
        <span className="text-[#EF4444] font-semibold">
          fair, consistent, and well-communicated fee system
        </span>{" "}
        for every student and parent.
      </p>

      <FeeStructure />
    </div>
  );
};

export default FeesStructure;
