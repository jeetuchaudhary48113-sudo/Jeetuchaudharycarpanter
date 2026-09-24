import { HOW_IT_WORKS } from '../data/content';

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
            Seamless Execution
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed">
            From initial concept to final on-site polish, our five-step process guarantees transparency, dimensional accuracy, and dependable craftsmanship.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-white p-6 rounded-lg border border-[#E5DDD2] flex flex-col justify-between hover:border-[#965B2E]/50 transition-colors"
            >
              <div>
                {/* Large Subtle Step Number */}
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#965B2E] mb-4">
                  {step.step}
                </div>

                <h3 className="font-display text-lg font-bold text-[#1F1E1D] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C5650] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting hairline on desktop between steps */}
              {idx < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#C9BFB5] text-xs font-mono">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
