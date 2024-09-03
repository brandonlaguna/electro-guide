export interface IProgressData {
  progressName: string;
  totalProgress: number;
  completedProgress: number;
  stepsValues: IStepsValues[];
  questionnaire: IQuestionnaireProgress;
}

export interface IStepsValues {
  id: number;
  value: number;
  completed: boolean;
}

export interface IQuestionnaireProgress {
  total: number;
  correct: number;
}
