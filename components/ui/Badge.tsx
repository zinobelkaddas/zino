import React from 'react';
import { Check } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'bestseller' | 'verified' | 'beginner' | 'intermediate' | 'advanced' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: "bg-primary-bg text-primary-dark",
    secondary: "bg-secondary-bg text-secondary-dark",
    accent: "bg-amber-100 text-amber-800",
    outline: "border border-slate-200 text-slate-600",
    bestseller: "bg-yellow-200 text-yellow-900 font-bold",
    verified: "bg-blue-50 text-blue-700 border border-blue-100",
    neutral: "bg-slate-100 text-slate-500 font-medium",
    
    // Level variants
    beginner: "bg-emerald-100 text-emerald-800",
    intermediate: "bg-blue-100 text-blue-800",
    advanced: "bg-purple-100 text-purple-800"
  };

  if (variant === 'verified') {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${variants[variant]} ${className}`}>
        <Check size={12} strokeWidth={3} />
        {children}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};