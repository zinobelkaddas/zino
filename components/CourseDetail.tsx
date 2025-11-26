import React from 'react';
import { PlayCircle, FileText, Clock, Award, CheckCircle2, Share2, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Avatar } from './ui/Avatar';
import { Rating } from './ui/Rating';
import { ProgressBar } from './ui/ProgressBar';
import { Tabs } from './ui/Tabs';
import { Accordion } from './ui/Accordion';

export const CourseDetail: React.FC = () => {
  const curriculumItems = [
    {
      title: "Module 1: Foundations of the Self",
      meta: "4 Lessons • 45m",
      content: (
        <ul className="space-y-4">
          <li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-lg -mx-2 transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary-bg transition-colors">
                  <PlayCircle className="w-4 h-4 text-slate-500 group-hover:text-primary-dark" />
               </div>
               <span className="text-sm font-medium text-slate-700 group-hover:text-primary-dark">Introduction to the Fitrah</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">12:30</span>
          </li>
          <li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-lg -mx-2 transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary-bg transition-colors">
                  <PlayCircle className="w-4 h-4 text-slate-500 group-hover:text-primary-dark" />
               </div>
               <span className="text-sm font-medium text-slate-700 group-hover:text-primary-dark">The Heart (Qalb) and Intellect ('Aql)</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">15:45</span>
          </li>
           <li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-lg -mx-2 transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary-bg transition-colors">
                  <FileText className="w-4 h-4 text-slate-500 group-hover:text-primary-dark" />
               </div>
               <span className="text-sm font-medium text-slate-700 group-hover:text-primary-dark">Reading: Classical Perspectives</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">10 min</span>
          </li>
        </ul>
      )
    },
    {
      title: "Module 2: The Structure of the Soul",
      meta: "3 Lessons • 55m",
      content: (
         <ul className="space-y-4">
          <li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-lg -mx-2 transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary-bg transition-colors">
                  <PlayCircle className="w-4 h-4 text-slate-500 group-hover:text-primary-dark" />
               </div>
               <span className="text-sm font-medium text-slate-700 group-hover:text-primary-dark">Nafs: The Lower Self</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">20:10</span>
          </li>
          <li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-slate-50 rounded-lg -mx-2 transition-colors">
            <div className="flex items-center gap-3">
               <div className="bg-slate-100 p-2 rounded-full group-hover:bg-primary-bg transition-colors">
                  <PlayCircle className="w-4 h-4 text-slate-500 group-hover:text-primary-dark" />
               </div>
               <span className="text-sm font-medium text-slate-700 group-hover:text-primary-dark">Ruh: The Spirit Connection</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">18:20</span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header / Breadcrumb area */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
            <span className="hover:text-primary-dark cursor-pointer font-medium">Courses</span>
            <span className="text-slate-300">/</span>
            <span className="hover:text-primary-dark cursor-pointer font-medium">Foundations</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-bold">Islamic Psychology 101</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
                <Badge variant="primary" className="mb-4">Bestseller</Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    Islamic Psychology 101: Foundations and Principles
                </h1>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                    A comprehensive guide to understanding the human soul through the lens of Islamic tradition and modern psychology.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <Avatar size="sm" initials="AM" className="bg-indigo-100 text-indigo-700" />
                        <span className="font-bold text-slate-900">Prof. Abdallah Mohammed</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                    <Rating rating={4.8} count={1240} showCount size="sm" />
                    <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>Last updated June 2024</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-1 shadow-sm border border-slate-100 mb-8 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" 
                    alt="Course Preview" 
                    className="w-full h-64 md:h-[400px] object-cover rounded-xl"
                />
            </div>

            <Tabs 
                tabs={[
                    {
                        id: 'overview',
                        label: 'Overview',
                        content: (
                            <div className="space-y-8 py-2">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">About This Course</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        This course provides a comprehensive introduction to the field of Islamic Psychology. 
                                        We explore the historical roots, key concepts such as the Fitrah, Qalb, and Nafs, 
                                        and how these traditional understandings integrate with modern therapeutic practices.
                                        Perfect for students, counselors, and anyone interested in a soul-centered approach to mental health.
                                    </p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'Understand the tri-partite model of the self (Nafs, Qalb, Ruh)', 
                                            'History of mental health in Islamic civilization', 
                                            'Therapeutic techniques for soul-centered healing', 
                                            'Ethical considerations in faith-based practice',
                                            'Integrating clinical tools with spiritual wisdom',
                                            'Case studies of modern applications'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'curriculum',
                        label: 'Curriculum',
                        content: (
                            <div className="py-2">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold">Course Content</h3>
                                    <span className="text-sm font-bold text-slate-500">5 Sections • 24 Lectures • 12h 30m</span>
                                </div>
                                <Accordion items={curriculumItems} />
                            </div>
                        )
                    },
                    {
                        id: 'instructor',
                        label: 'Instructor',
                        content: (
                            <div className="py-2">
                                <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                                    <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" className="flex-shrink-0 w-32 h-32" />
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Prof. Abdallah Mohammed</h3>
                                        <p className="text-primary-dark font-bold mb-4 uppercase text-sm tracking-wide">Senior Fellow, IAIP</p>
                                        
                                        <div className="flex gap-6 mb-6 text-sm">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900 text-lg">4.9</span>
                                                <span className="text-slate-500">Instructor Rating</span>
                                            </div>
                                            <div className="w-px bg-slate-200"></div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900 text-lg">12,453</span>
                                                <span className="text-slate-500">Students</span>
                                            </div>
                                            <div className="w-px bg-slate-200"></div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-900 text-lg">5</span>
                                                <span className="text-slate-500">Courses</span>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 leading-relaxed">
                                            Professor Mohammed is a leading voice in the field with over 20 years of clinical experience.
                                            He has authored three books on the intersection of spirituality and psychotherapy and currently leads the research department at the International Institute.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                ]} 
            />
          </div>

          {/* Sidebar / Sticky Card */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 sticky top-24">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-bold text-slate-900">$99</span>
                    <div className="text-right">
                        <span className="text-sm text-slate-400 line-through block">$199</span>
                        <Badge variant="accent">50% OFF</Badge>
                    </div>
                </div>
                <p className="text-rose-500 text-sm font-bold mb-6 flex items-center gap-1">
                    <Clock size={14} /> 2 days left at this price
                </p>
                
                <div className="space-y-3 mb-6">
                    <Button fullWidth size="lg">Enroll Now</Button>
                    <div className="grid grid-cols-4 gap-2">
                        <Button fullWidth variant="outline" className="col-span-3">Add to Wishlist</Button>
                        <Button fullWidth variant="outline" className="col-span-1 px-0 flex justify-center"><Share2 size={18} /></Button>
                    </div>
                </div>

                <div className="space-y-4 mb-6 pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm">This course includes:</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-center gap-3">
                            <PlayCircle size={18} className="text-slate-400" />
                            <span>12 hours on-demand video</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FileText size={18} className="text-slate-400" />
                            <span>15 downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Award size={18} className="text-slate-400" />
                            <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-slate-400" />
                            <span>Full lifetime access</span>
                        </li>
                    </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-slate-900 text-sm">Your Progress</h4>
                        <span className="text-xs font-bold text-primary-dark">RESUME</span>
                    </div>
                    <ProgressBar progress={35} showValue label="Module 1 in progress" height="sm" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
