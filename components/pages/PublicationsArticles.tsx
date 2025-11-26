
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Search, ChevronDown, ArrowRight, Check, Calendar, User, Heart, Mail, Filter, Clock, Bookmark, Share2, Sparkles, BookOpen, Shield } from 'lucide-react';

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
      role: "Executive Director",
      date: "Nov 16, 2025",
      readTime: "8 min read",
      category: "Theory & History",
      desc: "An in-depth analysis of how the field has grown over the last decade, moving from theoretical frameworks to clinical applications in diverse global contexts.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Cognitive Restructuring in Islamic Psychotherapy",
      author: "Dr. Rania Awaad",
      role: "Senior Fellow",
      date: "Oct 24, 2025",
      readTime: "12 min read",
      category: "Clinical Practice",
      desc: "Exploring how traditional Islamic concepts of the intellect ('Aql) and reflection (Tafakkur) align with modern cognitive behavioral interventions for anxiety.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Trauma and the Soul: A Clinical Perspective",
      author: "Ustadha Zaynab",
      role: "Psychotherapist",
      date: "Sep 10, 2025",
      readTime: "15 min read",
      category: "Trauma Informed",
      desc: "A clinical look at how trauma impacts the Ruh and Nafs, and therapeutic approaches for spiritual reintegration and somatic healing.",
      image: "https://images.unsplash.com/photo-1518531933037-9a3e35641178?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Ethics of care in Muslim mental health",
      author: "Prof. Malik Badri",
      role: "Founding Father",
      date: "Aug 05, 2025",
      readTime: "10 min read",
      category: "Ethics",
      desc: "Defining the ethical boundaries and responsibilities of Muslim practitioners when working in secular clinical settings.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    }
  ];

  const latestPicks = [
    { title: "The evolving Islam and psychology movement", date: "Nov 16, 2025", views: "2.4k" },
    { title: "Understanding the Fitrah in modern times", date: "Nov 12, 2025", views: "1.8k" },
    { title: "Clinical applications of Muraqabah", date: "Nov 08, 2025", views: "3.1k" }
  ];

  const filters = {
    theme: ['Clinical Practice', 'Theory & History', 'Research', 'Ethics'],
    year: ['2025', '2024', '2023', 'Older']
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans text-slate-900">
      
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
      <div className="bg-white pb-16 pt-12 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-10">
                <div className="max-w-3xl">
                    <Badge variant="accent" className="mb-4">Knowledge Hub</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Articles Authored by IAIP
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed">
                        Cutting-edge research, clinical insights, and theoretical frameworks from our global fellows.
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
                        placeholder="Search for an article by author, topic, or keyword..." 
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
                    
                    <Button className="h-14 px-8 rounded-xl bg-primary-dark hover:bg-primary-dark/90 text-white shadow-lg shadow-primary-dark/20 whitespace-nowrap">
                        Search
                    </Button>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">All Articles <span className="text-slate-400 font-medium ml-1">({articles.length * 12})</span></h2>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                        Sort by: <span className="text-slate-900 cursor-pointer border-b border-slate-300 border-dashed">Newest First</span>
                    </div>
                </div>
                
                <div className="space-y-8">
                    {[...articles, ...articles].map((article, idx) => (
                        <div key={`${article.id}-${idx}`} className="group bg-white rounded-[2rem] p-2 border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-6 cursor-pointer hover:border-primary-light/30">
                            
                            {/* Image */}
                            <div className="w-full md:w-72 h-64 md:h-auto rounded-[1.5rem] overflow-hidden relative flex-shrink-0 bg-slate-100">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                
                                <div className="absolute top-3 left-3">
                                    <Badge className="bg-white/95 text-slate-900 backdrop-blur-md shadow-sm font-bold border-0">{article.category}</Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center py-4 pr-6 pl-4 md:pl-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar size="sm" className="bg-slate-100 text-slate-600" initials="AR" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">{article.author}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{article.role}</p>
                                    </div>
                                    <div className="w-1 h-1 bg-slate-300 rounded-full ml-auto md:ml-2"></div>
                                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                        <Clock size={12} /> {article.readTime}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary-dark transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {article.desc}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto border-t border-slate-50 pt-4">
                                    <span className="text-xs font-bold text-slate-400 flex items-center gap-2">
                                        <Calendar size={12} /> {article.date}
                                    </span>
                                    
                                    <div className="flex gap-3">
                                        <button className="text-slate-400 hover:text-primary-dark transition-colors"><Bookmark size={18} /></button>
                                        <button className="text-slate-400 hover:text-primary-dark transition-colors"><Share2 size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Button fullWidth variant="outline" className="h-14 rounded-xl border-slate-200 text-slate-500 font-bold hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300">
                        Load more articles <ChevronDown className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-10">
                
                {/* Latest Picks Widget */}
                <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        <h3 className="text-lg font-bold text-slate-900">Trending Now</h3>
                    </div>
                    
                    <div className="space-y-6">
                        {latestPicks.map((pick, i) => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <span className="text-2xl font-extrabold text-slate-200 group-hover:text-primary-light transition-colors">0{i+1}</span>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-snug mb-1 group-hover:text-primary-dark transition-colors line-clamp-2">
                                        {pick.title}
                                    </h4>
                                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                                        <span>{pick.date}</span>
                                        <span>•</span>
                                        <span>{pick.views} reads</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premium Newsletter Box */}
                <div className="bg-slate-900 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl group">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-500/30 transition-all duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-1000"></div>
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/10 text-teal-300">
                            <Mail size={24} />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">Weekly Insights</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            Get the latest research, case studies, and event updates delivered to your inbox.
                        </p>
                        
                        <div className="space-y-3">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="w-full h-12 pl-4 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 outline-none focus:bg-white/10 focus:border-teal-500/50 transition-all text-sm"
                                />
                            </div>
                            <Button fullWidth className="bg-teal-500 text-slate-900 hover:bg-teal-400 font-bold h-12 rounded-xl shadow-lg shadow-teal-500/20 border-0">
                                Join Newsletter
                            </Button>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 text-center">No spam, unsubscribe anytime.</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Clinical', 'History', 'Spirituality', 'Ethics', 'Trauma', 'Family', 'Youth'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:border-primary-dark hover:text-primary-dark cursor-pointer transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* Support CTA - Premium Card */}
      <section className="bg-slate-50 py-24 border-t border-slate-200 mt-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-16">
               
               {/* Background FX */}
               <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
               <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-dark/20 rounded-full blur-[100px]"></div>

               <div className="relative z-10 max-w-2xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                        <Heart size={12} fill="currentColor" /> Community Supported
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                     Support the Future of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400">Islamic Psychology</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-0 leading-relaxed">
                     Your contribution strengthens standards, protects ethics, and helps build a trusted, global home for Islamic Psychology.
                  </p>
               </div>
               
               <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-slate-900 hover:bg-teal-50 px-10 py-5 h-auto text-lg font-bold rounded-2xl shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                     Make a Donation
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-5 h-auto text-lg rounded-2xl backdrop-blur-sm">
                     Learn More
                  </Button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};
