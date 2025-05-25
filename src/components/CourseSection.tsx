
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Microscope } from 'lucide-react';

const CourseSection = () => {
  const courses = [
    {
      title: "B.TECH",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      description: "This is a four year degree programme. It provides students with a strong foundation in engineering principles and practices. As the nation's technological requirement flourishes, alternate markets in specialized in their areas.",
      color: "border-blue-200 hover:border-blue-400"
    },
    {
      title: "M.TECH",
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      description: "The M.Tech programme is designed to provide in-depth exposure to advanced engineering concepts and specialized knowledge. It enables students to dive deeper into their chosen field and pursue cutting-edge research projects.",
      color: "border-green-200 hover:border-green-400"
    },
    {
      title: "RESEARCH",
      icon: <Microscope className="w-12 h-12 text-purple-600" />,
      description: "Our research programmes are designed for those driven to advance the frontiers of engineering knowledge. These programs provide opportunities to work on innovative projects with advanced research protocols, collaborate with renowned faculty.",
      color: "border-purple-200 hover:border-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our programs designed to nurture your passion for technology and equip you with the skills to shape the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${course.color} border-2`}>
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {course.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
