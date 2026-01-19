// src/pages/transport/BusRoute.jsx
import React from "react";
import Reveal from "../../components/Reveal";
import { FaBusAlt, FaUserTie, FaPhoneAlt, FaRoute } from "react-icons/fa";

/* ================= STATIC BUS ROUTE DATA ================= */
const busData = [
  {
    id: 1,
    bus_number: "01",
    driver_name: "Ramesh Kumar",
    driver_mobile: "9876543210",
    route: "City Center → Railway Station → School Campus",
    emergency_number: "112",
  },
  {
    id: 2,
    bus_number: "02",
    driver_name: "Suresh Yadav",
    driver_mobile: "9123456780",
    route: "Civil Lines → Bus Stand → Main Market → School",
    emergency_number: "112",
  },
  {
    id: 3,
    bus_number: "03",
    driver_name: "Amit Verma",
    driver_mobile: "9012345678",
    route: "Industrial Area → Ring Road → School Campus",
    emergency_number: "112",
  },
  {
    id: 4,
    bus_number: "04",
    driver_name: "Vinod Singh",
    driver_mobile: "8899776655",
    route: "Old City → Hospital Road → School Campus",
    emergency_number: "112",
  },
  {
    id: 5,
    bus_number: "05",
    driver_name: "Manoj Sharma",
    driver_mobile: "9988776655",
    route: "Airport Road → University Area → School",
    emergency_number: "112",
  },
];

const BusRoute = () => {
  return (
    <>
      <section className="bg-white py-20 px-6 md:px-20">
        <Reveal>
          <h2
            className="
              relative text-center text-4xl md:text-5xl lg:text-6xl
              font-extrabold text-[#1f2937] mb-16 tracking-wide
            "
          >
            Our Bus Routes

            {/* underline */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-16 h-[3px] bg-[#EF4444] rounded-full"></span>
              <span className="w-3.5 h-3.5 bg-[#EF4444] rounded-full"></span>
              <span className="w-16 h-[3px] bg-[#EF4444] rounded-full"></span>
            </div>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {busData.map((bus) => (
            <Reveal key={bus.id}>
              <div
                className="
                  group bg-white rounded-2xl shadow-lg p-6
                  border border-gray-200
                  hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-300
                "
              >
                {/* Bus Number */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-12 h-12 rounded-full bg-[#EF4444]/10
                      flex items-center justify-center
                      text-[#EF4444] text-xl
                    "
                  >
                    <FaBusAlt />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-[#EF4444]">
                    Bus No. {bus.bus_number}
                  </h3>
                </div>

                {/* Driver */}
                <p className="flex items-center gap-3 text-gray-700 mb-2">
                  <FaUserTie className="text-[#EF4444]" />
                  <span className="font-semibold">Driver:</span>{" "}
                  {bus.driver_name}
                </p>

                {/* Mobile */}
                <p className="flex items-center gap-3 text-gray-700 mb-2">
                  <FaPhoneAlt className="text-[#EF4444]" />
                  <span className="font-semibold">Mobile:</span>{" "}
                  {bus.driver_mobile}
                </p>

                {/* Route */}
                <p className="flex items-start gap-3 text-gray-700 mb-2">
                  <FaRoute className="text-[#EF4444] mt-1" />
                  <span>
                    <span className="font-semibold">Route:</span>{" "}
                    {bus.route}
                  </span>
                </p>

                {/* Emergency */}
                {bus.emergency_number && (
                  <p className="flex items-center gap-3 text-gray-700 mt-2">
                    <FaPhoneAlt className="text-red-600" />
                    <span className="font-semibold">Emergency:</span>{" "}
                    {bus.emergency_number}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default BusRoute;
