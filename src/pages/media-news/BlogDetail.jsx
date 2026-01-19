import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Reveal from "../../components/Reveal";

const API_BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/api/v1/";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}blogs/${id}`);
        setBlog(res.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blog details");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading blog...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!blog)
    return <p className="text-center text-red-500 mt-10">Blog not found!</p>;

  return (
    <>
      <div className="bg-green-100 pb-2 pt-12">
        <Reveal>
          <h2
            className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold 
            bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text 
            mb-10 tracking-wide pt-20"
          >
            Blog Details
            <div className="mx-auto mt-2 w-24 h-1 bg-[#EF4444] rounded-full"></div>
          </h2>
        </Reveal>
      </div>

      {/* Banner */}

      <section className="bg-gray-50 py-16 px-6 md:px-20">
        {/* ===== BACK BUTTON ===== */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-6 py-2 bg-[#EF4444] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-105"
        >
          &larr; Back
        </button>

        {/* ===== BLOG CARD ===== */}
        <Reveal>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-[#EF4444]">
            {/* Blog Image */}
            <img
              src={`${process.env.REACT_APP_BACKEND_URL_REL}blogs/${blog.image}`}
              alt={blog.title}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Blog Content */}
            <div className="p-10 md:p-14 space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#008300]">
                {blog.title}
              </h1>
              <p className="text-gray-500   text-xl">
                By -{" "}
                <span className="font-bold  text-[#EF4444]">{blog.author}</span>{" "}
                | Published: {blog.published_date}
              </p>
              <hr className="border-gray-200" />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg md:text-xl text-justify">
                {blog.content}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default BlogDetail;
