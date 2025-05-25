
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, GraduationCap, Building } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualifications: string;
  email: string;
  phone?: string;
  imageUrl?: string;
  specialization: string[];
}

const facultyData: FacultyMember[] = [
  // Professors & Heads
  {
    id: '1',
    name: 'Dr. N Ramakrishnaiah',
    designation: 'Professor & Head',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D.',
    email: 'nrkrishna27@gmail.com',
    phone: '9652730019',
    specialization: ['Computer Science', 'Research', 'Academic Leadership']
  },
  
  // Professors
  {
    id: '2',
    name: 'Dr. Odugu Srinivasa Rao',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'B.Tech, M.Tech, Ph.D',
    email: 'osr_phd@yahoo.com',
    phone: '9441951718',
    specialization: ['Computer Science', 'Research Methodology']
  },
  {
    id: '3',
    name: 'Dr. K V Ramana',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D',
    email: 'vamsivihar@gmail.com',
    phone: '9177780000',
    specialization: ['Computer Science', 'Software Engineering']
  },
  {
    id: '4',
    name: 'Dr. Sumalatha Lingamgunta',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D (JNTUK)',
    email: 'lsumalatha@jntucek.ac.in',
    specialization: ['Data Science', 'Machine Learning']
  },
  {
    id: '5',
    name: 'Dr. MHM Krishna Prasad',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'B.E., M.Tech., Ph.D.',
    email: 'krishnaprasad.mhm@gmail.com',
    phone: '9989337589',
    specialization: ['Computer Networks', 'Distributed Systems']
  },
  {
    id: '6',
    name: 'Dr. Krishna Mohan Ankala',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D',
    email: 'krishna.ankala@gmail.com',
    phone: '9640027540',
    specialization: ['Algorithms', 'Data Structures']
  },
  {
    id: '7',
    name: 'Dr. A. S. N. Chakravarthy',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'B.E., M.Tech., Ph.D',
    email: 'asnchakravarthy@jntucek.ac.in',
    phone: '9618719229',
    specialization: ['Software Engineering', 'System Design']
  },
  {
    id: '8',
    name: 'Dr. Dasari Haritha',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D.',
    email: 'harithadasari9@yahoo.com',
    phone: '9440810901',
    specialization: ['Database Systems', 'Information Systems']
  },
  {
    id: '9',
    name: 'Dr. K Sahadevaiah',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D',
    email: 'kuncha1868@gmail.com',
    phone: '9502661429',
    specialization: ['Computer Graphics', 'Image Processing']
  },

  // Assistant Professors
  {
    id: '10',
    name: 'Dr. S. Chandra Sekhar',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D.',
    email: 'chandrasekhar.s@jntucek.ac.in',
    specialization: ['Data Mining', 'Analytics']
  },
  {
    id: '11',
    name: 'Dr. SSSN Usha Devi .N',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'B.Tech(C.S.E) M.Tech(C.S.E) Ph.D (NIT-Trichy)',
    email: 'usha.jntuk@gmail.com',
    phone: '9493050795',
    specialization: ['Computer Networks', 'Network Security']
  },
  {
    id: '12',
    name: 'Dr. Karuna Arava',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech, Ph.D',
    email: 'karunagouthana@gmail.com',
    phone: '9440942777',
    specialization: ['Software Testing', 'Quality Assurance']
  },
  {
    id: '13',
    name: 'Dr. Suneetha Eluri',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech(CSE), Ph.D',
    email: 'suneethaeluri83@jntucek.ac.in',
    phone: '9491141160',
    specialization: ['Web Technologies', 'Internet Programming']
  },
  {
    id: '14',
    name: 'Dr. S. Surekha',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D.',
    email: 'surekha@jntucek.ac.in',
    specialization: ['Artificial Intelligence', 'Machine Learning']
  },
  {
    id: '15',
    name: 'Dr. Siva Rama Krishna T.',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    qualifications: 'Ph.D.',
    email: 'srkt@jntucek.ac.in',
    specialization: ['Computer Vision', 'Pattern Recognition']
  },

  // Assistant Professors (Contract)
  {
    id: '16',
    name: 'Mrs. Ushanag Samsani',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech. (CN), Pursuing Ph.D.',
    email: 'ushanag1686@gmail.com',
    phone: '8686804805',
    specialization: ['Computer Networks', 'Network Programming']
  },
  {
    id: '17',
    name: 'Mr. Ravi Kiran K',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech',
    email: 'kravi1189@gmail.com',
    phone: '9912999005',
    specialization: ['Software Development', 'Programming']
  },
  {
    id: '18',
    name: 'Mr. Kadambari Raghuram',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'B.E.-CSE, M.Tech-CSE, (Ph.D-CSE@NIT, Silchar)',
    email: 'kadambari.raghuram143@gmail.com',
    phone: '8125345585',
    specialization: ['Data Structures', 'Algorithms']
  },
  {
    id: '19',
    name: 'Mrs. MVSV Kiranmai',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech., (Ph.D.)',
    email: 'mvallikiran@gmail.com',
    phone: '9848818584',
    specialization: ['Database Management', 'Information Systems']
  },
  {
    id: '20',
    name: 'Mrs. M. Aruna',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech',
    email: 'arunamellam@gmail.com',
    phone: '9182761681',
    specialization: ['Web Development', 'Frontend Technologies']
  },
  {
    id: '21',
    name: 'Mrs. Samatha Korukonda',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M. Tech., (Ph.D.) MBA(HR), APSET',
    email: 'samathak15@gmail.com',
    phone: '9492952440',
    specialization: ['Human Resources', 'Management Systems']
  },
  {
    id: '22',
    name: 'Ms. K. Saraswathi',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech',
    email: 'saraswathi.kalum@gmail.com',
    phone: '8985242807',
    specialization: ['Programming Languages', 'Compiler Design']
  },
  {
    id: '23',
    name: 'Mrs. G. Dhana Lakshmi',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M. Tech',
    email: 'dhanalakshmi.gvp@gmail.com',
    phone: '8019649891',
    specialization: ['Mobile Computing', 'App Development']
  },
  {
    id: '24',
    name: 'Mrs. CH. Priyadarshini',
    designation: 'Assistant Professor (Contract)',
    department: 'Computer Science & Engineering',
    qualifications: 'M.Tech. (SE), Pursuing Ph.D.',
    email: 'ch.priyadarshini84@gmail.com',
    phone: '9493841861',
    specialization: ['Software Engineering', 'System Analysis']
  }
];

const departmentColors = {
  'Computer Science & Engineering': 'bg-blue-100 text-blue-800',
  'Information Technology': 'bg-purple-100 text-purple-800',
  'Electronics & Communication Engineering': 'bg-green-100 text-green-800',
  'Mechanical Engineering': 'bg-orange-100 text-orange-800',
  'Civil Engineering': 'bg-red-100 text-red-800',
  'Electrical & Electronics Engineering': 'bg-yellow-100 text-yellow-800'
};

const Faculty = () => {
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
  };

  const getDepartmentColorClass = (department: string) => {
    return departmentColors[department as keyof typeof departmentColors] || 'bg-gray-100 text-gray-800';
  };

  // Group faculty by designation
  const professors = facultyData.filter(f => f.designation.includes('Professor') && f.designation.includes('Head'));
  const regularProfessors = facultyData.filter(f => f.designation === 'Professor');
  const assistantProfessors = facultyData.filter(f => f.designation === 'Assistant Professor');
  const contractProfessors = facultyData.filter(f => f.designation.includes('Contract'));

  const FacultyGrid = ({ faculty, title }: { faculty: FacultyMember[], title: string }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback className="bg-blue-600 text-white text-lg font-semibold">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                {member.name}
              </CardTitle>
              <p className="text-blue-600 font-semibold text-sm">{member.designation}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getDepartmentColorClass(member.department)}`}>
                CSE Department
              </span>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600">
                <GraduationCap size={14} />
                <span className="text-xs">{member.qualifications}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={14} />
                <a href={`mailto:${member.email}`} className="text-xs text-blue-600 hover:underline">
                  {member.email}
                </a>
              </div>
              
              {member.phone && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={14} />
                  <span className="text-xs">{member.phone}</span>
                </div>
              )}
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                  <Building size={14} className="mr-2" />
                  Specialization
                </h4>
                <div className="flex flex-wrap gap-1">
                  {member.specialization.map((spec, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty Members</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Meet our distinguished faculty members from the Department of Computer Science & Engineering at JNTUCEK
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Sections */}
        <div className="container mx-auto px-4 py-12">
          {/* Professors & Heads */}
          <FacultyGrid faculty={professors} title="Professors & Heads of Department" />
          
          {/* Regular Professors */}
          <FacultyGrid faculty={regularProfessors} title="Professors" />
          
          {/* Assistant Professors */}
          <FacultyGrid faculty={assistantProfessors} title="Assistant Professors" />
          
          {/* Contract Faculty */}
          <FacultyGrid faculty={contractProfessors} title="Assistant Professors (Contract)" />
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Connect with Our Faculty</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our faculty members are always available to guide students and collaborate on research projects. 
              Feel free to reach out for academic guidance, research opportunities, or any queries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm">Direct email communication with faculty members</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">Visit during designated office hours for consultations</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Research Collaboration</h3>
                <p className="text-gray-600 text-sm">Opportunities for student research projects and guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;
