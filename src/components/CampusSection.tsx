
import React from 'react';

const CampusSection = () => {
  const campusImages = [
    {
      src: "https://jntuk.edu.in/assets/img/homecontact/3.jpg",
      alt: "JNTUK Main Campus Building",
      title: "ADMINISTRATIVE OFFICE"
    },
    {
      src: "https://jntuk.edu.in/assets/img/homecontact/7.jpg",
      alt: "JNTUK Academic Block",
      title: "ALUMNI AUDITORIUM"
    },
    {
      src: "https://jntuk.edu.in/assets/img/homecontact/8.jpg",
      alt: "JNTUK Engineering Department",
      title: "EXAMINATION CENTER"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Department Campus
          </h2>
          <p className="text-lg text-gray-600">
            We offer a fine range of opportunities for students to explore their interests and develop their skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campusImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
