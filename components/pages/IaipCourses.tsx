
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Clock, Award, User, ArrowRight, CheckCircle2, PlayCircle, Star, Plus, X, GraduationCap } from 'lucide-react';

export const IaipCourses: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const courses = [
    {
      id: 1,
      title: "Intro to Islamic Psychology",
      desc: "A foundational course exploring the history, key concepts, and definitions of the soul in Islamic tradition.",
      price: 300,
      memberPrice: "Free",
      level: "Beginner",
      instructor: "Senior Fellow",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "The Psychology of the Heart (Qalb)",
      desc: "Understanding the heart as the center of cognition and emotion in Islamic thought.",
      price: 300,
      memberPrice: "Free",
      level: "Intermediate",
      instructor: "Prof. A. Mohammed",
      image: "https://images.unsplash.com/photo-1518531933037-9a3e35641178?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Ethics in Islamic Counselling",
      desc: "Navigating professional boundaries and ethical dilemmas through an Islamic lens.",
      price: 300,
      memberPrice: "Free",
      level: "Advanced",
      instructor: "Dr. Sarah Ahmed",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Trauma & Spiritual Healing",
      desc: "Integrating clinical trauma interventions with spiritual practices for holistic recovery.",
      price: 300,
      memberPrice: "Free",
      level: "Advanced",
      instructor: "Senior Fellow",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
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
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Learning & Events</span> 
          <span className="mx-2 text-slate-300">/</span> 
          <span className="text-primary-dark">IAIP Courses</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Learn from the Field's <span className="text-primary-dark">Leading Voices</span>
         </h1>
         <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-20">
            Self-paced online courses designed by leading scholars and practitioners. Build foundational knowledge, develop clinical skills, and advance your expertise in Islamic Psychology.
         </p>

         {/* Value Props */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 text-primary-dark">
                  <Clock className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Self-Paced</h3>
               <p className="text-slate-500">Learn on your schedule with lifetime access to course materials.</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 text-primary-dark">
                  <Award className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Certificates</h3>
               <p className="text-slate-500">Earn a verified certificate of completion for every course.</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 text-primary-dark">
                  <User className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Faculty</h3>
               <p className="text-slate-500">Learn directly from Senior Fellows and pioneers in the field.</p>
            </div>
         </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">IAIP Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-[2rem] border border-slate-200 p-2 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-row overflow-hidden h-full sm:h-auto">
                     {/* Image */}
                     <div className="sm:w-2/5 h-48 sm:h-auto relative rounded-xl overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2">
                           <Badge className="bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">{course.level}</Badge>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                           <div className="flex justify-between items-start mb-2">
                              <div className="text-xs font-bold text-primary-dark uppercase tracking-wide">Course</div>
                              <div className="text-right">
                                 <span className="block font-extrabold text-slate-900 text-lg">${course.price}</span>
                                 <span className="text-xs font-bold text-teal-600">Free for members</span>
                              </div>
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-dark transition-colors">
                              {course.title}
                           </h3>
                           <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                              {course.desc}
                           </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-2">
                           <div className="flex items-center gap-2">
                              <Avatar size="sm" className="bg-slate-100 text-slate-500" />
                              <span className="text-xs font-bold text-slate-700">{course.instructor}</span>
                           </div>
                           <Button variant="outline" className="rounded-full text-xs px-4 h-8 border-slate-200">
                              Member Access <ArrowRight className="w-3 h-3 ml-1" />
                           </Button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Membership Section */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-slate-900 mb-4">Become an IAIP Member</h2>
               <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  Unlock free access to all IAIP courses, exclusive events, and our global community of practitioners.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
               {/* Learner */}
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     <h3 className="text-2xl font-bold mb-2">Learner Membership</h3>
                     <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-5xl font-extrabold tracking-tight">$199</span>
                        <span className="text-slate-400 font-bold">/year</span>
                     </div>
                     
                     <p className="text-slate-300 mb-8 text-sm h-10">
                        Suitable for students, early learners, and anyone preparing for certification.
                     </p>

                     <ul className="space-y-4 mb-10 flex-grow">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-200">
                           <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                           Access to member webinars & learning sessions
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-200">
                           <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                           Discounts on events and conference tickets
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-200">
                           <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                           Early access to selected resources
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-200">
                           <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                           Supportive community
                        </li>
                     </ul>

                     <Button fullWidth className="bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold">
                        Become a Learner Member
                     </Button>
                  </div>
               </div>

               {/* Practitioner */}
               <div className="bg-gradient-to-br from-[#5e608a] to-[#424469] rounded-[2.5rem] p-10 text-white shadow-2xl flex flex-col relative overflow-hidden group transform lg:-translate-y-4 border border-white/10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold mb-2">Practitioner Membership</h3>
                        <Badge className="bg-teal-500 text-white border-0">Recommended</Badge>
                     </div>
                     <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-5xl font-extrabold tracking-tight">$299</span>
                        <span className="text-slate-300 font-bold">/year</span>
                     </div>
                     
                     <p className="text-indigo-100 mb-8 text-sm h-10">
                        Designed for certified practitioners who want to stay aligned, connected, & visible.
                     </p>

                     <ul className="space-y-4 mb-10 flex-grow">
                        <li className="flex items-start gap-3 text-sm font-medium text-indigo-50">
                           <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                           Access to practitioner-only events & case discussions
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-indigo-50">
                           <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                           CPD tracker and renewal reminders
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-indigo-50">
                           <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                           Optional public practitioner directory profile
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-indigo-50">
                           <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                           Event and conference discounts
                        </li>
                     </ul>

                     <Button fullWidth className="bg-teal-500 text-white hover:bg-teal-400 rounded-xl font-bold shadow-lg shadow-teal-500/30">
                        Become a Practitioner Member
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Practitioner CTA */}
      <section className="bg-slate-50 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left shadow-soft">
               <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                     Are you a practitioner looking to get certified by IAIP?
                  </h2>
                  <p className="text-lg text-slate-600">
                     Our learning pathways guide you through a structured sequence of courses based on your goals—whether you're building foundational knowledge, developing clinical skills, or pursuing research.
                  </p>
               </div>
               <Button className="bg-[#51537a] hover:bg-[#3d3f5e] text-white px-8 py-4 h-auto rounded-xl text-base flex-shrink-0">
                  View IP Certification Pathway
               </Button>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
           
           <div className="divide-y divide-slate-100">
             {faqs.map((faq, i) => {
               const isOpen = openFaq === i;
               return (
                 <div key={i} className="py-2">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                    >
                       <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                         {faq.question}
                       </span>
                       <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-dark text-white rotate-45' : 'bg-slate-100 text-slate-400'}`}>
                          <Plus className="w-5 h-5" />
                       </div>
                    </button>
                    {isOpen && (
                      <div className="pb-8 text-slate-500 leading-relaxed pr-12 animate-in fade-in slide-in-from-top-1">
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
