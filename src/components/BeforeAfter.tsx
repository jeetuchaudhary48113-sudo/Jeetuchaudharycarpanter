import { useState, useRef, useEffect, useCallback } from 'react';
import { SlidersHorizontal, Upload, RotateCcw } from 'lucide-react';
import { IMAGES } from '../data/content';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default Before (restoration in progress / workshop craft) & After (flawless finished custom woodwork)
  const [beforeImage, setBeforeImage] = useState(IMAGES.workshop);
  const [afterImage, setAfterImage] = useState(IMAGES.hero);
  const [showUploader, setShowUploader] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleBeforeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setBeforeImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAfterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAfterImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E5DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
              Renovation & Transformation
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight [text-wrap:balance]">
              See the Transformation
            </h2>
            <p className="text-base sm:text-lg text-[#5C5650] mt-3 max-w-2xl">
              Drag the interactive slider to see how tired, damaged, or unvarnished furniture is restored into pristine, modern woodwork.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowUploader(!showUploader)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1F1E1D] bg-white hover:bg-[#F3EFE9] border border-[#DDD3C5] rounded shadow-xs transition-colors self-start md:self-auto"
          >
            <Upload className="w-4 h-4 text-[#965B2E]" />
            <span>{showUploader ? 'Close Photo Selector' : 'Upload Before & After Photos'}</span>
          </button>
        </div>

        {/* Optional Upload Panel */}
        {showUploader && (
          <div className="bg-white p-6 rounded-lg border border-[#DDD3C5] mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                Upload Before Photo (Old / In-Progress)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleBeforeUpload}
                className="w-full text-xs text-neutral-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#F0EAE1] file:text-[#1F1E1D] hover:file:bg-[#E5DDD2] cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                Upload After Photo (Completed Restoration)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAfterUpload}
                className="w-full text-xs text-neutral-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#F0EAE1] file:text-[#1F1E1D] hover:file:bg-[#E5DDD2] cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Interactive Comparison Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full max-h-[560px] overflow-hidden rounded-lg select-none cursor-ew-resize border border-[#DDD3C5] shadow-md bg-neutral-900"
        >
          {/* "After" Image (Full background) */}
          <img
            src={afterImage}
            alt="After custom renovation woodwork"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* "Before" Image (Clipped to sliderPosition) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="Before restoration carpentry state"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%'
              }}
            />
          </div>

          {/* Dividing Vertical Hairline & Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-lg" />
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#1F1E1D] shadow-xl flex items-center justify-center border border-[#DDD3C5]">
              <SlidersHorizontal className="w-4 h-4 text-[#965B2E]" />
            </div>
          </div>

          {/* Clean Static Metadata Tags (No pills, quiet indicators) */}
          <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded">
            Before: Raw / Worn State
          </div>
          <div className="absolute top-4 right-4 z-10 bg-[#965B2E]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded">
            After: Precision Finish
          </div>

          {/* Hint on bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-xs text-white text-[11px] px-3 py-1 rounded hidden sm:block pointer-events-none">
            Drag slider left or right to inspect finish details
          </div>
        </div>
      </div>
    </section>
  );
}
