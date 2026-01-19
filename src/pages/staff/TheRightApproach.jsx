// src/pages/TheRightApproach.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Reveal from "../../components/Reveal";
import { fetchRightApproaches } from "../../slice/rightApproachSlice";
import ApproachBanner from "../../assets/images/rightapproach.jpg";

const TheRightApproach = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.rightApproach);

  useEffect(() => {
    dispatch(fetchRightApproaches());
  }, [dispatch]);

  return (
    <>
      {/* Header Section */}
      <div className="bg-green-100 pb-2 pt-12">
        <Reveal>
          <h2
            className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold 
            bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text 
            mb-10 tracking-wide pt-20"
          >
            The Right Approach
            <div className="mx-auto mt-2 w-24 h-1 bg-[#EF4444] rounded-full"></div>
          </h2>
        </Reveal>
      </div>

      {/* Banner */}
      <Reveal>
        <img
          src={ApproachBanner}
          alt="School Banner"
          className="w-full h-auto object-cover mb-8"
        />
      </Reveal>

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 space-y-12">
          {/* Static Paragraph */}
          <div className="max-w-4xl mx-auto text-gray-800 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              At our school, we follow{" "}
              <span className="text-[#EF4444] font-semibold">
                The Right Approach
              </span>{" "}
              to education, focusing on the{" "}
              <span className="text-[#EF4444] font-semibold">
                holistic development
              </span>{" "}
              of each student. Our teaching methods combine{" "}
              <span className="text-[#EF4444] font-semibold">
                innovative learning techniques
              </span>{" "}
              with traditional values to build strong foundations. We encourage{" "}
              <span className="text-[#EF4444] font-semibold">
                critical thinking, curiosity, and problem-solving
              </span>{" "}
              in every classroom.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Teachers and staff work together to provide{" "}
              <span className="text-[#EF4444] font-semibold">
                personalized guidance
              </span>{" "}
              that meets the unique needs of each learner. Our approach
              integrates{" "}
              <span className="text-[#EF4444] font-semibold">
                academic excellence with co-curricular activities
              </span>
              , fostering confidence and creativity. Through this method,
              students are prepared to face{" "}
              <span className="text-[#EF4444] font-semibold">
                future challenges with skill, integrity, and resilience
              </span>
              .
            </p>
          </div>

          {/* 🔥 Dynamic Cards Section */}
          {loading && (
            <p className="text-center text-gray-600">Loading approaches...</p>
          )}

          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && list.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {list.map((item) => (
                <Reveal key={item.id}>
                  <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transform transition duration-300">
                    <h3 className="text-xl font-bold text-[#EF4444] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Conclusion */}
          <div className="max-w-3xl mx-auto text-center text-gray-800">
            <p className="text-lg md:text-xl leading-relaxed italic">
              "Our commitment is to guide each student with the right approach,
              helping them become lifelong learners and responsible citizens."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheRightApproach;
