export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  serviceType: string;
  category: 'Kitchen' | 'Wardrobe' | 'Bedroom' | 'Living Room' | 'Office' | 'Woodwork';
  description: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  serviceCompleted: string;
  text: string;
  rating?: number;
  isPlaceholder?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  serviceRequired: string;
  location: string;
  projectDetails: string;
  referenceImage?: File | null;
  referenceImagePreview?: string;
}
