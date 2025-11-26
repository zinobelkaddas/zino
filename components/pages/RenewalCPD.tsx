
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Check, CheckCircle2, Plus, X, FileText, Clock, PenTool, Upload, Send } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const RenewalCPD: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: 1,
      icon: <Clock className="w-6 h-6" />,
      title: "Know your renewal period",
      desc: "Check your certification dates and note when your renewal is due."
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Complete your CPD hours",
      desc: "Attend IAIP or approved trainings, events, supervision, and learning activities within the renewal period."
    },
    {
      id: 3,
      icon: <PenTool className="w-6 h-6" />,
      title: "Record what you've done",
      desc: "Keep a simple log of CPD hours, supervision (if required), and any relevant activities."
    },
    {
      id: 4,
      icon: <FileText className="w-6 h-6" />,
      title: "Prepare your documents",
      desc: "Gather your CPD log, updated contact details, ethics declaration, and any other required forms."
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
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Certification</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">Renewal & CPD</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/2 relative z-10">
              <Badge variant="secondary" className="mb-6">For Certified Practitioners</Badge>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Continue your development through <span className="text-primary-dark">renewal and CPD</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                IAIP Membership gives you easy access to the CPD activities you’ll need to maintain your status as a certified practitioner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary" className="rounded-full px-8 shadow-xl shadow-primary-dark/20">
                  Start your application
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Check Requirements
                </Button>
              </div>
            </div>

            {/* Right Card - High Fidelity Membership Card */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-[#6f72a0] to-[#51537a] text-white rounded-[2rem] p-1 shadow-2xl max-w-md w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[1.8rem] p-8 md:p-10 h-full relative overflow-hidden">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8 relative z-10">
                     <div>
                        <h3 className="font-bold text-white text-xl mb-1">Practitioner Membership</h3>
                        <p className="text-indigo-100 text-sm">Most popular for renewals</p>
                     </div>
                     <div className="bg-white/20 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-white" />
                     </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8 border-b border-white/10 pb-8 relative z-10">
                     <span className="text-6xl font-extrabold tracking-tight">$199</span>
                     <span className="text-indigo-200 font-medium text-lg">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-5 mb-10 relative z-10">
                    {[
                        "20% off on IAIP events & workshops",
                        "Updates to support renewal requirements",
                        "Community space with Senior Fellows"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-white text-[#5e608a] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                <Check size={14} strokeWidth={4} />
                            </div>
                            <span className="font-medium leading-snug text-indigo-50">{feat}</span>
                        </li>
                    ))}
                  </ul>

                  <Button fullWidth variant="white" className="text-[#51537a] font-extrabold py-4 shadow-lg hover:bg-indigo-50 relative z-10">
                    Become a Member
                  </Button>

                  {/* Artistic Circles on Card */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Renewal & CPD Process</h2>
            <p className="text-lg text-slate-600">Follow these simple steps to ensure your certification remains valid and up to date.</p>
         </div>
         
         {/* Top Row: Steps 1-4 */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {steps.map((step) => (
                 <div key={step.id} className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-start hover:shadow-xl hover:border-primary-light/30 transition-all duration-300 group relative overflow-hidden">
                    {/* Background Number */}
                    <span className="absolute -top-4 -right-4 text-9xl font-extrabold text-slate-50 group-hover:text-primary-bg transition-colors duration-300 pointer-events-none select-none">
                        {step.id}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 border border-slate-200 flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary-dark group-hover:text-white group-hover:border-primary-dark transition-colors duration-300 shadow-sm">
                       {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight relative z-10">
                       {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                       {step.desc}
                    </p>
                 </div>
            ))}
         </div>

         {/* Bottom Row: Steps 5 & 6 */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Step 5: Action Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-primary-dark to-[#5e3aae] rounded-3xl p-8 flex flex-col justify-between shadow-2xl text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                            <span className="font-bold text-xl">5</span>
                        </div>
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-md">Action Required</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                       Submit your renewal application through IAIP
                    </h3>
                    <p className="text-indigo-100 text-sm mb-8">
                        Once you have your documents ready, proceed to the secure submission portal.
                    </p>
                </div>
                
                <Button fullWidth variant="white" className="relative z-10 font-bold group-hover:scale-[1.02] transition-transform">
                   Start Renewal Application <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>

            {/* Step 6: Confirmation */}
            <div className="lg:col-span-2 bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                        <Check size={32} strokeWidth={3} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-slate-200 text-slate-600 font-bold text-xs px-2 py-1 rounded uppercase tracking-wide">Step 6</span>
                        <h3 className="text-2xl font-bold text-slate-900">Receive status confirmation</h3>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">
                       Once approved, your certification remains active and your directory entry stays current. You will receive a digital certificate and badge for your website.
                    </p>
                </div>
            </div>

         </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
             <p className="text-slate-500">Common questions about the renewal process and requirements.</p>
           </div>
           
           <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-100">
             {faqs.map((faq, i) => {
               const isOpen = openFaq === i;
               return (
                 <div key={i} className="transition-colors hover:bg-slate-50/50">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none"
                    >
                       <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-dark' : 'text-slate-800'}`}>
                         {faq.question}
                       </span>
                       <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-dark text-white rotate-45' : 'bg-slate-100 text-slate-400'}`}>
                          <Plus className="w-5 h-5" />
                       </div>
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="pb-6 px-8 text-slate-600 leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                 </div>
               );
             })}
           </div>
        </div>
      </section>
    </div>
  );
};
import { Award } from 'lucide-react';
