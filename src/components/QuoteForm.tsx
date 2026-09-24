import { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, Upload, Phone, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  preselectedService?: string;
}

const SERVICE_OPTIONS = [
  'Custom Furniture',
  'Modular Kitchen',
  'Wardrobe',
  'Bedroom Furniture',
  'TV Unit',
  'Office Furniture',
  'Wooden Work',
  'Repair & Renovation',
  'Other'
];

export default function QuoteForm({ preselectedService }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    serviceRequired: 'Custom Furniture',
    location: '',
    projectDetails: '',
    referenceImage: null,
    referenceImagePreview: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      // Find matching option or set
      const match = SERVICE_OPTIONS.find(
        (opt) => opt.toLowerCase() === preselectedService.toLowerCase() ||
        preselectedService.toLowerCase().includes(opt.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, serviceRequired: match }));
      } else {
        setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
      }
    }
  }, [preselectedService]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('Reference image must be under 10MB.');
        return;
      }
      setErrorMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          referenceImage: file,
          referenceImagePreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number for quotation.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Generate WhatsApp follow-up link with submitted parameters
  const generateWhatsAppLink = () => {
    const msg = `Hello Jeetu Chaudhary, I submitted a quotation request on your website.%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.serviceRequired)}%0A*Location:* ${encodeURIComponent(formData.location || 'Not specified')}%0A*Details:* ${encodeURIComponent(formData.projectDetails || 'Custom woodwork enquiry')}`;
    return `https://wa.me/919028793023?text=${msg}`;
  };

  return (
    <section id="quote" className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E5DDD2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
            Direct Quotation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Let's Build Something Made for You
          </h2>
          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed">
            Tell us what you need and get in touch for a quotation.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#E5DDD2] shadow-sm overflow-hidden p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-10 px-4 max-w-xl mx-auto">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F1E1D] mb-3">
                Quotation Request Received
              </h3>
              <p className="text-sm sm:text-base text-[#5C5650] leading-relaxed mb-8">
                Thank you, <strong className="text-[#1F1E1D]">{formData.fullName}</strong>. Jeetu Chaudhary has received your request regarding <strong className="text-[#1F1E1D]">{formData.serviceRequired}</strong> and will contact you at <strong className="text-[#1F1E1D]">{formData.phone}</strong> shortly.
              </p>

              {/* Prefer WhatsApp follow up block */}
              <div className="bg-[#FAF8F5] p-6 rounded-lg border border-[#E5DDD2] mb-6">
                <p className="text-xs sm:text-sm font-semibold text-[#1F1E1D] mb-1">
                  Prefer WhatsApp?
                </p>
                <p className="text-xs text-[#6B645D] mb-4">
                  Send your enquiry directly to Jeetu Chaudhary on WhatsApp right now for fastest response and instant photo sharing.
                </p>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#128C7E] hover:bg-[#0E7064] rounded transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    serviceRequired: 'Custom Furniture',
                    location: '',
                    projectDetails: '',
                    referenceImage: null,
                    referenceImagePreview: ''
                  });
                }}
                className="text-xs font-semibold text-[#965B2E] hover:text-[#7A451E] underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 text-xs text-red-700 bg-red-50 border border-red-200 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E] focus:bg-white transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                    Service Required *
                  </label>
                  <select
                    id="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E] focus:bg-white transition-colors"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                    Location / Apartment / Area
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="e.g. Sector 18, Apartment Name, City"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  rows={3}
                  placeholder="Describe your furniture measurements, space requirements, wood type preferences, or specific ideas..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 text-sm text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E] focus:bg-white transition-colors"
                />
              </div>

              {/* Upload Reference Image */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4744] mb-2">
                  Upload Reference Image (Optional)
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <label className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1F1E1D] bg-[#FAF8F5] border border-[#DDD3C5] rounded hover:bg-[#F0EAE1] cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-[#965B2E]" />
                    <span>Choose Reference File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-[#8C7E72]">
                    {formData.referenceImage ? formData.referenceImage.name : 'PNG, JPG, WEBP up to 10MB'}
                  </span>
                </div>

                {formData.referenceImagePreview && (
                  <div className="mt-3 relative w-32 h-24 rounded border border-[#DDD3C5] overflow-hidden bg-neutral-100">
                    <img
                      src={formData.referenceImagePreview}
                      alt="Reference preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm font-semibold tracking-wider uppercase text-white bg-[#965B2E] hover:bg-[#80491F] active:bg-[#683C1A] disabled:opacity-75 rounded transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'PROCESSING...' : 'REQUEST FREE QUOTE'}</span>
                </button>
              </div>

              {/* Quick direct alternative */}
              <div className="text-center pt-2">
                <p className="text-xs text-[#6B645D]">
                  Need immediate advice? Call directly:{' '}
                  <a href={BUSINESS_INFO.callUrl} className="font-semibold text-[#965B2E] hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>{' '}
                  or{' '}
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#128C7E] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
