
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/jntuk-logo.png" 
                alt="JNTUK Logo" 
                className="h-12 w-12"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='20' fill='%23dc2626'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='20' fill='white' text-anchor='middle'%3EJ%3C/text%3E%3C/svg%3E";
                }}
              />
              <h3 className="text-xl font-bold">JNTUK</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jawaharlal Nehru Technological University, Kakinada is committed to excellence in 
              engineering education, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About JNTUK', href: '/about' },
                { name: 'Admissions', href: '/admissions' },
                { name: 'Departments', href: '/departments' },
                { name: 'Faculty', href: '/faculty' },
                { name: 'Research', href: '/research' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Academic Programs</h4>
            <div className="space-y-2">
              {[
                'B.Tech Programs',
                'M.Tech Programs', 
                'MBA Program',
                'MCA Program',
                'Ph.D Programs'
              ].map((program) => (
                <Link
                  key={program}
                  to="/departments"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {program}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jawaharlal Nehru Technological University,<br />
                  Kakinada - 533003, Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a href="mailto:registrar@jntuk.edu.in" className="text-gray-300 hover:text-white text-sm">
                  registrar@jntuk.edu.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91-884-2300555</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Jawaharlal Nehru Technological University Kakinada (JNTUK). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
