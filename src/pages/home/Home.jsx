import React from 'react';
import HeroSection from './HeroSection';
import TopStudents from './TopStudents';
import OurMission from './OurMission';
import InfoSection from './InfoSection';
import SchoolFeatures from './SchoolFeatures';
import SchoolAttraction from './SchoolAttraction';
import SchoolStats from './SchoolStats';
import SharperPhilosophy from './SharperPhilosophy';

const Home = () => {
  return (
    <div>
     <HeroSection/>
     <TopStudents/>
      <OurMission/>
      <InfoSection/>
      <SchoolAttraction/>
      <SchoolFeatures/>
      <SchoolStats/>
      <SharperPhilosophy/>
    </div>
  );
}

export default Home;
