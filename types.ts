import React from 'react';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  bestseller?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  linkText: string;
}

export enum InputState {
  DEFAULT = 'default',
  ACTIVE = 'active',
  VALID = 'valid',
  ERROR = 'error',
  DISABLED = 'disabled'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}