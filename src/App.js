import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer';
import './App.css';
import Login from './pages/user/Login';
import Regsiter from './pages/user/Regsiter';
import About from './pages/about/About';
import UserDashboard from './pages/user/UserDashboard';
import ScrollToTop from './pages/TopToBack/ScrollToTop';
import Top from './pages/TopToBack/Top';
import OtpVerification from './pages/user/OtpVerification';
import MyProfile from './pages/user/Myrpofile';
import MyCourse from './pages/user/MyCourse';
import MyJob from './pages/user/MyJob';
import Header from './components/Header';
import ManagementTeam from './pages/staff/ManagementTeam';
import BoardMassage from './pages/staff/BoardMassage';
import TheRightApproach from './pages/staff/TheRightApproach';
import Awards from './pages/media-news/Awards';
import Gallery from './pages/media-news/Gallery';
import News from './pages/media-news/NewsUpdated';
import Events from './pages/media-news/Events';
import Curriculum from './pages/academic/Curriculum';
import Syllabus from './pages/academic/Syllabus';
import AcademicSection from './pages/academic/AcademicSection';
import Transport from './pages/facility/Transport';
import Uniform from './pages/facility/Uniform';
import Infrastructure from './pages/facility/Infrastructure';
import Holidays from './pages/notification/Holidays';
import Examination from './pages/notification/Examination';
import SchoolNotification from './pages/notification/SchoolNotification';
import AdmissionProcess from './pages/admission/AdmissionProcess';
import OnlineAdmission from './pages/admission/OnlineAdmission';
import FeesStucture from './pages/admission/FeesStucture';
import TermandCondition from './pages/notification/TermandCondition';
import BlogList from './pages/media-news/BlogList';
import BlogDetail from './pages/media-news/BlogDetail';
import NewsDetail from './pages/media-news/NewsDetail';
import AcademicCalendar from './pages/academic/AcademicCalendar';
import FeeManagement from './pages/admission/FeeManagement';
import Hostel from './pages/facility/Hostel';
import Library from './pages/facility/Library';
import Assembly from './pages/academic/Assembly';



const App = () => {
  return (
    <>
    <Header />
    <ScrollToTop />
        <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<ManagementTeam />} />
        <Route path="/chairmanMessage" element={<BoardMassage />} />
        <Route path="/theRightApproach" element={<TheRightApproach />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
         <Route path="/news/:id" element={<NewsDetail />} />
         <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/AcademicsSection" element={<AcademicSection />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/uniform" element={<Uniform />} />
        <Route path="/infrastucture" element={<Infrastructure />} />
        <Route path="/holiday" element={<Holidays />} />
        <Route path="/examinationUpdates" element={<Examination />} />
        <Route path="/notification" element={<SchoolNotification />} />
        <Route path="/admission" element={<AdmissionProcess />} />
        <Route path="/online" element={<OnlineAdmission />} />
        <Route path="/fees" element={<FeesStucture />} />
        <Route path="/feemanagement" element={<FeeManagement />} />
        <Route path="/terms" element={<TermandCondition />} />
        <Route path="/Academicscalendar" element={<AcademicCalendar />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/library" element={<Library />} />
        <Route path="/assembly" element={<Assembly />} />
        
        
         {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/otpverify" element={<OtpVerification />} />

        {/* User Dashboard */}
        <Route path="/user" element={<UserDashboard />}>
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myjobs" element={<MyJob />} />
          <Route path="mycourses" element={<MyCourse />} />
        </Route>

      </Routes>
        <Top />
      <Footer />
    </>
  );
};

export default App;
