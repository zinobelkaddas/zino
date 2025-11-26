
import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { Play, Calendar, MapPin, ArrowRight, Check, Star, Clock, User, Shield, Sparkles } from 'lucide-react';

export const VisualRevamp: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-dark/20 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary-light/10 blur-3xl rounded-full -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Badge className="bg-white/10 text-teal-300 border border-teal-500/30 mb-6 backdrop-blur-md">UI Component Revamp</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
               World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Design System</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
               A collection of polished, high-fidelity components rebuilt from scratch to meet premium visual standards.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-24">
         
         {/* 1. Membership Card Redesign */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">01. Premium Membership Card</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-700">Design Intent</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Moved away from flat colors to a deep, authoritative gradient. Added glassmorphism borders (`border-white/10`) and subtle glow effects to create depth. The typography uses a distinct hierarchy with a massive price point to anchor the visual.
                  </p>
               </div>

               {/* COMPONENT START */}
               <div className="flex justify-center">
                  <div className="relative group w-full max-w-md">
                     <div className="absolute inset-0 bg-teal-500/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>
                     <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[2.5rem] p-1 border border-slate-700/50 shadow-2xl">
                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.3rem] p-8 md:p-10 h-full overflow-hidden relative">
                           
                           {/* Decorative rings */}
                           <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full"></div>
                           <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full scale-75"></div>

                           <div className="relative z-10">
                              <div className="flex justify-between items-start mb-2">
                                 <div className="bg-teal-500/10 border border-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                 </div>
                                 <Shield className="text-teal-500 w-6 h-6" />
                              </div>
                              
                              <h3 className="text-2xl font-bold text-white mb-1">Practitioner</h3>
                              <p className="text-slate-400 text-sm mb-8">Full access for licensed professionals.</p>

                              <div className="flex items-baseline gap-1 mb-8">
                                 <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">$299</span>
                                 <span className="text-slate-400 font-medium">/year</span>
                              </div>

                              <div className="space-y-4 mb-10">
                                 {[
                                    "Global Directory Listing",
                                    "Unlimited CPD Access",
                                    "Peer Supervision Circles",
                                    "20% Event Discounts"
                                 ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 group/item">
                                       <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover/item:bg-teal-500 group-hover/item:text-slate-900 transition-colors">
                                          <Check size={10} strokeWidth={4} />
                                       </div>
                                       <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">{feat}</span>
                                    </div>
                                 ))}
                              </div>

                              <button className="w-full py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-teal-50 transition-colors shadow-lg shadow-white/5 flex items-center justify-center gap-2 group/btn">
                                 Become a Member <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* COMPONENT END */}
            </div>
         </section>

         {/* 2. Video/Media Card Redesign */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">02. Cinematic Media Card</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* COMPONENT START */}
               <div className="w-full relative group cursor-pointer">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-slate-900">
                     <img 
                        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                     />
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                         <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-teal">
                             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                                <Play className="w-6 h-6 text-slate-900 fill-slate-900" />
                             </div>
                         </div>
                         
                         <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <Badge className="bg-teal-500 text-white border-none mb-2">New Release</Badge>
                            <h3 className="text-2xl font-bold text-white mb-1">The Psychology of the Heart</h3>
                            <p className="text-slate-300 text-sm">Dr. Abdallah Mohammed • 12 mins</p>
                         </div>
                     </div>
                  </div>
               </div>
               {/* COMPONENT END */}

               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-700">Design Intent</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Created a "Cinematic" feel using a dark overlay that lightens on hover. The Play button is now a frosted glass element. Metadata reveals itself on hover using a subtle slide-up animation to keep the resting state clean and iconic.
                  </p>
               </div>
            </div>
         </section>

         {/* 3. Event Card Redesign */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">03. Modern Event Ticket</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-700">Design Intent</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Structured like a physical ticket or pass. The date is broken out into a bold graphical element for quick scanning. The layout is strictly grid-aligned with high-contrast typography to ensure legibility.
                  </p>
               </div>

               {/* COMPONENT START */}
               <div className="bg-white rounded-[2rem] p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 border border-slate-100 group flex flex-col sm:flex-row gap-6 items-stretch">
                   {/* Date Block */}
                   <div className="flex-shrink-0 w-full sm:w-24 bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-4 border border-slate-100 group-hover:border-teal-200 group-hover:bg-teal-50 transition-colors">
                      <span className="text-sm font-bold text-slate-400 group-hover:text-teal-600 uppercase">Aug</span>
                      <span className="text-4xl font-extrabold text-slate-900 my-1">12</span>
                      <span className="text-sm font-medium text-slate-400">2025</span>
                   </div>

                   <div className="flex-grow flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                         <Badge variant="accent" className="bg-amber-100 text-amber-700 border-amber-200">Webinar</Badge>
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                            <Clock size={12} /> 2:00 PM EST
                         </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-teal-700 transition-colors">
                         Integrating Spirituality in Clinical Practice
                      </h3>
                      
                      <div className="flex items-center gap-4 mt-auto pt-2">
                         <div className="flex -space-x-2">
                            <Avatar size="sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" className="border-2 border-white" />
                            <Avatar size="sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" className="border-2 border-white" />
                         </div>
                         <span className="text-sm text-slate-500 font-medium">+ 120 attending</span>
                      </div>
                   </div>

                   <div className="flex-shrink-0 flex items-center">
                      <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                         <ArrowRight size={20} />
                      </button>
                   </div>
               </div>
               {/* COMPONENT END */}
            </div>
         </section>

         {/* 4. Course Card Redesign */}
         <section>
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">04. Immersive Course Card</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* COMPONENT START */}
               <div className="bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 border border-slate-100 group max-w-sm mx-auto w-full">
                  <div className="relative h-64 overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" 
                        alt="Course" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                     
                     <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-slate-900 backdrop-blur-md font-bold shadow-sm">Bestseller</Badge>
                     </div>

                     <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                           <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" className="border border-white/50" />
                           <span className="text-sm font-medium text-slate-100">Prof. A. Mohammed</span>
                        </div>
                        <h3 className="text-xl font-bold leading-tight mb-2">Foundations of Islamic Psychology</h3>
                        
                        <div className="flex items-center gap-1 text-amber-400">
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" />
                           <Star size={14} fill="currentColor" className="text-amber-400/30" />
                           <span className="text-xs text-slate-300 ml-1 font-medium">(4.8)</span>
                        </div>
                     </div>
                  </div>

                  <div className="p-6">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Course Fee</span>
                           <span className="text-2xl font-bold text-slate-900">$199</span>
                        </div>
                        <div className="text-right">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Duration</span>
                           <span className="text-sm font-bold text-slate-700 block">12 Weeks</span>
                        </div>
                     </div>

                     <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-teal-600 hover:text-white transition-all flex justify-between items-center px-6 group/btn">
                        <span>Enroll Now</span>
                        <ArrowRight size={18} className="text-slate-300 group-hover/btn:text-white transition-colors" />
                     </button>
                  </div>
               </div>
               {/* COMPONENT END */}

               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-700">Design Intent</h3>
                  <p className="text-slate-600 leading-relaxed">
                     Maximized the visual impact by extending the image area and overlaying metadata. The "Enroll" action is distinct and separated from the content. The card uses a subtle "lift" animation on hover to invite interaction.
                  </p>
               </div>
            </div>
         </section>

         {/* 5. Newsletter Block */}
         <section className="pb-20">
            <div className="flex items-end gap-4 mb-8">
               <h2 className="text-2xl font-bold text-slate-900">05. Newsletter CTA</h2>
               <div className="h-px bg-slate-200 flex-grow mb-2"></div>
            </div>
            
            {/* COMPONENT START */}
            <div className="w-full bg-slate-900 rounded-[2.5rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               
               <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                     <Badge className="bg-teal-900/50 text-teal-300 border border-teal-500/30 mb-6">Stay Updated</Badge>
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        Join our global community of <span className="text-teal-400">scholars & practitioners.</span>
                     </h2>
                     <p className="text-slate-400 text-lg">
                        Get the latest research, event updates, and resources delivered to your inbox weekly.
                     </p>
                  </div>

                  <div className="lg:w-1/2 w-full">
                     <form className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row gap-2">
                        <input 
                           type="email" 
                           placeholder="Enter your email address" 
                           className="flex-grow bg-transparent border-none text-white placeholder-slate-500 px-6 py-4 focus:ring-0 outline-none text-lg"
                        />
                        <button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-teal-500/20 whitespace-nowrap">
                           Subscribe
                        </button>
                     </form>
                     <p className="text-slate-500 text-sm mt-4 text-center sm:text-left px-2">
                        We care about your data in our <a href="#" className="text-teal-400 hover:underline">privacy policy</a>.
                     </p>
                  </div>
               </div>
            </div>
            {/* COMPONENT END */}
         </section>

      </div>
    </div>
  );
};
