// src/pages/news/NewsDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { newsData } from "./NewsUpdated";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <p className="text-center text-red-500 mt-20">
        News not found!
      </p>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="bg-gray-100 pb-6 pt-20">
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text">
            News Details
          </h2>
        </Reveal>
      </div>

      {/* CONTENT */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-5 py-2 bg-[#EF4444] text-white font-semibold rounded-full hover:bg-red-600 transition"
        >
          ← Back
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-[260px] sm:h-[360px] object-cover"
          />

          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
              {newsItem.title}
            </h1>

            <p className="text-[#EF4444] font-semibold mb-5">
              Published on {newsItem.publishedDate} • News Department
            </p>

            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              {newsItem.content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
