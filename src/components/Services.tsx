import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
            Tailored Carpentry Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Our Carpentry & Furniture Services
          </h2>
          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed">
            From modern modular kitchens and precision wardrobes to custom bedroom suites and architectural woodwork, every piece is made to measure with uncompromising quality.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group bg-white rounded-lg overflow-hidden border border-[#E5DDD2] hover:border-[#965B2E]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-md"
            >
              <div>
                {/* Image Container with Fallback Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE5DA]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 bg-[#1F1E1D]/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                    {service.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <div className="text-xs font-mono text-[#8C7E72] mb-1.5">
                    0{index + 1}.
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1F1E1D] group-hover:text-[#965B2E] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5C5650] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs font-semibold text-[#1F1E1D] bg-[#F7F3EE] hover:bg-[#965B2E] hover:text-white rounded border border-[#E2D8CC] hover:border-[#965B2E] transition-all duration-200"
                >
                  <span>Get Quote</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet assurance strip */}
        <div className="mt-14 pt-8 border-t border-[#E8E1D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#6B645D]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#965B2E] shrink-0" />
            <span>Have a specific photo or architectural drawing? We craft exact custom specifications.</span>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Custom Furniture')}
            className="text-xs font-semibold text-[#965B2E] hover:text-[#7A451E] underline underline-offset-4"
          >
            Discuss Custom Woodwork →
          </button>
        </div>
      </div>
    </section>
  );
}
