import React from "react";
import Reveal from "../../components/Reveal";
import notification from "../../assets/images/notification.jpg";
import SchoolNotificationUpdated from "./SchoolNotificationUpdated";

const SchoolNotification = () => {
  return (
    <div>
       <section className="relative w-full min-h-[70vh] overflow-hidden">
     
       {/* BLURRED BACKGROUND */}
       <img
         src={notification}
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
              School <br />
               <span className="text-[#EF4444]">Notifications</span>
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
               src={notification}
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
      <p className="mt-10 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-sans text-justify px-4 sm:px-6 lg:px-20">
        Our{" "}
        <span className="text-[#EF4444] font-semibold">
          school notifications
        </span>{" "}
        keep students, parents, and staff updated on all important events and
        announcements. These include{" "}
        <span className="text-[#EF4444] font-semibold">
          circulars, upcoming programs, fee reminders,
        </span>{" "}
        and policy updates. Timely notifications help everyone stay{" "}
        <span className="text-[#EF4444] font-semibold">
          informed and organized
        </span>{" "}
        throughout the academic year. Notifications also highlight{" "}
        <span className="text-[#EF4444] font-semibold">
          exam schedules, holidays, parent-teacher meetings,
        </span>{" "}
        and other essential information. By following these updates, students
        and parents can{" "}
        <span className="text-[#EF4444] font-semibold">
          plan ahead and avoid last-minute confusion
        </span>
        . Our system ensures that all communications are{" "}
        <span className="text-[#EF4444] font-semibold">
          clear, timely, and easily accessible
        </span>{" "}
        to the school community.
      </p>

      {/* ========= SCHOOL NOTIFICATIONS ========= */}
      <SchoolNotificationUpdated />
    </div>
  );
};

export default SchoolNotification;
