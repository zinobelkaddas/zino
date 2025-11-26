
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Search, ChevronDown, Award, Mail, ChevronRight, MapPin, Filter, Check, Star, Globe, Shield, Heart, Sparkles } from 'lucide-react';

export const FindPractitioner: React.FC = () => {
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

  const practitioners = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      title: "Clinical Psychologist",
      location: "London, UK",
      specialty: "Trauma & Family Systems",
      desc: "Specializing in trauma-informed care and family systems through an Islamic lens.",
      verified: true,
      rating: 4.9,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ustadh Michael Karim",
      title: "Pastoral Counselor",
      location: "New York, USA",
      specialty: "Youth & Identity",
      desc: "Providing spiritual guidance and counseling for youth and young adults navigating identity.",
      verified: true,
      rating: 5.0,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Amina El-Sayed",
      title: "Psychotherapist",
      location: "Cairo, Egypt",
      specialty: "Anxiety & Depression",
      desc: "Experienced in treating anxiety and depression with cognitive behavioral approaches.",
      verified: true,
      rating: 4.8,
      reviews: 32,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Dr. Omar Farooq",
      title: "Psychiatrist",
      location: "Kuala Lumpur, Malaysia",
      specialty: "Clinical Psychiatry",
      desc: "Medical management of mental health conditions integrated with holistic spiritual care.",
      verified: true,
      rating: 4.7,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Zainab Al-Hassan",
      title: "Child Psychologist",
      location: "Dubai, UAE",
      specialty: "Child Development",
      desc: "Helping children and parents build strong, emotionally healthy relationships.",
      verified: true,
      rating: 4.9,
      reviews: 41,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Yusuf Patel",
      title: "Grief Counselor",
      location: "Toronto, Canada",
      specialty: "Grief Counseling",
      desc: "Supporting individuals and families through loss and bereavement processes.",
      verified: false,
      rating: 4.5,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Dr. Layla Mahmoud",
      title: "Couples Therapist",
      location: "Sydney, Australia",
      specialty: "Marital Therapy",
      desc: "Helping couples strengthen their bond through communication and spiritual alignment.",
      verified: true,
      rating: 4.8,
      reviews: 27,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      name: "Bilal Henderson",
      title: "Addiction Counselor",
      location: "Chicago, USA",
      specialty: "Addiction Recovery",
      desc: "A compassionate approach to recovery combining 12-step principles with spiritual discipline.",
      verified: false,
      rating: 4.6,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
    },
     {
      id: 9,
      name: "Fatima Al-Jafari",
      title: "Art Therapist",
      location: "Amman, Jordan",
      specialty: "Art Therapy",
      desc: "Using creative expression as a modality for healing and self-discovery.",
      verified: true,
      rating: 5.0,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
    }
  ];

  const filters = {
    specialization: ['Clinical Psychology', 'Counseling', 'Psychiatry', 'Social Work'],
    location: ['North America', 'Europe', 'Middle East', 'Asia', 'Online'],
    gender: ['Male', 'Female']
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
          <span className="text-primary-dark">Find a Verified Practitioner</span>
        </div>
      </div>

      {/* Header Area */}
      <div className="bg-white pb-12 pt-10 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Find a Certified Practitioner</h1>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Connect with IAIP-certified professionals worldwide who integrate Islamic tradition with professional practice.
                    </p>
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
                        placeholder="Search for a Practitioner by name or specialty..." 
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
                        Search
                    </Button>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Practitioner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practitioners.map((p) => (
            <div key={p.id} className="bg-white rounded-[2.5rem] border border-slate-100 p-2 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full">
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                  
                  {/* Avatar Wrapper */}
                  <div className="relative mb-6">
                     <div className="w-32 h-32 rounded-full p-1 bg-white border border-slate-100 shadow-sm">
                        <Avatar src={p.image} size="xl" className="w-full h-full" />
                     </div>
                     {p.verified && (
                        <div className="absolute bottom-1 right-1 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm" title="IAIP Certified">
                           <Check size={14} strokeWidth={4} />
                        </div>
                     )}
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-dark transition-colors">{p.name}</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">{p.title}</p>

                  {/* Location & Rating */}
                  <div className="flex items-center justify-center gap-4 mb-6 text-sm text-slate-600 w-full">
                      <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-slate-400" />
                          <span className="truncate max-w-[120px]">{p.location}</span>
                      </div>
                      <div className="w-px h-3 bg-slate-200"></div>
                      <div className="flex items-center gap-1">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="font-bold text-slate-700">{p.rating}</span>
                          <span className="text-slate-400 text-xs">({p.reviews})</span>
                      </div>
                  </div>

                  {/* Specialty Badge */}
                  <Badge variant="neutral" className="mb-6 px-4 py-1.5 bg-slate-100 text-slate-600 border border-slate-200">
                    {p.specialty}
                  </Badge>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 px-2">
                    {p.desc}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="mt-auto w-full grid grid-cols-5 gap-2">
                      <Button fullWidth variant="outline" className="col-span-4 rounded-xl border-slate-200 hover:border-primary-dark hover:bg-primary-dark hover:text-white text-sm h-11">
                          View Profile
                      </Button>
                      <button className="col-span-1 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary-dark hover:bg-primary-bg hover:border-primary-light transition-colors">
                          <Mail size={18} />
                      </button>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mb-24">
            <button className="flex items-center gap-2 text-slate-500 hover:text-primary-dark font-bold text-lg group transition-colors px-6 py-3 rounded-full hover:bg-slate-50">
                Load more practitioners <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
        </div>

      </div>

      {/* Dignity of Community CTA - REDESIGNED */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl group">
              {/* Background Atmosphere */}
              <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                 <div className="max-w-2xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg">
                        <Shield size={12} /> Ethical Standards
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                       IAIP honors the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 font-bold">dignity</span> of the community it serves.
                    </h2>
                    
                    <p className="text-slate-300 text-lg leading-relaxed border-l-2 border-teal-500/30 pl-6">
                       Seeking support is an act of trust. IAIP-certified practitioners are bound by a rigorous code of ethics that integrates Islamic values with professional conduct to protect your wellbeing.
                    </p>
                 </div>

                 <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                    <Button className="bg-white text-slate-900 hover:bg-teal-50 px-10 py-5 h-auto text-base font-bold rounded-2xl shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 transition-all hover:scale-105">
                       <Heart className="w-5 h-5 text-rose-500" fill="currentColor" /> 
                       Read Code of Ethics
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-5 h-auto text-base rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3">
                       Contact IAIP Support
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
