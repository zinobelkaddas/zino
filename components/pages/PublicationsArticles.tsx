
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Search, ChevronDown, ArrowRight, Check, Calendar, User, Heart, Mail, Filter } from 'lucide-react';

export const PublicationsArticles: React.FC = () => {
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

  const articles = [
    {
      id: 1,
      title: "The evolving Islam and psychology movement",
      author: "Dr. Abdallah Rothman",
      date: "Nov 16, 2025",
      desc: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Cognitive Restructuring in Islamic Psychotherapy",
      author: "Dr. Rania Awaad",
      date: "Oct 24, 2025",
      desc: "Exploring how traditional Islamic concepts of the intellect ('Aql) align with modern cognitive behavioral interventions.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Trauma and the Soul: A Clinical Perspective",
      author: "Ustadha Zaynab",
      date: "Sep 10, 2025",
      desc: "A clinical look at how trauma impacts the Ruh and Nafs, and therapeutic approaches for spiritual reintegration.",
      image: "https://images.unsplash.com/photo-1518531933037-9a3e35641178?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Ethics of care in Muslim mental health",
      author: "Prof. Malik Badri",
      date: "Aug 05, 2025",
      desc: "Defining the ethical boundaries and responsibilities of Muslim practitioners in secular clinical settings.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    }
  ];

  const latestPicks = [
    { title: "The evolving Islam and psychology movement", date: "Nov 16, 2025" },
    { title: "Understanding the Fitrah in modern times", date: "Nov 12, 2025" },
    { title: "Clinical applications of Muraqabah", date: "Nov 08, 2025" }
  ];

  const filters = {
    theme: ['Clinical Practice', 'Theory & History', 'Research', 'Ethics'],
    year: ['2025', '2024', '2023', 'Older']
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Research</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">Publications: Articles</span>
        </div>
      </div>

      {/* Header Area */}
      <div className="bg-white pb-12 pt-10 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Articles Authored by IAIP</h1>
                    <p className="text-slate-500 font-medium">Cutting-edge research and clinical insights from our fellows.</p>
                </div>
            </div>

            {/* Floating Command Center Search */}
            <div className="bg-slate-50 p-2 rounded-2xl border border-slate-200 flex flex-col lg:flex-row gap-2 relative z-20" ref={dropdownRef}>
                <div className="flex-grow relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-dark transition-colors">
                        <Search className="w-5 h-5" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for an article by author or keyword" 
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
                                <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
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
                    
                    <Button className="h-14 px-8 rounded-xl bg-[#5e608a] hover:bg-[#4c4e72] text-white shadow-lg whitespace-nowrap">
                        Search
                    </Button>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">All Articles ({articles.length * 12})</h2>
                
                <div className="space-y-6">
                    {[...articles, ...articles].map((article, idx) => (
                        <div key={`${article.id}-${idx}`} className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start cursor-pointer hover:border-slate-200">
                            {/* Image */}
                            <div className="w-full sm:w-48 h-48 sm:h-40 rounded-2xl bg-slate-100 overflow-hidden flex-shrink-0 relative">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                                    <Heart size={16} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <Avatar size="sm" className="bg-slate-100 text-slate-500 w-6 h-6 text-[10px]" initials="AN" />
                                    <span className="text-xs font-bold text-slate-500">{article.author}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#5e608a] transition-colors">
                                    {article.title}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {article.desc}
                                </p>
                                
                                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400">{article.date}</span>
                                    <span className="text-xs font-bold text-[#5e608a] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        Read Article <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button fullWidth variant="outline" className="h-14 rounded-xl border-slate-200 text-slate-500 font-bold hover:bg-slate-50 hover:text-slate-800">
                        Load more <ChevronDown className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-10">
                
                {/* Latest Picks */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Latest Picks</h3>
                    <div className="space-y-6">
                        {latestPicks.map((pick, i) => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-snug mb-1 group-hover:text-[#5e608a] transition-colors">
                                        {pick.title}
                                    </h4>
                                    <span className="text-xs font-medium text-slate-400">{pick.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-[#5e608a] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-2">Join our Newsletter to receive the latest articles</h3>
                        <p className="text-indigo-100 text-sm mb-6 opacity-90">Enter your email to stay updated.</p>
                        
                        <div className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="example@email.com" 
                                    className="w-full h-12 pl-4 pr-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 outline-none border-none text-sm"
                                />
                            </div>
                            <Button fullWidth className="bg-white text-[#5e608a] hover:bg-indigo-50 font-bold h-12 rounded-xl">
                                Join Newsletter
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* Support CTA */}
      <section className="bg-slate-50 py-20 border-t border-slate-200 mt-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#f3f4f6] rounded-[3rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-16">
               <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 shadow-inner">
                      <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  </div>
               </div>
               
               <div className="lg:w-2/3 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Support the Future of Islamic Psychology</h2>
                  <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
                     Your contribution strengthens standards, protects ethics, and helps build a trusted, global home for Islamic Psychology.
                  </p>
                  <Button className="bg-[#5e608a] hover:bg-[#4c4e72] text-white px-10 py-4 h-auto text-lg rounded-xl shadow-lg">
                     Donate
                  </Button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
