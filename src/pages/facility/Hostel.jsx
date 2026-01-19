import React, { useState } from "react";
import Reveal from "../../components/Reveal";

// Images
import hostel from "../../assets/images/blog.jpg";
import hostel1 from "../../assets/images/hostel1.jpg";
import hostel2 from "../../assets/images/hostel4.jpeg";
import hostel3 from "../../assets/images/hostel6.jpg";
import hostel4 from "../../assets/images/hostel5.jpg";



/* ================= DROPDOWN ================= */
const HostelDropdown = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-4 overflow-hidden shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-dark-100 text-[#EF4444] font-semibold text-left"
      >
        {title}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-6 py-4 text-gray-700 bg-white text-justify">
          {content}
        </div>
      )}
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const Hostel = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
        <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={hostel}
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
             Hostal <br />
               <span className="text-[#EF4444]">Facilities</span>
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
               src={hostel}
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
      <p className="mt-12 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify px-4 sm:px-6 lg:px-20">
        Our <span className="text-[#EF4444] font-semibold">School Hostel</span>{" "}
        is designed to provide a safe, disciplined, and homely residential
        environment for students. The hostel supports
        <span className="text-[#EF4444] font-semibold">
          {" "}
          academic excellence, moral values, cleanliness, and self-discipline
        </span>
        . A structured daily routine ensures students remain focused, healthy,
        and confident while staying away from home.
      </p>

      {/* ================= ROOM & BED DETAILS (LEFT IMAGE / RIGHT CONTENT) ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={hostel1}
                alt="Hostel Room"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
                Hostel Rooms & Bed Facilities
              </h3>

              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Spacious and well-ventilated hostel rooms with proper
                  sunlight.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Comfortable single and shared beds with clean mattresses and
                  pillows.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Individual study table, chair, and storage cupboard for each
                  student.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Daily room cleaning and regular sanitation for hygiene and
                  safety.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Proper lighting, fans, and power backup for uninterrupted
                  comfort.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Separate arrangements for boys and girls with warden
                  supervision.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= MESS & FOOD FACILITIES ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
                Mess & Food Facilities
              </h3>

              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Hygienic and well-maintained mess with regular cleanliness
                  checks.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Nutritious, balanced, and freshly cooked meals served daily.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Fixed meal schedule including breakfast, lunch, snacks, and
                  dinner.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Clean drinking water with RO / filtered water facility.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Mess staff follows strict hygiene and safety standards.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Special care for students’ health and food quality.
                </li>
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={hostel2} // mess / food image
                alt="Hostel Mess"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= SAFETY & SECURITY ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={hostel3} // safety / security image
                alt="Hostel Safety & Security"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
                Safety & Security
              </h3>

              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  24×7 CCTV surveillance covering hostel corridors and common
                  areas.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Trained security guards stationed at hostel entry and exit
                  points.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Separate boys and girls hostels with dedicated wardens.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Biometric / register-based attendance and regular night
                  checks.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Restricted visitor access with prior permission only.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Emergency response system and immediate medical support
                  availability.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= STUDY & RECREATION ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
                Study & Recreation
              </h3>

              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Dedicated and peaceful study hours maintained every day.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Quiet study rooms and well-lit areas for focused learning.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Regular academic supervision and guidance by hostel wardens.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Indoor games such as chess, carrom, and table tennis for
                  relaxation.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Outdoor sports facilities to encourage physical fitness.
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] text-xl font-bold">✔</span>
                  Recreation time helps students stay mentally refreshed and
                  motivated.
                </li>
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={hostel4} // study / recreation related image
                alt="Study & Recreation"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= DAILY ROUTINE ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24">
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6 text-center">
            Daily Routine / Timetable
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: ROUTINE LIST */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              {[
                ["5:30 AM", "Wake Up & Morning Hygiene"],
                ["6:00 AM", "Exercise / Yoga"],
                ["7:30 AM", "Breakfast"],
                ["8:30 AM", "School Time"],
                ["1:30 PM", "Lunch"],
                ["5:00 PM", "Evening Snacks"],
                ["6:00 PM", "Study Hours"],
                ["8:00 PM", "Dinner"],
                ["9:30 PM", "Lights Off"],
              ].map(([time, activity], i) => (
                <div
                  key={i}
                  className="flex justify-between px-6 py-4 border-b last:border-none hover:bg-red-50 transition"
                >
                  <span className="font-semibold text-[#EF4444]">{time}</span>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>

            {/* RIGHT: ROUTINE INFO */}
            <div className="bg-red-50 border-l-4 border-[#EF4444] rounded-2xl p-8 shadow-md">
              <h4 className="text-xl font-bold text-[#EF4444] mb-4">
                Structured & Disciplined Lifestyle
              </h4>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                A well-planned daily routine helps students develop discipline,
                time management, and a balanced lifestyle. Hostel routine
                ensures equal focus on{" "}
                <span className="text-[#EF4444] font-semibold">
                  academics, health, and rest
                </span>
                .
              </p>

              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Fixed wake-up and lights-off timings for discipline
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Balanced schedule for study, sports, and recreation
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Supervised daily routine under experienced hostel wardens
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Dedicated study hours in a quiet and focused environment
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Regular physical activities to promote fitness and well-being
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Proper time allocation for meals, rest, and personal hygiene
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Routine designed to support academic focus and personal growth
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= BOYS & GIRLS HOSTEL ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-10 text-center">
            Boys & Girls Hostel
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {["Boys Hostel", "Girls Hostel"].map((title, i) => (
              <div
                key={i}
                className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#EF4444]"
              >
                <h4 className="text-xl font-bold mb-4">{title}</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Separate accommodation</li>
                  <li>✔ Dedicated warden</li>
                  <li>✔ Secure entry & exit</li>
                  <li>✔ CCTV monitored premises</li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ================= HOSTEL FACILITIES ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-10 text-center">
            Hostel Facilities Overview
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "24×7 Water Supply",
              "RO Drinking Water",
              "Power Backup",
              "Study Rooms",
              "Recreation Area",
              "Laundry Facility",
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 text-center font-medium"
              >
                <span className="text-[#EF4444] text-xl">✔</span>
                <p className="mt-2">{facility}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ================= HOSTEL RULES ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-8 text-center">
            Hostel Rules & Regulations
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
          </div>

          {[
            "Strict adherence to daily routine",
            "Mobile usage is regulated",
            "Visitors allowed only during fixed hours",
            "Cleanliness must be maintained",
            "Discipline and respect are mandatory",
          ].map((rule, i) => (
            <div
              key={i}
              className="max-w-3xl mx-auto mb-3 p-4 border rounded-xl bg-white shadow"
            >
              {rule}
            </div>
          ))}
        </section>
      </Reveal>

      {/* ================= MEDICAL & LAUNDRY (ONE ROW) ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* ===== MEDICAL & HEALTH CARE ===== */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6 text-center">
                Medical & Health Care
              </h3>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="w-24 h-[2px] bg-[#EF4444]"></span>
                <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
                <span className="w-24 h-[2px] bg-[#EF4444]"></span>
              </div>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  First-aid facility available in hostel
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Doctor on call for emergencies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Regular health check-ups
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Nearest hospital tie-up
                </li>
              </ul>
            </div>

            {/* ===== LAUNDRY & CLEANING ===== */}
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6 text-center">
                Laundry & Cleaning Services
              </h3>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="w-24 h-[2px] bg-[#EF4444]"></span>
                <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
                <span className="w-24 h-[2px] bg-[#EF4444]"></span>
              </div>

              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Weekly laundry schedule
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Clean bed sheets and blankets
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Daily room cleaning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold">✔</span>
                  Regular sanitation & hygiene checks
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= HOSTEL FEE STRUCTURE ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-8 text-center">
            Hostel Fee Structure
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
            <span className="w-24 h-[2px] bg-[#EF4444]"></span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-red-100 text-[#EF4444] font-bold">
                <tr>
                  <th className="p-4 text-left">Facility</th>
                  <th className="p-4 text-left">Included</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  "Accommodation & Bed",
                  "Mess & Food",
                  "Electricity & Water",
                  "Security & CCTV",
                  "Medical Support",
                  "Recreation Facilities",
                ].map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4">{item}</td>
                    <td className="p-4 text-[#EF4444] font-semibold">Yes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-md text-gray-600 mt-4 text-center">
            * Fee details may vary. Please contact the hostel office for updated
            charges at{" "}
            <span className="font-semibold text-[#EF4444]">6263815507</span>.
          </p>
        </section>
      </Reveal>

      {/* ================= DROPDOWNS ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
            Hostel Rules & Guidelines
          </h3>

          <HostelDropdown
            title="Daily Routine & Timings"
            content="Students must strictly follow wake-up time, study hours, meal timings, and lights-off schedule. Discipline is mandatory."
          />

          <HostelDropdown
            title="Mess Discipline"
            content="Food wastage is strictly prohibited. Students must maintain silence, cleanliness, and respect staff."
          />

          <HostelDropdown
            title="Leave & Visitor Policy"
            content="Parents may meet students during fixed hours only. Leave is allowed with prior written permission."
          />

          <HostelDropdown
            title="Medical & Emergency Care"
            content="Basic medical support is available in the hostel. In emergencies, students are taken to nearby hospitals immediately."
          />
        </section>
      </Reveal>

      {/* ================= FINAL SECTION ================= */}
      {/* ================= PARENTAL COMMUNICATION & SUPPORT ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24 mb-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-6">
              Parental Communication & Support
            </h3>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-24 h-[2px] bg-[#EF4444]"></span>
              <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
              <span className="w-24 h-[2px] bg-[#EF4444]"></span>
            </div>

            {/* Content */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              We believe that a strong partnership between{" "}
              <span className="text-[#EF4444] font-semibold">parents</span> and
              the{" "}
              <span className="text-[#EF4444] font-semibold">
                hostel administration
              </span>{" "}
              is essential for the overall growth and well-being of students.
              Regular communication is maintained to keep parents informed about
              their child’s academic progress, health, discipline, and daily
              routine.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mt-6">
              Parents are encouraged to interact with hostel wardens and school
              authorities during designated hours. Any concerns related to
              safety, health, food, or accommodation are addressed promptly with
              complete transparency and care.
            </p>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mt-6">
              Through regular updates, meetings, and open communication
              channels, we ensure that parents remain actively involved in their
              child’s hostel life. Our goal is to create a{" "}
              <span className="text-[#EF4444] font-semibold">
                supportive, secure, and nurturing environment
              </span>{" "}
              where students feel safe, confident, and motivated to succeed.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ================= HOSTEL CONTACT ================= */}
      <Reveal>
        <section className="px-4 sm:px-6 lg:px-20 mt-24 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-4">
              Hostel Contact & Support
            </h3>

            <p className="text-gray-700 text-base md:text-lg mb-10">
              For hostel admission, facilities, or any assistance, feel free to
              reach out to us. Our hostel administration team is always ready to
              help.
            </p>

            {/* Divider Line */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-20 h-[2px] bg-[#EF4444]"></span>
              <span className="w-3 h-3 bg-[#EF4444] rounded-full"></span>
              <span className="w-20 h-[2px] bg-[#EF4444]"></span>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-800 text-lg font-medium">
              <p>
                <span className="text-[#EF4444] font-semibold">Phone:</span>{" "}
                6263815507
              </p>

              <p>
                <span className="text-[#EF4444] font-semibold">Email:</span>{" "}
                info@yourschool.com
              </p>
            </div>

            {/* Extra Info */}
            <p className="mt-8 text-gray-600 text-sm">
              Office Hours: Monday to Saturday | 9:00 AM – 5:00 PM
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
};

export default Hostel;
