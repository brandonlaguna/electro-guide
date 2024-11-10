import { IProgressData } from "./progressModel";

export interface IEvaluationModel {
  introduction: IProgressData | null;
  excercise: IProgressData | null;
  evaluation: IProgressData | null;
  progress: number;
  loading: boolean;
  typeQuestions: number;
}
