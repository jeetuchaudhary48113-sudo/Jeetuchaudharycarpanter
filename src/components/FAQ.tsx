import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
            Clear Answers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed">
            Everything you need to know about our custom carpentry, measurements, materials, and quotation process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-lg border border-[#E5DDD2] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#1F1E1D] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#965B2E] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#965B2E] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#524C46] leading-relaxed border-t border-[#F0EAE1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unlisted questions */}
        <div className="mt-12 text-center p-6 rounded-lg bg-[#F4EFEB] border border-[#E5DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-[#1F1E1D]">Have a question not listed here?</h3>
            <p className="text-xs text-[#6B645D] mt-0.5">
              Send your questions or photos directly on WhatsApp for an immediate consultation.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] rounded transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
