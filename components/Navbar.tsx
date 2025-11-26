
import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, ChevronDown, HelpCircle, Search, Settings, LogOut } from 'lucide-react';
import { Avatar } from './ui/Avatar';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#' },
    { label: 'Certification', href: '#' },
    { label: 'Network', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Learning', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      {/* Top Utility Bar */}
      <div className="bg-slate-50 border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-6">
             <a href="#" className="hover:text-primary-dark transition-colors flex items-center gap-1">
               <HelpCircle size={14} /> Help Center
             </a>
             <a href="#" className="hover:text-primary-dark transition-colors">Contact Support</a>
          </div>
          <div className="flex items-center gap-4">
             <span>Language: <span className="text-slate-900 cursor-pointer">English</span></span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 cursor-pointer group">
              <div className="flex items-center gap-3">
                 <div className="bg-slate-900 text-white font-serif font-bold text-2xl w-11 h-11 flex items-center justify-center rounded-xl shadow-lg group-hover:bg-primary-dark transition-colors duration-300">
                   IP
                 </div>
                 <div className="flex flex-col leading-none">
                    <span className="font-extrabold text-slate-900 text-sm tracking-wide group-hover:text-primary-dark transition-colors">INTERNATIONAL ASSOCIATION</span>
                    <span className="text-slate-500 text-[10px] tracking-[0.2em] font-bold uppercase">Of Islamic Psychology</span>
                 </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary-dark hover:bg-slate-50 rounded-full transition-all flex items-center gap-1"
                >
                  {link.label}
                  {(link.label === 'About' || link.label === 'Certification') && (
                    <ChevronDown size={14} className="text-slate-400" />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
               <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-primary-dark hover:bg-slate-50 transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
               </button>
               
               <div className="h-8 w-px bg-slate-200 mx-1"></div>

               <div className="flex items-center gap-3 cursor-pointer pl-2 pr-1 py-1 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                  <div className="text-right hidden xl:block">
                     <p className="text-xs font-bold text-slate-900 leading-tight">Ahmed Mansour</p>
                     <p className="text-[10px] font-bold text-primary-dark uppercase tracking-wide">Practitioner</p>
                  </div>
                  <Avatar size="md" initials="AM" className="bg-primary-bg text-primary-dark border-2 border-white shadow-sm group-hover:border-primary-light/50" />
                  <ChevronDown size={16} className="text-slate-400 mr-2" />
               </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl z-50 h-screen overflow-y-auto pb-32">
          <div className="p-6 space-y-6">
             <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Avatar size="lg" initials="AM" className="bg-primary-dark text-white" />
                <div>
                   <p className="font-bold text-slate-900 text-lg">Ahmed Mansour</p>
                   <p className="text-sm text-slate-500">Certified Practitioner</p>
                </div>
             </div>

             <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-4 rounded-xl text-lg font-bold text-slate-700 hover:text-primary-dark hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
             </nav>

             <div className="border-t border-slate-100 pt-6 space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-xl">
                   <Settings size={20} /> Account Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-xl">
                   <HelpCircle size={20} /> Help & Support
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 font-medium hover:bg-rose-50 rounded-xl">
                   <LogOut size={20} /> Sign Out
                </button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};
