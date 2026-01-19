import React from "react";

const SchoolStats = () => {
  const stats = [
    { id: 1, title: "Years of Experience", value: "25+" },
    { id: 2, title: "Total Students", value: "1200+" },
    { id: 3, title: "Management & Staff", value: "60+" },
    { id: 4, title: "Total Buses", value: "10" },
  ];

  return (
    <section
      className="relative py-20 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/fees.jpg')",
        backgroundAttachment: "fixed", // 🔥 PARALLAX
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl font-extrabold mb-6">
            Our School at a Glance
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            Our school stands as a symbol of excellence, discipline, and
            holistic education. With decades of experience in shaping young
            minds, we provide a nurturing environment supported by dedicated
            teachers, modern facilities, and a strong academic foundation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center 
                hover:scale-105 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-yellow-400">
                  {item.value}
                </h3>
                <p className="text-gray-200 mt-2 text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image / Video */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
  <video
    className="w-full h-full object-cover"
    src="/Images/school1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>


      </div>
    </section>
  );
};

export default SchoolStats;
