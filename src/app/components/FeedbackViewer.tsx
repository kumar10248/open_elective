'use client';
import { useState, useEffect } from 'react';
import { FaDownload, FaEye, FaTimes, FaTrash, FaLock, FaUnlock, FaStar, FaUser, FaIdCard, FaClock, FaCalendar } from 'react-icons/fa';

interface Feedback {
  name: string;
  uid: string;
  rating: number;
  feedback: string;
  timestamp: string;
}

export function FeedbackViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [feedbacksData, setFeedbacksData] = useState<Feedback[]>([]);
  const [stats, setStats] = useState({ count: 0, averageRating: 0 });
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

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

  // Fetch feedbacks from API
  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/feedbacks');
      const data = await response.json();
      
      if (data.success) {
        setFeedbacksData(data.feedbacks);
        setStats({
          count: data.count,
          averageRating: data.averageRating
        });
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchFeedbacks();
    }
  }, [isAuthenticated]);

  // Fetch count on initial load for badge
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/feedbacks');
        const data = await response.json();
        if (data.success) {
          setStats({ count: data.count, averageRating: data.averageRating });
        }
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };
    fetchCount();
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError('');

    try {
      // Call API to verify password securely on server-side
      const response = await fetch('/api/verify-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success && data.authenticated) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Authentication failed. Please try again.');
      setPassword('');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setPassword('');
    setError('');
  };

  const downloadAllFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedbacks');
      const data = await response.json();
      
      if (!data.success || data.feedbacks.length === 0) {
        alert('No feedbacks to download');
        return;
      }

      const feedbacksText = data.feedbacks.map((fb: Feedback, index: number) => `
═══════════════════════════════════════════════════
                 FEEDBACK #${index + 1}
═══════════════════════════════════════════════════

Date & Time: ${new Date(fb.timestamp).toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
      })}

───────────────────────────────────────────────────
USER INFORMATION
───────────────────────────────────────────────────
Name: ${fb.name}
UID:  ${fb.uid}

───────────────────────────────────────────────────
RATING
───────────────────────────────────────────────────
Score: ${'⭐'.repeat(fb.rating)} (${fb.rating}/5)

───────────────────────────────────────────────────
FEEDBACK
───────────────────────────────────────────────────
${fb.feedback}

═══════════════════════════════════════════════════
`).join('\n\n');
    
      const header = `
═══════════════════════════════════════════════════
        ALL FEEDBACKS - FCWMC PRACTICE
═══════════════════════════════════════════════════

Generated: ${new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
      })}

STATISTICS:
- Total Feedbacks: ${data.count}
- Average Rating: ${data.averageRating}/5

═══════════════════════════════════════════════════

${feedbacksText}
`;

      const blob = new Blob([header], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `all_feedbacks_${new Date().getTime()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading feedbacks:', error);
      alert('Failed to download feedbacks');
    }
  };

  const viewFeedbacks = () => {
    setIsOpen(true);
  };

  const clearAllFeedbacks = async () => {
    if (confirm('Are you sure you want to clear all feedbacks? This action cannot be undone.')) {
      try {
        const response = await fetch('/api/feedbacks', {
          method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert('All feedbacks have been cleared.');
          await fetchFeedbacks(); // Refresh the list
        } else {
          alert('Failed to clear feedbacks');
        }
      } catch (error) {
        console.error('Error clearing feedbacks:', error);
        alert('Failed to clear feedbacks');
      }
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'from-green-500 to-green-600';
    if (rating >= 3) return 'from-amber-500 to-amber-600';
    if (rating >= 2) return 'from-amber-600 to-amber-700';
    return 'from-red-500 to-red-600';
  };

  const getRatingEmoji = (rating: number) => {
    if (rating === 5) return '🎉';
    if (rating === 4) return '😊';
    if (rating === 3) return '👍';
    if (rating === 2) return '😕';
    return '😞';
  };

  return (
    <>
      {/* Admin Button */}
      <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-40 flex gap-3">
        <button
          onClick={viewFeedbacks}
          className="group relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-3 sm:p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-green-400/50 hover:shadow-green-500/50"
          title="View All Feedbacks (Admin)"
        >
          <FaEye className="text-white text-lg sm:text-xl" />
          {stats.count > 0 && (
            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center animate-pulse shadow-lg">
              {stats.count}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
          <div className="relative w-full max-w-5xl my-4 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl sm:rounded-3xl shadow-2xl border-2 border-amber-500/30 overflow-hidden animate-in zoom-in duration-300">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl"></div>

            {!isAuthenticated ? (
              /* Password Verification Screen */
              <div className="relative z-10 p-6 sm:p-8 md:p-12">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Close"
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </button>

                <div className="max-w-md mx-auto text-center">
                  {/* Lock Icon */}
                  <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 blur-2xl opacity-50 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <FaLock className="text-4xl sm:text-6xl text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                    Admin Access Required
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 px-4">
                    Please enter the admin password to view feedbacks
                  </p>

                  {/* Password Form */}
                  <form onSubmit={handlePasswordSubmit} className="space-y-4 sm:space-y-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                        <FaLock className="text-gray-500 text-sm sm:text-base" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter admin password"
                        className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 bg-gray-800/50 border-2 border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-500 hover:text-amber-400 transition-colors"
                      >
                        {showPassword ? <FaUnlock className="text-sm sm:text-base" /> : <FaLock className="text-sm sm:text-base" />}
                      </button>
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 animate-in shake">
                        <p className="text-red-400 text-xs sm:text-sm font-semibold">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isVerifying}
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold text-base sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isVerifying ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <FaUnlock className="text-lg sm:text-xl" />
                          Verify & Access
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-xs mt-4">
                      🔒 Secure access for administrators only
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              /* Feedbacks Display Screen */
              <>
                {/* Header */}
                <div className="relative z-10 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 p-4 sm:p-6 md:p-8 border-b-2 border-amber-500/50">
                  <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-red-600 text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <FaTimes className="text-lg sm:text-xl" />
                  </button>

                  <div className="flex items-start justify-between pr-12 sm:pr-0">
                    <div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-sm">
                          <FaEye className="text-xl sm:text-3xl text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black text-white">
                          Feedback Dashboard
                        </h2>
                      </div>
                      <p className="text-indigo-100 text-sm sm:text-lg">
                        Comprehensive overview of all user feedback
                      </p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/20">
                      <div className="text-white/80 text-xs sm:text-sm font-semibold mb-1">Total Submissions</div>
                      <div className="text-xl sm:text-3xl font-black text-white">{stats.count}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/20">
                      <div className="text-white/80 text-xs sm:text-sm font-semibold mb-1">Average Rating</div>
                      <div className="text-xl sm:text-3xl font-black text-white flex items-center gap-1 sm:gap-2">
                        {stats.averageRating > 0 ? stats.averageRating.toFixed(1) : 'N/A'}
                        <span className="text-yellow-400 text-base sm:text-2xl">⭐</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/20">
                      <div className="text-white/80 text-xs sm:text-sm font-semibold mb-1">Status</div>
                      <div className="text-sm sm:text-lg font-bold text-white truncate">
                        {loading ? 'Loading...' : stats.count > 0 ? 'Active' : 'No Data'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-3 sm:p-6 md:p-8 overflow-y-auto max-h-[50vh]">
                  {feedbacksData.length === 0 ? (
                    <div className="text-center py-12 sm:py-16">
                      <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                          <FaEye className="text-4xl sm:text-5xl text-gray-600" />
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">No Feedbacks Yet</h3>
                      <p className="text-sm sm:text-base text-gray-500">Feedback submissions will appear here</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      {feedbacksData.map((item, index) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-700/50 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/20"
                        >
                          {/* Decorative gradient orb */}
                          <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${getRatingColor(item.rating)} opacity-5 rounded-full blur-3xl`}></div>

                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                                  <FaUser className="text-white text-base sm:text-xl" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h3 className="text-base sm:text-xl font-bold text-white truncate">{item.name}</h3>
                                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 mt-1">
                                    <FaIdCard className="text-xs flex-shrink-0" />
                                    <span className="truncate">{item.uid}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Rating Badge */}
                              <div className={`bg-gradient-to-r ${getRatingColor(item.rating)} px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-1 sm:gap-2 flex-shrink-0`}>
                                <span className="text-lg sm:text-2xl">{getRatingEmoji(item.rating)}</span>
                                <div className="text-white">
                                  <div className="flex items-center gap-0.5 sm:gap-1">
                                    {[...Array(5)].map((_, i) => (
                                      <FaStar
                                        key={i}
                                        className={`text-xs sm:text-sm ${
                                          i < item.rating ? 'text-amber-300' : 'text-white/30'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <div className="text-xs font-bold text-center mt-0.5 sm:mt-1">{item.rating}/5</div>
                                </div>
                              </div>
                            </div>

                            {/* Timestamp */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
                              <div className="flex items-center gap-1 sm:gap-2">
                                <FaCalendar className="text-xs flex-shrink-0" />
                                <span className="truncate">{new Date(item.timestamp).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</span>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2">
                                <FaClock className="text-xs flex-shrink-0" />
                                <span>{new Date(item.timestamp).toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}</span>
                              </div>
                            </div>

                            {/* Feedback Content */}
                            <div className="bg-gray-900/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-3 sm:h-4 bg-gradient-to-b from-amber-500 to-amber-600 rounded"></div>
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Feedback</span>
                              </div>
                              <p className="text-sm sm:text-base text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
                                {item.feedback}
                              </p>
                            </div>

                            {/* Card Footer */}
                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
                              <span className="text-xs text-gray-500">
                                Submission #{feedbacksData.length - index}
                              </span>
                              <span className="text-xs text-gray-500 truncate">
                                ID: {new Date(item.timestamp).getTime()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end border-t-2 border-gray-700/50">
                  <button
                    onClick={downloadAllFeedbacks}
                    disabled={stats.count === 0}
                    className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      stats.count === 0
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white hover:shadow-green-500/50'
                    }`}
                  >
                    <FaDownload className="text-sm sm:text-base" />
                    Download All
                  </button>
                  <button
                    onClick={clearAllFeedbacks}
                    disabled={stats.count === 0}
                    className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      stats.count === 0
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white hover:shadow-red-500/50'
                    }`}
                  >
                    <FaTrash className="text-sm sm:text-base" />
                    Clear All
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
