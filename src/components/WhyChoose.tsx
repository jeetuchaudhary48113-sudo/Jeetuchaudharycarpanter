import { 
  Ruler, 
  Sparkles, 
  ShieldCheck, 
  LayoutTemplate, 
  ReceiptText, 
  Wrench, 
  UserCheck 
} from 'lucide-react';
import { TRUST_POINTS } from '../data/content';

const ICONS = [
  Ruler,
  Sparkles,
  ShieldCheck,
  LayoutTemplate,
  ReceiptText,
  Wrench,
  UserCheck
];

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFEB] border-y border-[#E5DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
            Our Standard of Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Craftsmanship You Can Trust
          </h2>
          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed">
            Jeetu Chaudhary approaches every piece of woodwork with precision joinery, durable materials, and direct personal accountability from measurement to installation.
          </p>
        </div>

        {/* 7 Clean Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_POINTS.map((point, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div
                key={point.id}
                className="bg-white p-7 rounded-lg border border-[#E5DDD2] hover:border-[#965B2E]/50 transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded bg-[#F8F4EE] border border-[#E8DFD3] flex items-center justify-center text-[#965B2E] mb-5">
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>
                
                <h3 className="text-lg font-bold text-[#1F1E1D] mb-2">
                  {point.title}
                </h3>
                
                <p className="text-sm text-[#5C5650] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* Quick statement block filling 8th slot in 3-col grid */}
          <div className="bg-[#1F1E1D] text-white p-7 rounded-lg border border-[#2D2A27] flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B48F] mb-3">
                Direct Communication
              </div>
              <p className="font-display text-xl font-bold leading-snug mb-3">
                No middlemen or agency markups. You work directly with the master carpenter.
              </p>
              <p className="text-xs text-[#BCB3A9] leading-relaxed">
                Clear quotes, truthful timelines, and personal site attention for every cabinet, hinge, and joint.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-[#D8B48F]">
              Direct Phone & WhatsApp: +91 9028793023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
