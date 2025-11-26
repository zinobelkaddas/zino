
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, ChevronDown, Calendar, Building2, ArrowRight, Filter, X, Check, SlidersHorizontal } from 'lucide-react';

export const AccreditedPrograms: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Close dropdowns when clicking outside
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const filters = {
    level: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    format: ['Online', 'In-Person', 'Hybrid'],
    date: ['Upcoming', 'This Month', 'Flexible']
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans text-slate-900">
       {/* Breadcrumb */}
       <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Accredited Network</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">Accredited Programs</span>
        </div>
      </div>

      {/* Header Area */}
      <div className="bg-white pb-12 pt-10 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Accredited Programs</h1>
                    <p className="text-slate-500 font-medium">Explore {programs.length} certified courses from world-class institutions.</p>
                </div>
            </div>

            {/* Floating Command Center Search */}
            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col lg:flex-row gap-2 relative z-20" ref={dropdownRef}>
                <div className="flex-grow relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-dark transition-colors">
                        <Search className="w-5 h-5" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for a program..." 
                        className="w-full h-14 pl-14 pr-4 bg-transparent border-none outline-none text-lg text-slate-800 placeholder-slate-400 focus:ring-0"
                    />
                </div>
                
                <div className="hidden lg:block w-px h-10 bg-slate-200 my-auto"></div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide p-1 lg:p-0">
                    {Object.entries(filters).map(([key, options]) => (
                        <div key={key} className="relative">
                            <button 
                                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                                className={`h-14 px-6 rounded-xl border flex items-center justify-between min-w-[140px] transition-all font-bold text-sm
                                    ${activeDropdown === key 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                    }
                                `}
                            >
                                <span className="capitalize">{key}</span>
                                <ChevronDown className={`w-4 h-4 ml-3 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {activeDropdown === key && (
                                <div className="absolute top-full mt-2 left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    {options.map((option, i) => (
                                        <button key={i} className="w-full text-left px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-primary-dark font-medium text-sm flex items-center justify-between group">
                                            {option}
                                            <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 text-primary-dark transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <Button className="h-14 px-8 rounded-xl bg-primary-dark hover:bg-primary-dark/90 text-white shadow-lg shadow-primary-dark/20 whitespace-nowrap">
                        Search Programs
                    </Button>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {programs.map((program) => (
             <div key={program.id} className="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full group cursor-pointer">
                
                {/* Image Area */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                   <img src={program.image} alt={program.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                   
                   <div className="absolute top-4 left-4">
                      <Badge variant={program.level as any} className="capitalize shadow-md px-3 py-1 text-xs font-bold border-0 backdrop-blur-md bg-white/90">
                        {program.level}
                      </Badge>
                   </div>

                   <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                        <div>
                            <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-1">Institution</p>
                            <p className="text-sm font-bold text-white flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-300" /> {program.institution}
                            </p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-1">Start Date</p>
                             <p className="text-sm font-bold text-white flex items-center gap-2 justify-end">
                                <Calendar className="w-4 h-4 text-slate-300" /> {program.date}
                            </p>
                        </div>
                   </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary-dark transition-colors">
                      {program.name}
                   </h3>
                   <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">
                      {program.desc}
                   </p>

                   <Button variant="outline" fullWidth className="mt-auto rounded-xl justify-between group-hover:border-primary-dark group-hover:text-primary-dark transition-colors h-12 border-slate-200">
                      View Program Details <ArrowRight className="w-4 h-4" />
                   </Button>
                </div>
             </div>
           ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
           <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-dark transition-colors group">
              <span className="font-bold text-lg">Load more programs</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
           </button>
        </div>

      </div>
    </div>
  );
};
