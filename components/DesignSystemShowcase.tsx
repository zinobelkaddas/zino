import React from 'react';
import { Input } from './ui/Input';
import { InputState } from '../types';
import { Calendar, ChevronDown } from 'lucide-react';
import { Avatar } from './ui/Avatar';
import { Rating } from './ui/Rating';
import { ProgressBar } from './ui/ProgressBar';

export const DesignSystemShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Design System Elements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Inputs Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Input Fields</h3>
            <div className="space-y-6 max-w-md">
              <Input label="Textfield/Default" placeholder="Textfield text" />
              <Input label="Textfield/Active" state={InputState.ACTIVE} defaultValue="Textfield text" />
              <Input label="Textfield/Valid" state={InputState.VALID} defaultValue="Textfield text" />
              <Input label="Textfield/Error" state={InputState.ERROR} defaultValue="Textfield text" />
              <Input label="Textfield/Disabled" disabled defaultValue="Textfield text" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="relative">
                    <label className="text-sm font-bold text-slate-800 ml-1 mb-1.5 block">Dropdown/Default</label>
                    <div className="relative">
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 outline-none appearance-none bg-white">
                            <option>Choose an option</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                    </div>
                 </div>
                 <Input label="Calendar/Default" placeholder="Choose a date" icon={<Calendar className="w-5 h-5" />} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-8">Data Display</h3>
            <div className="space-y-6">
                <div className="flex items-center gap-6">
                    <Avatar size="lg" initials="JS" />
                    <Avatar size="md" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" />
                    <Avatar size="sm" initials="AB" />
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-2">Ratings</h4>
                    <Rating rating={3.5} count={40} showCount />
                    <Rating rating={5} />
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-2">Progress</h4>
                    <ProgressBar progress={65} label="Course Completion" showValue />
                </div>
            </div>
          </div>

          {/* Typography Section */}
          <div>
             <h3 className="text-2xl font-bold mb-8">Typography</h3>
             <div className="space-y-6">
                <div className="grid grid-cols-3 items-baseline border-b border-slate-100 pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Display 1</span>
                    <span className="text-6xl font-bold text-slate-900 col-span-2">Display 1</span>
                </div>
                <div className="grid grid-cols-3 items-baseline border-b border-slate-100 pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Display 2</span>
                    <span className="text-5xl font-bold text-slate-900 col-span-2">Display 2</span>
                </div>
                <div className="grid grid-cols-3 items-baseline border-b border-slate-100 pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Headline L</span>
                    <span className="text-3xl font-bold text-slate-900 col-span-2">HeadlineL</span>
                </div>
                <div className="grid grid-cols-3 items-baseline border-b border-slate-100 pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Title</span>
                    <span className="text-xl font-medium text-slate-900 col-span-2">Title Medium</span>
                </div>
                <div className="grid grid-cols-3 items-baseline border-b border-slate-100 pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Body L</span>
                    <span className="text-lg text-slate-700 col-span-2">Body Large Regular text for content blocks.</span>
                </div>
                <div className="grid grid-cols-3 items-baseline pb-4">
                    <span className="text-xs text-slate-400 col-span-1">Link Text (L)</span>
                    <a href="#" className="text-lg font-bold text-primary-dark underline decoration-2 col-span-2">Link Text Large</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
