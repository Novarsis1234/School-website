import React from "react";
import Reveal from "../../components/Reveal";
import assembly from "../../assets/images/assembly1.jpg";
import assembly1 from "../../assets/images/assembly2.jpg";
import assembly2 from "../../assets/images/assembly3.png";
import teacher from "../../assets/images/Assembly-teacher.jpg";

const Assembly = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
         <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={assembly}
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
             School <br />
               <span className="text-[#EF4444]">Assembly</span>
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
               src={assembly}
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

      {/* ================= INTRO ================= */}
   <section className="px-4 sm:px-6 lg:px-20 py-20 bg-[#f9fafb]">

  {/* ================= INTRO ================= */}
  <Reveal>
    <p className="max-w-5xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mb-20">
      The{" "}
      <span className="text-[#EF4444] font-semibold">School Assembly</span>{" "}
      plays a vital role in shaping students’ character, discipline, and moral
      values. It promotes{" "}
      <span className="text-[#1a237e] font-semibold">
        confidence, leadership, unity, and spiritual growth
      </span>{" "}
      among students and builds a strong foundation for responsible citizenship.
    </p>
  </Reveal>

  {/* ================= DAILY ASSEMBLY ================= */}
  <Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
      <img
        src={assembly1}
        alt="Assembly Activities"
        className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
      />

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
          Daily Assembly Activities
        </h3>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>✔ Morning prayer and meditation</li>
          <li>✔ Thought of the day</li>
          <li>✔ News reading and current affairs</li>
          <li>✔ Moral stories and value education</li>
          <li>✔ National anthem</li>
        </ul>
      </div>
    </div>
  </Reveal>

  {/* ================= SPECIAL ASSEMBLY ================= */}
  <Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
          Special Assembly Programs
        </h3>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>✔ Festival celebrations</li>
          <li>✔ National & international day observances</li>
          <li>✔ Student speeches & performances</li>
          <li>✔ Motivational talks</li>
          <li>✔ Awareness programs</li>
        </ul>
      </div>

      <img
        src={assembly2}
        alt="Special Assembly"
        className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
      />
    </div>
  </Reveal>

  {/* ================= BENEFITS ================= */}
  <Reveal>
    <div className="mb-24 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-8">
        Benefits of School Assembly
      </h3>

      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="w-16 h-[2px] bg-gray-300"></span>
        <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
        <span className="w-16 h-[2px] bg-gray-300"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          "Builds confidence & communication skills",
          "Promotes discipline and punctuality",
          "Develops leadership qualities",
          "Encourages teamwork & unity",
          "Improves moral and ethical values",
          "Enhances public speaking skills",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 text-center
                       border-t-4 border-[#EF4444]"
          >
            <div className="text-3xl mb-3">🎤</div>
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </Reveal>

  {/* ================= ASSEMBLY INCHARGE ================= */}
  <Reveal>
    <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center mb-24 max-w-5xl mx-auto">
      <img
        src={teacher}
        alt="Assembly Incharge"
        className="w-40 h-40 rounded-full object-cover border-4 border-[#EF4444]"
      />

      <div>
        <h3 className="text-2xl font-bold text-[#EF4444]">
          Mr. Anil Verma
        </h3>
        <p className="text-[#1a237e] font-semibold mb-3">
          Assembly In-Charge
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Mr. Anil Verma supervises and coordinates daily and special assemblies,
          ensuring discipline, meaningful participation, and value-based
          learning among students.
        </p>
      </div>
    </div>
  </Reveal>

  {/* ================= TIMING ================= */}
  <Reveal>
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
        Assembly Timing
      </h3>

      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="w-16 h-[2px] bg-gray-300"></span>
        <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
        <span className="w-16 h-[2px] bg-gray-300"></span>
      </div>

      <div className="bg-white shadow-xl rounded-2xl max-w-xl mx-auto">
        <div className="flex justify-between px-6 py-5 border-b">
          <span className="font-semibold text-[#1a237e]">
            Monday – Saturday
          </span>
          <span>8:30 AM – 8:50 AM</span>
        </div>
        <div className="flex justify-between px-6 py-5">
          <span className="font-semibold text-[#1a237e]">
            Special Assembly
          </span>
          <span>As Scheduled</span>
        </div>
      </div>
    </div>
  </Reveal>

</section>

    </>
  );
};

export default Assembly;
