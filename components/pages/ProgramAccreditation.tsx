
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Check, Plus, X, Building2, GraduationCap, BookOpen } from 'lucide-react';

export const ProgramAccreditation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      number: "01",
      title: "Submit Initial Proposal",
      desc: "Provide a high-level overview of your institution, the program's structure, and how it aligns with IAIP standards."
    },
    {
      number: "02",
      title: "Curriculum Review",
      desc: "Our academic committee reviews your syllabi, reading lists, and learning outcomes to ensure Islamic Psychology integration."
    },
    {
      number: "03",
      title: "Site Visit (Virtual/Physical)",
      desc: "An IAIP delegation meets with your faculty and administration to assess institutional readiness and resources."
    },
    {
      number: "04",
      title: "Final Accreditation Status",
      desc: "Upon approval, your program receives the IAIP seal of accreditation, valid for 3 years."
    }
  ];

  const eligibility = [
    {
      icon: <Building2 className="w-8 h-8 text-primary-dark" />,
      title: "Registered Institution",
      desc: "Must be a legally recognized academic entity with a valid license to operate in your country of origin."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      title: "Qualified Faculty",
      desc: "At least 2 faculty members must hold IAIP Certified Practitioner status or equivalent Senior Fellow recognition."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      title: "Curriculum Alignment",
      desc: "Course content must integrate traditional Islamic frameworks (Nafs, Qalb, Ruh) with modern clinical practice."
    }
  ];

  const faqs = [
    {
      question: "How long is accreditation valid?",
      answer: "Program accreditation is valid for a period of 3 years. After this period, a renewal review is required to ensure continued adherence to standards."
    },
    {
      question: "Can online programs apply?",
      answer: "Yes, fully online and hybrid programs are eligible for accreditation, provided they meet the same rigorous academic and supervision standards as on-site programs."
    },
    {
      question: "What if we are rejected?",
      answer: "If accreditation is denied, you will receive a detailed report outlining the gaps. You may re-apply after 6 months once the necessary adjustments have been made."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 font-medium">
        Home <span className="mx-1">&gt;</span> Certification/Accreditation <span className="mx-1">&gt;</span> <span className="text-slate-600">Program Accreditation</span>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight max-w-4xl">
          Accredit Your Psychology Program
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
          Gain international recognition for your curriculum by aligning with the global standards of Islamic Psychology.
        </p>
        <Button size="lg" className="rounded-full pl-8 pr-6 shadow-xl shadow-primary-dark/20">
          Start program application <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* How it Works - Split Layout */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 sticky top-24">
                How Program Accreditation Works
              </h2>
            </div>

            <div className="lg:w-2/3 space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-lg flex items-center justify-center shadow-sm group-hover:border-primary-dark group-hover:text-primary-dark transition-colors">
                     {step.number}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                     <p className="text-slate-600 leading-relaxed text-lg">
                       {step.desc}
                     </p>
                   </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Eligibility Criteria</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {eligibility.map((item, i) => (
                 <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
                       {item.desc}
                    </p>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-12 bg-slate-50">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
               <div className="p-8 md:p-10 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Accreditation Fees</h2>
                  <p className="text-slate-500">Transparent pricing for the review and maintenance of your program.</p>
               </div>
               <div className="divide-y divide-slate-100">
                  <div className="flex justify-between items-center p-6 md:px-10 hover:bg-slate-50 transition-colors">
                     <span className="font-bold text-slate-700">Application Fee <span className="text-xs font-normal text-slate-400 uppercase ml-2 bg-slate-100 px-2 py-1 rounded">One-time</span></span>
                     <span className="font-bold text-slate-900 text-lg">$500</span>
                  </div>
                  <div className="flex justify-between items-center p-6 md:px-10 hover:bg-slate-50 transition-colors">
                     <span className="font-bold text-slate-700">Program Review Fee</span>
                     <span className="font-bold text-slate-900 text-lg">$2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-6 md:px-10 hover:bg-slate-50 transition-colors">
                     <span className="font-bold text-slate-700">Annual Renewal</span>
                     <span className="font-bold text-slate-900 text-lg">$1,000</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-slate-700 mb-12">Frequently Asked Questions</h2>
           
           <div className="border-t border-slate-200">
             {faqs.map((faq, i) => {
               const isOpen = openFaq === i;
               return (
                 <div key={i} className="border-b border-slate-200">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-8 flex items-center justify-between text-left group hover:bg-slate-50 transition-colors px-4 -mx-4 rounded-lg"
                    >
                       <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                         {faq.question}
                       </span>
                       <div className="flex-shrink-0 ml-4 text-slate-300 group-hover:text-primary-light transition-colors">
                          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                       </div>
                    </button>
                    {isOpen && (
                      <div className="pb-8 text-slate-500 leading-relaxed px-1 max-w-3xl animate-in fade-in slide-in-from-top-1">
                        {faq.answer}
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
