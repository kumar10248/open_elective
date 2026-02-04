export interface OptionItem {
  text: string;
  image?: string;
  imageSize?: 'small' | 'medium' | 'large';
}

export interface Question {
  question: string;
  options: (string | OptionItem)[]; // Support both simple strings and enhanced options with images
  correctAnswer: number[]; // Now all questions use an array for correctAnswers
  explanation: string;
  image?: string; // Optional image URL for questions that need visual aids
  imageSize?: 'small' | 'medium' | 'large' | 'full'; // Optional image size control
}

export interface PassageQuestion {
  title: string;
  passage: string;
  questions: Question[];
}

export interface WeekQuestions {
  [key: string]: Question[];
}

export interface UnitQuestions {
  module1: Question[];
  module2: Question[];
  module3: Question[];
  module4: Question[];
  module5: Question[];
  module6: Question[];
  module7: Question[];
  assignment: Question[];
  passage_based_questions: PassageQuestions;
}

export interface AllQuestionsData {
  unit1: UnitQuestions;
  unit2: UnitQuestions;
  unit3: UnitQuestions;
}

export type PracticeMode = 
  // Unit 1 modules
  'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6' | 'module7' |
  // Unit 2 modules
  'unit2_module1' | 'unit2_module2' | 'unit2_module3' | 'unit2_module4' | 'unit2_module5' | 'unit2_module6' | 'unit2_module7' |
  // Unit 3 modules
  'unit3_module1' | 'unit3_module2' | 'unit3_module3' | 'unit3_module4' | 'unit3_module5' | 'unit3_module6' | 'unit3_module7' |
  // Unit specific modes
  'unit1' | 'unit2' | 'unit3' |
  // Unit-specific special modes
  'unit1_assignment' | 'unit1_passage' | 'unit1_demo' | 'unit1_all' |
  'unit2_assignment' | 'unit2_passage' | 'unit2_demo' | 'unit2_all' |
  'unit3_assignment' | 'unit3_passage' | 'unit3_demo' | 'unit3_all' |
  // Global modes
  'all' | 'assignment' | 'passage' | 'demo-exam';

export interface PassageQuestions {
  [key: string]: PassageQuestion;
}

export interface DemoExamData {
  mcqQuestions: Question[];
  passageQuestions: PassageQuestion[];
}

export interface PracticeOption {
  id: PracticeMode;
  label: string;
  icon: React.ReactNode | string;
}

export interface SessionStats {
  questionsAnswered: number;
  correctAnswers: number;
  timeRemaining: number;
  totalQuestions: number;
  mode: PracticeMode;
}

export interface QuestionDetail {
  questionNumber: number;
  question: string;
  options: (string | OptionItem)[];
  userAnswer: number[];
  correctAnswer: number[];
  isCorrect: boolean;
  explanation: string;
  questionType: 'single' | 'multiple';
  image?: string;
  imageSize?: 'small' | 'medium' | 'large' | 'full';
}

export interface DetailedResults {
  score: number;
  total: number;
  mode: PracticeMode;
  timeRemaining: number;
  timeUp: boolean;
  questionDetails: QuestionDetail[];
  completedAt: string;
}