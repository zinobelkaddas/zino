import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "8+", label: "Years of Governance" },
  { value: "30+", label: "Certified Practitioners" },
  { value: "15", label: "Accredited Programs" },
  { value: "10+", label: "Senior Fellows" },
  { value: "120+", label: "Global Partners" },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-secondary-bg py-12 border-y border-secondary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x-0 md:divide-x divide-secondary-light/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-secondary-dark mb-1">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-slate-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};