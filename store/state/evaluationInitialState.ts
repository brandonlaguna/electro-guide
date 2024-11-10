import { IEvaluationModel } from "../models/evaluationModel";
import { IProgressData } from "../models/progressModel";

const initialProgressData: IProgressData = {
  progressName: "",
  totalProgress: 0,
  completedProgress: 0,
  stepsValues: [],
  questionnaire: {
    total: 0,
    correct: 0,
  },
};
export const evaluationInitialState: IEvaluationModel = {
  progress: 0,
  loading: false,
  introduction: { ...initialProgressData, progressName: "introduction" },
  excercise: { ...initialProgressData, progressName: "excercise" },
  evaluation: { ...initialProgressData, progressName: "evaluation" },
  typeQuestions: 0,
};
