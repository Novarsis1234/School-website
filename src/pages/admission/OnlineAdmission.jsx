import React from "react";
import Reveal from "../../components/Reveal";
import online from "../../assets/images/online.jpg";
import OnlineAdmissionForm from "./OnlineAdmissionForm";
import {
  FaUserEdit,
  FaFileUpload,
  FaClipboardCheck,
  FaSchool,
} from "react-icons/fa";

const OnlineAdmission = () => {
  return (
    <div>
  
      <section className="relative w-full min-h-[70vh] overflow-hidden">

  {/* BLURRED BACKGROUND */}
  <img
    src={online}
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
        Online <br />
          <span className="text-[#EF4444]">Admission Process</span>
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
          src={online}
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


      {/* ======= FORM ======= */}
      <OnlineAdmissionForm />

      {/* ======= INFO SECTION ======= */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2
              className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold 
            bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text 
            mb-10 tracking-wide "
            >
              Simple & Secure Online Admission
              <div className="mx-auto mt-2 w-24 h-1 bg-[#EF4444] rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Our online admission system is designed to make the enrollment
              process quick, transparent, and convenient for parents and
              students. Follow the simple steps below to apply online.
            </p>
          </Reveal>

          {/* ======= CARDS ======= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <FaUserEdit className="text-5xl text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2 text-[#008300]">
                  Fill Application
                </h4>
                <p className="text-gray-600 text-sm">
                  Enter student and parent details carefully in the online
                  admission form.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <FaFileUpload className="text-5xl text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2 text-[#008300]">
                  Upload Documents
                </h4>
                <p className="text-gray-600 text-sm">
                  Upload student photo, birth certificate, and previous report
                  card securely.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <FaClipboardCheck className="text-5xl text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2 text-[#008300]">
                  Verification
                </h4>
                <p className="text-gray-600 text-sm">
                  Our admission team will verify the submitted information and
                  documents.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                <FaSchool className="text-5xl text-purple-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2 text-[#008300]">
                  Admission Confirmed
                </h4>
                <p className="text-gray-600 text-sm">
                  After approval, admission confirmation will be shared with
                  parents.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineAdmission;
