"use client";
import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaStar, FaLightbulb, FaClock, FaBookOpen, FaBrain, FaCheckCircle, FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface ConfettiProps {
  left: string;
  top: string;
  width: string;
  height: string;
  background: string;
  opacity: number;
  animationDuration: string;
}

interface TipProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const ExamWishesBanner: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [showTips, setShowTips] = useState<boolean>(false);
  
  useEffect(() => {
    // Initialize confetti effect
    const interval = setInterval(() => {
      setShowConfetti(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Generate confetti elements with proper typing
  const generateConfetti = (): ConfettiProps[] => {
    return Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `-20px`,
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      background: ['#F59E0B', '#10B981', '#8B5CF6'][Math.floor(Math.random() * 3)],
      opacity: Math.random() * 0.5 + 0.3,
      animationDuration: `${Math.random() * 3 + 2}s`
    }));
  };

  const confettiElements = showConfetti ? generateConfetti() : [];

  const examTips: TipProps[] = [
    {
      icon: <FaClock className="text-blue-400 text-xl" />,
      title: "Time Management",
      description: "Allocate 1-2 minutes per question. Skip difficult ones and return later. Save the last 5 minutes for review.",
      color: "bg-blue-400/10"
    },
    {
      icon: <FaBookOpen className="text-green-400 text-xl" />,
      title: "Read Instructions Carefully",
      description: "Understand each question fully before answering. Pay attention to negative questions or specific constraints.",
      color: "bg-green-400/10"
    },
    {
      icon: <FaBrain className="text-purple-400 text-xl" />,
      title: "Process of Elimination",
      description: "When unsure, eliminate obviously wrong answers first to improve your chances of selecting correctly.",
      color: "bg-purple-400/10"
    },
    {
      icon: <FaLightbulb className="text-amber-400 text-xl" />,
      title: "Key FCWMC Patterns",
      description: "Look for familiar concepts from video lectures. Many questions follow patterns from weekly assignments.",
      color: "bg-amber-400/10"
    },
    {
      icon: <FaCheckCircle className="text-red-400 text-xl" />,
      title: "Double-Check Submissions",
      description: "Verify all answers are marked before final submission. Ensure you've attempted maximum questions.",
      color: "bg-red-400/10"
    },
    {
      icon: <FaStar className="text-yellow-400 text-xl" />,
      title: "Special Tips",
      description: "Tick that option that is small in length. It is often the correct answer. It is a common pattern in FCWMC Question that I have observed it.",
      color: "bg-yellow-400/10"
    }
  ];

  return (
    <div className="relative w-full py-8 px-4 mb-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Confetti-like elements */}
      {showConfetti && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {confettiElements.map((props, i) => (
            <div 
              key={i}
              className="absolute animate-fall"
              style={{
                left: props.left,
                top: props.top,
                width: props.width,
                height: props.height,
                borderRadius: '50%',
                background: props.background,
                opacity: props.opacity,
                animationDuration: props.animationDuration
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-400/30 rounded-xl p-6 md:p-8 relative z-10 shadow-lg shadow-amber-500/10 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <FaGraduationCap className="text-amber-400 text-3xl mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            GOOD LUCK ON YOUR FCWMC EXAM TODAY!
          </h2>
          <FaGraduationCap className="text-amber-400 text-3xl ml-3" />
        </div>
        
        <div className="text-center mb-6">
          <p className="text-gray-300 md:text-lg max-w-2xl mx-auto">
            You&apos;ve put in the hard work, and now it&apos;s time to shine. 
            Remember to stay calm, manage your time wisely, and trust in your preparation.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center bg-amber-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-amber-400 mr-2" />
            <span className="text-amber-100">Stay Calm</span>
          </div>
          <div className="flex items-center bg-green-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-green-400 mr-2" />
            <span className="text-green-100">Be Confident</span>
          </div>
          <div className="flex items-center bg-purple-400/10 px-4 py-2 rounded-full">
            <FaStar className="text-purple-400 mr-2" />
            <span className="text-purple-100">Read Carefully</span>
          </div>
        </div>
        
        {/* Exam Tips Section */}
        <div className="mt-6">
          <button 
            onClick={() => setShowTips(!showTips)} 
            className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-medium py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            <FaLightbulb /> 
            <span>FCWMC Exam Tips</span>
            {showTips ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          
          {showTips && (
            <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700 animate-fadeIn">
              <h3 className="text-center text-xl font-semibold text-amber-300 mb-4">
                Pro Tips for FCWMC Success
              </h3>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {examTips.map((tip, index) => (
                  <div 
                    key={index} 
                    className={`${tip.color} border border-gray-700 rounded-lg p-4 hover:transform hover:scale-105 transition duration-300`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="mr-2">{tip.icon}</span>
                      <h4 className="font-medium text-white">{tip.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{tip.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <h4 className="font-medium text-amber-300 mb-1">Last-Minute Advice:</h4>
                <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                  <li>Review your most challenging topics one final time</li>
                  <li>Get a good night&apos;s sleep and eat a light meal before the exam</li>
                  <li>Have your ID card and other required documents ready</li>
                  <li>Arrive at the test center at least 30 minutes early</li>
                  <li>Take deep breaths if you feel anxious during the exam</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            From everyone at FCWMC Practice, we believe in you!
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};