import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  max?: number;
  showCount?: boolean;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ 
  rating, 
  max = 5, 
  showCount = false, 
  count,
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 14,
    md: 16,
    lg: 20
  };

  const starSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="font-bold text-amber-500">{rating}</span>
      <div className="flex text-amber-400 gap-0.5">
        {[...Array(max)].map((_, i) => (
          <Star 
            key={i} 
            size={starSize} 
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            className={i < Math.floor(rating) ? "text-amber-400" : "text-amber-200"}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-slate-400 ml-0.5">({count.toLocaleString()})</span>
      )}
    </div>
  );
};
