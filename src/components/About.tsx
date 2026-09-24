import { Check, Shield, Compass, Hammer } from 'lucide-react';
import { IMAGES } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E5DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Workshop Image Container */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#DDD3C5] shadow-lg bg-[#ECE5DA]">
              <img
                src={IMAGES.workshop}
                alt="Jeetu Chaudhary artisan carpentry workshop and hand joinery workbench"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Quiet caption tag */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#7A7067] px-1">
              <span>Fine timber joinery, hand finishing & precision fitting</span>
              <span className="font-mono">Handcrafted Custom Woodwork</span>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
              Dedicated Woodworking Practice
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              About Jeetu Chaudhary
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#524C46] leading-relaxed mb-8">
              <p>
                Jeetu Chaudhary provides specialized carpentry and custom furniture solutions designed around practical living, sound craftsmanship, and the individual requirements of every client.
              </p>
              <p>
                Rather than relying on mass-produced, flat-pack alternatives that struggle with Indian climate variations and wall irregularities, Jeetu Chaudhary approaches each project with deliberate on-site measurement, high-grade core materials, and precise joinery.
              </p>
              <p className="text-sm sm:text-base text-[#6E665F]">
                Whether executing modular kitchen cabinetry, space-efficient wardrobes, floating TV consoles, or bespoke bedroom suites, every edge is banded cleanly, every drawer glide is calibrated, and every customer receives direct, honest communication from start to finish.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DDD2]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#DDD3C5] flex items-center justify-center text-[#965B2E] shrink-0 mt-0.5">
                  <Hammer className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1E1D]">Craftsmanship</h3>
                  <p className="text-xs text-[#6E665F] mt-0.5">
                    Traditional hand skills combined with modern hardware and tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white border border-[#DDD3C5] flex items-center justify-center text-[#965B2E] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1F1E1D]">Practical Design</h3>
                  <p className="text-xs text-[#6E665F] mt-0.5">
                    Storage and ergonomics engineered specifically for your floorplan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
