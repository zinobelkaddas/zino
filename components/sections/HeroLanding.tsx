
import React from 'react';
import { Play } from 'lucide-react';

export const HeroLanding: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-24">
             <div className="w-full lg:w-1/2">
                <h1 className="text-5xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                  The Global Standards Body for <span className="text-primary-dark">Islamic Psychology</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  IAIP defines, governs, and advances the professional standards of Islamic Psychology (IP) worldwide.
                </p>
             </div>

             <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-slate-50 flex items-center justify-center group cursor-pointer hover:bg-slate-100 transition-all duration-300 shadow-soft hover:shadow-glow">
                   <div className="absolute inset-0 rounded-full border border-slate-100"></div>
                   <Play className="w-10 h-10 sm:w-14 sm:h-14 text-slate-900 fill-slate-900 ml-2 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
             </div>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-slate-100 pt-12">
              {[
                { label: "Years of Governance", value: "8+" },
                { label: "Certified Practitioners", value: "30+" },
                { label: "Accredited Programs", value: "15" },
                { label: "Senior Fellows", value: "10+" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left relative">
                   {/* Separator dot for mobile, invisible on last item or desktop logic if needed */}
                   <span className="text-base font-bold text-slate-500 mb-1">{stat.value} {stat.label}</span>
                </div>
              ))}
          </div>
          <div className="flex justify-between w-full text-xs sm:text-sm font-bold text-slate-400 mt-2 px-1">
             <span className="hidden md:inline">•</span>
             <span className="hidden md:inline">•</span>
             <span className="hidden md:inline">•</span>
          </div>
       </div>
    </div>
  );
};
