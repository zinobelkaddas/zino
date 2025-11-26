import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, ChevronDown, Calendar, Building2, ArrowRight } from 'lucide-react';

export const AccreditedPrograms: React.FC = () => {
  const programs = [
    {
      id: 1,
      name: "Certificate in Islamic Counselling 1",
      institution: "Al-Balagh Academy",
      level: "beginner",
      date: "December 12, 2025",
      desc: "An introductory course designed to provide a foundation in the principles of Islamic counselling.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Advanced Psychotherapy Integration",
      institution: "Razi Institute",
      level: "advanced",
      date: "October 05, 2025",
      desc: "Deep dive into clinical applications of traditional concepts for licensed therapists.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Child & Adolescent Psychology",
      institution: "Cambridge Muslim College",
      level: "intermediate",
      date: "January 15, 2026",
      desc: "Specialized training for working with youth populations through a faith-based lens.",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Islamic Ethics in Clinical Practice",
      institution: "Khalil Center",
      level: "advanced",
      date: "November 20, 2025",
      desc: "Navigating complex ethical dilemmas in modern mental health settings.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Foundations of the Self (Nafs)",
      institution: "Al-Balagh Academy",
      level: "beginner",
      date: "February 01, 2026",
      desc: "Understanding the tri-partite model of the human psyche: Nafs, Qalb, and Ruh.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Trauma Informed Care",
      institution: "IAIP Global",
      level: "all levels",
      date: "March 10, 2026",
      desc: "Integrating spiritual healing practices with evidence-based trauma interventions.",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
       {/* Breadcrumb */}
       <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Accredited Network</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">Accredited Programs</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-8">Accredited Programs ({programs.length})</h1>

        {/* Filter Bar */}
        <div className="bg-slate-50 p-2 rounded-2xl border border-slate-100 flex flex-col lg:flex-row gap-2 mb-12 shadow-sm">
           <div className="flex-grow relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search for a program name" 
                className="w-full h-12 lg:h-14 pl-12 pr-4 bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 focus:ring-0 text-base lg:text-lg"
              />
           </div>
           
           <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-6 flex items-center justify-between min-w-[140px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Level</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-6 flex items-center justify-between min-w-[140px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Format</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-6 flex items-center justify-between min-w-[140px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Date</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <Button className="h-12 lg:h-14 rounded-xl px-8 bg-slate-700 hover:bg-slate-800 text-white shadow-lg shadow-slate-200">
                Search
              </Button>
           </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {programs.map((program) => (
             <div key={program.id} className="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full group">
                
                {/* Image Area */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                   <img src={program.image} alt={program.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-4 left-4">
                      <Badge variant={program.level as any} className="capitalize shadow-sm px-3 py-1 text-xs">
                        {program.level}
                      </Badge>
                   </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary-dark transition-colors">
                      {program.name}
                   </h3>
                   <p className="text-slate-500 mb-6 leading-relaxed line-clamp-2">
                      {program.desc}
                   </p>

                   {/* Metadata */}
                   <div className="mt-auto grid grid-cols-2 gap-4 border-t border-slate-50 pt-6 mb-6">
                      <div className="flex flex-col gap-1">
                         <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-slate-400">
                            <Building2 className="w-5 h-5" />
                         </div>
                         <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">Institution</span>
                         <span className="text-sm font-bold text-slate-700">{program.institution}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-1 text-slate-400">
                            <Calendar className="w-5 h-5" />
                         </div>
                         <span className="text-xs text-slate-400 font-bold uppercase tracking-wide">Start Date</span>
                         <span className="text-sm font-bold text-slate-700">{program.date}</span>
                      </div>
                   </div>

                   <Button variant="outline" fullWidth className="rounded-xl justify-between group-hover:border-primary-dark group-hover:text-primary-dark transition-colors">
                      Enroll <ArrowRight className="w-4 h-4" />
                   </Button>
                </div>
             </div>
           ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
           <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-dark transition-colors group">
              <span className="font-bold text-lg">Load more</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
           </button>
        </div>

      </div>
    </div>
  );
};