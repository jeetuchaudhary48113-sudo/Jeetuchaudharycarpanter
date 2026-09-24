import { MessageSquare, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Bespoke luxury custom woodwork interior crafted by Jeetu Chaudhary"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/92 via-[#141210]/75 to-[#141210]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle category kicker (clean text, no pill) */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B48F] mb-4">
            Bespoke Woodworking & Furniture Craftsmanship
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            Beautiful Woodwork. Crafted for Your Space.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#E5DCD3] font-normal leading-relaxed mb-10 max-w-2xl">
            Custom furniture and professional carpentry solutions designed around your space, style and requirements.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#965B2E] hover:bg-[#80491F] active:bg-[#683C1A] rounded transition-colors shadow-lg shadow-black/20"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] active:bg-[#09534A] rounded transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Trust Highlights Below Buttons */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-medium text-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#965B2E]/40 text-[#E3B88C] border border-[#E3B88C]/30 shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Custom Designs</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#965B2E]/40 text-[#E3B88C] border border-[#E3B88C]/30 shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Skilled Craftsmanship</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#965B2E]/40 text-[#E3B88C] border border-[#E3B88C]/30 shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Quality Materials</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#965B2E]/40 text-[#E3B88C] border border-[#E3B88C]/30 shrink-0">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>Professional Installation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
