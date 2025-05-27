
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import CampusSection from '../components/CampusSection';
import FacilitiesSection from '../components/FacilitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import OnlineCoursesSection from '../components/OnlineCoursesSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CourseSection />
      <CampusSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <OnlineCoursesSection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
