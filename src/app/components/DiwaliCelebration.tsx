'use client';
import { useState, useEffect } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

export function DiwaliCelebration() {
  const [isVisible, setIsVisible] = useState(true);
  const [fireworks, setFireworks] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  // Generate random fireworks
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      const colors = ['#FFD700', '#FF6B35', '#F7931E', '#FDB913', '#FF1744', '#E91E63', '#9C27B0'];
      const newFirework = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setFireworks(prev => [...prev, newFirework]);
      
      // Remove firework after animation
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
      }, 2000);
    }, 800);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Auto-hide after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* LED Light Strings in All 4 Corners */}
      {/* Top-Left Corner LED Lari */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path
            d="M 0,0 Q 50,50 0,100"
            fill="none"
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="3"
          />
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={Math.sin((i * Math.PI) / 14) * 50}
              cy={(i * 100) / 7}
              r="7"
              className="animate-led-blink"
              style={{
                fill: ['#FFD700', '#FFA500', '#FFD700', '#FFBF00', '#FFD700', '#FFA500', '#FFD700', '#FFBF00'][i],
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Top-Right Corner LED Lari */}
            {/* Top-Right Corner LED Lari */}
      <div className="absolute top-0 right-0 w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path
            d="M 200,0 Q 150,50 200,100"
            fill="none"
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="3"
          />
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={200 - Math.sin((i * Math.PI) / 14) * 50}
              cy={(i * 100) / 7}
              r="7"
              className="animate-led-blink"
              style={{
                fill: ['#FFBF00', '#FFA500', '#FFD700', '#FFBF00', '#FFD700', '#FFA500', '#FFD700', '#FFBF00'][i],
                animationDelay: `${i * 0.12 + 0.4}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Bottom-Left Corner LED Lari */}
      <div className="absolute bottom-0 left-0 w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path
            d="M 0,200 Q 50,150 0,100"
            fill="none"
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="3"
          />
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={Math.sin((i * Math.PI) / 14) * 50}
              cy={200 - (i * 100) / 7}
              r="7"
              className="animate-led-blink"
              style={{
                fill: ['#FFBF00', '#FFD700', '#FFA500', '#FFD700', '#FFBF00', '#FFA500', '#FFD700', '#FFBF00'][i],
                animationDelay: `${i * 0.12 + 0.2}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Bottom-Right Corner LED Lari */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <path
            d="M 200,200 Q 150,150 200,100"
            fill="none"
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="3"
          />
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={200 - Math.sin((i * Math.PI) / 14) * 50}
              cy={200 - (i * 100) / 7}
              r="7"
              className="animate-led-blink"
              style={{
                fill: ['#FFD700', '#FFBF00', '#FFA500', '#FFD700', '#FFBF00', '#FFD700', '#FFA500', '#FFBF00'][i],
                animationDelay: `${i * 0.12 + 0.6}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Fireworks */}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="absolute animate-firework"
          style={{
            left: `${fw.x}%`,
            top: `${fw.y}%`,
          }}
        >
          {/* Center burst */}
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{ backgroundColor: fw.color }}
          />
          {/* Sparks */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 w-1 h-1 rounded-full animate-spark"
              style={{
                backgroundColor: fw.color,
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Diwali Banner */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto animate-in fade-in slide-in-from-top duration-1000">
        <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-2xl shadow-2xl border-4 border-amber-400 p-6 sm:p-8 max-w-2xl mx-4">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            aria-label="Close"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Decorative diyas */}
          <div className="absolute -top-6 left-8 text-4xl animate-bounce" style={{ animationDuration: '2s' }}>
            🪔
          </div>
          <div className="absolute -top-6 right-8 text-4xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>
            🪔
          </div>

          {/* Content */}
          <div className="text-center">
            {/* Sparkles */}
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-300 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-wider drop-shadow-lg">
              Happy Diwali! 🎆
            </h1>
            
            <p className="text-lg sm:text-xl text-amber-100 font-bold mb-2">
              शुभ दीपावली! ✨
            </p>

            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto leading-relaxed">
              May this festival of lights bring joy, prosperity, and success to your life. 
              Wishing you a sparkling Diwali filled with happiness! 🪔
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center gap-3 mt-4">
              <span className="text-2xl animate-spin-slow">✨</span>
              <span className="text-2xl">🎉</span>
              <span className="text-2xl animate-spin-slow" style={{ animationDelay: '0.5s' }}>✨</span>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🪔</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🪔</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>🪔</span>
          </div>
        </div>
      </div>

      {/* Floating diyas */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            🪔
          </div>
        ))}
      </div>

      {/* Rangoli pattern */}
      <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-none animate-in fade-in zoom-in duration-1000 delay-500">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-amber-500 to-green-500 animate-spin-slow opacity-30 blur-sm" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-500 animate-spin-reverse opacity-40 blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            🌺
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes spark {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px);
            opacity: 0;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-firework {
          animation: firework 2s ease-out forwards;
        }

        .animate-spark {
          animation: spark 1s ease-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        @keyframes led-blink {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 12px #FFD700) drop-shadow(0 0 16px #FFA500);
          }
          50% {
            opacity: 0.6;
            filter: drop-shadow(0 0 4px #FFD700) drop-shadow(0 0 6px #FFA500);
          }
        }

        .animate-led-blink {
          animation: led-blink 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
