/* eslint-disable react/no-unescaped-entities */

'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaHome, FaRedo, FaClock, FaShare, FaTwitter, FaFacebook, 
  FaCheckCircle, FaTimesCircle, FaInfoCircle, FaLightbulb, FaList, FaDownload, 
  FaChartBar, FaBullseye, FaBrain, FaStar } from 'react-icons/fa';
import { formatTime } from '@/app/lib/utils';
import { DetailedResults } from '../types';

type SharePlatform = 'twitter' | 'whatsapp' | 'linkedin' | 'facebook' | 'copy';

export default function ResultsPage() {
  const searchParams = useSearchParams();

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [mode, setMode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [detailedResults, setDetailedResults] = useState<DetailedResults | null>(null);
  const [showDetailedStats, setShowDetailedStats] = useState(false);
  const [showQuestionDetails, setShowQuestionDetails] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    const scoreParam = parseInt(searchParams.get('score') || '0');
    const totalParam = parseInt(searchParams.get('total') || '0');
    const modeParam = searchParams.get('mode') || '';
    const timeParam = parseInt(searchParams.get('timeRemaining') || '0');
    const timeUpParam = searchParams.get('timeUp') === 'true';

    setScore(scoreParam);
    setTotal(totalParam);
    setMode(modeParam);
    setTimeRemaining(timeParam);
    setTimeUp(timeUpParam);

    // Load detailed results from localStorage
    try {
      const storedResults = localStorage.getItem('detailedResults');
      if (storedResults) {
        const parsedResults: DetailedResults = JSON.parse(storedResults);
        setDetailedResults(parsedResults);
      }
    } catch (error) {
      console.error('Error loading detailed results:', error);
    }

    const calculatedPercentage = Math.round((scoreParam / totalParam) * 100);
    let current = 0;
    const timer = setInterval(() => {
      if (current >= calculatedPercentage) {
        clearInterval(timer);
      } else {
        current += 1;
        setPercentage(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [searchParams]);

  const getFeedback = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return "Excellent! You've mastered this content.";
    if (percent >= 75) return "Great job! You have a strong understanding.";
    if (percent >= 60) return "Good work! With a bit more practice, you'll master this.";
    if (percent >= 40) return "You're making progress. Keep practicing to improve.";
    return "Keep studying and don't give up. You'll improve with practice.";
  };
  
  const getEmojiForScore = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return "🏆";
    if (percent >= 75) return "🌟";
    if (percent >= 60) return "👍";
    if (percent >= 40) return "💪";
    return "📚";
  };
  
  const handleShare = (platform: SharePlatform) => {
    const shareText = `I scored ${score}/${total} (${percentage}%) on ${mode} practice! ${getEmojiForScore()}`;
    const shareUrl = window.location.href;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    } 
    else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)} ${encodeURIComponent(shareUrl)}`, '_blank');
    }
    else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
    else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert('Results copied to clipboard!');
    }
    
    setShowShareOptions(false);
  };

  const getScoreColor = () => {
    if (percentage >= 75) return "text-green-400";
    if (percentage >= 50) return "text-amber-400";
    return "text-red-400";
  };

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { level: "Excellent", color: "text-green-400", bg: "bg-green-400/20" };
    if (percentage >= 75) return { level: "Great", color: "text-green-400", bg: "bg-green-400/20" };
    if (percentage >= 60) return { level: "Good", color: "text-amber-400", bg: "bg-amber-400/20" };
    if (percentage >= 40) return { level: "Fair", color: "text-amber-400", bg: "bg-amber-400/20" };
    return { level: "Needs Work", color: "text-red-400", bg: "bg-red-400/20" };
  };

  const getTimeEfficiency = () => {
    const totalTimeAllotted = total * 120;
    const timeUsed = totalTimeAllotted - timeRemaining;
    const efficiency = (timeUsed / totalTimeAllotted) * 100;
    
    if (efficiency < 50) return { status: "Very Fast", description: "Excellent time management", color: "text-green-400" };
    if (efficiency < 70) return { status: "Fast", description: "Good time management", color: "text-green-400" };
    if (efficiency < 90) return { status: "Moderate", description: "Average time usage", color: "text-amber-400" };
    return { status: "Slow", description: "Consider practicing speed", color: "text-red-400" };
  };

  const downloadPDF = async () => {
    if (!detailedResults) {
      alert('No detailed results available for download.');
      return;
    }

    setIsGeneratingPDF(true);
    
    try {
      // Generate comprehensive report data
      const report = {
        score: `${score}/${total}`,
        percentage: `${percentage}%`,
        mode: mode.charAt(0).toUpperCase() + mode.slice(1).replace(/_/g, ' '),
        timeUsed: formatTime(total * 60 - timeRemaining),
        totalTime: formatTime(total * 60),
        timeRemaining: formatTime(timeRemaining),
        performanceLevel: getPerformanceLevel().level,
        timeEfficiency: getTimeEfficiency().status,
        feedback: getFeedback(),
        emoji: getEmojiForScore(),
        date: new Date(detailedResults.completedAt).toLocaleDateString(),
        time: new Date(detailedResults.completedAt).toLocaleTimeString(),
        questionDetails: detailedResults.questionDetails
      };

      // Create comprehensive HTML content optimized for PDF conversion
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>FCWMC Practice Results - ${report.date}</title>
          <style>
            @page {
              margin: 20mm;
              size: A4;
            }
            body { 
              font-family: Arial, sans-serif; 
              color: #333; 
              line-height: 1.6; 
              margin: 0;
              padding: 0;
            }
            .header { 
              text-align: center; 
              border-bottom: 3px solid #2563eb; 
              padding-bottom: 20px; 
              margin-bottom: 30px; 
            }
            .header h1 {
              color: #2563eb;
              margin: 0 0 10px 0;
              font-size: 28px;
            }
            .score { 
              font-size: 36px; 
              font-weight: bold; 
              color: #2563eb; 
              text-align: center; 
              margin: 20px 0; 
              padding: 20px;
              background: #f8fafc;
              border-radius: 8px;
            }
            .stats { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 15px; 
              margin: 20px 0; 
            }
            .stat-card { 
              border: 2px solid #e5e7eb; 
              padding: 15px; 
              border-radius: 8px; 
              background: #f9fafb;
            }
            .stat-label { 
              font-weight: bold; 
              color: #4b5563; 
              margin-bottom: 5px; 
              font-size: 14px;
            }
            .stat-value { 
              font-size: 16px; 
              color: #1f2937; 
              font-weight: 600;
            }
            .feedback { 
              background: #fef3c7; 
              padding: 20px; 
              border-radius: 8px; 
              margin: 20px 0; 
              border-left: 4px solid #f59e0b;
            }
            .feedback h3 {
              margin: 0 0 10px 0;
              color: #92400e;
            }
            .question { 
              margin: 20px 0; 
              padding: 20px; 
              border: 2px solid #e5e7eb; 
              border-radius: 8px; 
              page-break-inside: avoid; 
              background: #ffffff;
            }
            .question-header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              margin-bottom: 15px; 
              padding-bottom: 10px;
              border-bottom: 1px solid #e5e7eb;
            }
            .question-number { 
              background: #f59e0b; 
              color: white; 
              padding: 8px 12px; 
              border-radius: 20px; 
              font-weight: bold; 
              font-size: 14px;
            }
            .question-type { 
              background: #8b5cf6; 
              color: white; 
              padding: 4px 8px; 
              border-radius: 12px; 
              font-size: 11px;
              margin-left: 8px;
            }
            .correct { 
              color: #059669; 
              font-weight: bold; 
              font-size: 16px;
            }
            .incorrect { 
              color: #dc2626; 
              font-weight: bold; 
              font-size: 16px;
            }
            .question-text {
              margin: 15px 0;
              padding: 15px;
              background: #f8fafc;
              border-radius: 6px;
              border-left: 4px solid #3b82f6;
            }
            .question-text strong {
              color: #1e40af;
              display: block;
              margin-bottom: 8px;
            }
            .answer-section { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 15px; 
              margin: 15px 0; 
            }
            .answer-column h4 {
              font-size: 14px;
              font-weight: bold;
              color: #374151;
              margin-bottom: 8px;
            }
            .answer-box { 
              padding: 12px; 
              border-radius: 6px; 
              font-size: 13px; 
              margin-bottom: 8px;
              border: 2px solid;
            }
            .user-answer { 
              background: #fee2e2; 
              border-color: #fca5a5; 
              color: #991b1b;
            }
            .user-answer.correct-choice {
              background: #d1fae5;
              border-color: #6ee7b7;
              color: #065f46;
            }
            .correct-answer { 
              background: #d1fae5; 
              border-color: #6ee7b7; 
              color: #065f46;
            }
            .explanation { 
              background: #fef3c7; 
              padding: 15px; 
              border-radius: 6px; 
              margin-top: 15px; 
              border: 2px solid #fcd34d; 
            }
            .explanation-title { 
              font-weight: bold; 
              color: #92400e; 
              margin-bottom: 8px; 
              font-size: 14px;
            }
            .footer {
              text-align: center; 
              margin-top: 40px; 
              color: #6b7280; 
              font-size: 12px; 
              border-top: 1px solid #e5e7eb; 
              padding-top: 20px;
            }
            .section-title {
              font-size: 20px;
              font-weight: bold;
              color: #1f2937;
              margin: 30px 0 20px 0;
              padding-bottom: 8px;
              border-bottom: 2px solid #e5e7eb;
            }
            @media print { 
              .question { 
                page-break-inside: avoid; 
              }
              body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>FCWMC Practice Results</h1>
            <p style="color: #6b7280; margin: 5px 0;">${report.date} at ${report.time}</p>
          </div>
          
          <div class="score">${report.emoji} ${report.percentage}</div>
          
          <div class="stats">
            <div class="stat-card">
              <div class="stat-label">Practice Mode</div>
              <div class="stat-value">${report.mode}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Score</div>
              <div class="stat-value">${report.score}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Performance Level</div>
              <div class="stat-value">${report.performanceLevel}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Time Used</div>
              <div class="stat-value">${report.timeUsed} / ${report.totalTime}</div>
            </div>
          </div>
          
          <div class="feedback">
            <h3>Performance Feedback</h3>
            <p>${report.feedback}</p>
          </div>
          
          <h2 class="section-title">📋 Detailed Question Analysis</h2>
          
          ${report.questionDetails.map((detail) => `
            <div class="question">
              <div class="question-header">
                <div>
                  <span class="question-number">Q${detail.questionNumber}</span>
                  <span class="question-type">${detail.questionType === 'multiple' ? 'Multiple Choice' : 'Single Choice'}</span>
                </div>
                <div class="${detail.isCorrect ? 'correct' : 'incorrect'}">
                  ${detail.isCorrect ? '✅ Correct' : '❌ Incorrect'}
                </div>
              </div>
              
              <div class="question-text">
                <strong>Question:</strong>
                ${detail.question.replace(/\n/g, '<br>')}
              </div>
              
              <div class="answer-section">
                <div class="answer-column">
                  <h4>Your Answer:</h4>
                  ${detail.userAnswer.map((answerIndex) => `
                    <div class="answer-box user-answer ${detail.correctAnswer.includes(answerIndex) ? 'correct-choice' : ''}">
                      ${typeof detail.options[answerIndex] === 'string' 
                        ? detail.options[answerIndex] 
                        : detail.options[answerIndex]?.text || `Option ${answerIndex + 1}`}
                    </div>
                  `).join('')}
                </div>
                
                <div class="answer-column">
                  <h4>Correct Answer:</h4>
                  ${detail.correctAnswer.map((answerIndex) => `
                    <div class="answer-box correct-answer">
                      ${typeof detail.options[answerIndex] === 'string' 
                        ? detail.options[answerIndex] 
                        : detail.options[answerIndex]?.text || `Option ${answerIndex + 1}`}
                    </div>
                  `).join('')}
                </div>
              </div>
              
              ${detail.explanation ? `
                <div class="explanation">
                  <div class="explanation-title">💡 Explanation:</div>
                  ${detail.explanation.replace(/\n/g, '<br>')}
                </div>
              ` : ''}
            </div>
          `).join('')}
          
          <div class="footer">
            <p>Generated by FCWMC Practice Platform</p>
            <p>This report contains ${report.questionDetails.length} questions with detailed analysis</p>
          </div>
        </body>
        </html>
      `;

      // Create PDF using browser's print functionality
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
          }, 500);
        };
      } else {
        // Fallback: download as HTML file if popup blocked
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `FCWMC_Results_${mode}_${new Date().toISOString().split('T')[0]}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('PDF generation popup was blocked. Downloaded as HTML file instead. You can print this HTML file to PDF using your browser.');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating report. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Your Results
            </h1>
            <p className="text-gray-400 text-lg">Comprehensive performance analysis</p>
          </div>

          {/* Main Score Display */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 mb-8 border border-gray-700/50 shadow-2xl backdrop-blur-md">
            <div className="flex justify-center mb-8">
              <div className="text-8xl">{getEmojiForScore()}</div>
            </div>

            {timeUp && (
              <div className="bg-red-500/20 border border-red-500 p-6 mb-8 rounded-xl text-center">
                <h3 className="text-xl font-semibold text-red-400 mb-2 flex items-center justify-center gap-2">
                  <FaClock className="text-red-400" />
                  Time's Up!
                </h3>
                <p className="text-gray-300">You ran out of time before completing all questions.</p>
              </div>
            )}

            {/* Score Circle */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${getScoreColor()}`}>{percentage}%</div>
                    <div className="text-gray-400 mt-2">Score</div>
                  </div>
                </div>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={percentage >= 75 ? "#10B981" : percentage >= 50 ? "#F59E0B" : "#EF4444"}
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * percentage) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
              </div>
            </div>

            {/* Basic Stats */}
            <div className="text-center mb-8">
              <div className="text-xl mb-4">
                <span className="text-green-400 font-bold text-2xl">{score}</span> 
                <span className="text-gray-400"> correct out of </span>
                <span className="text-amber-400 font-bold text-2xl">{total}</span> 
                <span className="text-gray-400"> questions</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{getFeedback()}</p>
            </div>

            {/* Performance Level Badge */}
            <div className="flex justify-center mb-8">
              <div className={`px-6 py-3 rounded-full ${getPerformanceLevel().bg} border border-current ${getPerformanceLevel().color} font-semibold text-lg flex items-center gap-2`}>
                <FaStar />
                {getPerformanceLevel().level} Level
              </div>
            </div>
          </div>

          {/* Detailed Statistics Toggle */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowDetailedStats(!showDetailedStats)}
              className="bg-gray-800/80 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <FaChartBar />
              {showDetailedStats ? 'Hide' : 'Show'} Detailed Statistics
              <FaInfoCircle className={`transition-transform duration-300 ${showDetailedStats ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Detailed Statistics */}
          {showDetailedStats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Practice Mode Card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border border-gray-700/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <FaBrain className="text-amber-400 text-2xl" />
                  <h3 className="text-lg font-semibold">Practice Mode</h3>
                </div>
                <div className="text-2xl font-bold text-amber-400 mb-2">
                  {mode.charAt(0).toUpperCase() + mode.slice(1).replace(/_/g, ' ')}
                </div>
                <div className="text-gray-400 text-sm">Selected practice type</div>
              </div>

              {/* Time Analysis Card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border border-gray-700/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-green-400 text-2xl" />
                  <h3 className="text-lg font-semibold">Time Analysis</h3>
                </div>
                <div className="text-xl font-bold text-green-400 mb-2">
                  {formatTime(total * 60 - timeRemaining)}
                </div>
                <div className="text-gray-400 text-sm mb-3">
                  of {formatTime(total * 60)} total
                </div>
                <div className={`text-sm font-medium ${getTimeEfficiency().color}`}>
                  {getTimeEfficiency().status}: {getTimeEfficiency().description}
                </div>
              </div>

              {/* Accuracy Card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border border-gray-700/50 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <FaBullseye className="text-blue-400 text-2xl" />
                  <h3 className="text-lg font-semibold">Accuracy</h3>
                </div>
                <div className={`text-3xl font-bold mb-2 ${getScoreColor()}`}>
                  {percentage}%
                </div>
                <div className="text-gray-400 text-sm">
                  {score} correct answers
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      percentage >= 75 ? 'bg-green-500' : percentage >= 50 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Question Details Toggle */}
          {detailedResults?.questionDetails && detailedResults.questionDetails.length > 0 && (
            <div className="text-center mb-8">
              <button
                onClick={() => setShowQuestionDetails(!showQuestionDetails)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <FaList />
                {showQuestionDetails ? 'Hide' : 'Show'} Question Details ({detailedResults.questionDetails.length} questions)
                <FaInfoCircle className={`transition-transform duration-300 ${showQuestionDetails ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {/* Detailed Question Breakdown */}
          {showQuestionDetails && detailedResults?.questionDetails && (
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 mb-8 border border-gray-700/50 shadow-2xl backdrop-blur-md">
              <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
                <FaList className="mr-3" />
                Detailed Question Breakdown
              </h2>
              
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
                {detailedResults.questionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      detail.isCorrect
                        ? 'bg-green-900/20 border-green-500/50'
                        : 'bg-red-900/20 border-red-500/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-amber-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                          Q{detail.questionNumber}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          detail.questionType === 'multiple'
                            ? 'bg-purple-600/30 text-purple-300'
                            : 'bg-blue-600/30 text-blue-300'
                        }`}>
                          {detail.questionType === 'multiple' ? 'Multiple Choice' : 'Single Choice'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {detail.isCorrect ? (
                          <FaCheckCircle className="text-green-400 text-xl" />
                        ) : (
                          <FaTimesCircle className="text-red-400 text-xl" />
                        )}
                        <span className={`font-bold ${
                          detail.isCorrect ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {detail.isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-medium mb-2 text-gray-200">Question:</h4>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{detail.question}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-400 mb-2">Your Answer:</h5>
                        <div className="space-y-1">
                          {detail.userAnswer.map((answerIndex, idx) => (
                            <div key={idx} className={`p-2 rounded text-sm ${
                              detail.correctAnswer.includes(answerIndex)
                                ? 'bg-green-800/50 text-green-300 border border-green-500/50'
                                : 'bg-red-800/50 text-red-300 border border-red-500/50'
                            }`}>
                              {typeof detail.options[answerIndex] === 'string' 
                                ? detail.options[answerIndex] 
                                : (detail.options[answerIndex] as { text: string })?.text || `Option ${answerIndex + 1}`}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-400 mb-2">Correct Answer:</h5>
                        <div className="space-y-1">
                          {detail.correctAnswer.map((answerIndex, idx) => (
                            <div key={idx} className="p-2 rounded bg-green-800/50 text-green-300 border border-green-500/50 text-sm">
                              {typeof detail.options[answerIndex] === 'string' 
                                ? detail.options[answerIndex] 
                                : (detail.options[answerIndex] as { text: string })?.text || `Option ${answerIndex + 1}`}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {detail.explanation && (
                      <div className="mt-4 p-4 bg-amber-900/20 rounded-lg border border-amber-500/30">
                        <h5 className="text-sm font-medium text-amber-400 mb-2 flex items-center gap-2">
                          <FaLightbulb />
                          Explanation:
                        </h5>
                        <p className="text-amber-100 text-sm leading-relaxed">{detail.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 mb-8 border border-gray-700/50 shadow-xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
              {/* PDF Download Button */}
              {detailedResults && (
                <button
                  onClick={downloadPDF}
                  disabled={isGeneratingPDF}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-50"
                >
                  {isGeneratingPDF ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <FaDownload />
                      Download PDF Report
                    </>
                  )}
                </button>
              )}

              {/* Share Button */}
              <button 
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <FaShare />
                Share Results
              </button>
            </div>

            {/* Share Options */}
            {showShareOptions && (
              <div className="flex justify-center gap-4 mb-6">
                <button 
                  onClick={() => handleShare('twitter')}
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Share on Twitter"
                >
                  <FaTwitter />
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Share on Facebook"
                >
                  <FaFacebook />
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  title="Copy to Clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/" className="bg-gray-800/80 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                <FaHome className="mr-2" /> Home
              </Link>
              <Link href="/practice" className="bg-gray-800/80 hover:bg-gray-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                <FaArrowLeft className="mr-2" /> Choose Another Practice
              </Link>
              <Link href={`/practice/${mode}`} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaRedo className="mr-2" /> Try Again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}