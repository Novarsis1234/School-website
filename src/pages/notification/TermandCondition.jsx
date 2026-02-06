import React from "react";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/transport.jpg";

const TermandCondition = () => {
  return (
    <div className="bg-white">
      {/* ===== Heading ===== */}
     <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={transport}
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
             Terms & <br />
               <span className="text-[#EF4444]">Condition</span>
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
               src={transport}
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

      {/* ===== Content ===== */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-700">
        <Reveal>
          <p className="mb-6 leading-relaxed">
            By enrolling a student in our school, parents/guardians agree to
            follow all the rules, guidelines, and policies established by the
            school administration for the smooth functioning of the institution.
          </p>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            {/* 1 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                1. Admission Policy
              </h3>
              <p>
                Admission is granted as per school norms and availability of
                seats. Submission of valid documents is mandatory at the time of
                admission.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                2. Fees & Payments
              </h3>
              <p>
                All fees must be paid on or before the due dates. Fees once paid
                are non-refundable under any circumstances.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                3. Attendance & Discipline
              </h3>
              <p>
                Regular attendance is compulsory. Students are expected to
                follow school discipline, rules, and code of conduct inside and
                outside the campus.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                4. Uniform & Appearance
              </h3>
              <p>
                Students must wear the prescribed school uniform on all working
                days. Proper grooming and cleanliness are mandatory.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                5. Examination & Promotion
              </h3>
              <p>
                Promotion to the next class depends on performance, attendance,
                and examination results as per school policy.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                6. Transport Facility
              </h3>
              <p>
                The transport facility is subject to availability and school
                rules. Any changes in routes or timings will be decided by the
                school.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                7. Safety & Responsibility
              </h3>
              <p>
                The school ensures student safety within the campus. However,
                the school will not be responsible for incidents occurring
                outside the school premises.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                8. Right to Amend
              </h3>
              <p>
                The school reserves the right to modify rules, policies,
                schedules, and fees structure when necessary.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 font-semibold text-gray-800">
            Parents and students are advised to read and understand these terms
            carefully before admission.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default TermandCondition;
