
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              About JNTUK
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our History</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Jawaharlal Nehru Technological University, Kakinada (JNTUK) was established in 1946 as the 
                College of Engineering, Kakinada. It became a constituent college of Andhra University in 1946 
                and later evolved into a technological university in 2008.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, JNTUK stands as one of the premier technological universities in India, committed to 
                excellence in engineering education, research, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a world-class technological university fostering innovation, research, and 
                  excellence in engineering education to serve society and contribute to national development.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality technical education, promote research and innovation, and 
                  develop competent engineers and technologists to meet global challenges.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">75+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25,000+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Faculty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
