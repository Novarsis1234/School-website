import React from "react";
import Reveal from "../../components/Reveal";
import qr from "../../assets/images/UPI.png";
import online from "../../assets/images/notification.jpg";

const FeePayment = () => {
  return (
    <>
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
        Fees <br />
          <span className="text-[#EF4444]">Managements</span>
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

      {/* ====== Scan & Pay Section ====== */}
      <Reveal>
        <div className="flex flex-col items-center gap-6 py-10 px-4">
          <img
            src={qr}
            className="w-64 h-64 object-cover  rounded-xl shadow-xl"
            alt="QR Scanner"
          />
          <h3
            className="text-xl md:text-2xl font-extrabold 
text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-red-600
text-center tracking-wide  relative"
          >
            Scan & Pay the Fees Easily
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-[3px] bg-[#EF4444] rounded-full"></span>
          </h3>

          <p className="text-gray-600 text-center max-w-3xl">
            You can directly scan the QR code above using any UPI App and make
            your fee submission instantly.
          </p>
        </div>
      </Reveal>

      {/* ====== Important Notes ====== */}
      <Reveal>
        <div className="max-w-5xl mx-auto p-6 rounded-xl  shadow-lg my-2">
          <h3 className="text-xl font-bold text-[#EF4444] mb-4">
            Important Payment Instructions:
          </h3>

          <ul className="list-disc space-y-3 ml-6 text-gray-700 text-lg">
            <li>Fee amount must be verified before making payment.</li>
            <li>
              After payment,{" "}
              <span className="font-semibold text-[#EF4444]">
                send payment screenshot
              </span>{" "}
              to school office number or WhatsApp (98989898989)
            </li>
            <li>Enter student name, class & admission number in message.</li>
            <li>Fees once paid are non-refundable.</li>
          </ul>
        </div>
      </Reveal>

      {/* ====== UPI Details ====== */}
      <Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {/* ===== UPI Section ===== */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#EF4444] mb-6">
              UPI Payment Details
            </h3>

            <ul className="space-y-3 text-gray-700 text-lg font-medium">
              <li>
                <strong>UPI ID:</strong> schoolpayment@upi
              </li>
              <li>
                <strong>Account Holder Name:</strong> International School
                Indore
              </li>
              <li>
                <strong>UPI Apps:</strong> PayTM, PhonePe, Google Pay
              </li>
            </ul>
          </div>

          {/* ===== Bank Section ===== */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#EF4444] mb-6">
              Bank Details
            </h3>

            <ul className="space-y-3 text-lg text-gray-700 font-medium">
              <li>
                <strong>Bank Name:</strong> State Bank Of India
              </li>
              <li>
                <strong>Account Number:</strong> 1234 5678 9000
              </li>
              <li>
                <strong>IFSC Code:</strong> SBIN0001234
              </li>
              <li>
                <strong>Branch:</strong> City Branch
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default FeePayment;
