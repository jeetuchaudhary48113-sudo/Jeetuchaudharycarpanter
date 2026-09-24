import { Phone, MessageSquare, FileText, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactProps {
  onOpenQuote: () => void;
}

export default function Contact({ onOpenQuote }: ContactProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#1F1E1D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B48F] mb-3">
            Get in Touch Directly
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Let's Talk About Your Project
          </h2>
          <p className="text-base sm:text-lg text-[#BCB3A9] leading-relaxed">
            Reach out by phone, WhatsApp, or request an itemized quotation for your carpentry and custom furniture work.
          </p>
        </div>

        {/* Central Prominent Contact Showcase Card */}
        <div className="max-w-4xl mx-auto bg-[#292725] rounded-xl border border-neutral-800 p-8 sm:p-12 shadow-2xl">
          <div className="text-center pb-8 border-b border-white/10">
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              JEETU CHAUDHARY
            </h3>
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D8B48F]">
              Carpenter & Custom Furniture Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2 p-6 rounded-lg bg-[#211F1D] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8B48F]">
                <Phone className="w-4 h-4 text-[#D8B48F]" />
                <span>Phone Consultation</span>
              </div>
              <a
                href={BUSINESS_INFO.callUrl}
                className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-[#D8B48F] transition-colors"
              >
                +91 9028793023
              </a>
              <span className="text-xs text-[#968E85]">
                Direct line to master carpenter Jeetu Chaudhary
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2 p-6 rounded-lg bg-[#211F1D] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#128C7E]">
                <MessageSquare className="w-4 h-4 text-[#128C7E]" />
                <span>WhatsApp Messaging</span>
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-[#128C7E] transition-colors"
              >
                +91 9028793023
              </a>
              <span className="text-xs text-[#968E85]">
                Instant response, photo sharing, & measurement updates
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <a
              href={BUSINESS_INFO.callUrl}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold text-white bg-[#965B2E] hover:bg-[#80491F] active:bg-[#683C1A] rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] active:bg-[#09534A] rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP NOW</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold text-[#1F1E1D] bg-white hover:bg-[#FAF8F5] active:bg-[#EAE4DC] rounded transition-colors"
            >
              <FileText className="w-4 h-4 text-[#965B2E]" />
              <span>GET FREE QUOTE</span>
            </button>
          </div>

          {/* Working Details */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#968E85]">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D8B48F]" />
              <span>Service Hours: Monday – Saturday (09:00 AM – 08:00 PM)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D8B48F]" />
              <span>On-Site Carpentry & Custom Furniture Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
