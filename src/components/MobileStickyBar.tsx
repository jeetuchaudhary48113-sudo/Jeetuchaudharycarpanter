import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1F1E1D]/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.callUrl}
          className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#965B2E] active:bg-[#7D4922] rounded transition-colors shadow-sm"
          aria-label="Call Jeetu Chaudhary"
        >
          <Phone className="w-4 h-4" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] active:bg-[#0E7064] rounded transition-colors shadow-sm"
          aria-label="Chat on WhatsApp with Jeetu Chaudhary"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
}
