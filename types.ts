import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  icon: ReactNode;
  description: string;
  tags: string[];
  filterCategory: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  image: string; // URL
  videoThumb: string; // URL placeholder for video
  driveId?: string; // Google Drive File ID for video playback
  rating: number;
  quote: string;
  tag: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  aspectRatio?: '16:9' | '9:16' | '4:5' | '1:1' | '21:9'; // Added for layout logic
  videoUrl?: string; // Optional real video URL (Internal playback)
  externalLink?: string; // Optional external link (Redirects to YouTube)
  stats: {
    timeline: string;
    grading: string;
    audio: string;
  };
  description: string;
  tools: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  bestFor: string;
  isPopular?: boolean;
  sampleUrls?: { label: string; url: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  style: string;
  image: string;
}