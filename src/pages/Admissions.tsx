
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Users, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const Admissions = () => {
  const admissionProcesses = [
    {
      title: "B.Tech Admissions",
      description: "Through AP EAMCET / JEE Main",
      deadline: "July 2024",
      status: "Open",
      icon: <FileText className="w-6 h-6" />,
      requirements: ["AP EAMCET / JEE Main Score", "Intermediate (10+2) with PCM", "Minimum 45% marks"]
    },
    {
      title: "M.Tech Admissions", 
      description: "Through AP PGECET / GATE",
      deadline: "August 2024",
      status: "Open",
      icon: <Users className="w-6 h-6" />,
      requirements: ["GATE Score / AP PGECET", "B.Tech in relevant discipline", "Minimum 50% marks"]
    },
    {
      title: "MBA Admissions",
      description: "Through AP ICET",
      deadline: "September 2024", 
      status: "Upcoming",
      icon: <Calendar className="w-6 h-6" />,
      requirements: ["AP ICET Score", "Bachelor's degree", "Minimum 50% marks"]
    },
    {
      title: "Ph.D Admissions",
      description: "Research Programs",
      deadline: "December 2024",
      status: "Upcoming",
      icon: <CheckCircle className="w-6 h-6" />,
      requirements: ["Master's degree", "UGC NET/GATE/JRF", "Research proposal"]
    }
  ];

  const importantDates = [
    { event: "Application Start", date: "May 15, 2024", status: "completed" },
    { event: "Last Date for Application", date: "July 30, 2024", status: "active" },
    { event: "Counselling Begins", date: "August 15, 2024", status: "upcoming" },
    { event: "Classes Commence", date: "September 1, 2024", status: "upcoming" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Upcoming": return "bg-yellow-100 text-yellow-800";
      case "Closed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDateStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600";
      case "active": return "text-blue-600 font-semibold";
      case "upcoming": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join JNTUK - Your Gateway to Excellence in Engineering and Technology Education
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <AlertCircle className="text-yellow-600 mr-3" size={20} />
              <p className="text-yellow-800">
                <strong>Important:</strong> All admissions are conducted through state-level entrance examinations. 
                Visit the official website for latest updates and notifications.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Admission Processes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admission Processes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionProcesses.map((process, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        {process.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {process.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(process.status)}`}>
                      {process.status}
                    </span>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm font-medium">{process.deadline}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {process.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle size={12} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Important Dates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Important Dates</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg">
                      <div className="flex items-center">
                        <Calendar className="text-blue-600 mr-3" size={20} />
                        <span className="font-semibold text-gray-800">{item.event}</span>
                      </div>
                      <span className={`font-medium ${getDateStatusColor(item.status)}`}>
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Departments Available */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Departments Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Computer Science & Engineering",
                "Electronics & Communication Engineering", 
                "Mechanical Engineering",
                "Civil Engineering",
                "Electrical & Electronics Engineering",
                "Chemical Engineering",
                "Information Technology",
                "Metallurgical & Materials Engineering",
                "Biotechnology",
                "Architecture",
                "MBA",
                "MCA"
              ].map((dept, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800">{dept}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admission Helpdesk</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Phone:</strong> +91-884-2300100</p>
                  <p><strong>Email:</strong> admissions@jntuk.edu.in</p>
                  <p><strong>Address:</strong> JNTUK, Kakinada, Andhra Pradesh - 533003</p>
                  <p><strong>Office Hours:</strong> 9:00 AM - 5:00 PM (Mon-Fri)</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Links</h3>
                <div className="space-y-2">
                  <a href="https://www.jntuk.edu.in" className="block text-blue-600 hover:underline">JNTUK Official Website</a>
                  <a href="#" className="block text-blue-600 hover:underline">Application Portal</a>
                  <a href="#" className="block text-blue-600 hover:underline">Admission Guidelines</a>
                  <a href="#" className="block text-blue-600 hover:underline">Fee Structure</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Admissions;
