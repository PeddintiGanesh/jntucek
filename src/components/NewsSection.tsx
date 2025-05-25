
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowDown } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "JNTUK announces new B.Tech programs for 2024-25",
      date: "2024-01-15",
      category: "Admissions",
      excerpt: "New programs in AI & Data Science, Cyber Security, and Renewable Energy Engineering."
    },
    {
      id: 2,
      title: "Research collaboration with IIT Madras announced",
      date: "2024-01-10",
      category: "Research",
      excerpt: "Joint research initiatives in emerging technologies and sustainable development."
    },
    {
      id: 3,
      title: "Annual Tech Fest 'Technozion 2024' dates announced",
      date: "2024-01-08",
      category: "Events",
      excerpt: "Three-day technical festival featuring competitions, workshops, and industry talks."
    },
    {
      id: 4,
      title: "JNTUK receives NAAC A++ accreditation",
      date: "2024-01-05",
      category: "Achievement",
      excerpt: "University awarded highest grade in National Assessment and Accreditation Council evaluation."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest happenings, achievements, and announcements from JNTUK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                >
                  Read more
                  <ArrowDown className="h-4 w-4 ml-1 transform rotate-[-90deg]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/notifications"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            View All Notifications
            <ArrowDown className="h-5 w-5 ml-2 transform rotate-[-90deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
