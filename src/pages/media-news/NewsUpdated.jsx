// src/pages/news/NewsList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/news1.jpg";

/* ================= STATIC NEWS DATA ================= */
export const newsData = [
  {
    id: "1",
    title: "Annual Cultural Festival Celebrated",
    content:
      "Our Annual Cultural Festival was celebrated with great enthusiasm and vibrant participation from students. The event featured a variety of dance, music, drama, and art performances that highlighted creativity and self-expression. Students confidently showcased their talents on stage while learning the importance of teamwork and discipline. The festival also promoted cultural awareness and unity, making it a memorable and enriching experience for everyone involved.",
    image: "/Images/new1.jpg",
    publishedDate: "10 Aug 2024",
  },
  {
    id: "2",
    title: "Students Excel in Board Examinations",
    content:
      "Our students achieved outstanding results in the board examinations, bringing pride and recognition to the institution. Their success reflects consistent hard work, discipline, and dedication towards academic excellence. Teachers and parents played a vital role by providing guidance and encouragement throughout the academic year. These achievements have motivated junior students to set higher goals and strive for excellence.",
    image: "/Images/new2.jpg",
    publishedDate: "25 Jun 2024",
  },
  {
    id: "3",
    title: "Science Exhibition Highlights Innovation",
    content:
      "The Science Exhibition provided students with a platform to explore innovative ideas and practical applications of science. Participants presented creative models, experiments, and research-based projects with confidence. The exhibition encouraged scientific thinking, problem-solving skills, and curiosity among learners. It successfully inspired students to think analytically and develop a deeper interest in science and technology.",
    image: "/Images/new4.jpg",
    publishedDate: "18 Feb 2024",
  },
  {
    id: "4",
    title: "Sports Day Promotes Team Spirit",
    content:
      "The Annual Sports Day was organized with a wide range of indoor and outdoor activities. Students participated enthusiastically, demonstrating discipline, sportsmanship, and teamwork. The event emphasized the importance of physical fitness and a healthy lifestyle alongside academics. It created an energetic and joyful atmosphere, leaving lasting memories for students and teachers alike.",
    image: "/Images/new3.jpeg",
    publishedDate: "12 Dec 2023",
  },
];


const NewsList = () => {
  const [visibleNews, setVisibleNews] = useState(4);

  const handleToggleView = () => {
    setVisibleNews(
      visibleNews >= newsData.length ? 4 : newsData.length
    );
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <img
          src={transport}
          alt="News Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 to-black/10"></div>

        <div className="relative mx-auto max-w-[1400px] px-6 xl:px-12 pt-24 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
                Blogs & <br />
                <span className="text-[#EF4444]">News</span>
              </h1>
              <p className="mt-5 text-gray-200 max-w-xl">
                Latest updates, achievements and announcements from our school.
              </p>
              <span className="block w-24 h-1 bg-[#EF4444] mt-6 rounded-full"></span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= NEWS CARDS ================= */}
      <section className="mb-16 px-4 sm:px-6 lg:px-20 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.slice(0, visibleNews).map((item) => (
            <Reveal key={item.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border-t-4 border-[#EF4444]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5 flex flex-col">
                  <p className="text-xs text-gray-500 mb-2">
                    {item.publishedDate} • News Dept
                  </p>

                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 flex-1">
                    {item.content.substring(0, 90)}...
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="mt-4 text-[#EF4444] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* VIEW MORE */}
        {newsData.length > 4 && (
          <div className="text-center mt-10">
            <Reveal>
              <button
                onClick={handleToggleView}
                className="px-8 py-3 rounded-full bg-[#EF4444] text-white text-lg font-semibold hover:bg-red-600 transition shadow-lg"
              >
                {visibleNews >= newsData.length
                  ? "View Less"
                  : "View More"}
              </button>
            </Reveal>
          </div>
        )}
      </section>
    </>
  );
};

export default NewsList;
