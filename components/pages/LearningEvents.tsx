
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Accordion } from '../ui/Accordion';
import { Calendar, MapPin, User, Clock, ArrowRight, Check, CheckCircle2, Mic, FileText, Plus, X, Search, Filter } from 'lucide-react';

interface LearningEvent {
  id: number;
  type: string;
  title: string;
  desc: string;
  date: { day: string; month: string; year: string };
  time?: string;
  speaker: string;
  role?: string;
  location: string;
  access?: string;
  image: string;
}

export const LearningEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const upcomingEvents: LearningEvent[] = [
    {
      id: 1,
      type: "Webinar",
      title: "Building Ethical Practice in Diverse Communities",
      desc: "Practitioners share insights on navigating cultural contexts while maintaining professional standards.",
      date: { day: "12", month: "Feb", year: "2026" },
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Ahmed",
      role: "Senior Fellow",
      location: "Online",
      access: "Members Only",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      type: "Workshop",
      title: "The Role of Tazkiyah in Contemporary Practice",
      desc: "Exploring how classical Islamic spiritual purification frameworks inform modern therapeutic approaches.",
      date: { day: "20", month: "Feb", year: "2026" },
      time: "10:00 AM EST",
      speaker: "Prof. Abdallah Mohammed",
      role: "Clinical Director",
      location: "Online / London",
      access: "Public",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      type: "Webinar",
      title: "Trauma-Informed Care: Islamic Perspectives",
      desc: "Integrating spiritual healing practices with evidence-based trauma interventions for clinical settings.",
      date: { day: "05", month: "Mar", year: "2026" },
      time: "1:00 PM EST",
      speaker: "Ustadha Amina",
      role: "Psychotherapist",
      location: "Online",
      access: "Members Only",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
    }
  ];

  const pastEvents: LearningEvent[] = [
    {
      id: 4,
      type: "Conference",
      title: "Annual IAIP Global Conference 2025",
      desc: "Keynote speeches and panels from leading voices in the field.",
      date: { day: "10", month: "Nov", year: "2025" },
      speaker: "Multiple Speakers",
      location: "Istanbul",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      type: "Webinar",
      title: "Introduction to Islamic Psychology",
      desc: "A foundational overview for students and new practitioners.",
      date: { day: "15", month: "Oct", year: "2025" },
      speaker: "Dr. Omar Farooq",
      location: "Online",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
    }
  ];

  const faqs = [
    {
      question: "Do I need to be a member to attend events?",
      answer: "Some events are open to the public, while others are exclusive to members. Check the event details for access information."
    },
    {
      question: "Are webinars recorded?",
      answer: "Yes, all member-exclusive webinars are recorded and available in the Member Portal library within 48 hours."
    },
    {
      question: "Can I get CPD credits?",
      answer: "Yes, you receive a certificate of attendance for all workshops and conferences which can be used for your CPD requirements."
    },
    {
      question: "How do I propose a topic?",
      answer: "We welcome proposals! Please review the submission guidelines section below and send us your abstract."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="bg-white pt-12 pb-20 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-bg/50 skew-x-12 translate-x-32 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                 <Badge variant="accent" className="mb-4">Learning Hub</Badge>
                 <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Upcoming <span className="text-primary-dark">Events & Webinars</span>
                 </h1>
                 <p className="text-xl text-slate-600 leading-relaxed">
                    Join expert-led sessions designed to deepen your understanding of Islamic Psychology and clinical practice.
                 </p>
              </div>
              
              {/* Search / Filter Actions */}
              <div className="flex gap-3">
                 <Button variant="white" className="border border-slate-200 text-slate-600">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                 </Button>
                 <Button variant="white" className="border border-slate-200 text-slate-600">
                    <Search className="w-4 h-4 mr-2" /> Search
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
         
         {/* Tabs */}
         <div className="flex items-center gap-8 mb-10 border-b border-slate-200">
            <button 
                onClick={() => setActiveTab('upcoming')}
                className={`pb-4 text-lg font-bold transition-all relative ${activeTab === 'upcoming' ? 'text-primary-dark' : 'text-slate-400 hover:text-slate-600'}`}
            >
                Upcoming Events
                {activeTab === 'upcoming' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-dark rounded-t-full"></span>}
            </button>
            <button 
                onClick={() => setActiveTab('past')}
                className={`pb-4 text-lg font-bold transition-all relative ${activeTab === 'past' ? 'text-primary-dark' : 'text-slate-400 hover:text-slate-600'}`}
            >
                Past Events
                {activeTab === 'past' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-dark rounded-t-full"></span>}
            </button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
               <div key={event.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col h-full">
                  
                  {/* Card Image */}
                  <div className="h-56 relative overflow-hidden bg-slate-100">
                     <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                     
                     {/* Floating Date Badge */}
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center min-w-[4rem] shadow-lg">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{event.date.month}</span>
                        <span className="block text-2xl font-extrabold text-slate-900 leading-none">{event.date.day}</span>
                     </div>

                     {/* Type Badge */}
                     <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30">{event.type}</Badge>
                     </div>

                     {/* Content Overlay */}
                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-slate-200">
                           {event.time && (
                             <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                                <Clock size={12} /> {event.time}
                             </span>
                           )}
                           <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                              <MapPin size={12} /> {event.location}
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary-dark transition-colors">
                        {event.title}
                     </h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                        {event.desc}
                     </p>

                     <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <Avatar size="sm" initials="SP" className="bg-slate-100 text-slate-500" />
                           <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-900">{event.speaker}</span>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{event.role || 'Speaker'}</span>
                           </div>
                        </div>
                     </div>

                     <div className="mt-6">
                        {event.access === 'Members Only' ? (
                            <Button fullWidth className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg shadow-teal-200">
                                Member Registration
                            </Button>
                        ) : (
                            <Button fullWidth variant="outline" className="rounded-xl border-slate-200 hover:border-primary-dark hover:text-primary-dark">
                                Register Now
                            </Button>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-primary-dark transition-colors group">
                Load more events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>

      {/* Membership Section */}
      <section className="bg-slate-100 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Become an IAIP Member</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                 Choose the plan that fits your professional journey. Gain access to exclusive events, resources, and our global community.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
              
              {/* Learner Card */}
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-soft h-full flex flex-col">
                 <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Learner Membership</h3>
                    <p className="text-slate-500 text-sm">Suitable for students and early learners.</p>
                 </div>
                 <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">$199</span>
                    <span className="text-slate-400 font-bold">/year</span>
                 </div>
                 
                 <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Access to member webinars",
                        "Discounts on event tickets",
                        "Early access to resources",
                        "Supportive community"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-slate-300 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                 </ul>
                 <Button fullWidth variant="outline" size="lg" className="rounded-2xl border-2 border-slate-100 hover:border-primary-dark hover:text-primary-dark">
                    Become a Learner Member
                 </Button>
              </div>

              {/* Practitioner Card - Premium */}
              <div className="relative transform lg:scale-105 z-10">
                 <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-[3rem] -z-10"></div>
                 <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[2.5rem] p-1 shadow-2xl">
                    <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.3rem] p-10 h-full relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        
                        <div className="mb-8 relative z-10">
                            <Badge className="bg-teal-500 text-white border-0 mb-4">Most Popular</Badge>
                            <h3 className="text-2xl font-bold text-white mb-2">Practitioner Membership</h3>
                            <p className="text-slate-400 text-sm">For certified professionals.</p>
                        </div>
                        
                        <div className="flex items-baseline gap-1 mb-8 relative z-10">
                            <span className="text-6xl font-extrabold text-white tracking-tight">$299</span>
                            <span className="text-slate-400 font-bold">/year</span>
                        </div>

                        <ul className="space-y-4 mb-10 relative z-10">
                            {[
                                "Access to practitioner-only events",
                                "CPD tracker and renewal reminders",
                                "Optional public directory profile",
                                "Event and conference discounts"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-indigo-50 font-medium">
                                    <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-slate-900 flex-shrink-0">
                                        <Check size={10} strokeWidth={4} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button fullWidth size="lg" className="rounded-2xl bg-white text-slate-900 font-bold hover:bg-teal-50 shadow-lg relative z-10">
                            Become a Practitioner Member
                        </Button>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Submission Guidelines & Speak CTA */}
      <section className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
               
               {/* Left: Speak at IAIP (Dark Feature) */}
               <div className="bg-[#1e293b] rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-teal-400 mb-8 border border-white/10">
                        <Mic size={32} />
                     </div>
                     <h2 className="text-4xl font-extrabold text-white mb-6">Speak at an IAIP Event</h2>
                     <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        We welcome proposals from researchers, practitioners, and educators who wish to share their work with our global community.
                     </p>
                     
                     <div className="space-y-3 mb-10">
                        <div className="flex items-center gap-3 text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                           Conference presentations
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                           Webinar topics and workshops
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                           Special sessions
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 relative z-10">
                     <Button className="bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-xl px-8 font-bold">Submit Proposal</Button>
                     <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl px-8">Standards</Button>
                  </div>
               </div>

               {/* Right: Guidelines (Light) */}
               <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 flex flex-col justify-center">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Submission Guidelines</h2>
                  <div className="space-y-10">
                     {[
                        { step: 1, title: "Review our criteria", desc: "Ensure your topic aligns with IAIP's mission and standards." },
                        { step: 2, title: "Prepare your materials", desc: "Have your title, abstract, bio, and relevant credentials ready." },
                        { step: 3, title: "Submit online", desc: "Proposals are reviewed within 4-6 weeks by our committee." }
                     ].map((item) => (
                        <div key={item.step} className="flex gap-6 group">
                           <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-400 font-bold text-lg flex items-center justify-center shadow-sm group-hover:border-primary-dark group-hover:text-primary-dark group-hover:bg-primary-bg transition-all duration-300">
                              {item.step}
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600 leading-relaxed">
                                 {item.desc}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 border-t border-slate-100">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="divide-y divide-slate-100">
               {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                     <div key={i} className="py-2">
                        <button 
                           onClick={() => setOpenFaq(isOpen ? null : i)}
                           className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                        >
                           <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-dark' : 'text-slate-800 group-hover:text-primary-dark'}`}>
                              {faq.question}
                           </span>
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary-dark text-white rotate-45' : 'bg-slate-50 text-slate-400 group-hover:bg-primary-bg group-hover:text-primary-dark'}`}>
                              <Plus className="w-5 h-5" />
                           </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                           <p className="pb-8 text-slate-600 leading-relaxed pr-8">
                              {faq.answer}
                           </p>
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
