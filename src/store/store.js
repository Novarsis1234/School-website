import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import jobReducer from "../slice/jobSlice";

import authSlice from '../slice/authSlice';
import userSlice from '../slice/userSlice';
import uniformReducer from "../slice/uniformSlice";
 import serviceReducer from "../slice/serviceSlice";
import blogReducer from '../slice/blogSlice';
import contactReducer from '../slice/contactSlice';
import cartReducer from '../slice/cartSlice';
import applyNowReducer from '../slice/applyNowSlice';
import admissionReducer from '../slice/admissionSlice'
import galleryReducer from '../slice/gallerySlice'
import careerReducer from "../slice/careerSlice";
import faqReducer from "../slice/faqSlice";
 import teamReducer from "../slice/teamSlice";
import applyFormReducer from "../slice/applyFormSlice";
import signupReducer from "../slice/signupSlice";
import signinReducer from "../slice/signinSlice";
import accountReducer from "../slice/accountSlice";
import infrastructureReducer from "../slice/infrastructureSlice";
import busReducer from "../slice/busSlice";
import rootSaga from '../apis/rootSaga';
import examUpdateReducer from "../slice/examUpdateSlice";
import schoolNotificationReducer from "../slice/schoolNotificationSlice";
import awardReducer from "../slice/awardSlice";
import eventReducer from '../slice/eventSlice'
import newsReducer from '../slice/newsSlice';
import feeStructureReducer from "../slice/feestuctureSlice"; 
import syllabusReducer from "../slice/syllabusSlice";
import topstudentReducer from "../slice/topstudentSlice";
import managementReducer from "../slice/managementSlice";
import boardMessageReducer from "../slice/boardMessageSlice"; 
import curriculumReducer from "../slice/curriculumSlice";
import rightApproachReducer from "../slice/rightApproachSlice";
import academicSectionReducer from "../slice/academicSectionSlice";
import academicCalendarReducer from "../slice/academicCalendarSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
        awards: awardReducer,
    applyForm: applyFormReducer,
    job: jobReducer,
    services: serviceReducer,
     bus: busReducer,
    blogs: blogReducer,
    contact: contactReducer,
    cart: cartReducer,
    applyNow: applyNowReducer,
    admission: admissionReducer,
     boardMessages: boardMessageReducer, 
    events: eventReducer,
    gallery: galleryReducer,
     career: careerReducer,
    faqs: faqReducer,
     news: newsReducer,
      team: teamReducer,
       signup: signupReducer,
       management: managementReducer,
         infrastructures: infrastructureReducer,
    signin: signinReducer,
    account: accountReducer,
    curriculums: curriculumReducer,
     academicSection: academicSectionReducer,
     syllabus: syllabusReducer,
    uniforms: uniformReducer,
      feeStructures: feeStructureReducer,
          topstudents: topstudentReducer,
    examupdates: examUpdateReducer,
     rightApproach: rightApproachReducer,
    schoolNotifications: schoolNotificationReducer,
    academicCalendar: academicCalendarReducer,
    

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;













///////////
// import React, { useEffect, useState } from "react";
// import { getRequest } from "../../apis/ApiInstence";

// const MyProfile = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await getRequest("customer/profile");

//         console.log("API response:", res);

//         if (res?.success) {
//           setProfile(res.data);
//         } else {
//           console.error("Backend error:", res.message || res);
//         }
//       } catch (error) {
//         console.error("Fetch error:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!profile) return <div>Loading profile...</div>;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">My Profile</h2>
//       <p><strong>Name:</strong> {profile.name}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//       <p><strong>Mobile:</strong> {profile.mobile}</p>
//     </div>
//   );
// };

// export default MyProfile;



//////////
