import { IAnswers } from "@/components/Questionnaire/models/questionnaireModel";

export type Question = {
  id: string;
  type: "multiple" | "trueFalse" | "open";
  questionText: string;
  options?: IAnswers[]; // Solo para tipo múltiple
  answer: string | boolean;
};

export type Level = {
  levelId: string;
  questions: Question[];
};
