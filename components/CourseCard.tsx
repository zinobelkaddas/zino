import React from 'react';
import { Course } from '../types';
import { User } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Rating } from './ui/Rating';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {course.bestseller && (
          <div className="absolute top-3 left-3">
            <Badge variant="bestseller">Bestseller</Badge>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5 gap-3">
        <div className="flex justify-between items-start">
            <Badge variant="primary">{course.category}</Badge>
            <span className="font-bold text-xl text-slate-900">${course.price}</span>
        </div>

        <h3 className="font-bold text-lg text-slate-900 leading-tight line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-slate-500 mt-auto">
           <User className="w-4 h-4" />
           <span className="truncate">{course.instructor}</span>
        </div>

        <div className="flex items-center gap-1 pt-3 border-t border-slate-100 mt-2">
           <Rating rating={course.rating} count={course.reviews} showCount size="sm" />
        </div>
      </div>
    </div>
  );
};
