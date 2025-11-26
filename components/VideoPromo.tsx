
import React from 'react';
import { Play, Heart, Brain, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface VideoPromoProps {
  variant?: 'dark' | 'light';
}

export const VideoPromo: React.FC<VideoPromoProps> = ({ variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-24 ${isDark ? 'bg-accent text-white' : 'bg-white text-slate-900'}`}>
      {isDark && (
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-4xl lg:text-5xl font-bold leading-tight">What is Islamic Psychology?</h2>
           {!isDark && (
             <Button variant="outline" className="rounded-full">Learn More About Islamic Psychology <ArrowRight className="w-4 h-4 ml-2" /></Button>
           )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <p className={`text-xl mb-10 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600 font-medium'}`}>
              A holistic understanding of the human being that is grounded in the knowledge of the soul from the Islamic tradition and focuses on the heart as the center of the self rather than the mind.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-slate-50'}`}>
                   <Heart className={`w-6 h-6 ${isDark ? 'text-teal-300' : 'text-slate-400'}`} />
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700 font-bold'}`}>
                  It honors the heart, the mind, and the spirit.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-slate-50'}`}>
                   <Brain className={`w-6 h-6 ${isDark ? 'text-teal-300' : 'text-slate-400'}`} />
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700 font-bold'}`}>
                  It recognizes human complexity and refuses to reduce us to symptoms alone.
                </p>
              </div>
            </div>

            {isDark && <Button variant="white" size="md">Learn More About IP</Button>}
          </div>

          <div className="relative mt-8 lg:mt-0">
             <div className={`aspect-video rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {/* Placeholder content for "light" mode to match wireframe simple look */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center pl-1 shadow-lg">
                        <Play className="w-6 h-6 text-slate-900 fill-slate-900" />
                      </div>
                   </div>
                   {!isDark && <span className="text-slate-400 font-medium">Intro to Islamic Psychology</span>}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
