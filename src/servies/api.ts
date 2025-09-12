import axios from "axios";
import type { CareerData, QuizAnswer, QuizQuestion, QuizResult } from "./types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

//fetch quizes
export const fetchQuizes = async (
  classLevel: "10" | "12"
): Promise<QuizQuestion[]> => {
  const res = await api.get("/quiz", {
    params: { classLevel },
  });

  return res.data;
};

//submit quiz answer
export const submitAnswers = async (
  answers: QuizAnswer[]
): Promise<QuizResult> => {
  const res = await api.post<QuizResult>("/quiz/submit", { answers });
  return res.data;
};

//fetch Careers
export const getCareers = async (
  stream?: "Science" | "Commerce" | "Arts" | null
): Promise<CareerData[]> => {
  const res = await api.get("/careers", {
    params: stream ? { stream } : {},
  });
  return res.data;
};
