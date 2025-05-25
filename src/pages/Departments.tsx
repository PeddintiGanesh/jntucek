
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Award, Building, Computer, Zap, Cog, Home, Wrench, Beaker, Database, Cpu } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: "Computer Science & Engineering",
      icon: <Computer className="w-8 h-8" />,
      description: "Cutting-edge computing education covering AI, ML, Data Science, and Software Engineering",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 45,
      students: 1200,
      labs: 12,
      color: "bg-blue-600"
    },
    {
      name: "Electronics & Communication Engineering",
      icon: <Cpu className="w-8 h-8" />,
      description: "Advanced electronics, communication systems, VLSI design, and embedded systems",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 38,
      students: 950,
      labs: 10,
      color: "bg-green-600"
    },
    {
      name: "Mechanical Engineering",
      icon: <Cog className="w-8 h-8" />,
      description: "Traditional and modern mechanical engineering with focus on automation and robotics",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 42,
      students: 1100,
      labs: 15,
      color: "bg-orange-600"
    },
    {
      name: "Civil Engineering",
      icon: <Building className="w-8 h-8" />,
      description: "Infrastructure development, construction technology, and environmental engineering",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 35,
      students: 800,
      labs: 8,
      color: "bg-red-600"
    },
    {
      name: "Electrical & Electronics Engineering",
      icon: <Zap className="w-8 h-8" />,
      description: "Power systems, renewable energy, control systems, and power electronics",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 40,
      students: 900,
      labs: 11,
      color: "bg-yellow-600"
    },
    {
      name: "Chemical Engineering",
      icon: <Beaker className="w-8 h-8" />,
      description: "Process engineering, biotechnology, and environmental sustainability",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 28,
      students: 600,
      labs: 9,
      color: "bg-purple-600"
    },
    {
      name: "Information Technology",
      icon: <Database className="w-8 h-8" />,
      description: "Web technologies, mobile computing, cybersecurity, and cloud computing",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 32,
      students: 850,
      labs: 10,
      color: "bg-indigo-600"
    },
    {
      name: "Metallurgical & Materials Engineering",
      icon: <Wrench className="w-8 h-8" />,
      description: "Advanced materials, nanotechnology, and materials characterization",
      programs: ["B.Tech", "M.Tech", "Ph.D"],
      faculty: 25,
      students: 400,
      labs: 7,
      color: "bg-gray-600"
    }
  ];

  const achievements = [
    {
      title: "Research Publications",
      count: "2,500+",
      description: "Published in international journals"
    },
    {
      title: "Industry Partnerships",
      count: "150+",
      description: "Active collaborations with leading companies"
    },
    {
      title: "Patents Filed",
      count: "85+",
      description: "Innovative solutions and technologies"
    },
    {
      title: "Placement Rate",
      count: "92%",
      description: "Students placed in top companies"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Departments</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Explore our diverse range of engineering and technology departments offering world-class education and research opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.count}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Departments Grid */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                  <CardHeader className="text-center pb-4">
                    <div className={`${dept.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {dept.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                      {dept.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dept.programs.map((program, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {program}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <Users className="text-blue-600 mb-1" size={20} />
                        <span className="text-lg font-semibold text-gray-800">{dept.faculty}</span>
                        <span className="text-xs text-gray-600">Faculty</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <BookOpen className="text-green-600 mb-1" size={20} />
                        <span className="text-lg font-semibold text-gray-800">{dept.students}</span>
                        <span className="text-xs text-gray-600">Students</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Building className="text-orange-600 mb-1" size={20} />
                        <span className="text-lg font-semibold text-gray-800">{dept.labs}</span>
                        <span className="text-xs text-gray-600">Labs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Academic Programs */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-purple-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">MBA Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Master of Business Administration with specializations in Finance, Marketing, HR, and Operations
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 2 Years</p>
                    <p>Intake: 60 Students</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Computer className="text-teal-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">MCA Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Master of Computer Applications focusing on software development and emerging technologies
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 2 Years</p>
                    <p>Intake: 66 Students</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="text-pink-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Bachelor of Architecture program combining design, technology, and sustainability
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Duration: 5 Years</p>
                    <p>Intake: 40 Students</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Departments;
