import { useState } from 'react';
import { Phone, MessageSquare, ArrowUp, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#141312] text-[#A69E96] border-t border-neutral-800 pb-20 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Logo & Category */}
          <div className="md:col-span-2">
            <a href="#home" className="inline-block group mb-3">
              <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#D8B48F] transition-colors">
                JEETU CHAUDHARY
              </span>
              <span className="block text-xs font-semibold tracking-wider text-[#8C847C] uppercase mt-0.5">
                Carpenter & Custom Furniture
              </span>
            </a>
            <p className="text-sm text-[#8C847C] leading-relaxed max-w-sm mb-6">
              Custom furniture, modular kitchens, wardrobes, and professional carpentry solutions crafted with attention to detail and precision measurement.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-white">
              <a
                href={BUSINESS_INFO.callUrl}
                className="hover:text-[#D8B48F] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B48F]" />
                <span>+91 9028793023</span>
              </a>
              <span className="text-neutral-700">·</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#128C7E] transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#128C7E]" />
                <span>WhatsApp Available</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D8B48F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Carpentry Scope */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Specialized Services
            </h3>
            <ul className="space-y-2 text-xs text-[#8C847C]">
              <li>Custom Wardrobes & Dressers</li>
              <li>Modular Kitchen Cabinets</li>
              <li>Floating TV Consoles & Fluted Panels</li>
              <li>Solid Wood Doors & Wall Cladding</li>
              <li>Office Study Desks & Shelves</li>
              <li>Furniture Repair & Polishing</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A726A]">
          <div>
            © {new Date().getFullYear()} Jeetu Chaudhary. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-neutral-800 text-white hover:bg-neutral-700 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="relative bg-white text-[#1F1E1D] max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' ? (
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">Privacy Policy</h3>
                <p className="text-xs text-[#5C5650] leading-relaxed mb-4">
                  Jeetu Chaudhary respects your privacy. Any personal information provided through our quotation forms, phone calls, or WhatsApp chats (including names, phone numbers, site addresses, and reference images) is solely used for project evaluation, site measurements, and quotation sharing.
                </p>
                <p className="text-xs text-[#5C5650] leading-relaxed mb-4">
                  We do not sell, distribute, or share customer contact details with third-party advertising companies. All photos shared of your premises remain strictly confidential unless written permission is granted for our portfolio.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">Terms & Conditions</h3>
                <p className="text-xs text-[#5C5650] leading-relaxed mb-4">
                  1. All quotations provided by Jeetu Chaudhary are based on agreed measurements, wood types (e.g., commercial ply, marine ply, teak veneer), and hardware fittings (e.g., hydraulic hinges, telescopic channels).
                </p>
                <p className="text-xs text-[#5C5650] leading-relaxed mb-4">
                  2. Project timelines are agreed upon mutually prior to beginning woodwork. Minor adjustments may occur during unexpected site delays (electrical/civil work).
                </p>
                <p className="text-xs text-[#5C5650] leading-relaxed mb-4">
                  3. Payment schedules follow standard carpentry practice with material advance, work progress stages, and final completion handover.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-[#DDD3C5] flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#965B2E] rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
