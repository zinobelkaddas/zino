
import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Award, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Globe, BookOpen, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PractitionerProfile: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-slate-900">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-400 font-medium uppercase tracking-wider">
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Home</span> 
          <span className="mx-2">&gt;</span> 
          <span className="hover:text-primary-dark cursor-pointer transition-colors">Find a Practitioner</span> 
          <span className="mx-2">&gt;</span> 
          <span className="text-slate-900 font-bold">Dr. Sarah Ahmed</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl shadow-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Dr. Sarah Ahmed" 
                className="w-full h-full object-cover"
              />
              
              {/* IAIP Seal */}
              <div className="absolute top-6 right-6">
                 <div className="w-16 h-16 rounded-full bg-[#3d3f66] text-white flex items-center justify-center shadow-lg border-2 border-white/20 backdrop-blur-md">
                    <div className="border border-white/40 rounded-full p-2">
                       <Award size={24} />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Dr. Sarah Ahmed
                </h1>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#8b5cf6] text-white px-4 py-1.5 text-sm font-bold border-0">IAIP Certified Practitioner</Badge>
                  <Badge variant="neutral" className="px-4 py-1.5 text-sm font-bold bg-slate-100 text-slate-600">Clinical Psychology</Badge>
                </div>
             </div>

             <div className="mb-10">
                <p className="text-xl text-slate-600 leading-relaxed font-medium mb-6">
                  Dr. Ahmed is an IAIP-Certified Practitioner specializing in trauma recovery and family systems. Their work centers on supporting clients through an approach that integrates Islamic ethical principles with evidence-based psychological care.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  They are committed to providing a safe, confidential, and culturally grounded service for individuals seeking healing and clarity. With over 15 years of clinical experience, Dr. Ahmed bridges the gap between traditional wisdom and modern therapeutic tools.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-t border-slate-100 pt-8">
                <div>
                   <h4 className="font-bold text-slate-900 mb-4 text-lg">Areas of Practice</h4>
                   <ul className="space-y-2 text-slate-600">
                      {[
                        "Islamic Psychotherapy",
                        "Spiritual-emotional wellbeing",
                        "Family and relationship support",
                        "Trauma-informed practice",
                        "Community mental health"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary-dark"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>

                <div>
                   <h4 className="font-bold text-slate-900 mb-4 text-lg">Contact</h4>
                   <ul className="space-y-4 text-slate-600">
                      <li className="flex items-center gap-3 font-medium">
                         <Phone className="w-5 h-5 text-slate-400" />
                         +1 (555) 123-4567
                      </li>
                      <li className="flex items-center gap-3 font-medium">
                         <Mail className="w-5 h-5 text-slate-400" />
                         sarah.ahmed@example.com
                      </li>
                      <li className="flex items-center gap-3 font-medium">
                         <Globe className="w-5 h-5 text-slate-400" />
                         www.drsarahahmed.com
                      </li>
                   </ul>
                   <div className="flex gap-3 mt-6">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-dark hover:text-white transition-all">
                           <Icon size={18} />
                        </a>
                      ))}
                   </div>
                </div>
             </div>
             
             <div className="flex gap-4">
               <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary-dark/10">Book a Consultation</Button>
             </div>
          </div>
        </div>

        {/* How I Work */}
        <div className="max-w-4xl mb-20">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">How I Work</h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-6">
             My approach is grounded in compassion, adab (etiquette), and a commitment to honoring your values and lived experience. I integrate Islamic perspectives on the heart, mind, and self with contemporary therapeutic tools. Sessions are collaborative, respectful, and focused on what is beneficial for you.
           </p>
           <p className="text-lg text-slate-600 leading-relaxed">
             I believe that true healing involves aligning the self with one's higher purpose and nature (Fitrah). Whether we are addressing specific clinical symptoms or broader existential questions, the goal is always to move towards a state of balance and inner peace.
           </p>
        </div>

        {/* Services & Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 border-t border-slate-100 pt-12">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Services Offered</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Individual sessions",
                    "Family or couples support",
                    "Psychoeducation",
                    "Faith-informed guidance",
                    "Referral and coordination",
                    "Group Workshops"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <CheckCircle2 className="w-5 h-5 text-primary-light" />
                       {service}
                    </div>
                  ))}
               </div>
            </div>

            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-8">Languages</h2>
               <div className="flex flex-wrap gap-3">
                  {["English", "Arabic", "French"].map((lang, i) => (
                     <Badge key={i} variant="outline" className="text-base px-5 py-2 font-medium bg-slate-50 text-slate-700 border-slate-200">
                        {lang}
                     </Badge>
                  ))}
               </div>

               <div className="mt-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Education & Training</h2>
                  <ul className="space-y-4">
                     <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900">PhD in Clinical Psychology</h4>
                        <p className="text-slate-500 text-sm">University of Cambridge, 2015</p>
                     </li>
                     <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900">IAIP Certified Practitioner</h4>
                        <p className="text-slate-500 text-sm">International Association of Islamic Psychology, 2018</p>
                     </li>
                     <li className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900">Diploma in Islamic Sciences</h4>
                        <p className="text-slate-500 text-sm">Al-Azhar University, 2012</p>
                     </li>
                  </ul>
               </div>
            </div>
        </div>

        {/* Publications */}
        <div className="border-t border-slate-100 pt-16 mb-20">
           <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Publications</h2>
              <Button variant="outline" className="rounded-full hidden sm:flex">View all Publications</Button>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                 { type: "Article", title: "The Role of Qalb in Therapy", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80" },
                 { type: "Book", title: "Islamic Psychology: A Guide", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" },
                 { type: "Article", title: "Trauma and Spirituality", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80" },
                 { type: "Research", title: "Clinical Outcomes in IP", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" },
              ].map((pub, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-slate-100 rounded-2xl mb-4 overflow-hidden relative border border-slate-100 group-hover:shadow-lg transition-all duration-300">
                        <img src={pub.image} alt={pub.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-3 left-3">
                           <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">{pub.type}</Badge>
                        </div>
                        {/* Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                              <ArrowRight className="w-5 h-5 text-primary-dark" />
                           </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2 leading-tight group-hover:text-primary-dark transition-colors">{pub.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                       A detailed exploration of how these concepts apply in modern clinical settings...
                    </p>
                 </div>
              ))}
           </div>
        </div>

      </div>

      {/* Shared Bottom CTA */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#51537a] rounded-[2.5rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="max-w-2xl relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    IAIP honors the dignity of the community it serves
                 </h2>
                 <p className="text-indigo-100 text-lg leading-relaxed">
                    Seeking support is an act of trust. IAIP-certified practitioners are required to uphold ethical conduct and Islamic values that protect your dignity and wellbeing.
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                 <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 h-auto text-base backdrop-blur-sm">
                    Read the IAIP Code of Ethics
                 </Button>
                 <Button className="bg-white text-[#51537a] hover:bg-indigo-50 px-8 py-4 h-auto text-base">
                    Contact IAIP
                 </Button>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
