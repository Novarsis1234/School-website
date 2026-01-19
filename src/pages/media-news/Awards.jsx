import React from "react";
import Reveal from "../../components/Reveal";
import awardBanner from "../../assets/images/awards.jpg";
import AwardsUpdated from "./AwardsUpdated";

const Awards = () => {
  return (
    <div className="bg-white">
      {/* ================= HEADING ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={awardBanner}
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
             Awards & <br />
               <span className="text-[#EF4444]">Achievements</span>
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
               src={awardBanner}
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


      {/* ================= AWARDS CARDS ================= */}
      <AwardsUpdated />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 mt-10 mb-10">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed font-sans text-justify">
          At our school, we take pride in the{" "}
          <span className="text-[#EF4444] font-semibold">
            outstanding achievements
          </span>{" "}
          of our students and faculty. Our{" "}
          <span className="text-[#EF4444] font-semibold">awards</span> reflect
          excellence in{" "}
          <span className="text-[#EF4444] font-semibold">academics</span>,
          sports, arts, and co-curricular activities. We celebrate every
          milestone, from{" "}
          <span className="text-[#EF4444] font-semibold">
            top board exam results
          </span>{" "}
          to outstanding performances in competitions. Our commitment to
          nurturing <span className="text-[#EF4444] font-semibold">talent</span>{" "}
          ensures that each student reaches their full potential. These
          recognitions motivate our students to aim higher and continue striving
          for <span className="text-[#EF4444] font-semibold">excellence</span>.
          Through consistent hard work and{" "}
          <span className="text-[#EF4444] font-semibold">dedication</span>, our
          school has become a symbol of{" "}
          <span className="text-[#EF4444] font-semibold">
            achievement and success
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Awards;
