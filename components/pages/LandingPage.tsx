
import React from 'react';
import { HeroLanding } from '../sections/HeroLanding';
import { ArrowRight, Calendar, MapPin, User, FileText, Play, MoveRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CircularProgress } from '../ui/CircularProgress';
import { Avatar } from '../ui/Avatar';

// Assets placeholders to match "gray" placeholders in wireframe
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80";

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* 1. Hero & Stats (Integrated in HeroLanding) */}
      <HeroLanding />

      {/* 2. CTA Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: "shield-check", 
              title: "Contribute to IAIP", 
              desc: "Share your insights, case experience, or research to help advance Islamic Psychology.",
              action: "Submit your contribution",
              primary: false
            },
            { 
              icon: "award", 
              title: "IP Code of Ethics", 
              desc: "The ethical foundation that protects clients and guides responsible practice.",
              action: "View",
              primary: false
            },
            { 
              icon: "book", 
              title: "Guidelines for Practice", 
              desc: "Practical guidance to help you apply Islamic Psychology safely and effectively.",
              action: "View",
              primary: false
            },
            { 
              icon: "graduation-cap", 
              title: "CPD Process", 
              desc: "A simple path to maintain competence through ongoing learning and growth.",
              action: "View",
              primary: false
            },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary-bg transition-colors">
                 {/* Lucide Icons mapped manually for cleaner code in map */}
                 {i === 0 && <FileText className="w-7 h-7 text-primary-dark" />}
                 {i === 1 && <div className="w-7 h-7 text-primary-dark flex items-center justify-center font-bold border-2 border-primary-dark rounded-full text-xs">IP</div>} 
                 {i === 2 && <div className="w-7 h-7 text-primary-dark flex items-center justify-center"><div className="w-5 h-5 border-2 border-primary-dark rounded-sm"></div></div>}
                 {i === 3 && <div className="w-7 h-7 text-primary-dark"><div className="w-6 h-4 border-2 border-primary-dark rounded-sm mt-1 mx-auto"></div></div>}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed px-2">
                {card.desc}
              </p>
              
              <div className={`w-full py-3 px-4 rounded-full border flex items-center justify-center gap-2 text-sm font-bold transition-all cursor-pointer ${card.primary ? 'bg-primary-dark text-white border-primary-dark' : 'bg-white border-slate-200 text-slate-600 hover:border-primary-dark hover:text-primary-dark'}`}>
                {card.action} <MoveRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Continue Learning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Continue learning</h2>
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft flex flex-col md:flex-row items-center gap-6">
           {/* Image Placeholder */}
           <div className="w-full md:w-48 h-48 md:h-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
              </div>
           </div>
           
           <div className="flex-grow text-center md:text-left">
              <Badge variant="secondary" className="mb-2">IAIP Course</Badge>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Intro Islamic Psychology</h3>
              <p className="text-slate-500 font-medium">by Senior..</p>
           </div>

           <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-slate-100 pt-6 md:pt-0">
              <div className="flex items-center gap-4">
                 <CircularProgress progress={50} size={42} strokeWidth={3} />
                 <span className="text-sm font-bold text-slate-500">50% progress</span>
              </div>
              <Button variant="outline" className="rounded-full">
                 Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
           </div>
        </div>
      </section>

      {/* 4. Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Upcoming Events</h2>
          <Button variant="white" className="rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 font-bold px-6">See all Events <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col h-full hover:bg-slate-100 transition-colors cursor-pointer group">
             <div className="w-full aspect-[2/1] bg-slate-200 rounded-2xl mb-8 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                </div>
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-dark transition-colors">
               The Role of Tazkiyah in Contemporary Practice
             </h3>
             <p className="text-slate-600 mb-8 leading-relaxed">
               Exploring how classical Islamic spiritual purification frameworks inform modern therapeutic approaches.
             </p>
             
             <div className="mt-auto flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-wide">
                <div className="flex items-center gap-2"><Calendar size={14} /> Dec 20, 2025</div>
                <div className="flex items-center gap-2"><User size={14} /> First Last Name</div>
                <div className="flex items-center gap-2"><MapPin size={14} /> Online/On-site</div>
             </div>
          </div>

          {/* Event List */}
          <div className="flex flex-col gap-6">
            {[1, 2].map((_, i) => (
               <div key={i} className="bg-slate-50 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="w-full sm:w-40 h-32 bg-slate-200 rounded-xl flex-shrink-0 flex items-center justify-center text-slate-300">
                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  </div>
                  <div className="flex flex-col justify-center">
                     <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> Aug 8, 2025</span>
                        <span className="flex items-center gap-1"><User size={12} /> First Last Name</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> Location</span>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-dark transition-colors">
                        Building Ethical Practice in Diverse Communities
                     </h3>
                     <p className="text-sm text-slate-600 line-clamp-2">
                        Practitioners share insights on navigating cultural contexts while maintaining professional standards.
                     </p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent Publications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Recent Publications</h2>
          <Button variant="white" className="rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 font-bold px-6">See all Publications <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
             { type: "Article", title: "Article name goes here" },
             { type: "Book", title: "Book name goes here" },
             { type: "Article", title: "Article name goes here" },
             { type: "Article", title: "Article name goes here" },
          ].map((pub, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-slate-50 border border-slate-100 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-soft transition-all">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                    </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary-dark transition-colors">{pub.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                   Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit...
                </p>
             </div>
          ))}
          
          {/* Mobile view 'See more' circle arrow is handled by the top button in this improved layout */}
        </div>
      </section>

      {/* 6. Speak at Event / Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Speak Panel */}
            <div className="bg-slate-100/50 rounded-3xl p-10 lg:p-12">
               <h2 className="text-3xl font-bold text-slate-800 mb-6">Speak at an IAIP Event</h2>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  IAIP welcomes proposals from researchers, practitioners, and educators who wish to share their work with our global community.
               </p>
               
               <div className="mb-10">
                  <p className="font-bold text-slate-800 mb-3">We accept submissions for:</p>
                  <ul className="space-y-2 text-slate-600">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Conference presentations and panel discussions</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Webinar topics and workshops</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Keynote addresses and special sessions</li>
                  </ul>
               </div>

               <div className="flex flex-wrap gap-4">
                  <Button className="bg-slate-600 hover:bg-slate-700 text-white rounded-full px-8 py-3 h-auto">Submit now</Button>
                  <Button variant="white" className="rounded-full border border-slate-300 px-8 py-3 h-auto">View IAIP Standards</Button>
               </div>
            </div>

            {/* Guidelines Panel */}
            <div className="bg-slate-50 rounded-3xl p-10 lg:p-12">
               <h2 className="text-3xl font-bold text-slate-800 mb-10">Submission Guidelines</h2>
               <div className="space-y-8">
                  {[
                     { step: 1, title: "Review our criteria", desc: "Ensure your topic aligns with IAIP's mission and standards" },
                     { step: 2, title: "Prepare your materials", desc: "Title, abstract, bio, and relevant credentials" },
                     { step: 3, title: "Submit online", desc: "Proposals reviewed within 4-6 weeks" }
                  ].map((item) => (
                     <div key={item.step} className="flex gap-5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center font-bold text-sm">
                           {item.step}
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                           <p className="text-slate-500">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. Leading Voices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="flex justify-between items-end mb-10">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Learn from the Field's Leading Voices</h2>
               <p className="text-lg text-slate-500 max-w-2xl">
                  Take self-paced courses with IAIP Senior Fellows shaping the future of Islamic Psychology.
               </p>
            </div>
            <Button variant="white" className="rounded-full border border-slate-200 font-bold px-6 hidden sm:flex">Check All IAIP Courses <ArrowRight className="w-4 h-4 ml-2" /></Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, i) => (
               <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-xl transition-all duration-300 group">
                  <div className="h-64 bg-slate-100 w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                      </div>
                  </div>
                  <div className="p-8">
                     <h3 className="text-2xl font-bold text-slate-900 mb-2">Intro Islamic Psychology</h3>
                     <p className="text-slate-500 mb-6 leading-relaxed">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                     
                     <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                           <Avatar size="md" className="bg-slate-200" />
                           <span className="text-sm font-bold text-slate-500">Senior Fellow <ArrowRight className="w-3 h-3 inline ml-1" /></span>
                        </div>
                        <Button variant="white" className="rounded-full border border-slate-200 font-bold text-sm">Go to Course <ArrowRight className="w-4 h-4 ml-1" /></Button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 8. What is Islamic Psychology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
         <div className="flex justify-between items-center mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What is Islamic Psychology?</h2>
             <Button variant="white" className="rounded-full border border-slate-200 font-bold hidden md:flex">Learn More About Islamic Psychology <ArrowRight className="w-4 h-4 ml-2" /></Button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
               <p className="text-xl leading-relaxed text-slate-600 font-medium">
                  A holistic understanding of the human being that is grounded in the knowledge of the soul from the Islamic tradition and focuses on the heart as the center of the self rather than the mind.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                     </div>
                     <p className="font-bold text-slate-800">It honors the heart, the mind, and the spirit.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                     </div>
                     <p className="font-bold text-slate-800">It recognizes human complexity and refuses to reduce us to symptoms alone.</p>
                  </div>
               </div>
               
               <div className="pt-4">
                 <span className="text-slate-400 text-lg">Intro to Islamic Psychology</span>
               </div>
            </div>

            <div className="relative aspect-video bg-slate-50 rounded-3xl overflow-hidden shadow-soft flex items-center justify-center group cursor-pointer">
                {/* Clean placeholder */}
                <div className="absolute inset-0 bg-slate-50"></div>
                <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg pl-1">
                        <Play className="w-6 h-6 text-slate-900 fill-slate-900" />
                    </div>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};
