
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Largest Playground & Gym",
      image: "https://jntucek.ac.in/assets/files/editor/JNTUK_MOdern_gymnasium_2.jpg",
      description: "A large, fully equipped playground along with A Gym for students to enjoy and encourage physical fitness activities."
    },
    {
      title: "Extensive Library",
      image: "https://jntuk.edu.in/assets/img/homecontact/6.jpg",
      description: "Our comprehensive library offers access to vast resources of the unique pleading sections in a user collection of books, research papers, and digital resources."
    },
    {
      title: "Tasty and Healthy Food",
      image: "https://jntucek.ac.in/assets/files/editor/NALANDA_HOSTEL_BOYS.jpg",
      description: "Multiple canteens and food courts offering a variety of nutritious and delicious meals."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-gray-600">
            JNTUK is equipped with modern facilities and resources to support the academic and research needs of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
