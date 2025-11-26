
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, ChevronDown, ArrowRight, Check, ShoppingBag, Filter } from 'lucide-react';

export const PublicationsBooks: React.FC = () => {
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

  const books = [
    {
      id: 1,
      title: "The Dilemma of Muslim Psychologists",
      author: "Malik Badri",
      price: 16,
      desc: "A classic text exploring the challenges faced by Muslim psychologists in reconciling Western psychological theories with Islamic beliefs.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Contemplation: An Islamic Psychospiritual Study",
      author: "Malik Badri",
      price: 16,
      desc: "An in-depth analysis of the concept of Tafakkur (contemplation) and its role in achieving psychological well-being and spiritual growth.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Islamic Psychology: Around the Globe",
      author: "Amber Haque",
      price: 24,
      desc: "A comprehensive collection of essays and research papers detailing the development and practice of Islamic Psychology in various countries.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Healing the Soul: Traditional Perspectives",
      author: "Abdallah Rothman",
      price: 20,
      desc: "Integrating Sufi wisdom with modern therapeutic techniques to address the spiritual and psychological needs of Muslim clients.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80"
    }
  ];

  const filters = {
    publisher: ['IIIT', 'Routledge', 'Cambridge', 'Oxford', 'Other'],
    year: ['2025', '2024', '2023', '2022', 'Older']
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
          <span className="text-primary-dark">Publications: Books</span>
        </div>
      </div>

      {/* Header Area */}
      <div className="bg-white pb-12 pt-10 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern-grid opacity-5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Books Authored by IAIP Fellows</h1>
                    <p className="text-slate-500 font-medium">Discover foundational texts and contemporary research.</p>
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
                        placeholder="Search for a book's name or an author" 
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
        
        <h2 className="text-3xl font-bold text-slate-900 mb-10">All Books ({books.length * 5})</h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Duplicating data to match wireframe count appearance */}
           {[...books, ...books].map((book, idx) => (
             <div key={`${book.id}-${idx}`} className="bg-white rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col sm:flex-row gap-8 group">
                
                {/* Left Content */}
                <div className="flex-1 flex flex-col">
                   <div className="mb-6">
                      <span className="text-3xl font-bold text-slate-900 mb-2 block">${book.price}</span>
                      <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-primary-dark transition-colors">
                         {book.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium mb-4">Author: <span className="text-slate-700">{book.author}</span></p>
                      
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                         {book.desc}
                      </p>
                   </div>

                   <Button variant="outline" className="mt-auto w-fit rounded-full border-slate-200 text-sm font-bold hover:bg-slate-50 group/btn">
                      Buy Now in Store <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                   </Button>
                </div>

                {/* Right Image */}
                <div className="w-full sm:w-48 h-64 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-inner">
                   <img src={book.image} alt={book.title} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-100/10 backdrop-blur-[1px]">
                      {/* Placeholder overlay if image fails or for style */}
                   </div>
                </div>

             </div>
           ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
           <button className="flex items-center gap-2 text-slate-500 hover:text-primary-dark font-bold text-lg group transition-colors px-6 py-3 rounded-full hover:bg-slate-50">
              Load more <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
           </button>
        </div>

      </div>
    </div>
  );
};
