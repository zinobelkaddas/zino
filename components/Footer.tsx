
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 pb-20 border-b border-slate-800">
           <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                 <div className="bg-white text-slate-900 font-serif font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                   IP
                 </div>
                 <div className="flex flex-col leading-none">
                    <span className="font-extrabold text-white text-lg tracking-wide">INTERNATIONAL ASSOCIATION</span>
                    <span className="text-slate-400 text-xs tracking-[0.2em] font-bold uppercase">Of Islamic Psychology</span>
                 </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                The global standards body defining, governing, and advancing the professional practice of Islamic Psychology worldwide.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 text-slate-400 hover:bg-primary-dark hover:text-white rounded-full transition-all duration-300">
                        <Icon size={18} />
                    </a>
                ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700/50">
                 <h3 className="text-2xl font-bold text-white mb-3">Join our Newsletter</h3>
                 <p className="text-slate-400 mb-8">Get the latest research, event updates, and resources delivered to your inbox.</p>
                 
                 <form className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-grow relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input 
                           type="email" 
                           placeholder="Enter your email address" 
                           className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <Button className="h-14 px-8 rounded-xl bg-primary-dark hover:bg-primary-light text-white font-bold shadow-lg shadow-primary-dark/20 whitespace-nowrap">
                       Subscribe
                    </Button>
                 </form>
              </div>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">About</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Who is IAIP</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">What is IP</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Leadership</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Senior Fellows</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Code of Ethics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Pathways</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Practitioner Acc.</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Program Acc.</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Renewal Process</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Find a Practitioner</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Learning</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Webinars</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Research Journal</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Online Courses</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Publications</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Blog & Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Complaints Process</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Donate</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2 hover:gap-3 duration-300">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800 text-sm text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} International Association of Islamic Psychology</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
