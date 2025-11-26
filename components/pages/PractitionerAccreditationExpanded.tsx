
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Check, CheckCircle2, ChevronDown, Plus, X, User, FileText, Briefcase, GraduationCap, CreditCard, Shield, Globe, Users, BookOpen, Search, Clock, FileCheck, Video, Mic } from 'lucide-react';

export const PractitionerAccreditationExpanded: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: 1,
      title: "Personal Information & Credentials",
      subtitle: "Identity verification and professional background",
      content: (
        <div className="pt-6 pb-2">
          <p className="text-slate-600 mb-6">
            To begin your application, you will need to provide verified documentation of your identity and professional standing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <User size={18} className="text-primary-dark" /> Personal Details
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Full Legal Name</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Current Home Address</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Valid Government ID / Passport</li>
                </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Briefcase size={18} className="text-primary-dark" /> Professional Credentials
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Current Professional License</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Highest Relevant Degree (Masters/PhD)</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></div>Proof of Indemnity Insurance</li>
                </ul>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500 bg-white border border-slate-200 rounded-lg p-3">
             <CreditCard size={16} />
             <span>A non-refundable application fee is required at this stage.</span>
          </div>
        </div>
      )
    },
    { 
        id: 2, 
        title: "Supervision Hours", 
        subtitle: "Proof of clinical experience",
        content: (
            <div className="pt-6 pb-2">
                <p className="text-slate-600 mb-6">
                    Candidates must demonstrate clinical competence through supervised practice. You will need to submit logs signed by your supervisor.
                </p>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-grow">
                        <h4 className="font-bold text-slate-900 mb-2">Requirement: 150 Hours</h4>
                        <p className="text-sm text-slate-500 mb-4">
                            Direct client contact hours under the supervision of a qualified clinical supervisor.
                        </p>
                        <div className="flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500" /> Signed Logs</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-500" /> Supervisor License</span>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-slate-200 self-stretch"></div>
                    <div className="md:w-1/3 text-sm text-slate-500">
                        <strong className="block text-slate-900 mb-1">Accepted Formats</strong>
                        Official IAIP logbook or standard regulatory body supervision forms (PDF).
                    </div>
                </div>
            </div>
        )
    },
    { 
        id: 3, 
        title: "Written Examination", 
        subtitle: "Assessment of core IP knowledge",
        content: (
            <div className="pt-6 pb-2">
                <p className="text-slate-600 mb-6">
                    An online assessment covering the foundational principles of Islamic Psychology, ethics, and therapeutic applications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <div className="text-slate-400 mb-2 flex justify-center"><FileCheck size={24} /></div>
                        <div className="font-bold text-slate-900 text-lg">100</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">Questions</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <div className="text-slate-400 mb-2 flex justify-center"><Clock size={24} /></div>
                        <div className="font-bold text-slate-900 text-lg">120</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">Minutes</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <div className="text-slate-400 mb-2 flex justify-center"><CheckCircle2 size={24} /></div>
                        <div className="font-bold text-slate-900 text-lg">80%</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">Pass Rate</div>
                    </div>
                </div>
            </div>
        ) 
    },
    { 
        id: 4, 
        title: "Case Study & Recording", 
        subtitle: "Demonstration of practical skills",
        content: (
            <div className="pt-6 pb-2">
                <p className="text-slate-600 mb-6">
                    Demonstrate your ability to integrate IP principles in practice through two key submissions.
                </p>
                <div className="space-y-4">
                    <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="bg-white p-2 rounded-lg border border-slate-200 text-primary-dark shadow-sm">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Written Case Study</h4>
                            <p className="text-sm text-slate-500">A 2,000-word anonymized case study outlining assessment, formulation (from an IP perspective), and intervention.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="bg-white p-2 rounded-lg border border-slate-200 text-primary-dark shadow-sm">
                            <Video size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Session Recording</h4>
                            <p className="text-sm text-slate-500">A 45-minute video or audio recording of a session (mock or consented) demonstrating specific IP techniques.</p>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    },
    { 
        id: 5, 
        title: "Oral Examination", 
        subtitle: "Interview with Senior Fellows",
        content: (
            <div className="pt-6 pb-2">
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0">
                        <Mic size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Live Panel Interview</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            A 45-minute video conference with two IAIP Senior Fellows. You will discuss your case study, your personal development, and your understanding of Islamic ethics in practice.
                        </p>
                    </div>
                </div>
            </div>
        ) 
    },
    { 
        id: 6, 
        title: "Final Certification", 
        subtitle: "Review and awarding",
        content: (
            <div className="pt-6 pb-2">
                <p className="text-slate-600">
                    The Certification Committee reviews all components of your application. Upon approval:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-bold">
                        <CheckCircle2 size={18} /> You receive the "Certified" status
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-bold">
                        <Globe size={18} /> Listed in Global Directory
                    </div>
                </div>
            </div>
        ) 
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

      {/* Pathway Steps - EXPANDED VIEW */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Certification Pathway</h2>
             <p className="text-slate-500 text-lg">A step-by-step guide to achieving your professional accreditation.</p>
          </div>
          
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block -z-0"></div>

            {steps.map((step) => {
              return (
                <div 
                  key={step.id}
                  className="relative rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  <div className="w-full flex items-start gap-6 p-8">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold bg-slate-50 text-slate-400 border border-slate-200 transition-colors">
                        {step.id}
                    </div>

                    <div className="flex-grow pt-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-slate-500 font-medium">{step.subtitle}</p>
                        </div>
                        
                        {/* Content Area - Always Visible */}
                        <div className="border-t border-slate-100 pt-4">
                            {step.content}
                        </div>
                    </div>
                  </div>
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
