
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Check, ChevronDown, Plus, X, User, FileText, Briefcase, GraduationCap, CreditCard, Shield, Globe, Users, BookOpen, Search } from 'lucide-react';

export const PractitionerAccreditation: React.FC = () => {
  const [openStep, setOpenStep] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: 1,
      title: "Upload Your Personal Information",
      subtitle: "Identity verification and contact details",
      content: (
        <div className="pt-6 pb-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Personal Details Column */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-dark shadow-sm">
                        <User size={16} />
                    </div>
                    <h4 className="font-bold text-slate-900">Personal Details</h4>
                </div>
                <ul className="space-y-3">
                    {[
                        { label: "Full Legal Name", icon: <Check size={14} /> },
                        { label: "Current Address", icon: <Check size={14} /> },
                        { label: "Phone Number", icon: <Check size={14} /> },
                        { label: "Passport / ID Copy", icon: <FileText size={14} /> },
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <span className="text-emerald-500">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Professional Column */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-dark shadow-sm">
                        <Briefcase size={16} />
                    </div>
                    <h4 className="font-bold text-slate-900">Professional Credentials</h4>
                </div>
                <ul className="space-y-3">
                    {[
                        { label: "License Document", icon: <Shield size={14} /> },
                        { label: "University Degree", icon: <GraduationCap size={14} /> },
                        { label: "Years of Experience", icon: <Check size={14} /> },
                        { label: "Caseload Summary", icon: <FileText size={14} /> },
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                            <span className="text-emerald-500">{item.icon}</span>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Payment Alert */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
                <CreditCard size={20} />
            </div>
            <div>
                <h5 className="font-bold text-amber-900 text-sm mb-1">Application Fee Required</h5>
                <p className="text-amber-800/80 text-xs leading-relaxed">
                    Payment must be completed securely via our portal before you can proceed to Step 2.
                </p>
            </div>
            <Button size="sm" variant="white" className="ml-auto text-xs border-amber-200 text-amber-800 hover:bg-amber-100">
                Pay Now
            </Button>
          </div>
        </div>
      )
    },
    { 
        id: 2, 
        title: "Upload Your Supervision Hours", 
        subtitle: "Proof of clinical supervision",
        content: null 
    },
    { 
        id: 3, 
        title: "Complete the Online Written Exam", 
        subtitle: "Assessment of core IP knowledge",
        content: null 
    },
    { 
        id: 4, 
        title: "Submit Your Case Study & Recording", 
        subtitle: "Demonstration of practical skills",
        content: null 
    },
    { 
        id: 5, 
        title: "Schedule Your Oral Exam", 
        subtitle: "Final interview with Senior Fellows",
        content: null 
    },
    { 
        id: 6, 
        title: "Final Verdict", 
        subtitle: "Certification decision and awarding",
        content: null 
    },
  ];

  const benefits = [
    {
        title: "Global Recognition",
        desc: "Gain status as a verified professional in a worldwide community.",
        icon: <Globe size={24} />
    },
    {
        title: "Professional Network",
        desc: "Access peer supervision groups and connect with senior mentors.",
        icon: <Users size={24} />
    },
    {
        title: "Official Directory Listing",
        desc: "Get featured in the public IAIP Accredited Network for referrals.",
        icon: <Search size={24} />
    },
    {
        title: "Exclusive Resources",
        desc: "Full access to the IAIP research library, journals, and toolkits.",
        icon: <BookOpen size={24} />
    },
    {
        title: "Certification Marks",
        desc: "Use the IAIP Certified seal on your website and materials.",
        icon: <Shield size={24} />
    },
    {
        title: "Event Priority",
        desc: "Early access and discounts for global conferences and workshops.",
        icon: <GraduationCap size={24} />
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
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 font-medium">
            Home <span className="mx-1">&gt;</span> Certification <span className="mx-1">&gt;</span> <span className="text-slate-900 font-bold">Practitioner Accreditation</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-4xl">
            <Badge variant="accent" className="mb-6">Certification Pathway</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Become an <span className="text-primary-dark">IAIP-Certified</span> Practitioner
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-medium">
            IAIP accreditation affirms that your training, ethics, and practice meet the global standards of Islamic Psychology.
            </p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary-dark/20 hover:translate-y-[-2px] transition-transform">
            Login to start application <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
        </div>
      </section>

      {/* Pathway Steps */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Certification Pathway</h2>
             <p className="text-slate-500 text-lg">A step-by-step guide to achieving your professional accreditation.</p>
          </div>
          
          <div className="relative space-y-6">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block -z-0"></div>

            {steps.map((step) => {
              const isOpen = openStep === step.id;
              return (
                <div 
                  key={step.id}
                  className={`
                    relative rounded-3xl transition-all duration-500 border
                    ${isOpen 
                        ? 'bg-white border-primary-light/50 shadow-2xl shadow-primary-light/10 scale-[1.02] z-10' 
                        : 'bg-white border-slate-200 shadow-sm hover:border-primary-dark/30 hover:shadow-md z-0'
                    }
                  `}
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? 0 : step.id)}
                    className="w-full flex items-start md:items-center gap-6 p-6 md:p-8 text-left focus:outline-none"
                  >
                    {/* Step Number */}
                    <div className={`
                        flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 border
                        ${isOpen 
                            ? 'bg-primary-dark text-white border-primary-dark shadow-lg shadow-primary-dark/30' 
                            : 'bg-slate-50 text-slate-400 border-slate-200 group-hover:border-primary-dark/50'
                        }
                    `}>
                        {step.id}
                    </div>

                    <div className="flex-grow pt-1 md:pt-0">
                        <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                            {step.title}
                        </h3>
                        <p className={`text-sm font-medium mt-1 transition-colors ${isOpen ? 'text-primary-dark' : 'text-slate-400'}`}>
                            {step.subtitle}
                        </p>
                    </div>

                    <div className={`
                      hidden md:flex w-12 h-12 rounded-full items-center justify-center transition-all duration-300 border
                      ${isOpen ? 'bg-primary-bg text-primary-dark rotate-180 border-primary-light' : 'bg-white text-slate-300 border-slate-100'}
                    `}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  
                  {isOpen && step.content && (
                    <div className="px-6 md:px-8 pb-8 md:pl-[6.5rem]">
                        <div className="h-px w-full bg-slate-100 mb-8"></div>
                        {step.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Redesigned Benefits Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                
                {/* Left Content (Sticky) */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <Badge variant="primary" className="mb-6 bg-teal-50 text-teal-700 border-teal-100">Why Certify?</Badge>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Elevate your practice with <span className="text-primary-dark">Global Standards</span>.
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            IAIP certification is more than a credential—it's a commitment to ethical, soul-centered care. Join a network defining the future of Islamic Psychology.
                        </p>
                        
                        <div className="space-y-4">
                            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary-dark/10">
                                Download Guide
                            </Button>
                            <p className="text-xs text-slate-400 font-bold flex items-center gap-2">
                                <FileText size={14} /> PDF Guide • 2.4MB • Updated 2025
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Grid */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((b, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-primary-light/30 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary-dark group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-dark transition-colors">
                                    {b.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-500 text-lg">Everything you need to know about the application process.</p>
           </div>
           
           <div className="space-y-4">
             {faqs.map((faq, i) => {
               const isOpen = openFaq === i;
               return (
                 <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-6 px-8 flex items-center justify-between text-left group"
                    >
                       <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-dark' : 'text-slate-700 group-hover:text-slate-900'}`}>
                         {faq.question}
                       </span>
                       <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-bg text-primary-dark rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
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
