import { useState } from 'react';
import { Plus, X, Maximize2, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/content';
import { PortfolioItem } from '../types';

type CategoryFilter = 'All' | 'Kitchen' | 'Wardrobe' | 'Bedroom' | 'Living Room' | 'Office' | 'Woodwork';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Kitchen',
  'Wardrobe',
  'Bedroom',
  'Living Room',
  'Office',
  'Woodwork'
];

interface PortfolioProps {
  onOpenQuote: () => void;
}

export default function Portfolio({ onOpenQuote }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [projects, setProjects] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // New photo upload form state
  const [newName, setNewName] = useState('');
  const [newService, setNewService] = useState('Custom Furniture');
  const [newCategory, setNewCategory] = useState<PortfolioItem['category']>('Living Room');
  const [newDesc, setNewDesc] = useState('');
  const [newImagePreview, setNewImagePreview] = useState('');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newImagePreview) return;

    const newItem: PortfolioItem = {
      id: `custom-proj-${Date.now()}`,
      name: newName.trim(),
      serviceType: newService,
      category: newCategory,
      description: newDesc.trim() || 'Custom on-site carpentry project executed to client specifications.',
      image: newImagePreview
    };

    setProjects([newItem, ...projects]);
    setShowUploadModal(false);
    setNewName('');
    setNewDesc('');
    setNewImagePreview('');
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
              Recent Craftsmanship
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight [text-wrap:balance]">
              Our Work & Visual Gallery
            </h2>
            <p className="text-base sm:text-lg text-[#5C5650] mt-3 max-w-2xl">
              Explore bespoke residential and commercial woodwork installations crafted with attention to architectural detail.
            </p>
          </div>

          {/* Add Real Photo Action */}
          <button
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1F1E1D] bg-white hover:bg-[#F3EFE9] border border-[#DDD3C5] rounded shadow-xs transition-colors self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-[#965B2E]" />
            <span>Add Real Project Photo</span>
          </button>
        </div>

        {/* Category Tabs (Segmented functional controls) */}
        <div className="flex flex-wrap items-center gap-2 pb-2 mb-10 border-b border-[#E5DDD2]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#1F1E1D] text-white shadow-xs'
                  : 'text-[#5C5650] hover:text-[#1F1E1D] hover:bg-[#F0EAE1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#E5DDD2] hover:border-[#965B2E]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div
                className="relative aspect-[16/11] overflow-hidden bg-[#ECE5DA] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1F1E1D]/90 text-white text-xs font-medium backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold text-[#965B2E] uppercase tracking-wider mb-1">
                  {project.serviceType}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1F1E1D] mb-2 leading-snug">
                  {project.name}
                </h3>
                <p className="text-sm text-[#5C5650] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="text-xs font-semibold text-[#1F1E1D] hover:text-[#965B2E] transition-colors underline underline-offset-4"
                >
                  Enquire about similar woodwork →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#965B2E] mb-1">
                {selectedProject.serviceType} · {selectedProject.category}
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1F1E1D] mb-3">
                {selectedProject.name}
              </h3>
              <p className="text-sm sm:text-base text-[#5C5650] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5DDD2]">
                <span className="text-xs text-[#8C7E72]">
                  Handcrafted by Jeetu Chaudhary
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuote();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#965B2E] hover:bg-[#80491F] rounded transition-colors"
                >
                  Request Quotation for Similar Space
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Real Project Photo Modal (Supports real photo updates) */}
      {showUploadModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowUploadModal(false)}
        >
          <div
            className="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5DDD2]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-[#1F1E1D] mb-2">
              Add Real Project Photo
            </h3>
            <p className="text-xs text-[#5C5650] mb-6">
              Easily update this gallery with genuine site photos from Jeetu Chaudhary's latest completed carpentry jobs.
            </p>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Teak TV Unit in Sector 4"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as PortfolioItem['category'])}
                    className="w-full px-3 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                  >
                    <option value="Kitchen">Kitchen</option>
                    <option value="Wardrobe">Wardrobe</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Office">Office</option>
                    <option value="Woodwork">Woodwork</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                    Service Type
                  </label>
                  <input
                    type="text"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    placeholder="e.g. Custom Wardrobe"
                    className="w-full px-3 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Details regarding wood species, dimensions, and finishes..."
                  className="w-full px-3 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Select Project Image *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageFileChange}
                  className="w-full text-xs text-neutral-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-[#F0EAE1] file:text-[#1F1E1D] hover:file:bg-[#E5DDD2] cursor-pointer"
                />
                {newImagePreview && (
                  <div className="mt-2 relative aspect-[16/9] w-full rounded overflow-hidden border border-[#DDD3C5]">
                    <img src={newImagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#5C5650] hover:text-[#1F1E1D]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newName.trim() || !newImagePreview}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#965B2E] hover:bg-[#80491F] disabled:opacity-50 rounded transition-colors"
                >
                  Save to Gallery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
