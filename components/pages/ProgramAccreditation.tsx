
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Check, Plus, Globe, Users, Search, Award, Shield, BookOpen, FileText, Wallet, GraduationCap, ChevronRight, Building2, DollarSign, Percent, RefreshCw, Sparkles } from 'lucide-react';

export const ProgramAccreditation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // EXACT CONTENT RESTORATION
  const steps = [
    {
      id: "01",
      title: "Review the Standards",
      desc: "Understand IAIP’s criteria for curriculum, faculty, assessment, and ethics.",
      icon: <BookOpen size={24} />
    },
    {
      id: "02",
      title: "Prepare Your Documentation",
      desc: "Gather faculty CVs, course syllabi, and institutional registration documents.",
      icon: <FileText size={24} />
    },
    {
      id: "03",
      title: "Submit Your Application",
      desc: "Complete the online application form and pay the initial processing fee.",
      icon: <Shield size={24} />
    },
    {
      id: "04",
      title: "Committee Review",
      desc: "Our academic committee reviews your materials to ensure alignment with IAIP standards.",
      icon: <Users size={24} />
    },
    {
      id: "05",
      title: "Accreditation Decision",
      desc: "Receive your official determination. Approved programs receive the IAIP seal.",
      icon: <Award size={24} />
    },
    {
      id: "06",
      title: "Listed in Accredited Network",
      desc: "Successful programs are added to our global directory of trusted Islamic Psychology education.",
      icon: <Globe size={24} />
    }
  ];

  const benefits = [
    {
      title: "Global recognition and credibility",
      icon: <Globe size={20} />
    },
    {
      title: "Access to IAIP’s professional network",
      icon: <Users size={20} />
    },
    {
      title: "Listed in the official IAIP Accredited Network",
      icon: <Search size={20} />
    },
    {
      title: "Eligibility for IAIP conferences and research opportunities",
      icon: <Award size={20} />
    },
    {
      title: "Use of IAIP certification marks and credentials",
      icon: <Shield size={20} />
    },
    {
      title: "Ongoing professional development resources",
      icon: <BookOpen size={20} />
    }
  ];

  const faqs = [
    {
      question: "Do I need to finish my program before applying?",
      answer: "Yes, you must complete an IAIP-accredited program (or pass an equivalency review) before submitting your certification application."
    },
    {
      question: "Do I need to be an IAIP member to get certified?",
      answer: "Membership is required to maintain certification, but you can start the application process as a non-member."
    },
    {
      question: "What happens if my application is incomplete?",
      answer: "You will be notified via email and the portal to provide the missing documentation within 30 days."
    },
    {
      question: "Is there an exam?",
      answer: "Yes, the certification process includes both a written online exam and an oral examination with a senior fellow."
    },
    {
      question: "How long does the review take?",
      answer: "The standard review time is 4-6 weeks after all materials have been submitted."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <span className="hover:text-white cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-600">/</span> 
          <span className="hover:text-white cursor-pointer transition-colors">Accreditation</span> 
          <span className="mx-2 text-slate-600">/</span> 
          <span className="text-teal-400">Program Accreditation</span>
        </div>
      </div>

      {/* Hero - Dark Premium Theme */}
      <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/20 blur-3xl rounded-full translate-x-1/3"></div>
         <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full -translate-x-1/3"></div>
         <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Badge className="bg-white/10 text-teal-300 border border-teal-500/30 mb-8 backdrop-blur-md px-4 py-1.5">
                For Universities & Institutes
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
               Align Your Program with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">IAIP Standards</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
               IAIP accreditation recognizes educational programs that meet the academic, ethical, and Islamic principles that define credible training in Islamic Psychology.
            </p>
            
            <Button size="lg" className="rounded-full px-10 h-14 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-[0_0_40px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_0_60px_-15px_rgba(20,184,166,0.6)] transition-all duration-300">
               Apply for Program Accreditation
            </Button>
         </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-24 relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Benefits of IAIP Accreditation
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        IAIP accreditation opens doors to a global network of scholars, practitioners, and institutions committed to excellence in Islamic Psychology.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <p className="text-sm font-bold text-slate-700 leading-tight pt-2">{benefit.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Accreditation Impact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
                                <span className="font-bold text-slate-600">Student Enrollment</span>
                                <span className="font-extrabold text-teal-600 text-xl">+45%</span>
                            </div>
                            <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
                                <span className="font-bold text-slate-600">Global Reach</span>
                                <span className="font-extrabold text-teal-600 text-xl">30+ Countries</span>
                            </div>
                            <div className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
                                <span className="font-bold text-slate-600">Grant Eligibility</span>
                                <span className="font-extrabold text-teal-600 text-xl">High Priority</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Process Steps - 3 Column Grid */}
      <section className="bg-slate-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Program Accreditation Works</h2>
               <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  A rigorous, collaborative process to ensure educational excellence.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {steps.map((step, i) => (
                  <div key={i} className="relative group">
                     <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-soft hover:shadow-xl hover:border-teal-200 hover:-translate-y-2 transition-all duration-300 h-full relative z-10 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-100 transition-all shadow-sm">
                                {step.icon}
                            </div>
                            <span className="text-4xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">{step.id}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight pr-4">
                           {step.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                           {step.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Fees Section - REDESIGNED */}
      <section className="bg-white py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
               <Badge variant="accent" className="mb-4">Investment</Badge>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Program Fees</h2>
               <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Simple, transparent pricing to support the accreditation process and ongoing quality assurance.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
               
               {/* Card 1: Accreditation */}
               <div className="bg-white rounded-[2.5rem] p-2 shadow-xl shadow-slate-200/60 border border-slate-100 h-full flex flex-col group hover:border-teal-200 transition-colors">
                  <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 flex-grow flex flex-col">
                      <div className="w-14 h-14 mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-300">
                          <FileText size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-600 mb-2 uppercase tracking-wider">Initial Application</h3>
                      <div className="my-6">
                          <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">$199</span>
                          <span className="text-slate-400 font-bold block mt-2">One-time fee</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 px-2">
                          Covers the administrative processing of your initial proposal and documentation review.
                      </p>
                      <Button variant="outline" fullWidth className="mt-auto border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white rounded-xl transition-all duration-300">
                          Start Application
                      </Button>
                  </div>
               </div>

               {/* Card 2: Renewal */}
               <div className="bg-white rounded-[2.5rem] p-2 shadow-xl shadow-slate-200/60 border border-slate-100 h-full flex flex-col group hover:border-teal-200 transition-colors">
                  <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-slate-100 flex-grow flex flex-col">
                      <div className="w-14 h-14 mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 mb-6 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-300">
                          <RefreshCw size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-600 mb-2 uppercase tracking-wider">Annual Renewal</h3>
                      <div className="my-6">
                          <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">$149</span>
                          <span className="text-slate-400 font-bold block mt-2">Per year</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 px-2">
                          Maintenance of accreditation status, ongoing monitoring, and listing updates.
                      </p>
                      <Button variant="outline" fullWidth className="mt-auto border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white rounded-xl transition-all duration-300">
                          Renew Accreditation
                      </Button>
                  </div>
               </div>

               {/* Card 3: Member Benefit - Hero Card */}
               <div className="relative group h-full transform md:-translate-y-4">
                   <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                   <div className="relative bg-slate-900 rounded-[2.5rem] p-1 h-full flex flex-col shadow-2xl">
                       <div className="relative bg-slate-900 rounded-[2.3rem] p-8 text-center flex-grow flex flex-col overflow-hidden">
                           {/* Background Pattern */}
                           <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
                           <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                           
                           <div className="relative z-10 flex flex-col h-full">
                               <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 text-teal-300 text-xs font-bold uppercase tracking-wide mb-8 mx-auto">
                                   <Sparkles size={12} /> Member Exclusive
                               </div>
                               
                               <div className="mb-2">
                                   <span className="text-7xl font-extrabold text-white tracking-tighter drop-shadow-lg">20%</span>
                                   <span className="text-4xl font-bold text-teal-400 ml-1">OFF</span>
                               </div>
                               
                               <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                                   on all accreditation fees for <br/><span className="text-teal-400">IAIP Members</span>
                               </h3>
                               
                               <p className="text-slate-400 text-sm mb-8 leading-relaxed border-t border-slate-800 pt-6">
                                   Join a global network of institutions and enjoy significant savings on all program reviews.
                               </p>
                               
                               <Button fullWidth className="mt-auto bg-white text-slate-900 hover:bg-teal-50 font-bold rounded-xl shadow-lg shadow-white/10 border-0 h-14">
                                   Become a Member
                               </Button>
                           </div>
                       </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
           
           <div className="space-y-4">
             {faqs.map((faq, i) => {
               const isOpen = openFaq === i;
               return (
                 <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-6 px-8 flex items-center justify-between text-left group focus:outline-none"
                    >
                       <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-teal-700' : 'text-slate-700 group-hover:text-slate-900'}`}>
                         {faq.question}
                       </span>
                       <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-teal-500 text-white rotate-45' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-50'}`}>
                          <Plus className="w-5 h-5" />
                       </div>
                    </button>
                    {isOpen && (
                      <div className="pb-8 px-8 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1">
                        <div className="pt-4 border-t border-slate-100/50"></div>
                        <p className="mt-2">{faq.answer}</p>
                      </div>
                    )}
                 </div>
               );
             })}
           </div>
        </div>
      </section>
    </div>
  );
};
