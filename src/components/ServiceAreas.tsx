import { useState } from 'react';
import { MapPin, Edit3, Check, Phone } from 'lucide-react';
import { INITIAL_SERVICE_AREAS, BUSINESS_INFO } from '../data/content';

export default function ServiceAreas() {
  const [areas, setAreas] = useState(INITIAL_SERVICE_AREAS);
  const [isEditing, setIsEditing] = useState(false);
  const [cityInput, setCityInput] = useState('[City]');
  const [areaInput, setAreaInput] = useState('[Area]');
  const [nearbyInput, setNearbyInput] = useState('[Nearby Areas]');

  const handleSaveLocations = (e: React.FormEvent) => {
    e.preventDefault();
    setAreas([
      { id: 'area-1', city: cityInput || '[City]', area: areaInput || '[Area]', nearby: nearbyInput || '[Nearby Areas]' },
      { id: 'area-2', city: cityInput || '[City]', area: 'Suburbs & Metro Zones', nearby: 'Residential Colonies' },
      { id: 'area-3', city: cityInput || '[City]', area: 'Commercial Hubs', nearby: 'Corporate Workspaces' }
    ]);
    setIsEditing(false);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#E5DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
              On-Site Woodworking & Measurement
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight [text-wrap:balance]">
              Serving Your Area
            </h2>
            <p className="text-base sm:text-lg text-[#5C5650] mt-3 max-w-2xl">
              We travel directly to your home, office, or site for accurate measurements, material consultations, and professional installations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1F1E1D] bg-white hover:bg-[#F3EFE9] border border-[#DDD3C5] rounded shadow-xs transition-colors self-start md:self-auto"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#965B2E]" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Service Locations'}</span>
          </button>
        </div>

        {isEditing && (
          <form onSubmit={handleSaveLocations} className="bg-white p-6 rounded-lg border border-[#DDD3C5] mb-8 space-y-4">
            <h3 className="text-sm font-bold text-[#1F1E1D]">
              Customize Your Operating Region
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A4744] mb-1">
                  Primary City Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune / Mumbai / Delhi NCR"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DDD3C5] rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4A4744] mb-1">
                  Key Neighborhoods / Areas
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kothrud, Baner, Wakad"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DDD3C5] rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4A4744] mb-1">
                  Nearby Expansion Areas
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hinjewadi, Pimpri, Chinchwad"
                  value={nearbyInput}
                  onChange={(e) => setNearbyInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DDD3C5] rounded"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#965B2E] rounded"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Locations</span>
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div
              key={area.id}
              className="bg-white p-7 rounded-lg border border-[#E5DDD2] hover:border-[#965B2E]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded bg-[#FAF5EE] border border-[#E8DFD3] flex items-center justify-center text-[#965B2E] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#8C7E72] mb-1">Zone 0{idx + 1}</div>
              <h3 className="font-display text-xl font-bold text-[#1F1E1D] mb-2">
                {area.city}
              </h3>
              <p className="text-sm text-[#4A4744] mb-1">
                <strong>Main Sector:</strong> {area.area}
              </p>
              <p className="text-xs text-[#7A7067] leading-relaxed">
                <strong>Coverage:</strong> {area.nearby}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-lg bg-[#F0EAE1] border border-[#DDD3C5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[#4A4744] text-center sm:text-left">
            Not sure if your specific locality or township is covered? Call us directly to check measurement availability.
          </div>
          <a
            href={BUSINESS_INFO.callUrl}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1F1E1D] bg-white border border-[#DDD3C5] rounded hover:bg-[#FAF8F5] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#965B2E]" />
            <span>Call +91 9028793023</span>
          </a>
        </div>
      </div>
    </section>
  );
}
