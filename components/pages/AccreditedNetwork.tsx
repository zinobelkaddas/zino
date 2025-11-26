
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Search, MapPin, Filter, Globe, BookOpen, Mail, Phone, ChevronDown, CheckCircle2, Building2, User, Shield, Heart } from 'lucide-react';

export const AccreditedNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'practitioners' | 'institutions'>('practitioners');

  const practitioners = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      title: "Clinical Psychologist",
      location: "London, UK",
      specialties: ["Trauma", "Family Therapy", "CBT"],
      languages: ["English", "Arabic"],
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ustadh Michael Karim",
      title: "Counselor & Theologian",
      location: "New York, USA",
      specialties: ["Youth Counseling", "Addiction", "Spiritual Care"],
      languages: ["English"],
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Amina El-Sayed",
      title: "Psychotherapist",
      location: "Cairo, Egypt",
      specialties: ["Marital Counseling", "Anxiety", "Depression"],
      languages: ["Arabic", "French"],
      verified: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Dr. Omar Farooq",
      title: "Psychiatrist",
      location: "Kuala Lumpur, Malaysia",
      specialties: ["Clinical Psychiatry", "Medication Management"],
      languages: ["English", "Malay"],
      verified: true,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Zainab Al-Hassan",
      title: "Child Psychologist",
      location: "Dubai, UAE",
      specialties: ["Child Development", "Play Therapy"],
      languages: ["English", "Arabic"],
      verified: true,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Yusuf Patel",
      title: "Pastoral Counselor",
      location: "Toronto, Canada",
      specialties: ["Grief Counseling", "Community Mental Health"],
      languages: ["English", "Urdu"],
      verified: false,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  const institutions = [
    {
      id: 1,
      name: "Al-Balagh Academy",
      program: "Professional Diploma in Islamic Psychology",
      location: "Online / UK",
      type: "Academic Institution",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Razi Institute",
      program: "Certificate in IP Psychotherapy",
      location: "Istanbul, Turkey",
      type: "Training Center",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Cambridge Muslim College",
      program: "Diploma in Contextual Islamic Counselling",
      location: "Cambridge, UK",
      type: "University",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">Accredited Network</span>
        </div>
      </div>

      {/* Hero Search Section */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Find a Trusted <span className="text-primary-dark">Professional</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with IAIP-certified practitioners and accredited institutions worldwide who integrate Islamic tradition with professional practice.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="w-5 h-5" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by name, city, or specialty..." 
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-none outline-none text-lg text-slate-800 placeholder-slate-400 focus:ring-0"
                />
            </div>
            <div className="md:w-px md:h-10 md:bg-slate-200 md:my-auto"></div>
            <div className="flex-shrink-0 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <MapPin className="w-5 h-5" />
                </div>
                <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-none outline-none text-lg text-slate-800 placeholder-slate-400 focus:ring-0"
                />
            </div>
            <Button size="lg" className="rounded-xl h-14 px-8">Search</Button>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 border-b border-slate-100 pb-6">
            <div className="flex bg-slate-100 p-1 rounded-xl">
                <button 
                    onClick={() => setActiveTab('practitioners')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'practitioners' ? 'bg-white text-primary-dark shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Practitioners
                </button>
                <button 
                    onClick={() => setActiveTab('institutions')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'institutions' ? 'bg-white text-primary-dark shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Institutions
                </button>
            </div>

            <div className="flex flex-wrap gap-3">
                <Button variant="white" className="border border-slate-200 rounded-lg text-sm h-10 px-4 text-slate-600 font-medium">
                    <Filter className="w-4 h-4 mr-2" /> All Filters
                </Button>
                <div className="relative group">
                    <Button variant="white" className="border border-slate-200 rounded-lg text-sm h-10 px-4 text-slate-600 font-medium">
                        Specialty <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </div>
                <div className="relative group">
                    <Button variant="white" className="border border-slate-200 rounded-lg text-sm h-10 px-4 text-slate-600 font-medium">
                        Language <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>

        {/* Results */}
        {activeTab === 'practitioners' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {practitioners.map((practitioner) => (
                    <div key={practitioner.id} className="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <Avatar size="lg" src={practitioner.image} className="w-16 h-16 border-2 border-white shadow-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">{practitioner.name}</h3>
                                    <p className="text-sm text-slate-500 font-medium mb-1">{practitioner.title}</p>
                                    {practitioner.verified && (
                                        <Badge variant="verified">IAIP Certified</Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            {practitioner.location}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {practitioner.specialties.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200 transition-colors">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-50 flex gap-3">
                            <Button fullWidth variant="outline" className="rounded-xl border-slate-200 hover:border-primary-dark text-sm py-2">View Profile</Button>
                            <Button variant="primary" className="rounded-xl px-4 bg-primary-bg text-primary-dark hover:bg-primary-dark hover:text-white shadow-none"><Mail className="w-4 h-4" /></Button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {institutions.map((inst) => (
                    <div key={inst.id} className="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                        <div className="h-40 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-6 z-20 text-white">
                                <Badge className="bg-white/20 backdrop-blur-md text-white border-0 mb-2">{inst.type}</Badge>
                                <h3 className="font-bold text-xl leading-tight shadow-sm">{inst.name}</h3>
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Accredited Program</p>
                                <p className="font-bold text-slate-800 leading-snug">{inst.program}</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <MapPin className="w-4 h-4 text-slate-400" />
                                    {inst.location}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    Valid Accreditation
                                </div>
                            </div>

                            <div className="mt-auto flex gap-3">
                                <Button fullWidth variant="outline" className="rounded-xl border-slate-200">View Program</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        
        {/* Pagination */}
        <div className="flex justify-center mt-16">
            <div className="flex gap-2">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-500 hover:border-slate-300">1</button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-dark text-white font-bold shadow-lg shadow-primary-dark/20">2</button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-500 hover:border-slate-300">3</button>
                <span className="flex items-center text-slate-400 px-2">...</span>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 text-slate-500 hover:border-slate-300">12</button>
            </div>
        </div>

      </section>

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
