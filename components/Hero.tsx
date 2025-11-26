import React from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 py-1 px-4 text-sm uppercase tracking-wider">
            International Association of Islamic Psychology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            The Global Standards Body for <span className="text-primary-dark">Islamic Psychology</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We define, govern, and advance the professional standards of Islamic Psychology worldwide, bridging tradition with modern science.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-soft flex flex-col items-center text-center border border-slate-100 hover:border-secondary transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Learn about IP</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              Access a range of courses, talks, and events designed to help you learn.
            </p>
            <Button variant="secondary" size="md">Explore Knowledge Hub</Button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary-light/10 flex flex-col items-center text-center border-2 border-primary-dark/10 transform md:-translate-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-bg flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary-dark" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Become a Practitioner</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              If you hold a professional license, apply for certification pathways.
            </p>
            <Button variant="primary" size="md">View Certification Path</Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-soft flex flex-col items-center text-center border border-slate-100 hover:border-secondary transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Accredit Institution</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              Training centers and universities can submit their programs for review.
            </p>
            <Button variant="secondary" size="md">Apply as an Institution</Button>
          </div>

        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-secondary-light/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};