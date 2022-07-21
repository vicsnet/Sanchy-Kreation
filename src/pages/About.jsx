import React from 'react'
import Innovate from '../components/reusableComponent/Innovate';
import OurStory from '../components/reusableComponent/OurStory';
import Passion from '../components/reusableComponent/Passion';
import Subfooter from '../components/reusableComponent/Subfooter';
import Success from '../components/reusableComponent/Success';

const About = () => {
  return (
    <div>
      <OurStory />
      <Passion />
      <Innovate />
      <Success />
      <Subfooter />
    </div>
  );
}

export default About