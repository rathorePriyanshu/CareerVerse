export interface QuizOption {
  id: string;
  text: string;
  stream: "Science" | "Commerce" | "Arts";
  skills: string[];
}

export interface QuizQuestion {
  id: string;
  classLevel: "10" | "12";
  question: string;
  options: QuizOption[];
}

export interface QuizAnswer {
  questionId: string;
  selectedOptionId: string;
}

export interface QuizResult {
  recommendedStream: "Science" | "Commerce" | "Arts";
  topskills: string[];
  careers: { title: string; description?: string }[];
  aiFeedback: string;
}

export interface CareerRoadmap {
  title: string;
  steps: string[];
}

export interface CareerColleges {
  name: string;
  description: string;
}

export interface CareerData {
  title: string;
  description: string;
  stream: "Science" | "Commerce" | "Arts";
  avgSalary: string;
  topColleges: CareerColleges[];
  roadmap: CareerRoadmap[];
  img: string;
}
