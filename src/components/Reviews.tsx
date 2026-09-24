import { useState } from 'react';
import { Star, MessageSquareQuote, Plus, X } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/content';
import { ReviewItem } from '../types';

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);

  // New review form
  const [authorName, setAuthorName] = useState('');
  const [serviceDone, setServiceDone] = useState('Modular Kitchen');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      serviceCompleted: serviceDone.trim(),
      text: reviewText.trim(),
      rating: rating,
      isPlaceholder: false
    };

    setReviews([newRev, ...reviews]);
    setShowAddModal(false);
    setAuthorName('');
    setReviewText('');
    setRating(5);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#965B2E] mb-2">
              Verified Client Feedback
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1E1D] tracking-tight leading-tight [text-wrap:balance]">
              Customer Reviews
            </h2>
            <p className="text-base sm:text-lg text-[#5C5650] mt-3 max-w-2xl">
              Real reviews from real homeowners. We display transparent, unedited customer feedback for custom furniture and on-site carpentry work.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1F1E1D] bg-white hover:bg-[#F3EFE9] border border-[#DDD3C5] rounded shadow-xs transition-colors self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-[#965B2E]" />
            <span>Leave a Customer Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-7 rounded-lg border flex flex-col justify-between transition-colors ${
                rev.isPlaceholder
                  ? 'bg-[#F9F6F0] border-dashed border-[#DDD3C5]'
                  : 'bg-white border-[#E5DDD2] shadow-xs'
              }`}
            >
              <div>
                {/* 5-Star Visual Rating Only for genuine reviews */}
                {!rev.isPlaceholder && rev.rating ? (
                  <div className="flex items-center gap-1 text-[#C2824C] mb-4">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                ) : (
                  <div className="text-xs font-mono text-[#8C7E72] mb-4 flex items-center gap-2">
                    <MessageSquareQuote className="w-4 h-4 text-[#C2824C]" />
                    <span>[Genuine Review Slot]</span>
                  </div>
                )}

                <p className="text-sm sm:text-base text-[#403C38] leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D7]/70">
                <div className="font-bold text-[#1F1E1D] text-sm">
                  {rev.author}
                </div>
                <div className="text-xs text-[#8C7E72] mt-0.5">
                  {rev.serviceCompleted}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#8C7E72]">
            Note: All reviews are strictly genuine and added with client consent. No fabricated claims or ratings.
          </p>
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5DDD2]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display text-2xl font-bold text-[#1F1E1D] mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#5C5650] mb-6">
              Have you worked with Jeetu Chaudhary? Share genuine feedback regarding the craft, finish, and service.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Service Completed *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Bedroom Wardrobe & TV Unit"
                  value={serviceDone}
                  onChange={(e) => setServiceDone(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-[#C2824C] hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-[#C2824C]' : 'stroke-[#C2824C] fill-transparent'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#8C7E72] ml-2">{rating} of 5 stars</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1E1D] mb-1">
                  Your Review *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write your genuine feedback on carpentry quality, communication, and installation..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-[#DDD3C5] rounded focus:outline-hidden focus:border-[#965B2E]"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#5C5650] hover:text-[#1F1E1D]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!authorName.trim() || !reviewText.trim()}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#965B2E] hover:bg-[#80491F] disabled:opacity-50 rounded transition-colors"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
