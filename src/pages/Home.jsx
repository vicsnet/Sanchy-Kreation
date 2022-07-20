import React from 'react'
import Passion from '../components/reusableComponent/Passion';
import Project from '../components/reusableComponent/Project';
import Services from '../components/reusableComponent/Services'
import Story from '../components/reusableComponent/Story';

const Home = () => {
  return (
    <div className="bg-[#0F1320]">
      <Services />
      <Passion />
      <Story />
      <Project />

    </div>
  );
}

export default Home