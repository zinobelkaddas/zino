
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, MapPin, ChevronDown, ArrowRight, Shield, CheckCircle2, Check, Upload, FileText } from 'lucide-react';

export const RefinedComponents: React.FC = () => {
  const [openStep, setOpenStep] = useState<number>(1);

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/20 blur-3xl rounded-full translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Badge className="bg-white/10 text-teal-300 border border-teal-500/30 mb-6 backdrop-blur-md">Component Polish</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
               Refined <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">UI Sections</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
               High-fidelity redesigns of the core application flows, focusing on readability, brand alignment, and visual hierarchy.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-24">
         
         {/* 1. Search Header (Accredited Network) */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">01. Professional Search Hero</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="w-full bg-white rounded-[2.5rem] shadow-soft border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                
                <div className="p-12 lg:p-16 text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Find a Trusted <span className="text-primary-dark">Professional</span>
                    </h3>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                        Connect with IAIP-certified practitioners who integrate Islamic tradition with professional practice.
                    </p>

                    <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200 flex flex-col md:flex-row gap-2 relative z-10">
                        <div className="flex-grow relative group">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-dark transition-colors">
                                <Search className="w-5 h-5" />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Search by name, city, or specialty..." 
                                className="w-full h-14 pl-14 pr-4 rounded-xl border-none outline-none text-lg text-slate-800 placeholder-slate-400 focus:ring-0 bg-transparent"
                            />
                        </div>
                        
                        <div className="hidden md:block w-px h-8 bg-slate-200 my-auto"></div>
                        
                        <div className="flex-shrink-0 relative w-full md:w-1/4 group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-dark transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Location" 
                                className="w-full h-14 pl-12 pr-4 rounded-xl border-none outline-none text-lg text-slate-800 placeholder-slate-400 focus:ring-0 bg-transparent"
                            />
                        </div>

                        <Button size="lg" className="rounded-xl h-14 px-8 shadow-lg shadow-primary-dark/20 bg-gradient-to-r from-primary-dark to-secondary hover:to-secondary-dark transition-all">
                            Search
                        </Button>
                    </div>
                    
                    {/* Tags underneath */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
                        <span className="text-slate-400 font-medium">Popular:</span>
                        {['Trauma', 'Family Therapy', 'Counselling', 'Addiction'].map(tag => (
                            <button key={tag} className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-primary-dark transition-colors font-medium border border-slate-100">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* COMPONENT END */}
         </section>

         {/* 2. Action Card (Renewal) */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">02. Renewal Action Card</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="flex justify-center">
                <div className="w-full max-w-md bg-slate-900 rounded-[2rem] p-1 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 rounded-[2rem] opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-slate-900 rounded-[1.9rem] p-8 h-full overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <Shield size={120} className="text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/30 shadow-glow-teal">
                                    <span className="font-bold text-xl">5</span>
                                </div>
                                <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse">Action Required</Badge>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                               Submit Renewal Application
                            </h3>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                Your documents are ready. Proceed to the secure portal to finalize your certification renewal.
                            </p>
                            
                            <button className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-teal-50 transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2 group/btn">
                               Start Application <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* COMPONENT END */}
         </section>

         {/* 3. Accordion Step (Accreditation) */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">03. Process Step Card</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="max-w-3xl mx-auto">
                <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openStep === 1 ? 'border-teal-500 shadow-lg ring-4 ring-teal-500/5' : 'border-slate-200 shadow-sm'}`}>
                    <button 
                        onClick={() => setOpenStep(openStep === 1 ? 0 : 1)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${openStep === 1 ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                1
                            </div>
                            <span className={`text-xl font-bold ${openStep === 1 ? 'text-slate-900' : 'text-slate-600'}`}>
                                Upload Personal Information
                            </span>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openStep === 1 ? 'rotate-180 bg-slate-100' : ''}`}>
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                        </div>
                    </button>
                    
                    {openStep === 1 && (
                        <div className="px-6 pb-8 ml-14 animate-in fade-in slide-in-from-top-2">
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Upload className="w-4 h-4 text-teal-500" /> Required Documents
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {['Full Name & Contact', 'Professional License', 'Passport Copy', 'Degree Certificate'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-slate-300" /> {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-amber-50 text-amber-800 rounded-lg text-sm border border-amber-100">
                                    <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>Note: Payment of the application fee is required before your documents can be processed.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* COMPONENT END */}
         </section>

         {/* 4. Dignity CTA (Footer) */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">04. Dignity Impact Section</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="w-full bg-slate-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
               {/* Pattern Overlay */}
               <div className="absolute inset-0 bg-pattern-grid opacity-10 pointer-events-none"></div>
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-dark/20 to-transparent pointer-events-none"></div>
               
               <div className="p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                  <div className="max-w-2xl">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
                        <Shield size={12} /> Ethical Standards
                     </div>
                     <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                        IAIP honors the dignity of the community it serves.
                     </h2>
                     <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                        Seeking support is an act of trust. Our certified practitioners are bound by a rigorous code of ethics that integrates Islamic values with professional conduct.
                     </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                     <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 px-8 py-4 h-auto text-base font-bold rounded-xl shadow-lg shadow-teal-500/20">
                        Read Code of Ethics
                     </Button>
                     <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 h-auto text-base rounded-xl backdrop-blur-sm">
                        Contact IAIP
                     </Button>
                  </div>
               </div>
            </div>
            {/* COMPONENT END */}
         </section>

         {/* 5. Join Network CTA */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">05. Network Join Banner</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="w-full rounded-[2rem] bg-gradient-to-br from-teal-600 to-teal-800 p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                     Are you a qualified practitioner?
                  </h2>
                  <p className="text-teal-50 text-lg mb-10 leading-relaxed">
                     Join our global network of accredited professionals. Gain visibility, access exclusive resources, and contribute to the growing field of Islamic Psychology.
                  </p>
                  <Button variant="white" size="lg" className="rounded-full px-10 py-4 h-auto font-bold text-teal-800 shadow-lg hover:scale-105 transition-transform">
                     Apply for Directory Listing
                  </Button>
               </div>
            </div>
            {/* COMPONENT END */}
         </section>

      </div>
    </div>
  );
};
