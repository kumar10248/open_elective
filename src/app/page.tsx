import Link from 'next/link';
import { FaBook, FaClock, FaGraduationCap, FaInstagram, FaGithub, FaTwitter, FaCode, FaLinkedinIn,  FaArrowRight, FaDownload } from 'react-icons/fa';
import {ExamWishesBanner} from './components/ExamWishesBanner';
import {FeedbackForm} from './components/FeedbackForm';
import {FeedbackViewer} from './components/FeedbackViewer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Diwali Celebration Component */}
      {/* <DiwaliCelebration /> */}
      
      {/* Animated background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div> */}
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Social Media Icons with glowing effects */}
        <div className="flex justify-center space-x-8 mb-16">
          <a href="https://www.devashish.top" className="text-2xl hover:text-purple-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-400/40 p-3 rounded-full">
            <FaCode />
          </a>
          <a href="https://linkedin.com/in/kumar-devashishh" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 p-3 rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/mathmaverick_man" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-amber-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-amber-400/40 p-3 rounded-full">
            <FaInstagram />
          </a>
          <a href="https://github.com/kumar10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-400/40 p-3 rounded-full">
            <FaGithub />
          </a>
          <a href="https://twitter.com/kumarDe10248" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40 p-3 rounded-full">
            <FaTwitter />
          </a>
        </div>
        <ExamWishesBanner />
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-20 relative">
            {/* Glowing heading with animated gradient border */}
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 relative z-10 py-4 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">FCWMC</span>{" "}
                <span className="text-white">Question</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-green-500">Practice</span>
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>
            
            <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10">
              Elevate your exam preparation with our comprehensive practice platform.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
              <Link href="/practice" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 px-8 py-4 font-bold text-black transition duration-300 ease-out hover:scale-105">
                <span className="absolute -right-14 -top-14 h-40 w-40 translate-x-full translate-y-full rotate-45 bg-white opacity-10 transition-all duration-700 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="relative flex items-center">
                  Start Practicing
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a href="/FCWMC.pdf" download="FCWMC-computing-notes.pdf"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-green-600 px-8 py-4 font-bold text-black transition duration-300 ease-out hover:scale-105">
                <span className="absolute -right-14 -top-14 h-40 w-40 translate-x-full translate-y-full rotate-45 bg-white opacity-10 transition-all duration-700 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="relative flex items-center">
                  <FaDownload className="mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Notes
                </span>
              </a>
            </div>
          </div>

          {/* Feature cards with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-2">
              <div className="bg-amber-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-amber-400/20 transition-all duration-300">
                <FaClock className="text-amber-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-amber-50">Timed Practice</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">1 minutes per question to challenge your knowledge and improve your exam speed</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-green-400/20 hover:border-green-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-2">
              <div className="bg-green-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-green-400/20 transition-all duration-300">
                <FaBook className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-50">Track Progress</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monitor your scores and improvement over time with detailed analytics</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
              <div className="bg-purple-400/10 p-5 rounded-full inline-block mb-6 group-hover:bg-purple-400/20 transition-all duration-300">
                <FaGraduationCap className="text-purple-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-50">Master Content</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Comprehensive question bank designed to help you succeed in your FCWMC exams</p>
            </div>
          </div>
          
        
          {<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-16">
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">1,500+</div>
              <p className="text-gray-400">Practice Questions</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <p className="text-gray-400">Topic Cover</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">1,000+</div>
              <p className="text-gray-400">Active Students</p>
            </div>
          </div> }
          
          {/* Enhanced Footer */}
          <footer className="mt-32 relative">
            {/* Decorative top border with gradient */}
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            
            {/* Main Footer Content */}
            <div className="pt-16 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* About Section */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    FCWMC Practice
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Your comprehensive platform for mastering Foundation Course in Wireless & Mobile Communication. Practice, learn, and excel!
                  </p>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/practice" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm inline-flex items-center gap-2 group">
                        <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                        Start Practice
                      </Link>
                    </li>
                    <li>
                      <a href="/FCWMC.pdf" download className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm inline-flex items-center gap-2 group">
                        <FaDownload className="text-xs transform group-hover:translate-y-1 transition-transform" />
                        Download Notes
                      </a>
                    </li>
                  
                  </ul>
                </div>

                {/* Connect Section */}
                <div className="text-center md:text-right">
                  <h4 className="text-lg font-semibold mb-4 text-amber-300">Connect With Me</h4>
                  <div className="flex justify-center md:justify-end space-x-4 mb-4">
                    <a href="https://www.devashish.top" 
                       className="group relative p-3 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 hover:from-purple-600/40 hover:to-purple-700/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-110">
                      <FaCode className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Portfolio
                      </span>
                    </a>
                    <a href="https://linkedin.com/in/kumar-devashishh" target="_blank" rel="noopener noreferrer"
                       className="group relative p-3 rounded-lg bg-gradient-to-br from-blue-900/30 to-blue-800/20 hover:from-blue-600/40 hover:to-blue-700/30 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-110">
                      <FaLinkedinIn className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        LinkedIn
                      </span>
                    </a>
                    <a href="https://github.com/kumar10248" target="_blank" rel="noopener noreferrer"
                       className="group relative p-3 rounded-lg bg-gradient-to-br from-green-900/30 to-green-800/20 hover:from-green-600/40 hover:to-green-700/30 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-110">
                      <FaGithub className="text-green-400 group-hover:text-green-300 transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        GitHub
                      </span>
                    </a>
                    <a href="https://twitter.com/kumarDe10248" target="_blank" rel="noopener noreferrer"
                       className="group relative p-3 rounded-lg bg-gradient-to-br from-sky-900/30 to-sky-800/20 hover:from-sky-600/40 hover:to-sky-700/30 border border-sky-500/30 hover:border-sky-400/60 transition-all duration-300 transform hover:scale-110">
                      <FaTwitter className="text-sky-400 group-hover:text-sky-300 transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Twitter
                      </span>
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Let&apos;s connect and collaborate!
                  </p>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 mt-8 border-t border-gray-800/50">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <p className="text-sm text-gray-400">
                      © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">FCWMC Practice</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Made with</span>
                    <span className="text-red-500 animate-pulse">❤️</span>
                    <span className="text-gray-500">by</span>
                    <a href="https://www.devashish.top" className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-400 hover:to-amber-300 transition-all duration-300">
                      Kumar Devashish
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-amber-500/30 transition-colors cursor-default">
                      v3.1.1
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-0 left-1/4 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-0 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
          </footer>
        </div>
      </div>
      
      {/* Feedback Form Component - Floating button on homepage */}
      <FeedbackForm />
      
      {/* Feedback Viewer Component (Admin) */}
      <FeedbackViewer />
    </div>
  );
}