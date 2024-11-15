import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { evaluationInitialState } from "../state/evaluationInitialState";
import { IProgressData } from "../models/progressModel";

export const evaluationSlice = createSlice({
  name: "evaluation",
  initialState: evaluationInitialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setIntroduction: (state, action: PayloadAction<IProgressData>) => {
      state.introduction = action.payload;
    },
    setExcercises: (state, action: PayloadAction<IProgressData>) => {
      state.excercise = action.payload;
    },
    setEvaluation: (state, action: PayloadAction<IProgressData>) => {
      state.evaluation = action.payload;
    },
    setTypeQuestions:(state, action: PayloadAction<number>) => {
      state.typeQuestions = action.payload;
    },
  },
});

export const {
  setProgress,
  setLoading,
  setIntroduction,
  setExcercises,
  setEvaluation,
  setTypeQuestions
} = evaluationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const evaluationSelector = (state: RootState) => state.evaluation;

export default evaluationSlice.reducer;
