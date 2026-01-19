import React from "react";
import Reveal from "../../components/Reveal";
import library from "../../assets/images/library.jpeg";
import library1 from "../../assets/images/library1.jpg";
import library2 from "../../assets/images/library2.jpg";
import library5 from "../../assets/images/teacher.jpg";
import {
  FaBook,
  FaLaptop,
  FaClipboardList,
  FaGavel,
  FaClock,
  FaUserTie,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";


const Library = () => {
  return (
    <>
      {/* ================= HEADER ================= */}
     <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={library}
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
               <span className="text-[#EF4444]">Library</span>
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
               src={library}
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

    {/* ================= LIBRARY SECTION ================= */}
<section className="bg-[#f9fafb] py-20 overflow-hidden">

  {/* INTRO */}
  <p className="max-w-6xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl 
                leading-relaxed text-justify px-4 sm:px-6 lg:px-20 mb-20">
    Our <span className="text-[#EF4444] font-semibold">School Library</span> is a
    knowledge hub that supports academic excellence and lifelong learning.
    It offers a calm and resource-rich environment where students build
    <span className="text-[#EF4444] font-semibold">
      {" "}reading habits, research skills, and independent learning
    </span>.
  </p>

  {/* ================= BOOKS & DIGITAL ================= */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
    
    {/* Books */}
    <Reveal>
      <div>
        <h3 className="text-3xl font-extrabold text-[#EF4444] mb-6 flex items-center gap-3">
          <FaBook /> Books & Reading Resources
        </h3>
        <ul className="space-y-4 text-gray-700 text-lg">
          {[
            "Academic textbooks & references",
            "Dictionaries & encyclopedias",
            "Story books & novels",
            "Competitive exam material",
            "Age-appropriate collections",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-[#EF4444] mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>

    <Reveal>
      <img
        src={library1}
        alt="Library Books"
        className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
      />
    </Reveal>
  </div>

  {/* ================= DIGITAL LIBRARY ================= */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
    
    <Reveal>
      <img
        src={library2}
        alt="Digital Library"
        className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
      />
    </Reveal>

    <Reveal>
      <div>
        <h3 className="text-3xl font-extrabold text-[#EF4444] mb-6 flex items-center gap-3">
          <FaLaptop /> Digital Library Facilities
        </h3>
        <ul className="space-y-4 text-gray-700 text-lg">
          {[
            "Internet-enabled computers",
            "E-books & online journals",
            "Educational videos",
            "Research-based learning support",
            "Safe & monitored access",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-[#EF4444] mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </div>

  {/* ================= POLICY & RULES ================= */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
    
    {[{
      title: "Book Issue & Return Policy",
      icon: <FaClipboardList />,
      list: [
        "Limited books per student",
        "Return within due date",
        "Fine for late submission",
        "Lost books must be replaced",
        "Library card mandatory",
      ]
    },{
      title: "Library Rules & Regulations",
      icon: <FaGavel />,
      list: [
        "Maintain silence",
        "Handle books carefully",
        "No food or drinks",
        "Use digital resources responsibly",
        "Follow library timings",
      ]
    }].map((box, i) => (
      <Reveal key={i}>
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#EF4444] mb-6 flex items-center gap-3 justify-center">
            {box.icon} {box.title}
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            {box.list.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <FaCheckCircle className="text-[#EF4444] mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    ))}
  </div>

  {/* ================= TIMINGS ================= */}
  <Reveal>
    <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden mb-24">
      <h3 className="text-3xl font-bold text-[#EF4444] text-center py-6 flex justify-center gap-3">
        <FaClock /> Library Timings
      </h3>
      {[
        ["Monday – Friday", "9:00 AM – 4:00 PM"],
        ["Saturday", "9:00 AM – 1:00 PM"],
        ["Sunday", "Closed"],
      ].map(([day, time], i) => (
        <div key={i} className="flex justify-between px-6 py-5 border-t">
          <span className="font-semibold">{day}</span>
          <span>{time}</span>
        </div>
      ))}
    </div>
  </Reveal>

  {/* ================= STAFF ================= */}
  <Reveal>
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 flex gap-6 items-center">
        <img
          src={library5}
          alt="Librarian"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h4 className="text-2xl font-bold text-[#EF4444] flex gap-2 items-center">
            <FaUserTie /> Mrs. Sunita Sharma
          </h4>
          <p className="text-gray-600 mb-3">Head Librarian</p>
          <p className="text-gray-700">
            Experienced in library management and student learning support.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h4 className="text-2xl font-bold text-[#EF4444] flex justify-center gap-2 mb-6">
          <FaUsers /> Library Staff
        </h4>
        <p className="text-gray-700">Mr. Ramesh Kumar – Assistant Librarian</p>
        <p className="text-gray-700">Ms. Pooja Verma – Library Assistant</p>
      </div>
    </div>
  </Reveal>

  {/* ================= CONTACT ================= */}
  <Reveal>
    <div className="text-center">
      <h3 className="text-3xl font-bold text-[#EF4444] mb-6">
        Library Contact & Support
      </h3>
      <p className="text-gray-700 mb-4">
        For membership or assistance, contact the library office.
      </p>
      <p className="text-lg flex justify-center gap-6">
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#EF4444]" /> 6263815507
        </span>
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-[#EF4444]" /> library@yourschool.com
        </span>
      </p>
    </div>
  </Reveal>

</section>

    </>
  );
};

export default Library;
