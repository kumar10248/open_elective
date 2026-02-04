'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaClock, FaTimes, FaBars, FaCheck, 
  FaTrophy, FaExclamationCircle, FaLightbulb, 
  FaChevronRight, FaBrain, FaCheckCircle, FaTimesCircle, FaHistory,
  FaInfoCircle, FaSquare, FaCheckSquare, FaBook, FaKeyboard, FaExpand, 
  FaCompress, FaPause, FaPlay, FaFire } from 'react-icons/fa';
import { getAllQuestions, getAllPassageQuestions, getDemoExamQuestions, debugQuestionsData } from '../../lib/questions';
import { Question, PracticeMode, OptionItem, PassageQuestion, DemoExamData, QuestionDetail, DetailedResults } from '../../types';
import { formatTime, calculateSessionTime, validateImagePath, getImageDisplayName } from '@/app/lib/utils';
import { FeedbackPopup } from '@/app/components/FeedbackPopup';

export default function QuestionPracticePage() {
  const router = useRouter();
  const { mode } = useParams() as { mode: PracticeMode };
  const [questions, setQuestions] = useState<Question[]>([]);
  const [passageQuestions, setPassageQuestions] = useState<PassageQuestion[]>([]);
  const [demoExamData, setDemoExamData] = useState<DemoExamData | null>(null);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentQuestionInPassage, setCurrentQuestionInPassage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [demoExamQuestionIndex, setDemoExamQuestionIndex] = useState(0); // For demo exam mode
  const [selectedOptions, setSelectedOptions] = useState<number[][]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const scoreRef = useRef<number>(score);
  const totalQuestionsRef = useRef<number>(0);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [questionDetails, setQuestionDetails] = useState<QuestionDetail[]>([]);
  const questionDetailsRef = useRef<QuestionDetail[]>([]);
  
  // Update questionDetails reference when it changes
  useEffect(() => {
    questionDetailsRef.current = questionDetails;
  }, [questionDetails]);
  
  // Update score reference when score changes
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);
  
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
 
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Helper functions for option handling
  const getOptionText = (option: string | OptionItem): string => {
    return typeof option === 'string' ? option : option.text;
  };
  
  const getOptionImage = (option: string | OptionItem): string | undefined => {
    return typeof option === 'string' ? undefined : option.image;
  };
  
  const getOptionImageSize = (option: string | OptionItem): 'small' | 'medium' | 'large' => {
    return typeof option === 'string' ? 'medium' : (option.imageSize || 'medium');
  };
  
  // Load questions based on the mode
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        
        // Simulate a network request to make loader visible (remove in production)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Get questions for the selected mode
        if (mode === 'passage' || mode.endsWith('_passage')) {
          // Debug call
          debugQuestionsData();
          
          let loadedPassages: PassageQuestion[] = [];
          
          // Handle different passage modes
          if (mode === 'passage') {
            // General passage mode - use all passages
            loadedPassages = getAllPassageQuestions();
          } else {
            // For unit-specific passage modes, get questions using the specific mode
            const unitPassageQuestions = getAllQuestions(mode);
            console.log(`Got ${unitPassageQuestions.length} questions from getAllQuestions(${mode})`);
            
            // Group questions by their passages
            const passageGroups = new Map<string, {passage: string, questions: Question[]}>();
            
            unitPassageQuestions.forEach(q => {
              if (q.question.includes('📖 PASSAGE:')) {
                // Extract passage text and question
                const parts = q.question.split('\n\n🔸 QUESTION: ');
                if (parts.length === 2) {
                  const passageText = parts[0].replace('📖 PASSAGE: ', '');
                  const questionText = parts[1];
                  
                  // Group by passage text
                  if (!passageGroups.has(passageText)) {
                    passageGroups.set(passageText, {
                      passage: passageText,
                      questions: []
                    });
                  }
                  
                  // Add the clean question to this passage group
                  passageGroups.get(passageText)!.questions.push({
                    ...q,
                    question: questionText
                  });
                } else {
                  // Fallback for questions without passage format
                  if (!passageGroups.has('default')) {
                    passageGroups.set('default', {
                      passage: 'Unit-specific passage questions',
                      questions: []
                    });
                  }
                  passageGroups.get('default')!.questions.push(q);
                }
              } else {
                // Questions without passage format
                if (!passageGroups.has('default')) {
                  passageGroups.set('default', {
                    passage: 'Unit-specific passage questions',
                    questions: []
                  });
                }
                passageGroups.get('default')!.questions.push(q);
              }
            });
            
            // Convert grouped passages to PassageQuestion format
            loadedPassages = Array.from(passageGroups.entries()).map(([, group], index) => ({
              title: `${mode.toUpperCase().replace('_', ' ')} - Passage ${index + 1}`,
              passage: group.passage,
              questions: group.questions
            }));
            
            console.log(`Grouped into ${loadedPassages.length} distinct passages`);
            loadedPassages.forEach((passage, index) => {
              console.log(`Passage ${index + 1}: ${passage.questions.length} questions`);
            });
          }
          
          console.log(`Loaded ${loadedPassages.length} passages for mode: ${mode}`);
          
          // Re-enable the length check now that we have a reliable fallback
          if (loadedPassages.length === 0) {
            console.error(`No passage questions found for ${mode} mode. Debug: loaded ${loadedPassages.length} passages`);
            throw new Error(`No passage questions found for ${mode} mode. Debug: loaded ${loadedPassages.length} passages`);
          }
          
          console.log('Setting passage questions:', loadedPassages);
          setPassageQuestions(loadedPassages);
          
          // Calculate total questions across all passages
          const totalQuestions = loadedPassages.reduce((total, passage) => total + passage.questions.length, 0);
          totalQuestionsRef.current = totalQuestions;
          
          // Initialize arrays for tracking selected options and answered status for each question
          setSelectedOptions(new Array(totalQuestions).fill(null).map(() => []));
          setAnsweredQuestions(new Array(totalQuestions).fill(false));
          
          // Calculate total session time (2 minutes per question)
          const totalTime = calculateSessionTime(totalQuestions);
          setTimeRemaining(totalTime);
          
          // Reset passage-specific state
          setCurrentPassageIndex(0);
          setCurrentQuestionInPassage(0);
          setCurrentQuestionIndex(0);
          setScore(0);
        } else if (mode === 'demo-exam') {
          // Handle demo exam (20 MCQ + 20 from 4 passages)
          const demoData = getDemoExamQuestions();
          console.log(`Loaded demo exam: ${demoData.mcqQuestions.length} MCQ + ${demoData.passageQuestions.length} passages`);
          
          if (demoData.mcqQuestions.length === 0 && demoData.passageQuestions.length === 0) {
            throw new Error(`No demo exam questions found for ${mode} mode`);
          }
          
          setDemoExamData(demoData);
          
          // Calculate total questions (20 MCQ + 20 from passages)
          const totalPassageQuestions = demoData.passageQuestions.reduce((total, passage) => total + passage.questions.length, 0);
          const totalQuestions = demoData.mcqQuestions.length + totalPassageQuestions;
          totalQuestionsRef.current = totalQuestions;
          
          // Initialize arrays for tracking selected options and answered status for each question
          setSelectedOptions(new Array(totalQuestions).fill(null).map(() => []));
          setAnsweredQuestions(new Array(totalQuestions).fill(false));
          
          // Calculate total session time (2 minutes per question)
          const totalTime = calculateSessionTime(totalQuestions);
          setTimeRemaining(totalTime);
          
          // Reset state
          setCurrentPassageIndex(0);
          setCurrentQuestionInPassage(0);
          setCurrentQuestionIndex(0);
          setDemoExamQuestionIndex(0); // Initialize global question index for demo exam
          setScore(0);
        } else {
          // Handle regular questions
          const loadedQuestions = getAllQuestions(mode);
          console.log(`Loaded ${loadedQuestions.length} questions for mode: ${mode}`);
          
          if (loadedQuestions.length === 0) {
            throw new Error(`No questions found for ${mode} mode`);
          }
          
          setQuestions(loadedQuestions);
          totalQuestionsRef.current = loadedQuestions.length;
          
          // Initialize arrays for tracking selected options and answered status for each question
          setSelectedOptions(new Array(loadedQuestions.length).fill(null).map(() => []));
          setAnsweredQuestions(new Array(loadedQuestions.length).fill(false));
          
          // Calculate total session time (2 minutes per question)
          const totalTime = calculateSessionTime(loadedQuestions.length);
          setTimeRemaining(totalTime);
          
          // Reset other state
          setCurrentQuestionIndex(0);
          setScore(0);
        }
        
        // Start the timer only after questions are loaded
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTime) => {
              if (prevTime <= 1) {
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                }
                
                // Store detailed results in localStorage for time-up scenario
                const detailedResults: DetailedResults = {
                  score: scoreRef.current,
                  total: totalQuestionsRef.current,
                  mode,
                  timeRemaining: 0,
                  timeUp: true,
                  questionDetails: questionDetailsRef.current,
                  completedAt: new Date().toISOString()
                };
                localStorage.setItem('detailedResults', JSON.stringify(detailedResults));              router.push(`/results?score=${scoreRef.current}&total=${totalQuestionsRef.current}&mode=${mode}&timeUp=true`);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
        
        setIsLoading(false);
        setLoadingError(null);
      } catch (error) {
        console.error("Error loading questions:", error);
        setLoadingError(`Failed to load questions: ${error instanceof Error ? error.message : 'Unknown error'}`);
        setIsLoading(false);
      }
    };
    
    loadQuestions();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [mode, router]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Ignore if paused
      if (isPaused) {
        // Only allow P key to unpause
        if (e.key.toLowerCase() === 'p') {
          setIsPaused(false);
        }
        return;
      }

      const currentQuestion = getCurrentQuestion();
      const globalIndex = getGlobalQuestionIndex();
      const isAnswered = answeredQuestions[globalIndex];
      const currentSelection = selectedOptions[globalIndex] || [];

      switch(e.key.toLowerCase()) {
        case 'arrowright':
        case 'd':
          // Next question
          if (globalIndex < getTotalQuestions() - 1) {
            handleNextQuestion();
          }
          break;
        case 'arrowleft':
        case 'a':
          // Previous question
          if (globalIndex > 0) {
            goToPreviousQuestion();
          }
          break;
        case ' ':
        case 'enter':
          // Submit answer
          e.preventDefault();
          if (!isAnswered && currentSelection.length > 0) {
            submitAnswer();
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          // Select option 1-9
          e.preventDefault();
          const optionIndex = parseInt(e.key) - 1;
          if (!isAnswered && currentQuestion && optionIndex < currentQuestion.options.length) {
            const isMultiple = Array.isArray(currentQuestion.correctAnswer) && currentQuestion.correctAnswer.length > 1;
            if (isMultiple) {
              toggleOptionSelection(optionIndex);
            } else {
              handleSingleOptionSelect(optionIndex);
            }
          }
          break;
        case 'k':
          // Show keyboard shortcuts
          setShowKeyboardShortcuts(!showKeyboardShortcuts);
          break;
        case 'f':
          // Toggle fullscreen
          toggleFullscreen();
          break;
        case 'p':
          // Toggle pause
          setIsPaused(!isPaused);
          break;
        case 's':
          // Toggle sidebar
          setShowSidebar(!showSidebar);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [answeredQuestions, selectedOptions, showKeyboardShortcuts, isPaused, showSidebar, 
      currentQuestionIndex, currentPassageIndex, currentQuestionInPassage, demoExamQuestionIndex,
      questions, passageQuestions, demoExamData]);

  // Pause timer when paused
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Only start timer if not paused and time remaining
    if (!isPaused && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            const detailedResults: DetailedResults = {
              score: scoreRef.current,
              total: totalQuestionsRef.current,
              mode,
              timeRemaining: 0,
              timeUp: true,
              questionDetails: questionDetailsRef.current,
              completedAt: new Date().toISOString()
            };
            localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
            router.push(`/results?score=${scoreRef.current}&total=${totalQuestionsRef.current}&mode=${mode}&timeUp=true`);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, timeRemaining, mode, router]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  // Helper functions for passage mode
  const getCurrentQuestion = (): Question | null => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      if (passageQuestions[currentPassageIndex]?.questions[currentQuestionInPassage]) {
        return passageQuestions[currentPassageIndex].questions[currentQuestionInPassage];
      }
      return null;
    } else if (mode === 'demo-exam' && demoExamData) {
      const globalIndex = getGlobalQuestionIndex();
      // First 20 questions are MCQ
      if (globalIndex < demoExamData.mcqQuestions.length) {
        return demoExamData.mcqQuestions[globalIndex];
      } else {
        // Remaining questions are from passages
        const passageIndex = globalIndex - demoExamData.mcqQuestions.length;
        let currentPassageQuestionIndex = 0;
        for (const passage of demoExamData.passageQuestions) {
          if (currentPassageQuestionIndex + passage.questions.length > passageIndex) {
            return passage.questions[passageIndex - currentPassageQuestionIndex];
          }
          currentPassageQuestionIndex += passage.questions.length;
        }
      }
      return null;
    } else {
      return questions[currentQuestionIndex] || null;
    }
  };
  
  const getTotalQuestions = (): number => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      if (passageQuestions.length === 0) return 0;
      return passageQuestions.reduce((total, passage) => total + passage.questions.length, 0);
    } else if (mode === 'demo-exam' && demoExamData) {
      const passageQuestionCount = demoExamData.passageQuestions.reduce((total, passage) => total + passage.questions.length, 0);
      return demoExamData.mcqQuestions.length + passageQuestionCount;
    }
    return questions.length;
  };
  
  const getGlobalQuestionIndex = (): number => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      if (passageQuestions.length === 0) return 0;
      let globalIndex = 0;
      for (let i = 0; i < currentPassageIndex && i < passageQuestions.length; i++) {
        globalIndex += passageQuestions[i]?.questions?.length || 0;
      }
      return globalIndex + currentQuestionInPassage;
    } else if (mode === 'demo-exam') {
      return demoExamQuestionIndex;
    }
    return currentQuestionIndex;
  };
  
  // Check if current question requires multiple answers
  const isMultipleAnswerQuestion = (): boolean => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return false;
    return Array.isArray(currentQuestion.correctAnswer) && 
           currentQuestion.correctAnswer.length > 1;
  };

  // Get current passage for demo exam mode
  const getDemoExamCurrentPassage = (): PassageQuestion | null => {
    if (mode === 'demo-exam' && demoExamData) {
      const globalIndex = getGlobalQuestionIndex();
      const mcqCount = demoExamData.mcqQuestions.length;
      
      if (globalIndex >= mcqCount) {
        // We're in the passage section
        const passageQuestionIndex = globalIndex - mcqCount;
        let currentPassageQuestionCount = 0;
        
        for (const passage of demoExamData.passageQuestions) {
          if (passageQuestionIndex < currentPassageQuestionCount + passage.questions.length) {
            return passage;
          }
          currentPassageQuestionCount += passage.questions.length;
        }
      }
    }
    return null;
  };
  
  // Toggle option selection for multiple choice questions
  const toggleOptionSelection = (optionIndex: number) => {
    const globalIndex = getGlobalQuestionIndex();
    // Don't do anything if the question is already submitted
    if (answeredQuestions[globalIndex]) return;
    
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = [...prevSelectedOptions];
      const currentSelections = [...(newSelectedOptions[globalIndex] || [])];
      
      // Toggle the selection
      const optionPosition = currentSelections.indexOf(optionIndex);
      if (optionPosition > -1) {
        currentSelections.splice(optionPosition, 1); // Remove option if already selected
      } else {
        currentSelections.push(optionIndex); // Add option
      }
      
      // Update the array
      newSelectedOptions[globalIndex] = currentSelections;
      return newSelectedOptions;
    });
  };
  
  // Handle single option selection (for single-answer questions)
const handleSingleOptionSelect = (optionIndex: number) => {
  const globalIndex = getGlobalQuestionIndex();
  // Don't do anything if the question is already submitted
  if (answeredQuestions[globalIndex]) return;
  
  // Create a new array with just this option
  setSelectedOptions(prevSelectedOptions => {
    const newSelectedOptions = [...prevSelectedOptions];
    newSelectedOptions[globalIndex] = [optionIndex];
    return newSelectedOptions;
  });
  
  // Mark question as answered immediately
  setAnsweredQuestions(prevAnswered => {
    const newAnsweredQuestions = [...prevAnswered];
    newAnsweredQuestions[globalIndex] = true;
    return newAnsweredQuestions;
  });
  
  // Check if answer is correct
  const currentQuestion = getCurrentQuestion();
  if (!currentQuestion) return;
  
  const isCorrect = currentQuestion.correctAnswer.includes(optionIndex);
  
  // Create detailed question record
  const questionDetail: QuestionDetail = {
    questionNumber: globalIndex + 1,
    question: currentQuestion.question,
    options: currentQuestion.options,
    userAnswer: [optionIndex],
    correctAnswer: [...currentQuestion.correctAnswer],
    isCorrect: isCorrect,
    explanation: currentQuestion.explanation,
    questionType: currentQuestion.correctAnswer.length > 1 ? 'multiple' : 'single',
    image: currentQuestion.image,
    imageSize: currentQuestion.imageSize
  };
  
  // Add to question details
  setQuestionDetails(prev => [...prev, questionDetail]);
  
  if (isCorrect) {
    setScore(prevScore => prevScore + 1);
    setStreak(prevStreak => {
      const newStreak = prevStreak + 1;
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
      return newStreak;
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  } else {
    setStreak(0);
  }
};
  // Submit the answer for evaluation
  const submitAnswer = () => {
    const globalIndex = getGlobalQuestionIndex();
    
    // Don't do anything if already answered or no options selected
    if (answeredQuestions[globalIndex] || 
        !selectedOptions[globalIndex] ||
        selectedOptions[globalIndex].length === 0) {
      return;
    }
    
    // Mark question as answered
    setAnsweredQuestions(prevAnswered => {
      const newAnsweredQuestions = [...prevAnswered];
      newAnsweredQuestions[globalIndex] = true;
      return newAnsweredQuestions;
    });
    
    // Check if answer is correct
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;
    
    const currentSelections = selectedOptions[globalIndex];
    
    // Sort both arrays to ensure order doesn't matter in comparison
    const sortedSelections = [...currentSelections].sort((a, b) => a - b);
    const sortedCorrectAnswers = [...currentQuestion.correctAnswer].sort((a, b) => a - b);
    
    // Check if arrays have same length and same elements
    const isCorrect = 
      sortedSelections.length === sortedCorrectAnswers.length && 
      sortedSelections.every((value, index) => value === sortedCorrectAnswers[index]);
    
    // Create detailed question record
    const questionDetail: QuestionDetail = {
      questionNumber: globalIndex + 1,
      question: currentQuestion.question,
      options: currentQuestion.options,
      userAnswer: [...currentSelections],
      correctAnswer: [...currentQuestion.correctAnswer],
      isCorrect: isCorrect,
      explanation: currentQuestion.explanation,
      questionType: currentQuestion.correctAnswer.length > 1 ? 'multiple' : 'single',
      image: currentQuestion.image,
      imageSize: currentQuestion.imageSize
    };
    
    // Add to question details
    setQuestionDetails(prev => [...prev, questionDetail]);
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setStreak(prevStreak => {
        const newStreak = prevStreak + 1;
        if (newStreak > bestStreak) {
          setBestStreak(newStreak);
        }
        return newStreak;
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setStreak(0);
    }
  };
  
  const handleNextQuestion = () => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      // Handle passage mode navigation (including unit-specific passages)
      const currentPassage = passageQuestions[currentPassageIndex];
      if (currentQuestionInPassage < currentPassage.questions.length - 1) {
        // Move to next question in current passage
        setCurrentQuestionInPassage(currentQuestionInPassage + 1);
        setIsExplanationExpanded(true);
      } else if (currentPassageIndex < passageQuestions.length - 1) {
        // Move to first question of next passage
        setCurrentPassageIndex(currentPassageIndex + 1);
        setCurrentQuestionInPassage(0);
        setIsExplanationExpanded(true);
      } else {
        // End of all questions - navigate to results
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        const totalQuestions = getTotalQuestions();
        
        // Store detailed results in localStorage
        const detailedResults: DetailedResults = {
          score: scoreRef.current,
          total: totalQuestions,
          mode,
          timeRemaining,
          timeUp: false,
          questionDetails: questionDetailsRef.current,
          completedAt: new Date().toISOString()
        };
        localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
        
        router.push(`/results?score=${scoreRef.current}&total=${totalQuestions}&mode=${mode}&timeRemaining=${timeRemaining}`);
      }
    } else if (mode === 'demo-exam') {
      // Handle demo exam mode navigation using global index
      const totalQuestions = getTotalQuestions();
      if (demoExamQuestionIndex < totalQuestions - 1) {
        setDemoExamQuestionIndex(demoExamQuestionIndex + 1);
        setIsExplanationExpanded(true);
      } else {
        // End of questions - navigate to results
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        
        // Store detailed results in localStorage
        const detailedResults: DetailedResults = {
          score: scoreRef.current,
          total: totalQuestions,
          mode,
          timeRemaining,
          timeUp: false,
          questionDetails: questionDetailsRef.current,
          completedAt: new Date().toISOString()
        };
        localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
        
        router.push(`/results?score=${scoreRef.current}&total=${totalQuestions}&mode=${mode}&timeRemaining=${timeRemaining}`);
      }
    } else {
      // Handle regular mode navigation
      const totalQuestions = getTotalQuestions();
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsExplanationExpanded(true);
      } else {
        // End of questions - navigate to results
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        
        // Store detailed results in localStorage
        const detailedResults: DetailedResults = {
          score: scoreRef.current,
          total: totalQuestions,
          mode,
          timeRemaining,
          timeUp: false,
          questionDetails: questionDetailsRef.current,
          completedAt: new Date().toISOString()
        };
        localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
        
        router.push(`/results?score=${scoreRef.current}&total=${totalQuestions}&mode=${mode}&timeRemaining=${timeRemaining}`);
      }
    }
  };
  
  const goToQuestion = (globalIndex: number) => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      // Convert global index to passage and question indices
      let currentGlobalIndex = 0;
      for (let passageIndex = 0; passageIndex < passageQuestions.length; passageIndex++) {
        const passage = passageQuestions[passageIndex];
        for (let questionIndex = 0; questionIndex < passage.questions.length; questionIndex++) {
          if (currentGlobalIndex === globalIndex) {
            setCurrentPassageIndex(passageIndex);
            setCurrentQuestionInPassage(questionIndex);
            setShowSidebar(false);
            return;
          }
          currentGlobalIndex++;
        }
      }
    } else if (mode === 'demo-exam') {
      // Handle demo exam mode navigation
      if (globalIndex !== demoExamQuestionIndex) {
        setDemoExamQuestionIndex(globalIndex);
        setShowSidebar(false);
      }
    } else {
      // Handle regular mode navigation
      if (globalIndex !== currentQuestionIndex) {
        setCurrentQuestionIndex(globalIndex);
        setShowSidebar(false);
      }
    }
  };

  const goToPreviousQuestion = () => {
    if (mode === 'passage' || mode.endsWith('_passage')) {
      // Handle passage mode navigation
      if (currentQuestionInPassage > 0) {
        // Move to previous question in current passage
        setCurrentQuestionInPassage(currentQuestionInPassage - 1);
        setIsExplanationExpanded(true);
      } else if (currentPassageIndex > 0) {
        // Move to last question of previous passage
        setCurrentPassageIndex(currentPassageIndex - 1);
        setCurrentQuestionInPassage(passageQuestions[currentPassageIndex - 1].questions.length - 1);
        setIsExplanationExpanded(true);
      }
    } else if (mode === 'demo-exam') {
      // Handle demo exam mode
      if (demoExamQuestionIndex > 0) {
        setDemoExamQuestionIndex(demoExamQuestionIndex - 1);
        setIsExplanationExpanded(true);
      }
    } else {
      // Handle regular mode
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setIsExplanationExpanded(true);
      }
    }
  };

  // Format mode display label
  const formatModeLabel = (mode: string) => {
    if (mode.startsWith('week')) {
      return `Week ${mode.replace('week', '')}`;
    }
    if (mode === 'demo-exam') {
      return 'Demo Exam';
    }
    if (mode === 'unit1') {
      return 'UNIT-1';
    }
    if (mode === 'unit2') {
      return 'UNIT-2';
    }
    if (mode === 'unit3') {
      return 'UNIT-3';
    }
    if (mode.startsWith('unit1_')) {
      const subMode = mode.replace('unit1_', '');
      if (subMode === 'all') return 'UNIT-1 All Questions';
      if (subMode === 'passage') return 'UNIT-1 Passage Based';
      if (subMode === 'demo') return 'UNIT-1 Demo Exam';
    }
    if (mode.startsWith('unit2_')) {
      const subMode = mode.replace('unit2_', '');
      if (subMode === 'all') return 'UNIT-2 All Questions';
      if (subMode === 'passage') return 'UNIT-2 Passage Based';
      if (subMode === 'demo') return 'UNIT-2 Demo Exam';
      if (subMode.startsWith('module')) {
        const moduleNum = subMode.replace('module', '');
        return `UNIT-2 Module ${moduleNum}`;
      }
    }
    if (mode.startsWith('unit3_')) {
      const subMode = mode.replace('unit3_', '');
      if (subMode === 'all') return 'UNIT-3 All Questions';
      if (subMode === 'passage') return 'UNIT-3 Passage Based';
      if (subMode === 'demo') return 'UNIT-3 Demo Exam';
      if (subMode.startsWith('module')) {
        const moduleNum = subMode.replace('module', '');
        return `UNIT-3 Module ${moduleNum}`;
      }
    }
    if (mode.startsWith('module')) {
      const moduleNum = mode.replace('module', '');
      return `UNIT-1 Module ${moduleNum}`;
    }
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  };
  
  // Calculate number of answered questions
  const answeredCount = answeredQuestions.filter(Boolean).length;
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center p-8 bg-gray-800/70 rounded-xl backdrop-blur-md border border-gray-700/50 shadow-2xl max-w-md">
          <div className="mb-8 text-amber-400 text-2xl font-semibold">
            Loading {formatModeLabel(mode)} Questions
          </div>
          <div className="relative h-24 flex items-center justify-center mb-6">
            <div className="animate-spin w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-amber-300 font-medium">Loading</span>
            </div>
          </div>
          <div className="mt-4 text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="mt-4">Preparing your practice session...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (loadingError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/80 rounded-xl backdrop-blur-md border-l-4 border-red-500 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
              <FaExclamationCircle className="text-5xl text-red-500 relative z-10" />
            </div>
          </div>
          <div className="text-red-400 text-2xl font-semibold mb-4">Error Loading Questions</div>
          <p className="mb-8 text-gray-300">{loadingError}</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
            <FaArrowLeft className="mr-2" /> Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  // No questions state
  if (((mode === 'passage' || mode.endsWith('_passage')) && passageQuestions.length === 0) || 
      (mode === 'demo-exam' && (!demoExamData || (demoExamData.mcqQuestions.length === 0 && demoExamData.passageQuestions.length === 0))) ||
      (mode !== 'passage' && !mode.endsWith('_passage') && mode !== 'demo-exam' && questions.length === 0)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-800/80 rounded-xl backdrop-blur-md border-l-4 border-amber-500 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
              <FaExclamationCircle className="text-5xl text-amber-500 relative z-10" />
            </div>
          </div>
          <div className="text-amber-400 text-2xl font-semibold mb-4">No Questions Available</div>
          <p className="mb-8 text-gray-300">There are no questions available for the {formatModeLabel(mode)} mode.</p>
          <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg">
            <FaArrowLeft className="mr-2" /> Return to Practice Selection
          </Link>
        </div>
      </div>
    );
  }
  
  const currentQuestion = getCurrentQuestion();
  const totalQuestions = getTotalQuestions();
  const globalQuestionIndex = getGlobalQuestionIndex();
  const progressPercentage = totalQuestions > 1 ? (globalQuestionIndex / (totalQuestions - 1)) * 100 : 0;
  const isLowTime = timeRemaining < totalQuestions * 20;
  
  // Get current question state
  const currentSelectedOption = selectedOptions[globalQuestionIndex] || [];
  const isCurrentQuestionAnswered = answeredQuestions[globalQuestionIndex];
  const currentQuestionIsMultipleChoice = currentQuestion ? isMultipleAnswerQuestion() : false;
  
  // Check if current answer is correct - needed for UI feedback
  const isCurrentQuestionCorrect = isCurrentQuestionAnswered && 
    currentQuestion &&
    currentSelectedOption.length === currentQuestion.correctAnswer.length &&
    currentSelectedOption.sort().every((val, idx) => val === [...currentQuestion.correctAnswer].sort()[idx]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Confetti effect for correct answers */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 10 + 5;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            const color = ['bg-green-500', 'bg-amber-400', 'bg-blue-400', 'bg-purple-400'][Math.floor(Math.random() * 4)];
            
            return (
              <div 
                key={i}
                className={`absolute ${color} rounded-md opacity-80`}
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  left: left + '%',
                  top: '-20px',
                  animation: `confetti ${animationDuration}s ease-in forwards ${delay}s`
                }}
              ></div>
            );
          })}
        </div>
      )}

      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-gray-800/90 p-3 rounded-full shadow-lg backdrop-blur-md hover:bg-gray-700 transition-colors duration-300"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes className="text-amber-400" /> : <FaBars className="text-amber-400" />}
      </button>

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-amber-500/30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500/20 p-3 rounded-xl">
                  <FaKeyboard className="text-amber-400 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-amber-400">Keyboard Shortcuts</h2>
              </div>
              <button 
                onClick={() => setShowKeyboardShortcuts(false)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <FaTimes className="text-gray-400" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Next Question</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">→</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Previous Question</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">←</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Submit Answer</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">Space</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Select Options</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">1-9</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Toggle Sidebar</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">S</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Fullscreen</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">F</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">Pause/Resume</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">P</kbd>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300">This Menu</span>
                <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono text-amber-400">K</kbd>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
              <p className="text-sm text-amber-300 flex items-center gap-2">
                <FaLightbulb className="flex-shrink-0" />
                <span>Press <kbd className="px-2 py-0.5 bg-gray-700 rounded text-xs font-mono mx-1">K</kbd> anytime to show/hide this menu</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Control Panel - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left side - Back button and mode */}
            <div className="flex items-center gap-3">
              <Link
                href="/practice"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 rounded-lg transition-all duration-300 text-sm font-medium"
              >
                <FaArrowLeft className="text-amber-400" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-lg border border-amber-500/30">
                <FaBook className="text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">{formatModeLabel(mode)}</span>
              </div>
            </div>

            {/* Center - Streak and Score */}
            <div className="flex items-center gap-3">
              {streak > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 animate-pulse">
                  <FaFire className="text-orange-400" />
                  <span className="text-orange-300 font-bold text-sm">{streak} 🔥</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-lg border border-green-500/30">
                <FaTrophy className="text-green-400" />
                <span className="text-green-300 font-bold text-sm">{score}/{totalQuestions}</span>
              </div>
            </div>

            {/* Right side - Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowKeyboardShortcuts(true)}
                className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                title="Keyboard Shortcuts (K)"
              >
                <FaKeyboard className="text-gray-400 group-hover:text-amber-400" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isPaused 
                    ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/30' 
                    : 'bg-gray-800/80 hover:bg-gray-700'
                }`}
                title={isPaused ? 'Resume (P)' : 'Pause (P)'}
              >
                {isPaused ? (
                  <FaPlay className="text-green-400" />
                ) : (
                  <FaPause className="text-gray-400 group-hover:text-amber-400" />
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                className="hidden md:block p-2 bg-gray-800/80 hover:bg-gray-700 rounded-lg transition-all duration-300 group"
                title="Fullscreen (F)"
              >
                {isFullscreen ? (
                  <FaCompress className="text-gray-400 group-hover:text-amber-400" />
                ) : (
                  <FaExpand className="text-gray-400 group-hover:text-amber-400" />
                )}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Pause Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-45 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="text-center p-8 bg-gray-900/90 rounded-2xl border border-amber-500/30 shadow-2xl">
            <FaPause className="text-6xl text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-amber-400 mb-2">Practice Paused</h2>
            <p className="text-gray-400 mb-6">Press P or click Resume to continue</p>
            <button
              onClick={() => setIsPaused(false)}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Resume Practice
            </button>
          </div>
        </div>
      )}
      
      {/* Sidebar for question navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-gray-900/95 backdrop-blur-md transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 w-80 overflow-y-auto shadow-xl border-r border-amber-500/20`}
      >
        <div className="p-6">
          <Link href="/practice" className="flex items-center text-amber-400 hover:text-amber-300 mb-8 group transition-colors duration-300">
            <div className="bg-amber-500/10 p-2 rounded-lg mr-3 group-hover:bg-amber-500/20 transition-colors duration-300">
              <FaArrowLeft className="text-amber-400" />
            </div>
            <span className="font-medium">Back to Selection</span>
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-amber-500 mr-3 rounded-full"></div>
            <h3 className="text-lg font-semibold text-amber-300">
              {formatModeLabel(mode)} Practice
            </h3>
          </div>
          
          {/* Session info */}
          <div className="mb-8 p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl shadow-inner border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Time:</span>
              <div className={`flex items-center font-mono text-lg ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                <FaClock className={`mr-2 ${isLowTime ? 'animate-pulse' : ''}`} />
                {formatTime(timeRemaining)}
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Score:</span>
              <div className="flex items-center font-medium text-lg text-green-400">
                <FaTrophy className="mr-2 text-green-300" /> {score}/{answeredCount}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Completion:</span>
              <div className="flex items-center font-medium text-purple-400">
                <FaHistory className="mr-2" /> {Math.round((answeredCount / totalQuestionsRef.current) * 100)}%
              </div>
            </div>
          </div>
          
          <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4 flex items-center">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
            Questions Navigation
          </h4>
          
          <div className="grid grid-cols-5 gap-2 mb-8">
            {Array.from({length: totalQuestionsRef.current}, (_, index) => index).map((_, index) => {
              // Define button states
              let bgColor = "bg-gray-800 hover:bg-gray-700";
              let textColor = "text-gray-300";
              let borderStyle = "";
              let icon = null;
              
              // Current question
              if (index === globalQuestionIndex) {
                bgColor = "bg-gradient-to-br from-amber-500 to-amber-600";
                textColor = "text-black";
                borderStyle = "ring-2 ring-amber-300 ring-offset-1 ring-offset-gray-900";
              } 
              // Answered questions
              else if (answeredQuestions[index]) {
                // Get the correct answer based on mode
                let correctAnswer;
                if (mode === 'passage' || mode.endsWith('_passage')) {
                  // Find which passage and question this global index corresponds to
                  let globalIdx = 0;
                  let found = false;
                  for (const passage of passageQuestions) {
                    for (const question of passage.questions) {
                      if (globalIdx === index) {
                        correctAnswer = question.correctAnswer;
                        found = true;
                        break;
                      }
                      globalIdx++;
                    }
                    if (found) break;
                  }
                } else if (mode === 'demo-exam' && demoExamData) {
                  // For demo exam, get correct answer from the appropriate source
                  if (index < demoExamData.mcqQuestions.length) {
                    // MCQ question - add safety check
                    if (demoExamData.mcqQuestions[index]) {
                      correctAnswer = demoExamData.mcqQuestions[index].correctAnswer;
                    }
                  } else {
                    // Passage question
                    const passageIndex = index - demoExamData.mcqQuestions.length;
                    let currentPassageQuestionIndex = 0;
                    for (const passage of demoExamData.passageQuestions) {
                      if (currentPassageQuestionIndex + passage.questions.length > passageIndex) {
                        const questionIndex = passageIndex - currentPassageQuestionIndex;
                        // Add safety check for passage questions
                        if (passage.questions[questionIndex]) {
                          correctAnswer = passage.questions[questionIndex].correctAnswer;
                        }
                        break;
                      }
                      currentPassageQuestionIndex += passage.questions.length;
                    }
                  }
                } else {
                  // Regular mode - add safety check
                  if (questions[index]) {
                    correctAnswer = questions[index].correctAnswer;
                  }
                }
                
                if (correctAnswer) {
                  // Sort both arrays for comparison
                  const selectedSorted = [...(selectedOptions[index] || [])].sort();
                  const correctSorted = [...correctAnswer].sort();
                  
                  // Check if arrays match
                  const isCorrect = 
                    selectedSorted.length === correctSorted.length &&
                    selectedSorted.every((val, idx) => val === correctSorted[idx]);
                  
                  if (isCorrect) {
                    bgColor = "bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600";
                    textColor = "text-white";
                    icon = <FaCheckCircle className="text-xs absolute bottom-0.5 right-0.5 text-green-300" />;
                  } else {
                    bgColor = "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600";
                    textColor = "text-white";
                    icon = <FaTimesCircle className="text-xs absolute bottom-0.5 right-0.5 text-red-300" />;
                  }
                }
              }
              
              return (
                <button
                  key={index}
                  className={`aspect-square flex items-center justify-center rounded-lg ${bgColor} ${textColor} ${borderStyle} text-sm font-medium transition-all duration-200 relative`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                  {icon}
                </button>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 rounded-xl border border-gray-700/50 shadow-inner">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-3 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Session Progress
            </h4>
            <div className="w-full h-3 bg-gray-700/80 rounded-full overflow-hidden mb-3 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex items-center">
                <FaBrain className="mr-1 text-amber-400" /> 
                <span>Q{globalQuestionIndex + 1}</span>
              </div>
              <div className="flex items-center">
                <span>Total: {totalQuestions}</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h4 className="text-xs uppercase text-gray-500 mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded mr-2"></div>
                <span className="text-gray-400">Current Question</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-600 to-green-700 rounded mr-2"></div>
                <span className="text-gray-400">Correct Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-br from-red-600 to-red-700 rounded mr-2"></div>
                <span className="text-gray-400">Incorrect Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-800 rounded mr-2"></div>
                <span className="text-gray-400">Not Attempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content - Restructured Layout */}
      <div className="md:ml-80 transition-all duration-300 relative z-10 pt-24">
        <div className="container mx-auto px-4 py-6 pb-24">
          <div className="max-w-6xl mx-auto">
            
            {/* Question Header Card */}
            <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/95 rounded-2xl p-6 mb-6 border border-gray-700/50 shadow-2xl backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-xl border border-amber-500/30">
                    <FaBrain className="text-amber-400 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-amber-400">
                      Question {globalQuestionIndex + 1}
                    </h2>
                    <p className="text-gray-400 text-sm">of {totalQuestions} questions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Timer */}
                  <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border ${
                    isLowTime 
                      ? 'bg-red-900/30 border-red-500/50' 
                      : 'bg-gray-800/80 border-gray-700/50'
                  }`}>
                    <FaClock className={`text-xl ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                    <span className={`font-mono text-xl font-bold ${isLowTime ? 'text-red-400' : 'text-amber-400'}`}>
                      {formatTime(timeRemaining)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-green-500 rounded-full transition-all duration-700 ease-out relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 blur-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Question Content Card - Restructured */}
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-lg overflow-hidden">
              
              {/* Passage Section - Enhanced Display */}
              {(((mode === 'passage' || mode.endsWith('_passage')) && passageQuestions.length > 0) || (mode === 'demo-exam' && getDemoExamCurrentPassage())) && (
                <div className="p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-b border-blue-500/20">
                  {/* Passage Header */}
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-blue-500/30 to-indigo-500/30 p-3 rounded-xl mr-4 shadow-lg">
                      <FaBook className="text-blue-300 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-200 mb-2">
                        {(mode === 'passage' || mode.endsWith('_passage')) ? 
                          (passageQuestions[currentPassageIndex]?.title || 'Loading...') : 
                          (getDemoExamCurrentPassage()?.title || 'Loading...')}
                      </h3>
                      <div className="text-sm text-blue-400/80 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                        {(mode === 'passage' || mode.endsWith('_passage')) ? (
                          <>Question {currentQuestionInPassage + 1} of {passageQuestions[currentPassageIndex]?.questions.length || 0} in this passage</>
                        ) : (
                          <>Passage-based question</>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Passage Content */}
                  <div className="bg-gray-900/40 rounded-xl p-6 border border-blue-500/10 shadow-inner">
                    <div className="prose prose-invert prose-lg max-w-none">
                      <p className="text-gray-200 leading-loose whitespace-pre-wrap text-base">
                        {(mode === 'passage' || mode.endsWith('_passage')) ? 
                          (passageQuestions[currentPassageIndex]?.passage || 'Loading passage text...') : 
                          (getDemoExamCurrentPassage()?.passage || 'Loading passage text...')}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Question Section */}
              <div className="p-8">
                {/* Question Type Badge */}
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-2 rounded-xl ${
                    currentQuestionIsMultipleChoice 
                      ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30' 
                      : 'bg-gradient-to-r from-amber-600/30 to-orange-600/30 border border-amber-500/30'
                  } flex items-center shadow-lg backdrop-blur-sm`}>
                    <FaInfoCircle className={`mr-2 ${currentQuestionIsMultipleChoice ? 'text-purple-300' : 'text-amber-300'}`} />
                    <span className={`font-medium ${currentQuestionIsMultipleChoice ? 'text-purple-200' : 'text-amber-200'}`}>
                      {currentQuestionIsMultipleChoice ? 'Select all that apply' : 'Select one answer'}
                    </span>
                  </div>
                </div>
                
                {/* Question Text */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                    <pre className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 whitespace-pre-wrap font-sans">
                      {currentQuestion?.question || "Question not available"}
                    </pre>
                  </h2>
                </div>
                
                {/* Question Image */}
                {currentQuestion?.image && validateImagePath(currentQuestion.image) && (
                  <div className="mb-8 flex justify-center">
                    <div className={`bg-white p-6 rounded-xl shadow-2xl border-4 border-gray-700/30 w-full ${
                      currentQuestion.imageSize === 'small' ? 'max-w-md' :
                      currentQuestion.imageSize === 'medium' ? 'max-w-lg' :
                      currentQuestion.imageSize === 'large' ? 'max-w-2xl' :
                      currentQuestion.imageSize === 'full' ? 'max-w-full' :
                      'max-w-2xl'
                    }`}>
                      <div className="mb-3 text-center">
                        <span className="text-sm text-gray-700 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                          {getImageDisplayName(currentQuestion.image)}
                        </span>
                      </div>
                      {currentQuestion.image.endsWith('.svg') ? (
                        <Image
                          src={currentQuestion.image} 
                          alt={`Diagram: ${getImageDisplayName(currentQuestion.image)}`}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-md"
                          onError={() => {
                            console.error('Failed to load image:', currentQuestion.image);
                          }}
                        />
                      ) : (
                        <Image
                          src={currentQuestion.image}
                          alt={`Diagram: ${getImageDisplayName(currentQuestion.image)}`}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-md"
                          onError={() => {
                            console.error('Failed to load image:', currentQuestion.image);
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
                
                {/* Options Section - Enhanced */}
                <div className="space-y-3">
                {currentQuestion?.options?.map((option, index) => {
                  const optionText = getOptionText(option);
                  const optionImage = getOptionImage(option);
                  const optionImageSize = getOptionImageSize(option);
                  
                  // Enhanced styling for better UX
                  const baseStyle = "w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start border-2 transform hover:scale-[1.02] hover:shadow-2xl";
                  let dynamicStyle = "bg-gradient-to-r from-gray-800/90 to-gray-800/70 hover:from-gray-700/90 hover:to-gray-700/70 border-gray-700/50 hover:border-gray-600";
                  
                  // Icon component with enhanced visuals
                  let iconComponent = currentQuestionIsMultipleChoice ? (
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 text-gray-300 shadow-lg">
                      {currentSelectedOption.includes(index) ? <FaCheckSquare className="text-lg" /> : <FaSquare className="text-lg" />}
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-600 text-gray-300 font-bold text-lg shadow-lg">
                      {String.fromCharCode(65 + index)}
                    </div>
                  );
                  
                  // State-based styling with enhanced visuals
                  if (isCurrentQuestionAnswered) {
                    if (currentQuestion.correctAnswer.includes(index)) {
                      dynamicStyle = "bg-gradient-to-r from-green-900/60 to-green-800/60 border-green-500 shadow-green-500/50 text-white font-semibold";
                      iconComponent = currentQuestionIsMultipleChoice ? (
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl">
                          <FaCheckSquare className="text-lg" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl">
                          <FaCheck className="text-lg" />
                        </div>
                      );
                    } else if (currentSelectedOption.includes(index)) {
                      // Selected but incorrect with enhanced error styling
                      dynamicStyle = "bg-gradient-to-r from-red-900/60 to-red-800/60 border-red-500 shadow-red-500/50 text-white";
                      iconComponent = currentQuestionIsMultipleChoice ? (
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl">
                          <FaTimesCircle className="text-lg" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl">
                          <FaTimes className="text-lg" />
                        </div>
                      );
                    } else {
                      // Not selected and not correct - dimmed
                      dynamicStyle = "bg-gray-800/40 border-gray-700/30 opacity-50";
                    }
                  } else if (currentSelectedOption.includes(index)) {
                    // Selected but not yet answered - highlighted selection
                    dynamicStyle = "bg-gradient-to-r from-amber-900/60 to-orange-900/60 border-amber-500 shadow-amber-500/50";
                    iconComponent = currentQuestionIsMultipleChoice ? (
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-xl">
                        <FaCheckSquare className="text-lg" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-lg shadow-xl">
                        {String.fromCharCode(65 + index)}
                      </div>
                    );
                  }
                  
                  // Handle option click
                  const handleOptionClick = () => {
                    if (currentQuestionIsMultipleChoice) {
                      toggleOptionSelection(index);
                    } else {
                      handleSingleOptionSelect(index);
                    }
                  };
                  
                  return (
                    <button
                      key={index}
                      className={`${baseStyle} ${dynamicStyle} relative group`}
                      onClick={handleOptionClick}
                      disabled={isCurrentQuestionAnswered}
                    >
                      {/* Enhanced keyboard shortcut badge - Hidden on mobile - Shows for options 1-9 */}
                      {!isCurrentQuestionAnswered && index < 9 && (
                        <div className="hidden md:flex absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-2 border-gray-800 items-center justify-center text-sm font-bold text-white shadow-xl group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                      )}
                      
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        {iconComponent}
                      </div>
                      
                      {/* Option content */}
                      <div className="ml-5 flex-1">
                        <div className="text-lg font-medium text-left leading-relaxed">{optionText}</div>
                        
                        {/* Option image */}
                        {optionImage && validateImagePath(optionImage) && (
                          <div className={`mt-4 ${
                            optionImageSize === 'small' ? 'max-w-xs' :
                            optionImageSize === 'medium' ? 'max-w-sm' :
                            'max-w-md'
                          }`}>
                            <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-gray-300">
                              {optionImage.endsWith('.svg') ? (
                                <Image
                                  src={optionImage} 
                                  alt={`Option ${String.fromCharCode(65 + index)} image`}
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded"
                                  onError={() => {
                                    console.error('Failed to load option image:', optionImage);
                                  }}
                                />
                              ) : (
                                <Image
                                  src={optionImage}
                                  alt={`Option ${String.fromCharCode(65 + index)} image`}
                                  width={400}
                                  height={300}
                                  className="w-full h-auto rounded"
                                  onError={() => {
                                    console.error('Failed to load option image:', optionImage);
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
                </div>
                
                {/* Submit Button - Enhanced for Multiple Choice */}
                {currentQuestionIsMultipleChoice && (
                  <div className="mt-8 flex justify-center">
                    <button
                      className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center min-w-[240px] shadow-xl transform hover:scale-105 ${
                      !answeredQuestions[globalQuestionIndex] && selectedOptions[globalQuestionIndex]?.length > 0
                        ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-black shadow-amber-500/50"
                        : "bg-gray-700/50 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={submitAnswer}
                    disabled={answeredQuestions[globalQuestionIndex] || !selectedOptions[globalQuestionIndex]?.length}
                  >
                    {answeredQuestions[globalQuestionIndex] ? (
                      <>
                        <FaCheck className="mr-3 text-xl" /> Submitted
                      </>
                    ) : (
                      <>
                        <span className="mr-2">Submit Answer</span>
                        <span className="hidden md:inline text-sm opacity-75">(Space)</span>
                      </>
                    )}
                  </button>
                </div>
                )}
              </div>
            </div>
            
            {/* Streak Celebration Message */}
            {isCurrentQuestionAnswered && isCurrentQuestionCorrect && streak > 2 && (
              <div className="mb-8 bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-6 border border-orange-500/50 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500/30 p-3 rounded-xl animate-bounce">
                      <FaFire className="text-orange-400 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-300">
                        {streak} {streak === 3 ? 'Correct Answers' : streak < 5 ? 'in a Row!' : streak < 10 ? 'Streak! You\'re on Fire! 🔥' : 'Amazing Streak! Unstoppable! 🚀'}
                      </h3>
                      <p className="text-orange-200 text-sm">
                        {bestStreak > streak ? `Best: ${bestStreak} | ` : ''}Keep it going!
                      </p>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-orange-400">{streak}🔥</div>
                </div>
              </div>
            )}
            
            {/* Explanation section - shown after answering */}
            {isCurrentQuestionAnswered && (
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl border border-gray-700/50 overflow-hidden shadow-xl backdrop-blur-md mb-8 transition-all duration-500">
                <div 
                  className={`p-5 flex items-center justify-between cursor-pointer ${
                    isCurrentQuestionCorrect ? 'bg-green-900/30' : 'bg-red-900/30'
                  }`}
                  onClick={() => setIsExplanationExpanded(!isExplanationExpanded)}
                >
                  <div className="flex items-center">
                    {isCurrentQuestionCorrect ? (
                      <div className="bg-green-500/20 p-2 rounded-full mr-3">
                        <FaCheckCircle className="text-green-400" />
                      </div>
                    ) : (
                      <div className="bg-red-500/20 p-2 rounded-full mr-3">
                        <FaTimesCircle className="text-red-400" />
                      </div>
                    )}
                    <h3 className="font-medium">
                      {isCurrentQuestionCorrect ? 'Correct!' : 'Incorrect'} — Explanation
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 ${isExplanationExpanded ? 'rotate-90' : ''}`}>
                    <FaChevronRight />
                  </div>
                </div>
                
                {isExplanationExpanded && (
                  <div className="p-6 border-t border-gray-700/50">
                    <div className="mb-5">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                        <h4 className="font-medium text-amber-300">Correct Answer{(currentQuestion?.correctAnswer?.length || 0) > 1 ? 's' : ''}:</h4>
                      </div>
                      <ul className="list-disc list-inside pl-4 text-gray-300 space-y-1">
                        {currentQuestion?.correctAnswer.map((index) => (
                          <li key={index} className="text-green-300">
                            {currentQuestion && getOptionText(currentQuestion.options[index])}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center mb-3">
                        <FaLightbulb className="text-amber-400 mr-2" />
                        <h4 className="font-medium text-amber-300">Explanation:</h4>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg text-gray-300 leading-relaxed">
                        {currentQuestion?.explanation || "No explanation available"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Floating Pro Tips Icon - Right Side - Hidden on Mobile */}
            <div className="hidden md:block fixed right-6 bottom-24 z-30 group">
              {/* Tooltip Card - Shows on Hover */}
              <div className="absolute right-full mr-4 bottom-0 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                <div className="bg-gradient-to-br from-indigo-900/95 to-purple-900/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-indigo-500/50 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <FaLightbulb className="text-yellow-400 text-lg" />
                    <h4 className="font-bold text-indigo-200">Pro Tips</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-amber-400">1-9</kbd> to select options
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      Use <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-amber-400">→</kbd> <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-amber-400">←</kbd> to navigate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-indigo-400">•</span>
                      Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs font-mono text-amber-400">K</kbd> for all shortcuts
                    </li>
                    {bestStreak > 0 && (
                      <li className="flex items-center gap-2 text-orange-300 font-medium pt-2 border-t border-indigo-500/30">
                        <FaTrophy className="text-yellow-400" />
                        Best streak: {bestStreak} correct!
                      </li>
                    )}
                  </ul>
                </div>
                {/* Arrow pointer */}
                <div className="absolute right-0 bottom-6 transform translate-x-1/2">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-indigo-500/50"></div>
                </div>
              </div>
              
              {/* Floating Icon Button */}
              <button className="relative bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 p-4 rounded-full shadow-2xl border-2 border-indigo-400/50 hover:border-indigo-300 transition-all duration-300 transform hover:scale-110 group-hover:shadow-indigo-500/50">
                <FaLightbulb className="text-yellow-300 text-xl" />
                {/* Pulse animation ring */}
                <span className="absolute inset-0 rounded-full bg-indigo-400/30 animate-ping"></span>
              </button>
            </div>
            
            {/* Navigation Buttons - Enhanced - Fixed on Mobile */}
            <div className="flex justify-between items-center mt-12 md:mt-12 gap-4 md:relative fixed bottom-0 left-0 right-0 bg-gray-900/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none p-4 md:p-0 border-t md:border-t-0 border-gray-800/50 z-40">
              <button
                className={`flex-1 md:flex-initial px-4 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 md:gap-3 font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
                  globalQuestionIndex > 0
                    ? "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white border-2 border-gray-600/50 hover:border-gray-500 transform hover:scale-105 hover:shadow-xl"
                    : "bg-gray-800/30 text-gray-600 cursor-not-allowed border-2 border-gray-700/30"
                }`}
                onClick={() => {
                  if (globalQuestionIndex > 0) {
                    goToQuestion(globalQuestionIndex - 1);
                  }
                }}
                disabled={globalQuestionIndex === 0}
              >
                <FaArrowLeft className="text-lg md:text-xl" />
                <span>Previous</span>
                {globalQuestionIndex > 0 && (
                  <kbd className="hidden md:inline ml-2 px-2 py-1 bg-gray-900/50 rounded text-xs font-mono text-amber-400">←</kbd>
                )}
              </button>
              
              <button
                className={`flex-1 md:flex-initial px-4 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 md:gap-3 font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
                  answeredQuestions[globalQuestionIndex]
                    ? "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black border-2 border-amber-400/50 hover:border-yellow-400 transform hover:scale-105 shadow-amber-500/50"
                    : "bg-gray-800/30 text-gray-600 cursor-not-allowed border-2 border-gray-700/30"
                }`}
                onClick={handleNextQuestion}
                disabled={!answeredQuestions[globalQuestionIndex]}
              >
                {globalQuestionIndex < totalQuestionsRef.current - 1 ? (
                  <>
                    <span>Next</span>
                    <FaArrowRight className="text-lg md:text-xl" />
                    {answeredQuestions[globalQuestionIndex] && (
                      <kbd className="hidden md:inline ml-1 px-2 py-1 bg-black/30 rounded text-xs font-mono text-amber-200">→</kbd>
                    )}
                  </>
                ) : (
                  <>
                    <span>Finish</span>
                    <FaTrophy className="text-lg md:text-xl" />
                  </>
                )}
              </button>
            </div>
            
            {/* Spacer for fixed mobile navigation */}
            <div className="md:hidden h-20"></div>
          </div>
        </div>
      </div>
      
      {/* CSS for confetti animation */}
      <style jsx global>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Feedback Popup - Auto shows during practice session */}
      <FeedbackPopup />
    </div>
  );
}