import Reveal from "../../components/Reveal";
import About1 from "../../assets/images/about1.avif";
import About2 from "../../assets/images/contact.jpg";
import ProgramsSection from "./ProgramsSection";
import QuickLinks from "./QuickLinks";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaBookOpen,
  FaBasketballBall,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0f172a] min-h-[85vh] flex items-center">
        {/* Background Image */}
        <img
          src={About1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
          
          {/* LEFT CONTENT */}
          <Reveal>
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-300">
                The Best School of the State
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
                International <br />
                <span className="text-[#EF4444]">Education Network</span>
              </h1>

              <p className="mt-6 max-w-xl text-gray-300 text-lg">
                We prepare students not only for examinations, but for life.
                Our approach builds confidence, discipline and leadership.
              </p>

             <Link to="/contact"> <button className="mt-8 bg-[#EF4444] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
               Contact Us
              </button></Link>
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal>
            <img
              src={About2}
              alt="Student"
              className="rounded-xl shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= INFO STRIP ================= */}
      <section className="bg-white py-12 shadow-md">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <Reveal>
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#EF4444] text-2xl shadow-sm">
          <FaSchool />
        </div>
        <p className="font-semibold text-gray-700">School Life</p>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#EF4444] text-2xl shadow-sm">
          <FaBookOpen />
        </div>
        <p className="font-semibold text-gray-700">Academics</p>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#EF4444] text-2xl shadow-sm">
          <FaBasketballBall />
        </div>
        <p className="font-semibold text-gray-700">Sports & Clubs</p>
      </div>
    </Reveal>

    <Reveal>
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#EF4444] text-2xl shadow-sm">
          <FaUsers />
        </div>
        <p className="font-semibold text-gray-700">Social Activities</p>
      </div>
    </Reveal>

  </div>
</section>


      {/* ================= ABOUT + APPLY SECTION ================= */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE */}
          <Reveal>
            <img
              src={About1}
              alt="Campus"
              className="rounded-xl shadow-lg"
            />
          </Reveal>

          {/* RIGHT CARD */}
          <Reveal>
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Apply for Admission
              </h3>

              <p className="text-gray-600 mb-6">
                Admissions are now open. We don’t just educate students —
                we help them discover their potential and lead with purpose.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex justify-between border-b pb-2">
                  <span>Quality Education</span>
                  <span className="text-[#EF4444]">›</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Modern Infrastructure</span>
                  <span className="text-[#EF4444]">›</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Experienced Faculty</span>
                  <span className="text-[#EF4444]">›</span>
                </li>
                <li className="flex justify-between">
                  <span>Student Support</span>
                  <span className="text-[#EF4444]">›</span>
                </li>
              </ul>

           <Link to="/online">
              <button className="mt-8 bg-[#EF4444] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
                Apply Now
              </button>
            </Link>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= TEXT CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-gray-700 text-lg leading-relaxed">
          <Reveal>
            <p>
              Established with a strong educational philosophy, International
              Education Network focuses on holistic learning, academic
              excellence and character building.
            </p>
          </Reveal>

          <Reveal>
            <p>
              With decades of experience, our institution has grown into a
              trusted name, shaping thousands of students into responsible,
              confident and capable individuals.
            </p>
          </Reveal>

          <Reveal>
            <p>
              Our commitment to integrity, innovation and quality education
              continues to guide everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= EXTRA SECTIONS ================= */}
      <ProgramsSection />
      <QuickLinks />
    </>
  );
};

export default About;
