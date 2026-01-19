// src/pages/media-news/BlogList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../slice/blogSlice";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import transport from "../../assets/images/blog.jpg";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <section className="">
      {/* ===== HEADER ===== */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={transport}
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
             Blogs &  <br />
               <span className="text-[#EF4444]">News</span>
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
               src={transport}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans text-justify">
          Explore our{" "}
          <span className="text-[#EF4444] font-semibold">School Blogs</span> to
          stay connected with the latest happenings, achievements, and stories
          from our vibrant school community. Our blogs showcase{" "}
          <span className="text-[#EF4444] font-semibold">student projects</span>
          ,{" "}
          <span className="text-[#EF4444] font-semibold">event highlights</span>
          , and inspiring{" "}
          <span className="text-[#EF4444] font-semibold">teacher insights</span>
          . Each post reflects our commitment to{" "}
          <span className="text-[#EF4444] font-semibold">
            learning, creativity
          </span>
          , and holistic development. From{" "}
          <span className="text-[#EF4444] font-semibold">
            academic milestones
          </span>{" "}
          to{" "}
          <span className="text-[#EF4444] font-semibold">
            extra-curricular activities
          </span>
          , our blogs keep parents, students, and staff informed and inspired.
          Dive into our blogs regularly to celebrate the{" "}
          <span className="text-[#EF4444] font-semibold">successes</span> and{" "}
          <span className="text-[#EF4444] font-semibold">achievements</span> of
          our school community.
        </p>
      </div>

      {/* ===== MESSAGES ===== */}
      {loading && (
        <p className="text-center text-gray-500 mt-6">Loading blogs...</p>
      )}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}
      {!loading && Array.isArray(blogs) && blogs.length === 0 && (
        <p className="text-center text-red-500 mt-6">No blogs found!</p>
      )}

      {/* ===== BLOG CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10 px-6 md:px-0">
        {Array.isArray(blogs) &&
          blogs.map((blog) => (
            <Reveal key={blog.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
                {/* Blog Image */}
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL_REL}blogs/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                {/* Blog Content */}
                <div className="p-5 flex flex-col">
                  <h3 className="text-lg font-bold text-[#008300] mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Published: {blog.published_date}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-[#EF4444] font-bold hover:underline mt-auto"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
      </div>
    </section>
  );
};

export default BlogList;
