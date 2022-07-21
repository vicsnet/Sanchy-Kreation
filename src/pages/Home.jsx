import React from 'react'
import Passion from '../components/reusableComponent/Passion';
import Project from '../components/reusableComponent/Project';
import Services from '../components/reusableComponent/Services'
import Story from '../components/reusableComponent/Story';
import Subfooter from '../components/reusableComponent/Subfooter';

const Home = () => {
  return (
    <div className="bg-[#0F1320]">
      <Services />
      <Passion />
      <Story />
      <Project />
      <Subfooter />
    </div>
  );
}

export default Home