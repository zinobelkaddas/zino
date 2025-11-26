
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Check, ChevronDown, ChevronUp, Plus, X } from 'lucide-react';

export const PractitionerAccreditation: React.FC = () => {
  const [openStep, setOpenStep] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: 1,
      title: "Step 1: Upload Your Personal Information",
      content: (
        <div className="pt-2 pb-6">
          <p className="text-slate-900 font-bold mb-6">You will need to submit:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-8">
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">• Full name</li>
              <li className="flex items-center gap-2">• Phone number</li>
              <li className="flex items-center gap-2">• Address</li>
              <li className="flex items-center gap-2">• Years of experience</li>
            </ul>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">• Number of clients</li>
              <li className="flex items-center gap-2">• License document</li>
              <li className="flex items-center gap-2">• Passport copy</li>
              <li className="flex items-center gap-2">• Degree</li>
            </ul>
          </div>
          <p className="text-slate-800 text-sm font-bold bg-white/50 inline-block px-3 py-2 rounded-lg border border-primary-light/20">
            (i) Payment must be completed before you can continue to the next step.
          </p>
        </div>
      )
    },
    { id: 2, title: "Step 2: Upload Your Supervision Hours", content: null },
    { id: 3, title: "Step 3: Complete the Online Written Exam", content: null },
    { id: 4, title: "Step 4: Submit Your Case Study & Recording", content: null },
    { id: 5, title: "Step 5: Schedule Your Oral Exam", content: null },
    { id: 6, title: "Step 6: Final Verdict", content: null },
  ];

  const benefits = [
    "Global recognition and credibility",
    "Access to IAIP's professional network",
    "Listed in the official IAIP Accredited Network",
    "Eligibility for IAIP conferences and research opportunities.",
    "Use of IAIP certification marks and credentials",
    "Ongoing professional development resources"
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
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb - Simplified for this view */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 font-medium">
        Home <span className="mx-1">&gt;</span> Certification/Accreditation <span className="mx-1">&gt;</span> <span className="text-slate-600">Practitioner Accreditation: How Accreditation Works</span>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight max-w-3xl">
          Become an IAIP-Certified Practitioner
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
          IAIP accreditation affirms that your training, ethics, and practice meet the standards of Islamic Psychology.
        </p>
        <Button size="lg" className="rounded-full pl-8 pr-6 shadow-xl shadow-primary-dark/20">
          Login to start application <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* Pathway Steps */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-12">Your Certification Pathway</h2>
          
          <div className="space-y-4">
            {steps.map((step) => {
              const isOpen = openStep === step.id;
              return (
                <div 
                  key={step.id}
                  className={`
                    rounded-2xl transition-all duration-300 overflow-hidden
                    ${isOpen ? 'bg-primary-bg shadow-sm ring-1 ring-primary-dark/10' : 'bg-white shadow-soft hover:bg-slate-50'}
                  `}
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? 0 : step.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className={`text-xl font-bold ${isOpen ? 'text-primary-dark' : 'text-slate-600'}`}>
                      {step.title}
                    </span>
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200
                      ${isOpen ? 'bg-white text-primary-dark' : 'bg-slate-100 text-slate-400'}
                    `}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  
                  {isOpen && step.content && (
                    <div className="px-6 md:px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-200">
                      {step.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
               <div>
                  <h2 className="text-4xl font-bold text-slate-700 mb-6">Benefits of IAIP Certification</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    IAIP certification opens doors to a global network of scholars, practitioners, and institutions committed to excellence in Islamic Psychology.
                  </p>
               </div>
               
               <ul className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mt-0.5">
                         <Check className="w-5 h-5 text-slate-500" strokeWidth={3} />
                      </div>
                      <span className="text-lg font-bold text-slate-700">{benefit}</span>
                    </li>
                  ))}
               </ul>
            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-bold text-slate-700 mb-12">Frequently Asked Questions</h2>
           
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
