import React from 'react';
import { InputState } from '../../types';
import { Check, AlertCircle, Calendar } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: InputState;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  state = InputState.DEFAULT, 
  className = '',
  icon,
  disabled,
  ...props 
}) => {
  
  const stateStyles = {
    [InputState.DEFAULT]: "border-slate-300 focus:border-slate-400 text-slate-900",
    [InputState.ACTIVE]: "border-primary-dark ring-1 ring-primary-dark text-slate-900",
    [InputState.VALID]: "border-emerald-500 text-slate-900",
    [InputState.ERROR]: "border-rose-500 text-rose-500",
    [InputState.DISABLED]: "border-transparent bg-slate-100 text-slate-400 cursor-not-allowed",
  };

  // Determine effective state (disabled prop overrides state prop)
  const effectiveState = disabled ? InputState.DISABLED : state;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-bold text-slate-800 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-xl border text-base outline-none transition-colors duration-200
            ${stateStyles[effectiveState]}
            ${icon ? 'pr-10' : ''}
          `}
          {...props}
        />
        
        {/* Status Icons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon ? (
            <span className="text-slate-500">{icon}</span>
          ) : effectiveState === InputState.VALID ? (
            <Check className="w-5 h-5 text-emerald-500" />
          ) : effectiveState === InputState.ERROR ? (
            <AlertCircle className="w-5 h-5 text-rose-500" />
          ) : null}
        </div>
      </div>
    </div>
  );
};