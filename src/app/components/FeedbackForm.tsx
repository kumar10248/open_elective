'use client';
import { useState, useEffect } from 'react';
import { FaPaperPlane, FaComments, FaStar, FaTimes, FaCheckCircle } from 'react-icons/fa';

interface FeedbackFormProps {
  autoOpen?: boolean;
  onClose?: () => void;
}

export function FeedbackForm({ autoOpen = false, onClose }: FeedbackFormProps = {}) {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle autoOpen prop changes
  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    
    if (!feedback.trim()) {
      alert('Please enter your feedback');
      return;
    }

    setSubmitted(true);

    try {
      // Send to API
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          uid: uid.trim(),
          rating,
          feedback: feedback.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Mark feedback as submitted for device tracking
        localStorage.setItem('feedbackSubmitted', 'true');
        localStorage.setItem('feedbackSubmittedAt', Date.now().toString());
        
        // Success - show checkmark for 2 seconds then close
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
          setName('');
          setUid('');
          setRating(0);
          setHoveredRating(0);
          setFeedback('');
          onClose?.(); // Call onClose callback if provided
        }, 2000);
      } else {
        // Error
        setSubmitted(false);
        alert('Failed to save feedback: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      setSubmitted(false);
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <>
      {/* Floating Feedback Button - Only show if not auto-opened */}
      {!autoOpen && (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 group"
        aria-label="Give Feedback"
      >
        <div className="relative">
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
          
          {/* Main button */}
          <div className="relative bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 p-3 sm:p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-amber-400/50">
            <FaComments className="text-white text-xl sm:text-2xl animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
          
          {/* Tooltip - hidden on mobile */}
          <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl border border-amber-500/30">
              Share Feedback
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-amber-500/30"></div>
            </div>
          </div>
        </div>
      </button>
      )}

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto">
          <div className="relative w-full max-w-2xl my-4 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl sm:rounded-2xl shadow-2xl border-2 border-amber-500/30 overflow-hidden animate-in zoom-in duration-300">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-green-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Close button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
                setName('');
                setUid('');
                setRating(0);
                setHoveredRating(0);
                setFeedback('');
              }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-gray-800/50 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              aria-label="Close"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </button>

            {/* Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 blur-xl opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                          <FaComments className="text-3xl sm:text-4xl text-white" />
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                      We&apos;d Love Your Feedback!
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400">
                      Help us improve your learning experience
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* UID Input */}
                    <div>
                      <label htmlFor="uid" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                        Student UID <span className="text-gray-500">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="uid"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                        placeholder="e.g., 22BCS10248"
                        pattern="[0-9]{2}[A-Z]{3}[0-9]{5}"
                        title="Format: 22BCS10248 (2 digits + 3 letters + 5 digits)"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-3">
                        Rate Your Experience
                      </label>
                      <div className="flex justify-center gap-1 sm:gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transform transition-all duration-300 hover:scale-125 p-1"
                          >
                            <FaStar
                              className={`text-2xl sm:text-4xl transition-colors duration-300 ${
                                star <= (hoveredRating || rating)
                                  ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                                  : 'text-gray-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {rating > 0 && (
                        <p className="text-center mt-2 text-xs sm:text-sm text-amber-400 animate-in fade-in duration-300">
                          {rating === 5 && "🎉 Amazing!"}
                          {rating === 4 && "😊 Great!"}
                          {rating === 3 && "👍 Good"}
                          {rating === 2 && "😕 Could be better"}
                          {rating === 1 && "😞 Needs improvement"}
                        </p>
                      )}
                    </div>

                    {/* Feedback Textarea */}
                    <div>
                      <label htmlFor="feedback" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                        Your Feedback
                      </label>
                      <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us what you think..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!rating}
                      className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform flex items-center justify-center gap-2 sm:gap-3 ${
                        !rating
                          ? 'bg-gray-700 cursor-not-allowed opacity-50'
                          : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      }`}
                    >
                      <FaPaperPlane className="text-base sm:text-xl" />
                      Submit Feedback
                    </button>
                  </form>
                </>
              ) : (
                /* Success Message */
                <div className="text-center py-8 sm:py-12 animate-in zoom-in duration-500">
                  <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 p-4 sm:p-6 rounded-full">
                        <FaCheckCircle className="text-4xl sm:text-6xl text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-green-400">
                    Thank You! 🎉
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-2 px-4">
                    Your feedback has been submitted successfully!
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 px-4">
                    A text file has been downloaded to your device.
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm px-4">
                    We appreciate you taking the time to help us improve.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
