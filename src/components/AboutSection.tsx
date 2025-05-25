
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Jawaharlal Nehru Technological University Kakinada (JNTUK) is a premier technical university located in Kakinada, Andhra Pradesh, India. The university was established in 2008 as a successor to the erstwhile Jawaharlal Nehru Technological University, JNTU. It offers world-class education in engineering, technology, and management with a focus on innovation, research, and excellence.
            </p>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Copyright © 2025 University College of Engineering Kakinada, JNTUK. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
