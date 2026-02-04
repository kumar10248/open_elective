'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLayerGroup, FaChevronRight, FaHome, FaClipboardCheck, FaBookOpen, FaGraduationCap,
  FaCube, FaRocket, FaStar, FaShieldAlt, FaAtom, FaBullseye } from 'react-icons/fa';
import { PracticeMode } from '../types';
import { hasQuestionsForMode } from '../lib/questions';

export default function PracticeSelectionPage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);
  const [activeTab, setActiveTab] = useState<'unit1' | 'unit2' | 'unit3'>('unit1');
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStart = () => {
    if (selectedMode) {
      router.push(`/practice/${selectedMode}`);
    }
  };

  // Function to get button colors based on selected mode
  const getButtonColors = () => {
    if (!selectedMode) {
      return 'bg-gray-700 cursor-not-allowed opacity-50';
    }

    // UNIT-1 modes (amber/yellow theme)
    if (['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7', 'unit1', 'unit1_assignment', 'unit1_passage', 'unit1_demo','unit1_all'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black shadow-lg transform hover:scale-105';
    }

    // UNIT-2 modes (blue theme)
    if (['unit2', 'unit2_assignment', 'unit2_passage', 'unit2_demo', 'unit2_all',
         'unit2_module1', 'unit2_module2', 'unit2_module3', 'unit2_module4', 
         'unit2_module5', 'unit2_module6', 'unit2_module7'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:scale-105';
    }

    // UNIT-3 modes (green theme)
    if (['unit3', 'unit3_assignment', 'unit3_passage', 'unit3_demo','unit3_all',
         'unit3_module1', 'unit3_module2', 'unit3_module3', 'unit3_module4',
         'unit3_module5', 'unit3_module6', 'unit3_module7'].includes(selectedMode)) {
      return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transform hover:scale-105';
    }

    // Global practice modes
    switch (selectedMode) {
      case 'assignment':
        return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-purple-600 hover:to-green-700 text-white shadow-lg transform hover:scale-105';
      case 'passage':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:scale-105';
      case 'demo-exam':
        return 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg transform hover:scale-105';
      case 'all':
        return 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg transform hover:scale-105';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg transform hover:scale-105';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col relative overflow-hidden">
      {/* Enhanced Background decoration elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero Header Section */}
      <header className="relative z-10 pt-12 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            {/* Main Title with Icons */}
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 blur-xl opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 p-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="text-3xl text-black" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 animate-gradient">
                  Practice Hub
                </span>
              </h1>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 blur-xl opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 p-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <FaRocket className="text-3xl text-black" />
                </div>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
              Choose your practice mode and <span className="text-amber-400 font-bold">master</span> your knowledge
            </p>
            
            {/* Stats badges */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 px-4 py-2 rounded-full border border-amber-500/30 backdrop-blur-sm">
                <FaStar className="text-yellow-400 animate-pulse" />
                <span className="text-amber-300 text-sm font-semibold">Practice makes perfect</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <FaBullseye className="text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold">Track your progress</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 flex-grow max-w-7xl relative z-10">
        
        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-xl border-2 border-gray-600/50 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
        >
          <FaHome className="text-amber-400 group-hover:text-amber-300 transition-colors" />
          <span className="font-semibold text-gray-200 group-hover:text-white">Back to Home</span>
        </Link>
        
        {/* Selected Mode Indicator */}
        {selectedMode && (
          <div className="mb-8 bg-gradient-to-r from-amber-900/40 via-yellow-900/40 to-amber-900/40 rounded-2xl p-5 border-2 border-amber-500/30 backdrop-blur-sm animate-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <FaBullseye className="text-amber-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-amber-300/70 font-medium">Selected Mode</p>
                  <p className="text-xl font-bold text-amber-200">{selectedMode.replace(/_/g, ' ').toUpperCase()}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMode(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-200"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
          
        {/* Enhanced Mobile Tab Navigation */}
        <div className="lg:hidden mb-8">
          <div className="flex bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-2 backdrop-blur-md border-2 border-gray-700/50 shadow-xl">
            <button
              onClick={() => setActiveTab('unit1')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'unit1'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/50 transform scale-105'
                  : 'text-gray-400 hover:text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              <FaCube className="text-lg" />
              UNIT-1
            </button>
            <button
              onClick={() => setActiveTab('unit2')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'unit2'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 transform scale-105'
                  : 'text-gray-400 hover:text-blue-300 hover:bg-blue-500/10'
              }`}
            >
              <FaShieldAlt className="text-lg" />
              UNIT-2
            </button>
            <button
              onClick={() => setActiveTab('unit3')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'unit3'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 transform scale-105'
                  : 'text-gray-400 hover:text-green-300 hover:bg-green-500/10'
              }`}
            >
              <FaAtom className="text-lg" />
              UNIT-3
            </button>
          </div>
        </div>

        {/* Units Grid Section - Enhanced Design */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1.5 bg-gradient-to-b from-amber-400 to-yellow-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                Unit Practice Modules
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
              <FaLayerGroup className="text-amber-400" />
              <span>Select a module to practice</span>
            </div>
          </div>
          
          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {/* UNIT-1 Card - Enhanced */}
            <div className="group relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 rounded-3xl p-8 border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-20 translate-x-20 group-hover:translate-x-10 group-hover:-translate-y-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header Icon and Title */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-600 p-5 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <FaCube className="text-5xl text-black" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-black text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-300">
                    UNIT-1
                  </h3>
                  <p className="text-sm font-semibold text-amber-400/80 group-hover:text-amber-300 transition-colors duration-300 leading-relaxed px-2">
                    Wireless Communications<br/>for Everybody
                  </p>
                </div>
                
                {/* Module Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                    const mode = `module${moduleNum}` as PracticeMode;
                    return (
                      <button
                        key={mode}
                        className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-2 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl relative overflow-hidden group/btn ${
                          selectedMode === mode
                            ? 'bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 text-black shadow-lg shadow-amber-500/50 ring-2 ring-amber-300/60 scale-105'
                            : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-amber-600/20 hover:to-yellow-600/20 border-2 border-gray-600/50 hover:border-amber-500/50 text-gray-300 hover:text-amber-200'
                        }`}
                        onClick={() => setSelectedMode(mode)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-xl mb-1 font-black relative z-10">M{moduleNum}</span>
                        <span className="text-xs font-semibold opacity-90 relative z-10">Module</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* All Modules Button - Enhanced */}
                <button
                  className={`w-full p-5 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl hover:shadow-3xl relative overflow-hidden group/all ${
                    selectedMode === 'unit1'
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black shadow-amber-500/50 ring-2 ring-amber-300/60 scale-[1.02]'
                      : 'bg-gradient-to-r from-amber-800/30 to-yellow-800/30 hover:from-amber-600/40 hover:to-yellow-600/40 border-2 border-amber-600/50 hover:border-amber-500/70 text-amber-200 hover:text-amber-100'
                  }`}
                  onClick={() => setSelectedMode('unit1')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaRocket className="text-2xl" />
                    <span>All UNIT-1 Modules</span>
                  </span>
                </button>
              </div>
            </div>

              {/* UNIT-2 Card - Enhanced */}
              <div className="group relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 rounded-3xl p-8 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-20 translate-x-20 group-hover:translate-x-10 group-hover:-translate-y-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header Icon and Title */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-5 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                          <FaShieldAlt className="text-5xl text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-black text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                      UNIT-2
                    </h3>
                    <p className="text-sm font-semibold text-blue-400/80 group-hover:text-blue-300 transition-colors duration-300 leading-relaxed px-2">
                      4G Network<br/>Fundamentals
                    </p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit2_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-2 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 ring-2 ring-blue-300/60 scale-105'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-blue-600/20 hover:to-indigo-600/20 border-2 border-gray-600/50 hover:border-blue-500/50 text-gray-300 hover:text-blue-200'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-black relative z-10">M{moduleNum}</span>
                            <span className="text-xs font-semibold opacity-90 relative z-10">Module</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gray-700/50 flex flex-col items-center justify-center opacity-40 relative overflow-hidden cursor-not-allowed"
                          >
                            <span className="text-lg mb-1 font-bold text-gray-600">M{moduleNum}</span>
                            <span className="text-xs text-gray-600 font-medium">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  
                  {/* All Modules Button */}
                  <button
                    className={`w-full p-5 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl hover:shadow-3xl relative overflow-hidden group/all ${
                      selectedMode === 'unit2'
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 text-white shadow-blue-500/50 ring-2 ring-blue-300/60 scale-[1.02]'
                        : 'bg-gradient-to-r from-blue-800/30 to-indigo-800/30 hover:from-blue-600/40 hover:to-indigo-600/40 border-2 border-blue-600/50 hover:border-blue-500/70 text-blue-200 hover:text-blue-100'
                    }`}
                    onClick={() => setSelectedMode('unit2')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <FaStar className="text-2xl" />
                      <span>All UNIT-2 Modules</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* UNIT-3 Card - Enhanced */}
              <div className="group relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 rounded-3xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-y-20 translate-x-20 group-hover:translate-x-10 group-hover:-translate-y-10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header Icon and Title */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 p-5 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <FaAtom className="text-5xl text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-black text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                      UNIT-3
                    </h3>
                    <p className="text-sm font-semibold text-green-400/80 group-hover:text-green-300 transition-colors duration-300 leading-relaxed px-2">
                      5G & Beyond<br/>Technology
                    </p>
                  </div>
                  
                  {/* Module Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit3_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-2 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 text-white shadow-lg shadow-green-500/50 ring-2 ring-green-300/60 scale-105'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-green-600/20 hover:to-emerald-600/20 border-2 border-gray-600/50 hover:border-green-500/50 text-gray-300 hover:text-green-200'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-black relative z-10">M{moduleNum}</span>
                            <span className="text-xs font-semibold opacity-90 relative z-10">Module</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gray-700/50 flex flex-col items-center justify-center opacity-40 relative overflow-hidden cursor-not-allowed"
                          >
                            <span className="text-lg mb-1 font-bold text-gray-600">M{moduleNum}</span>
                            <span className="text-xs text-gray-600 font-medium">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  
                  {/* All Modules Button */}
                  <button
                    className={`w-full p-5 rounded-xl transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl hover:shadow-3xl relative overflow-hidden group/all ${
                      selectedMode === 'unit3'
                        ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white shadow-green-500/50 ring-2 ring-green-300/60 scale-[1.02]'
                        : 'bg-gradient-to-r from-green-800/30 to-emerald-800/30 hover:from-green-600/40 hover:to-emerald-600/40 border-2 border-green-600/50 hover:border-green-500/70 text-green-200 hover:text-green-100'
                    }`}
                    onClick={() => setSelectedMode('unit3')}
                    disabled={!hasQuestionsForMode('unit3')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <FaStar className="text-2xl" />
                      <span>{hasQuestionsForMode('unit3') ? 'All UNIT-3 Modules' : 'Coming Soon'}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Tab Content */}
            <div className="lg:hidden">
              {activeTab === 'unit1' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-amber-600/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-amber-800/80 to-amber-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaCube className="text-4xl text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-amber-300 group-hover:text-amber-200 transition-colors duration-300">UNIT-1</h3>
                    <p className="text-sm font-bold text-amber-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                     Wireless Communications for Everybody
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `module${moduleNum}` as PracticeMode;
                      return (
                        <button
                          key={mode}
                          className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                            selectedMode === mode
                              ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                              : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-amber-500/30 text-gray-200 hover:text-amber-300'
                          }`}
                          onClick={() => setSelectedMode(mode)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                          <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      selectedMode === 'unit1'
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-black shadow-amber-500/30 ring-2 ring-amber-300/50'
                        : 'bg-gradient-to-br from-amber-700/20 to-amber-800/20 hover:from-amber-600/30 hover:to-amber-700/30 border border-amber-600/50 hover:border-amber-500/70 text-amber-300 hover:text-amber-200'
                    }`}
                    onClick={() => setSelectedMode('unit1')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaRocket className="text-lg" />
                      All UNIT-1 Modules
                    </span>
                  </button>
                </div>
              )}

              {activeTab === 'unit2' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-blue-800/80 to-blue-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaShieldAlt className="text-4xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">UNIT-2</h3>
                    <p className="text-sm font-bold text-blue-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      4G Network Fundamentals
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit2_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-blue-500/30 text-gray-200 hover:text-blue-300'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                            <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                            <span className="text-xl mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                            <span className="text-xs text-gray-500 relative z-10">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      hasQuestionsForMode('unit2')
                        ? selectedMode === 'unit2'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-300/50'
                          : 'bg-gradient-to-br from-blue-700/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-700/30 border border-blue-600/50 hover:border-blue-500/70 text-blue-300 hover:text-blue-200'
                        : 'bg-gradient-to-br from-blue-700/20 to-blue-800/20 border border-blue-600/50 text-blue-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2') && setSelectedMode('unit2')}
                    disabled={!hasQuestionsForMode('unit2')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaStar className="text-lg" />
                      {hasQuestionsForMode('unit2') ? 'All UNIT-2 Modules' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              )}

              {activeTab === 'unit3' && (
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-green-600/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-12 translate-x-12"></div>
                  
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-gradient-to-br from-green-800/80 to-green-900/80 p-4 rounded-xl mb-4 inline-block shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:scale-105">
                      <FaAtom className="text-4xl text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-green-300 group-hover:text-green-200 transition-colors duration-300">UNIT-3</h3>
                    <p className="text-sm font-bold text-green-400/70 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      5G Network Architecture and Protocols
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5, 6, 7].map((moduleNum) => {
                      const mode = `unit3_module${moduleNum}` as PracticeMode;
                      const isAvailable = hasQuestionsForMode(mode);
                      
                      if (isAvailable) {
                        return (
                          <button
                            key={mode}
                            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 flex flex-col items-center justify-center shadow-lg hover:shadow-xl relative overflow-hidden group/btn ${
                              selectedMode === mode
                                ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                                : 'bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 border border-gray-600/50 hover:border-green-500/30 text-gray-200 hover:text-green-300'
                            }`}
                            onClick={() => setSelectedMode(mode)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="text-xl mb-1 font-bold relative z-10">M{moduleNum}</span>
                            <span className="text-xs opacity-80 relative z-10">Module {moduleNum}</span>
                          </button>
                        );
                      } else {
                        return (
                          <div
                            key={moduleNum}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 flex flex-col items-center justify-center opacity-50 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-transparent"></div>
                            <span className="text-xl mb-1 font-bold text-gray-500 relative z-10">M{moduleNum}</span>
                            <span className="text-xs text-gray-500 relative z-10">Soon</span>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className={`w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group/all ${
                      hasQuestionsForMode('unit3')
                        ? selectedMode === 'unit3'
                          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30 ring-2 ring-green-300/50'
                          : 'bg-gradient-to-br from-green-700/20 to-green-800/20 hover:from-green-600/30 hover:to-green-700/30 border border-green-600/50 hover:border-green-500/70 text-green-300 hover:text-green-200'
                        : 'bg-gradient-to-br from-green-700/20 to-green-800/20 border border-green-600/50 text-green-300 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3') && setSelectedMode('unit3')}
                    disabled={!hasQuestionsForMode('unit3')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/all:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaRocket className="text-lg" />
                      {hasQuestionsForMode('unit3') ? 'All UNIT-3 Modules' : 'Coming Soon'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Unit-Specific Practice Modes */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <h3 className="text-3xl font-bold px-6 bg-gradient-to-r from-indigo-400 to-cyan-600 bg-clip-text text-transparent">
                Unit-Specific Practice
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* UNIT-1 Special */}
              <div className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 rounded-3xl p-8 border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="font-bold mb-6 text-center relative z-10 text-2xl transition-colors duration-300 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">UNIT-1 Special</h4>
                <div className="space-y-4 relative z-10">
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_assignment'
                        ? 'bg-gradient-to-br from-amber-500/30 via-yellow-500/30 to-amber-600/30 border-2 border-amber-400 shadow-lg shadow-amber-500/40'
                        : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-amber-600/20 hover:to-yellow-600/20 border-2 border-gray-600/50 hover:border-amber-500/50'
                    }`}
                    onClick={() => setSelectedMode('unit1_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📋 Assignment</div>
                      <div className="text-sm text-gray-300 mt-1">UNIT-1 assignments only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_passage'
                        ? 'bg-gradient-to-br from-amber-500/30 via-yellow-500/30 to-amber-600/30 border-2 border-amber-400 shadow-lg shadow-amber-500/40'
                        : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-amber-600/20 hover:to-yellow-600/20 border-2 border-gray-600/50 hover:border-amber-500/50'
                    }`}
                    onClick={() => setSelectedMode('unit1_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📖 Passage Based</div>
                      <div className="text-sm text-gray-300 mt-1">UNIT-1 passages only</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_demo'
                        ? 'bg-gradient-to-br from-amber-500/30 via-yellow-500/30 to-amber-600/30 border-2 border-amber-400 shadow-lg shadow-amber-500/40'
                        : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-amber-600/20 hover:to-yellow-600/20 border-2 border-gray-600/50 hover:border-amber-500/50'
                    }`}
                    onClick={() => setSelectedMode('unit1_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">🎓 Demo Exam</div>
                      <div className="text-sm text-gray-300 mt-1">UNIT-1 exam mode (20 MCQ + 4 passages)</div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      selectedMode === 'unit1_all'
                        ? 'bg-gradient-to-br from-amber-500/30 via-yellow-500/30 to-amber-600/30 border-2 border-amber-400 shadow-lg shadow-amber-500/40'
                        : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-amber-600/20 hover:to-yellow-600/20 border-2 border-gray-600/50 hover:border-amber-500/50'
                    }`}
                    onClick={() => setSelectedMode('unit1_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">⭐ All Questions</div>
                      <div className="text-sm text-gray-300 mt-1">All UNIT-1 questions</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-2 Special */}
              <div className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 rounded-3xl p-8 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="font-bold mb-6 text-center relative z-10 text-2xl transition-colors duration-300 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">UNIT-2 Special</h4>
                <div className="space-y-4 relative z-10">
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_assignment')
                        ? selectedMode === 'unit2_assignment'
                          ? 'bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-blue-600/20 hover:to-indigo-600/20 border-2 border-gray-600/50 hover:border-blue-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_assignment') && setSelectedMode('unit2_assignment')}
                    disabled={!hasQuestionsForMode('unit2_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📋 Assignment</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit2_assignment') ? 'UNIT-2 assignments only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_passage')
                        ? selectedMode === 'unit2_passage'
                          ? 'bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-blue-600/20 hover:to-indigo-600/20 border-2 border-gray-600/50 hover:border-blue-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_passage') && setSelectedMode('unit2_passage')}
                    disabled={!hasQuestionsForMode('unit2_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📖 Passage Based</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit2_passage') ? 'UNIT-2 passages only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_demo')
                        ? selectedMode === 'unit2_demo'
                          ? 'bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-blue-600/20 hover:to-indigo-600/20 border-2 border-gray-600/50 hover:border-blue-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_demo') && setSelectedMode('unit2_demo')}
                    disabled={!hasQuestionsForMode('unit2_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">🎓 Demo Exam</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit2_demo') ? 'UNIT-2 exam mode (20 MCQ + 4 passages)' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit2_all')
                        ? selectedMode === 'unit2_all'
                          ? 'bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-blue-600/20 hover:to-indigo-600/20 border-2 border-gray-600/50 hover:border-blue-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit2_all') && setSelectedMode('unit2_all')}
                    disabled={!hasQuestionsForMode('unit2_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">⭐ All Questions</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit2_all') ? 'All UNIT-2 questions' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* UNIT-3 Special */}
              <div className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 rounded-3xl p-8 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 backdrop-blur-lg overflow-hidden transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10 translate-x-10"></div>
                
                <h4 className="font-bold mb-6 text-center relative z-10 text-2xl transition-colors duration-300 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">UNIT-3 Special</h4>
                <div className="space-y-4 relative z-10">
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_assignment')
                        ? selectedMode === 'unit3_assignment'
                          ? 'bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-green-600/30 border-2 border-green-400 shadow-lg shadow-green-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-green-600/20 hover:to-emerald-600/20 border-2 border-gray-600/50 hover:border-green-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_assignment') && setSelectedMode('unit3_assignment')}
                    disabled={!hasQuestionsForMode('unit3_assignment')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📋 Assignment</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit3_assignment') ? 'UNIT-3 assignments only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_passage')
                        ? selectedMode === 'unit3_passage'
                          ? 'bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-green-600/30 border-2 border-green-400 shadow-lg shadow-green-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-green-600/20 hover:to-emerald-600/20 border-2 border-gray-600/50 hover:border-green-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_passage') && setSelectedMode('unit3_passage')}
                    disabled={!hasQuestionsForMode('unit3_passage')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">📖 Passage Based</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit3_passage') ? 'UNIT-3 passages only' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_demo')
                        ? selectedMode === 'unit3_demo'
                          ? 'bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-green-600/30 border-2 border-green-400 shadow-lg shadow-green-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-green-600/20 hover:to-emerald-600/20 border-2 border-gray-600/50 hover:border-green-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_demo') && setSelectedMode('unit3_demo')}
                    disabled={!hasQuestionsForMode('unit3_demo')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">🎓 Demo Exam</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit3_demo') ? 'UNIT-3 exam mode (20 MCQ + 4 passages)' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                  <button
                    className={`w-full p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${
                      hasQuestionsForMode('unit3_all')
                        ? selectedMode === 'unit3_all'
                          ? 'bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-green-600/30 border-2 border-green-400 shadow-lg shadow-green-500/40'
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-green-600/20 hover:to-emerald-600/20 border-2 border-gray-600/50 hover:border-green-500/50'
                        : 'bg-gradient-to-br from-gray-700/30 to-gray-800/30 border-2 border-gray-700/50 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasQuestionsForMode('unit3_all') && setSelectedMode('unit3_all')}
                    disabled={!hasQuestionsForMode('unit3_all')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-left relative z-10">
                      <div className="font-bold text-lg text-white">⭐ All Questions</div>
                      <div className="text-sm text-gray-300 mt-1">
                        {hasQuestionsForMode('unit3_all') ? 'All UNIT-3 Questions' : 'Coming Soon'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Global Special Practice Modes */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <h3 className="text-3xl font-bold px-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Special Practice Modes
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Assignment Questions */}
              <button
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  selectedMode === 'assignment'
                    ? 'bg-gradient-to-br from-green-500/20 via-green-600/20 to-emerald-700/20 border-green-400 shadow-2xl shadow-green-500/50'
                    : 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-gray-600/50 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-500/20'
                }`}
                onClick={() => setSelectedMode('assignment')}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="relative inline-block mb-4">
                    <FaClipboardCheck className="text-5xl mx-auto text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(74,222,128,0.8)]" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Assignment Questions</h4>
                  <p className="text-sm text-gray-300">Practice with assignment problems from all units</p>
                </div>
              </button>

              {/* Passage Based */}
              <button
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  selectedMode === 'passage'
                    ? 'bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-cyan-700/20 border-blue-400 shadow-2xl shadow-blue-500/50'
                    : 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-gray-600/50 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20'
                }`}
                onClick={() => setSelectedMode('passage')}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="relative inline-block mb-4">
                    <FaBookOpen className="text-5xl mx-auto text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.8)]" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Passage Based</h4>
                  <p className="text-sm text-gray-300">Questions with reading comprehension passages</p>
                </div>
              </button>

              {/* Demo Exam */}
              <button
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  selectedMode === 'demo-exam'
                    ? 'bg-gradient-to-br from-red-500/20 via-red-600/20 to-rose-700/20 border-red-400 shadow-2xl shadow-red-500/50'
                    : 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-gray-600/50 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-500/20'
                }`}
                onClick={() => setSelectedMode('demo-exam')}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="relative inline-block mb-4">
                    <FaGraduationCap className="text-5xl mx-auto text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(248,113,113,0.8)]" />
                    <div className="absolute inset-0 bg-red-400/20 rounded-full blur-2xl"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Demo Exam</h4>
                  <p className="text-sm text-gray-300">40 MCQ + 40 passage based Question</p>
                </div>
              </button>

              {/* All Questions */}
              <button
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  selectedMode === 'all'
                    ? 'bg-gradient-to-br from-amber-500/20 via-amber-600/20 to-yellow-700/20 border-amber-400 shadow-2xl shadow-amber-500/50'
                    : 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-gray-600/50 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/20'
                }`}
                onClick={() => setSelectedMode('all')}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="relative inline-block mb-4">
                    <FaLayerGroup className="text-5xl mx-auto text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.8)]" />
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">All Questions</h4>
                  <p className="text-sm text-gray-300">Practice with all available questions</p>
                </div>
              </button>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-800/30 rounded-lg p-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-2">
                {selectedMode ? `Selected: ${selectedMode}` : 'Select a Practice Mode'}
              </h3>
              <p className="text-gray-400 text-sm">
                {selectedMode 
                  ? 'Click "Start Practice" to begin your learning session'
                  : 'Choose from the unit modules or special practice modes above'
                }
              </p>
            </div>
            
            {/* Hide buttons on mobile when fixed navigation is visible (scrolled) */}
            <div className={`flex gap-3 ${isScrolled ? 'lg:flex sm:flex hidden' : 'flex'}`}>
              <Link 
                href="/" 
                className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 flex items-center space-x-2"
              >
                <FaHome />
                <span>Home</span>
              </Link>
              
              <button
                onClick={handleStart}
                disabled={!selectedMode}
                className={`px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center space-x-2 ${getButtonColors()}`}
              >
                <span>Start Practice</span>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      
      {/* Fixed mobile navigation bar (visible only on mobile when scrolled) */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 p-3 z-50 transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between gap-4 max-w-xl mx-auto">
          <Link 
            href="/" 
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 flex items-center justify-center space-x-2"
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>
          
          <button
            onClick={handleStart}
            disabled={!selectedMode}
            className={`flex-1 px-4 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2 ${getButtonColors()}`}
          >
            <span>Start Practice</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
