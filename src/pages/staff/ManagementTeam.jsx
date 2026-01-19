import React from "react";
import Reveal from "../../components/Reveal";
import bannerImg from "../../assets/images/managemnet.jpg";
import bannerImg1 from "../../assets/images/about1.avif";

/* ================= STATIC MANAGEMENT DATA ================= */
const managementTeam = [
  {
    id: 1,
    name: "Dr. R. K. Sharma",
    title: "Principal",
    image: "/Images/teacher1.jpg",
    description:
      "Dr. R. K. Sharma provides visionary leadership and academic direction to the institution. He strongly believes in value-based education, discipline, and continuous innovation. Under his guidance, the school maintains high academic standards while nurturing responsible and confident learners.",
  },
  {
    id: 2,
    name: "Mrs. Sunita Sharma",
    title: "Vice Principal",
    image: "/Images/teacher2.webp",
    description:
      "Mrs. Sunita Sharma supports academic planning and student development initiatives. She works closely with teachers to enhance teaching quality and learning outcomes. Her leadership promotes a positive, inclusive, and student-focused school environment.",
  },
  {
    id: 3,
    name: "Mr. Anil Verma",
    title: "Maths Teacher",
    image: "/Images/teacher3.jpg",
    description:
      "Mr. Anil Verma specializes in making mathematics engaging and concept-based. He focuses on logical thinking, problem-solving skills, and academic clarity. His teaching approach helps students build confidence and achieve strong academic performance.",
  },
  {
    id: 4,
    name: "Mrs. Neha Gupta",
    title: "English Teacher",
    image: "/Images/teacher4.avif",
    description:
      "Mrs. Neha Gupta encourages effective communication, creativity, and language proficiency. She nurtures reading, writing, and critical thinking skills among students. Her interactive teaching style helps learners express themselves with confidence.",
  },
  {
    id: 5,
    name: "Mr. Suresh Yadav",
    title: "Physical Education Teacher",
    image: "/Images/teacher5.jpg",
    description:
      "Mr. Suresh Yadav promotes physical fitness, teamwork, and sportsmanship. He encourages students to maintain a healthy lifestyle through regular physical activities. His guidance helps students develop discipline, endurance, and leadership skills.",
  },
  {
    id: 6,
    name: "Mrs. Pooja Mishra",
    title: "Hindi Teacher",
    image: "/Images/teacher6.jpg",
    description:
      "Mrs. Pooja Mishra focuses on strengthening language skills and cultural understanding. She encourages clarity in expression, grammar, and literature appreciation. Her structured teaching methods help students gain confidence in Hindi communication.",
  },
  {
    id: 7,
    name: "Mr. Amit Singh",
    title: "Chemistry Teacher",
    image: "/Images/teacher7.jpeg",
    description:
      "Mr. Amit Singh simplifies complex scientific concepts through practical learning and experimentation. He emphasizes conceptual clarity and analytical thinking. His approach helps students develop curiosity and interest in science.",
  },
  {
    id: 8,
    name: "Mrs. Kavita Jain",
    title: "Biology Teacher",
    image: "/Images/teacher8.webp",
    description:
      "Mrs. Kavita Jain focuses on building a strong understanding of life sciences and environmental awareness. She encourages observation, inquiry, and scientific reasoning. Her teaching inspires students to explore biological concepts with enthusiasm.",
  },
  {
    id: 9,
    name: "Mr. Rahul Mehta",
    title: "Sports Coach",
    image: "/Images/teacher9.jpg",
    description:
      "Mr. Rahul Mehta trains students in various sports while promoting discipline and teamwork. He helps students improve physical strength, coordination, and confidence. His coaching develops both athletic skills and sports ethics.",
  },
  {
    id: 10,
    name: "Mrs. Aarti Pandey",
    title: "Social Studies Teacher",
    image: "/Images/teacher10.avif",
    description:
      "Mrs. Aarti Pandey makes social studies meaningful by connecting lessons with real-life examples. She promotes civic responsibility, critical thinking, and awareness of society. Her guidance helps students become informed and responsible citizens.",
  },
];

const ManagementTeam = () => {
  return (
    <div className="bg-[#f9fafb]">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={bannerImg1}
          alt="Management Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

        <div className="relative mx-auto max-w-[1400px] px-6 xl:px-12 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                Staff & <br />
                <span className="text-[#EF4444]">Management</span>
              </h1>

              <p className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0 text-lg">
                Dedicated leaders and educators working together to inspire,
                guide and shape the future of every student.
              </p>

              <span className="block w-24 h-1 bg-[#EF4444] mt-6 mx-auto lg:mx-0 rounded-full"></span>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <img
                src={bannerImg}
                alt="Management Team"
                className="w-full max-w-md h-[280px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <Reveal>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Our <span className="text-[#EF4444] font-semibold">staff and management</span> form the foundation
            of our institution. With strong leadership, professional expertise,
            and a shared vision, they ensure academic excellence and holistic
            development. Together, they build a disciplined, innovative, and
            student-focused learning environment.
          </p>
        </Reveal>
      </section>

      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-20">
            {managementTeam.map((member, index) => (
              <Reveal key={member.id}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-extrabold text-[#1f2933] mb-2">
                      {member.name}
                    </h3>

                    <p className="text-[#EF4444] font-semibold mb-4">
                      {member.title}
                    </p>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementTeam;
