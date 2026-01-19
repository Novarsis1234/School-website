import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import InfoSection from "../home/InfoSection";
import admission from "../../assets/images/admission.jpg";
import Reveal from "../../components/Reveal";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#EF4444] rounded-md shadow-md my-4">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Reveal>
          {" "}
          <h3 className="text-lg font-semibold text-[#EF4444]">{title}</h3>
        </Reveal>
        <span className="text-[#EF4444]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && <div className="p-4 text-gray-700 text-sm">{children}</div>}
    </div>
  );
};

const AdmissionProcess = () => {
  return (
    <>
      <section className="relative w-full min-h-[70vh] overflow-hidden">

  {/* BLURRED BACKGROUND */}
  <img
    src={admission}
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
        Admission <br />
          <span className="text-[#EF4444]">Process</span>
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
          src={admission}
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
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <Reveal>
          {" "}
          <h2
            className="text-center text-3xl md:text-4xl font-extrabold
bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text
mb-10 tracking-wide"
          >
            Our Admission Process
            <div className="mx-auto mt-2 w-24 h-1 bg-[#EF4444] rounded-full"></div>
          </h2>
        </Reveal>

        {/* Accordion 1: Online Process */}
        <AccordionItem title="Online Process">
          <Reveal>
            {" "}
            <p className="mb-4">01. Complete the online application form.</p>
          </Reveal>
          <Reveal>
            {" "}
            <p className="mb-2">
              02. The following documents must be uploaded:
            </p>
          </Reveal>
          <ul className="list-disc ml-6 space-y-1">
            <Reveal>
              {" "}
              <li>Student’s Birth Certificate</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Student’s Aadhaar Card</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>
                School Leaving Certificate (can be submitted later if not
                available)
              </li>
            </Reveal>
            <Reveal>
              {" "}
              <li>UDISE Number from current school (Std 2 onwards)</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Previous/current class Report Card (Std 2 onwards)</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>
                Address proof (any one): Ration Card, Electricity Bill,
                Passport, Aadhaar Card
              </li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Aadhaar card of any one parent/guardian</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>PAN Card of any one parent/guardian</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Passport size photograph</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Caste Certificate (if applicable)</li>
            </Reveal>
          </ul>
          <Reveal>
            {" "}
            <p className="mt-4">
              03. After submitting the form, if a seat is available, you’ll
              receive a payment link for the first term fee.
            </p>
          </Reveal>
        </AccordionItem>

        {/* Accordion 2: Visiting The School */}
        <AccordionItem title="Visiting The School">
          <Reveal>
            <p className="mb-4">
              01 Complete the application form either online or collect the form
              from the school..
            </p>
          </Reveal>
          <Reveal>
            {" "}
            <p className="mb-2">
              02. The following documents must be uploaded:
            </p>
          </Reveal>
          <ul className="list-disc ml-6 space-y-1">
            <Reveal>
              {" "}
              <li>Student’s Birth Certificate</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Student’s Aadhaar Card</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>
                School Leaving Certificate (can be submitted later if not
                available)
              </li>
            </Reveal>
            <Reveal>
              {" "}
              <li>UDISE Number from current school (Std 2 onwards)</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Previous/current class Report Card (Std 2 onwards)</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>
                Address proof (any one): Ration Card, Electricity Bill,
                Passport, Aadhaar Card
              </li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Aadhaar card of any one parent/guardian</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>PAN Card of any one parent/guardian</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Passport size photograph</li>
            </Reveal>
            <Reveal>
              {" "}
              <li>Caste Certificate (if applicable)</li>
            </Reveal>
          </ul>
        </AccordionItem>
      </div>
      {/* <DocumentAccordion/> */}

      <InfoSection />
      <div className="w-full flex justify-center px-4 py-10">
        <div className="max-w-4xl text-center">
          <Reveal>
            {" "}
            <p className="text-xl text-gray-700 font-medium mb-4">
              Other things that we care at{" "}
              <strong className="text-[#1a237e]">International</strong>
            </p>
          </Reveal>

          <Reveal>
            {" "}
            <p className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4">
              <span className="inline-block mr-6">
                We Don’t Take <strong>Interviews</strong>
              </span>
              <span className="inline-block">
                We Don’t Take <strong>Donations</strong>
              </span>
            </p>
          </Reveal>

          <Reveal>
            {" "}
            <p className="text-lg md:text-xl text-gray-800 mb-3">
              Because we believe that your child is our responsibility
            </p>
          </Reveal>

          <Reveal>
            {" "}
            <p className="text-2xl md:text-3xl font-bold">
              <span className="text-[#1a237e]">We Groom,</span>{" "}
              <span className="text-[#EF4444]">We Nurture</span>
            </p>
          </Reveal>
        </div>
      </div>
      {/* <QuickLinks/> */}
    </>
  );
};

export default AdmissionProcess;
