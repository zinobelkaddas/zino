
import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Search, ChevronDown, Award, Mail, ChevronRight } from 'lucide-react';

export const FindPractitioner: React.FC = () => {
  const practitioners = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      specialty: "Clinical Psychology",
      desc: "Specializing in trauma-informed care and family systems through an Islamic lens.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ustadh Michael Karim",
      specialty: "Pastoral Counseling",
      desc: "Providing spiritual guidance and counseling for youth and young adults navigating identity.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Amina El-Sayed",
      specialty: "Psychotherapy",
      desc: "Experienced in treating anxiety and depression with cognitive behavioral approaches.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Dr. Omar Farooq",
      specialty: "Psychiatry",
      desc: "Medical management of mental health conditions integrated with holistic spiritual care.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Zainab Al-Hassan",
      specialty: "Child Psychology",
      desc: "Helping children and parents build strong, emotionally healthy relationships.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Yusuf Patel",
      specialty: "Grief Counseling",
      desc: "Supporting individuals and families through loss and bereavement processes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Dr. Layla Mahmoud",
      specialty: "Marital Therapy",
      desc: "Helping couples strengthen their bond through communication and spiritual alignment.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      name: "Bilal Henderson",
      specialty: "Addiction Recovery",
      desc: "A compassionate approach to recovery combining 12-step principles with spiritual discipline.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
    },
     {
      id: 9,
      name: "Fatima Al-Jafari",
      specialty: "Art Therapy",
      desc: "Using creative expression as a modality for healing and self-discovery.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 font-medium">
          <span className="hover:text-primary-dark cursor-pointer">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span className="hover:text-primary-dark cursor-pointer">Accredited Network</span> 
          <span className="mx-2">&gt;</span> 
          <span className="text-slate-900 font-bold">Find a Verified Practitioner</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8 tracking-tight">
          Find a Certified Practitioner
        </h1>

        {/* Search Bar - Composite Component */}
        <div className="bg-slate-50 p-2 rounded-2xl border border-slate-100 flex flex-col lg:flex-row gap-2 mb-16 shadow-sm">
           <div className="flex-grow relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search for a Practitioner by name or specialty" 
                className="w-full h-12 lg:h-14 pl-12 pr-4 bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 focus:ring-0 text-base"
              />
           </div>
           
           <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-4 flex items-center justify-between min-w-[140px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Specialization</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-4 flex items-center justify-between min-w-[130px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Location</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <div className="h-12 lg:h-14 bg-white rounded-xl border border-slate-200 px-4 flex items-center justify-between min-w-[120px] cursor-pointer hover:border-slate-300 transition-colors">
                 <span className="text-slate-600 font-bold text-sm">Gender</span>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
              <Button className="h-12 lg:h-14 rounded-xl px-8 bg-slate-700 hover:bg-slate-800 text-white shadow-lg shadow-slate-200">
                Search
              </Button>
           </div>
        </div>

        {/* Practitioner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practitioners.map((p) => (
            <div key={p.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col items-center text-center">
              
              {/* IAIP Seal Badge - Absolute Top Right */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500" title="IAIP Certified">
                   <div className="border border-white/30 rounded-full p-1">
                      <Award size={16} />
                   </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="mb-6 relative">
                 <div className="w-28 h-28 rounded-full bg-slate-100 p-1">
                    <Avatar src={p.image} size="xl" className="w-full h-full border-2 border-white" />
                 </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{p.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 px-2">
                {p.desc}
              </p>

              {/* Specialty Tag */}
              <Badge variant="neutral" className="mb-0 text-sm px-4 py-1.5 bg-slate-100/80 text-slate-500 font-semibold border border-slate-200/50">
                {p.specialty}
              </Badge>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mb-24">
            <button className="flex items-center gap-2 text-slate-500 hover:text-primary-dark font-bold text-lg group transition-colors px-6 py-3 rounded-full hover:bg-slate-50">
                Load more <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
        </div>

      </div>

      {/* Bottom CTA */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#51537a] rounded-[2.5rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative overflow-hidden shadow-2xl">
              
              {/* Texture/Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="max-w-2xl relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    IAIP honors the dignity of the community it serves
                 </h2>
                 <p className="text-indigo-100 text-lg leading-relaxed">
                    Seeking support is an act of trust. IAIP-certified practitioners are required to uphold ethical conduct and Islamic values that protect your dignity and wellbeing.
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                 <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 h-auto text-base backdrop-blur-sm">
                    Read the IAIP Code of Ethics
                 </Button>
                 <Button className="bg-white text-[#51537a] hover:bg-indigo-50 px-8 py-4 h-auto text-base">
                    Contact IAIP
                 </Button>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
