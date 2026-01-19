import React from "react";
import Reveal from "../../components/Reveal";

const TermandCondition = () => {
  return (
    <div className="bg-white">
      {/* ===== Heading ===== */}
      <div className="bg-green-100 pb-2 pt-12">
        <Reveal>
          <h2
            className="relative text-center text-4xl md:text-5xl lg:text-6xl font-extrabold
  bg-gradient-to-r from-[#008300] via-green-500 to-[#EF4444]
  text-transparent bg-clip-text mb-12 tracking-wide pt-20"
          >
            Terms & Conditions
            {/* premium underline */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-16 h-[3px] bg-[#008300] rounded-full"></span>
              <span className="w-3.5 h-3.5 bg-[#EF4444] rounded-full"></span>
              <span className="w-16 h-[3px] bg-[#008300] rounded-full"></span>
            </div>
          </h2>
        </Reveal>
      </div>

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
