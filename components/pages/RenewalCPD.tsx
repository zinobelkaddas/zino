
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Check, CheckCircle2, Plus, X, FileText, Clock, PenTool, Upload, Send, Award, Shield, Calendar, Sparkles, ChevronRight } from 'lucide-react';

export const RenewalCPD: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: "01",
      icon: <Clock className="w-6 h-6" />,
      title: "Know your renewal period",
      desc: "Check your certification dates. Renewal windows open 90 days before your current certification expiry."
    },
    {
      id: "02",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Complete your CPD hours",
      desc: "Attend IAIP or approved trainings, events, supervision, and learning activities within the renewal period."
    },
    {
      id: "03",
      icon: <PenTool className="w-6 h-6" />,
      title: "Log your activities",
      desc: "Update your practitioner portal with records of supervision, workshops, and professional reading."
    },
    {
      id: "04",
      icon: <FileText className="w-6 h-6" />,
      title: "Prepare documents",
      desc: "Gather your CPD log, updated contact details, ethics declaration, and proof of indemnity insurance."
    },
    {
      id: "05",
      icon: <Send className="w-6 h-6" />,
      title: "Submit application",
      desc: "Complete the renewal form and pay the annual recertification fee via the secure portal.",
      action: true
    },
    {
      id: "06",
      icon: <Award className="w-6 h-6" />,
      title: "Receive confirmation",
      desc: "Once approved, your digital badge is updated instantly, and your directory listing remains active."
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
          <span className="hover:text-white cursor-pointer transition-colors">Certification</span> 
          <span className="mx-2 text-slate-600">/</span> 
          <span className="text-teal-400">Renewal & CPD</span>
        </div>
      </div>

      {/* Hero Section - Centered Dark Theme */}
      <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-teal-900/30 text-teal-300 border border-teal-500/30 mb-8 backdrop-blur-md px-4 py-1.5">
             For Certified Practitioners
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Continue your development through <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">renewal and CPD</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            IAIP Membership gives you easy access to the CPD activities you’ll need to maintain your status as a certified practitioner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-10 h-14 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-[0_0_40px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_0_60px_-15px_rgba(20,184,166,0.6)] transition-all duration-300">
               Start your application
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-white border-slate-700 hover:bg-white/5 hover:text-white hover:border-slate-500">
               Check Requirements
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Clean 3x3 Grid */}
      <section className="bg-slate-50 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24">
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {steps.map((step) => {
                  const isAction = step.action;
                  return (
                    <div key={step.id} className={`
                       relative rounded-[2rem] p-8 flex flex-col h-full transition-all duration-300 group
                       ${isAction 
                          ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 border border-slate-800' 
                          : 'bg-white text-slate-900 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80'
                       }
                    `}>
                       
                       <div className="flex justify-between items-start mb-8">
                          <div className={`
                             w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-sm
                             ${isAction 
                                ? 'bg-teal-500 text-slate-900' 
                                : 'bg-slate-50 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-600 border border-slate-100'
                             }
                          `}>
                             {step.icon}
                          </div>
                          <span className={`text-sm font-mono font-bold tracking-wider ${isAction ? 'text-slate-600' : 'text-slate-300'}`}>
                             {step.id}
                          </span>
                       </div>

                       <h3 className={`text-xl font-bold mb-3 pr-4 ${isAction ? 'text-white' : 'text-slate-900'}`}>
                          {step.title}
                       </h3>
                       
                       <p className={`text-sm leading-relaxed mb-8 flex-grow ${isAction ? 'text-slate-400' : 'text-slate-500'}`}>
                          {step.desc}
                       </p>

                       {isAction && (
                          <Button fullWidth className="bg-white hover:bg-teal-50 text-slate-900 rounded-xl mt-auto font-bold">
                             Start Application <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                       )}
                       
                       {!isAction && (
                          <div className="mt-auto pt-6 border-t border-slate-50">
                             <div className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wide group-hover:text-teal-600 transition-colors">
                                Step {step.id} <ChevronRight className="w-3 h-3 ml-1" />
                             </div>
                          </div>
                       )}
                    </div>
                  );
               })}
            </div>
         </div>
      </section>

      {/* Membership Section */}
      <section className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden border border-slate-800">
               {/* Abstract Shapes */}
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
               
               <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                  <div className="lg:w-1/2">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles size={12} /> Recommended
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Simplify renewal with <span className="text-teal-400">IAIP Membership</span>
                     </h2>
                     <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Members enjoy streamlined renewal, fee waivers, and automatic tracking of CPD hours through our exclusive events.
                     </p>
                     
                     <div className="space-y-5">
                        {[
                           "100% Renewal Fee Waiver ($149 value)",
                           "Automatic CPD logging for IAIP events",
                           "Access to free monthly supervision groups",
                           "Priority listing in the Global Directory"
                        ].map((item, i) => (
                           <div key={i} className="flex items-start gap-4 text-slate-300 group">
                              <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:bg-teal-500 group-hover:text-slate-900 transition-colors">
                                 <Check size={12} strokeWidth={4} />
                              </div>
                              <span className="text-base">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="lg:w-1/2 w-full max-w-md">
                     <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative">
                        <div className="absolute top-4 right-4">
                           <Badge className="bg-teal-500 text-white border-0 font-bold">Best Value</Badge>
                        </div>
                        
                        <div className="mb-8">
                           <p className="text-sm text-teal-300 font-bold uppercase tracking-wider mb-2">Practitioner Plan</p>
                           <div className="flex items-baseline gap-1">
                              <span className="text-5xl font-extrabold text-white tracking-tight">$299</span>
                              <span className="text-slate-400 font-medium">/year</span>
                           </div>
                           <p className="text-xs text-slate-500 mt-2">Billed annually. Cancel anytime.</p>
                        </div>

                        <Button fullWidth size="lg" className="bg-white hover:bg-teal-50 text-slate-900 font-bold rounded-xl h-14 mb-4 shadow-lg">
                           Become a Member
                        </Button>
                        <Button fullWidth variant="outline" className="border-white/10 text-slate-300 hover:bg-white/5 hover:text-white rounded-xl h-12 text-sm">
                           View all benefits
                        </Button>
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
                       <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-teal-50 text-teal-600 rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                          <Plus className="w-5 h-5" />
                       </div>
                    </button>
                    {isOpen && (
                      <div className="pb-8 px-8 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1">
                        <div className="pt-4 border-t border-slate-100"></div>
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
