
import React from 'react';
import { Link } from 'react-router-dom';

const OnlineCoursesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enroll For Our Online Courses
        </h2>
        <p className="text-xl mb-8">
          from anywhere in the world!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default OnlineCoursesSection;
