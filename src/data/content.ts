import { ServiceItem, PortfolioItem, ReviewItem, FAQItem } from '../types';

import heroImg from '../assets/images/hero_woodwork_interior_1790220746047.jpg';
import kitchenImg from '../assets/images/kitchen_woodwork_1790220761424.jpg';
import wardrobeImg from '../assets/images/wardrobe_custom_1790220782696.jpg';
import bedroomImg from '../assets/images/bedroom_woodwork_1790220799081.jpg';
import workshopImg from '../assets/images/carpenter_workshop_1790220810751.jpg';
import tvUnitImg from '../assets/images/tv_unit_custom_1790220847443.jpg';
import officeImg from '../assets/images/office_desk_woodwork_1790220864240.jpg';
import doorsImg from '../assets/images/doors_panels_wood_1790220880164.jpg';

export const BUSINESS_INFO = {
  name: 'JEETU CHAUDHARY',
  category: 'Carpenter & Custom Furniture Services',
  phone: '+91 9028793023',
  phoneRaw: '+919028793023',
  whatsappUrl: 'https://wa.me/919028793023?text=Hello%20Jeetu%20Chaudhary%2C%20I%20would%20like%20to%20enquire%20about%20your%20carpentry%20and%20custom%20furniture%20services.',
  callUrl: 'tel:+919028793023',
  defaultWhatsAppMessage: 'Hello Jeetu Chaudhary, I would like to enquire about your carpentry and custom furniture services.'
};

export const IMAGES = {
  hero: heroImg,
  kitchen: kitchenImg,
  wardrobe: wardrobeImg,
  bedroom: bedroomImg,
  workshop: workshopImg,
  tvUnit: tvUnitImg,
  office: officeImg,
  doors: doorsImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    description: 'Furniture designed and built according to your space and requirements.',
    image: heroImg,
    tag: 'Bespoke Craft'
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description: 'Functional and stylish kitchen solutions tailored to your home.',
    image: kitchenImg,
    tag: 'Kitchen Woodwork'
  },
  {
    id: 'custom-wardrobes',
    title: 'Custom Wardrobes',
    description: 'Space-efficient wardrobes designed for your bedroom and storage needs.',
    image: wardrobeImg,
    tag: 'Storage Solutions'
  },
  {
    id: 'bedroom-furniture',
    title: 'Bedroom Furniture',
    description: 'Custom beds, side tables, dressing units and complete bedroom woodwork.',
    image: bedroomImg,
    tag: 'Master Bedroom'
  },
  {
    id: 'tv-units',
    title: 'TV Units',
    description: 'Modern custom TV units designed to match your interior.',
    image: tvUnitImg,
    tag: 'Living Media'
  },
  {
    id: 'office-furniture',
    title: 'Office Furniture',
    description: 'Custom desks, storage units and furniture for home and office spaces.',
    image: officeImg,
    tag: 'Workspaces'
  },
  {
    id: 'wooden-doors-panels',
    title: 'Wooden Doors & Panels',
    description: 'Custom wooden doors, wall panels and decorative woodwork.',
    image: doorsImg,
    tag: 'Architectural Joinery'
  },
  {
    id: 'furniture-repair-renovation',
    title: 'Furniture Repair & Renovation',
    description: 'Repair, restoration and renovation of existing furniture.',
    image: workshopImg,
    tag: 'Restoration & Care'
  }
];

export const TRUST_POINTS = [
  {
    id: 'custom-solutions',
    title: 'Custom-Made Solutions',
    description: 'Every wooden piece is measured and made specifically to fit the dimensions and theme of your room.'
  },
  {
    id: 'attention-detail',
    title: 'Attention to Detail',
    description: 'Flawless edge-banding, flush alignments, smooth drawer slides, and hand-finished joinery.'
  },
  {
    id: 'quality-materials',
    title: 'Quality-Focused Work',
    description: 'Built with durable marine plywood, premium veneers, solid hardwoods, and branded hardware fittings.'
  },
  {
    id: 'practical-designs',
    title: 'Practical Designs',
    description: 'Aesthetics balanced with real day-to-day usability, smart storage partitions, and ergonomic heights.'
  },
  {
    id: 'transparent-quotes',
    title: 'Transparent Quotations',
    description: 'Clear, itemized material and labor estimates with no hidden surprises or ambiguous calculations.'
  },
  {
    id: 'professional-installation',
    title: 'Professional Installation',
    description: 'Clean, accurate on-site fitting, dust containment, leveled installation, and thorough final finishing.'
  },
  {
    id: 'customer-focused',
    title: 'Customer-Focused Service',
    description: 'Direct communication with Jeetu Chaudhary throughout measurements, design reviews, and execution.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Contact',
    description: 'Customer contacts Jeetu Chaudhary via phone call, WhatsApp, or the Free Quote form.'
  },
  {
    step: '02',
    title: 'Discuss Your Requirement',
    description: 'Understand furniture, design and space requirements, lifestyle needs, and material preferences.'
  },
  {
    step: '03',
    title: 'Measurement & Planning',
    description: 'Take measurements on site and finalize requirements with layout planning.'
  },
  {
    step: '04',
    title: 'Quotation & Work',
    description: 'Share quotation and begin the project craftwork after customer confirmation.'
  },
  {
    step: '05',
    title: 'Installation',
    description: 'Complete installation and final finishing with meticulous inspection and handover.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    name: 'Teak Veneer Handleless Wardrobe',
    serviceType: 'Custom Wardrobes',
    category: 'Wardrobe',
    description: 'Floor-to-ceiling wardrobe with integrated sensor LED lighting, soft-close hardware, and warm veneer finish.',
    image: wardrobeImg
  },
  {
    id: 'port-2',
    name: 'Modular Oak & Quartz Island Kitchen',
    serviceType: 'Modular Kitchen',
    category: 'Kitchen',
    description: 'Bespoke modular kitchen cabinetry with concealed cutlery trays, water-resistant base units, and fluted panel accents.',
    image: kitchenImg
  },
  {
    id: 'port-3',
    name: 'Fluted Wall Console & Media Unit',
    serviceType: 'TV Units',
    category: 'Living Room',
    description: 'Acoustic fluted wood paneling with a floating console, ambient backlighting, and hidden wire management channels.',
    image: tvUnitImg
  },
  {
    id: 'port-4',
    name: 'Platform Bed with Integrated Side Tables',
    serviceType: 'Bedroom Furniture',
    category: 'Bedroom',
    description: 'Bespoke king-size wooden bed crafted with hydraulic underbed storage and floating nightstands.',
    image: bedroomImg
  },
  {
    id: 'port-5',
    name: 'Executive Teak Wood Study Desk',
    serviceType: 'Office Furniture',
    category: 'Office',
    description: 'Handcrafted solid wood executive desk with cable raceways, file drawers, and warm hand-rubbed oil finish.',
    image: officeImg
  },
  {
    id: 'port-6',
    name: 'Bespoke Geometric Entry Door & Wall Paneling',
    serviceType: 'Wooden Doors & Panels',
    category: 'Woodwork',
    description: 'Custom solid teak wood entrance door with architectural paneling and heavy-duty brass pivot hardware.',
    image: doorsImg
  },
  {
    id: 'port-7',
    name: 'Minimalist Dining Credenza & Showcase',
    serviceType: 'Custom Furniture',
    category: 'Living Room',
    description: 'Custom fluted glass and solid wood dining buffet designed to customer space dimensions.',
    image: heroImg
  },
  {
    id: 'port-8',
    name: 'Custom Library & Display Shelving',
    serviceType: 'Office Furniture',
    category: 'Office',
    description: 'Wall-mounted hardwood bookshelf unit engineered with adjustable brass shelf pins and concealed brackets.',
    image: workshopImg
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '[Customer Name]',
    serviceCompleted: '[Service Completed]',
    text: '[Real Customer Review: Genuine customer reviews will be displayed here once shared by homeowners.]',
    isPlaceholder: true
  },
  {
    id: 'rev-2',
    author: '[Customer Name]',
    serviceCompleted: '[Service Completed]',
    text: '[Real Customer Review: High-quality carpentry and custom furniture feedback will be published here upon verification.]',
    isPlaceholder: true
  },
  {
    id: 'rev-3',
    author: '[Customer Name]',
    serviceCompleted: '[Service Completed]',
    text: '[Real Customer Review: Transparent feedback on modular kitchen or wardrobe craftsmanship.]',
    isPlaceholder: true
  }
];

export const INITIAL_SERVICE_AREAS = [
  { id: 'area-1', city: '[City]', area: '[Area]', nearby: '[Nearby Areas]' },
  { id: 'area-2', city: '[City]', area: '[Area]', nearby: '[Nearby Areas]' },
  { id: 'area-3', city: '[City]', area: '[Area]', nearby: '[Nearby Areas]' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Do you provide custom furniture?',
    answer: 'Yes, all custom furniture is designed, measured, and built specifically according to your room dimensions, interior theme, and storage needs.'
  },
  {
    question: 'Can I provide my own furniture design?',
    answer: 'Absolutely. You can share drawings, reference photos, Pinterest ideas, or architect designs via WhatsApp or the Free Quote form, and we will execute it accurately.'
  },
  {
    question: 'Do you provide site measurement?',
    answer: 'Yes. Jeetu Chaudhary provides on-site measurement to accurately record room dimensions, wall plumb lines, electrical points, and plumbing layouts before building.'
  },
  {
    question: 'How can I get a quotation?',
    answer: 'You can request a free quotation by filling out the form on this website, calling us directly at +91 9028793023, or sending photos/dimensions on WhatsApp.'
  },
  {
    question: 'Do you provide installation?',
    answer: 'Yes. Professional on-site assembly, fitting, hardware adjustments, and clean final finishing are included as part of our full carpentry service.'
  },
  {
    question: 'Do you repair old furniture?',
    answer: 'Yes, we provide furniture repair, surface restoration, hinge/slide replacements, polishing, and complete renovation of existing wooden furniture.'
  },
  {
    question: 'How long does custom furniture take?',
    answer: 'Timelines depend on the scope and design complexity. Standard units like TV consoles or wardrobes typically take 1 to 2 weeks, while full modular kitchens or complete homes are scheduled and communicated transparently.'
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We provide on-site carpentry and custom furniture services across [City] and surrounding [Nearby Areas]. Contact us with your location to confirm service availability.'
  },
  {
    question: 'Can I send a reference image on WhatsApp?',
    answer: 'Yes! Sending a reference photo or video directly to our WhatsApp (+91 9028793023) is the fastest way to discuss ideas and get initial feasibility and estimate details.'
  }
];
