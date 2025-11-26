import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  meta?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isOpen = false, 
  onClick,
  meta
}) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors group"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
           <span className={`text-slate-400 group-hover:text-primary-dark transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
             <ChevronDown size={20} />
           </span>
           <span className="font-bold text-slate-800 group-hover:text-primary-dark transition-colors">{title}</span>
        </div>
        {meta && <div className="text-sm text-slate-500 font-medium">{meta}</div>}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 pl-14 text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: { title: string; content: React.ReactNode; meta?: React.ReactNode }[]; className?: string }> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`bg-white rounded-xl border border-slate-200 overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          meta={item.meta}
          isOpen={openIndex === index} 
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
