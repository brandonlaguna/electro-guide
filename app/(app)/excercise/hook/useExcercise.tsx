import { IData } from "@/components/Questionnaire/models/questionnaireModel";
import { useStorageState } from "@/hooks/useStorageState";
import {
  evaluationSelector,
  setExcercises,
  setLoading,
} from "@/store/slices/evaluationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import { IProgressData } from "@/store/models/progressModel";
import { router } from "expo-router";

const getRandomTypeAnswer = (exclude: number) => {
  let newTypeAnswer;
  do {
    newTypeAnswer = Math.floor(Math.random() * 3) + 1;
  } while (newTypeAnswer === exclude);
  return newTypeAnswer;
};

export const useExcercise = () => {
  const dispatch = useDispatch();
  const { excercise } = useSelector(evaluationSelector);
  const [indexStep, setIndexStep] = useState<number>(0);
  const [renderStep, setRenderStep] = useState<IData | null>(null);
  const [typeAnswers, setTypeAnswers] = useState<number>(1);
  const [responseAnswer, setResponseAnswer] = useState<number>(0);

  const [[isLoadingExcercise, databaseExcercise], setDatabaseExcercise] =
    useStorageState("excercise");

  const steps: IData[] = data;

  const handleSaveData = async () => {
    if (excercise !== null) {
      let progressData: IProgressData = {
        ...excercise,
        totalProgress: steps.length,
        completedProgress: indexStep + 1,
        questionnaire: {
          ...excercise.questionnaire,
          correct: responseAnswer,
        },
      };
      dispatch(setExcercises(progressData));
      setDatabaseExcercise(JSON.stringify(progressData));
    }
  };

  const getRenderView = (indexView: number) => {
    const localView = steps;
    if (indexView >= 0 && indexView <= localView.length) {
      return localView[indexView];
    } else {
      return localView[0];
    }
  };

  const handleBackStep = () => {
    dispatch(setLoading(true));
    if (excercise) {
      let localIntroduction = excercise;
      setIndexStep(indexStep - 1);
      setRenderStep(getRenderView(indexStep - 1));
    }
    dispatch(setLoading(false));
  };
  const handleNextStep = async () => {
    dispatch(setLoading(true));
    const limitStep = steps.length - 1;
    if (indexStep < limitStep) {
      if (excercise) {
        let localIntroduction = excercise;
        setIndexStep(indexStep + 1);
        setRenderStep(getRenderView(indexStep + 1));
      }
    } else {
      await handleSaveData().then(() => {
        setIndexStep(0);
        setResponseAnswer(0);
        setRenderStep(getRenderView(0));
        router.push("/home");
      });
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (excercise != undefined) {
      dispatch(setExcercises(excercise));
    } else {
      dispatch(
        setExcercises({
          progressName: "",
          totalProgress: steps.length,
          completedProgress: 0,
          stepsValues: [],
          questionnaire: {
            total: steps.length,
            correct: 0,
          },
        })
      );
    }
    setRenderStep(getRenderView(indexStep));
  }, []);

  useEffect(() => {
    const objectValue: IProgressData = JSON.parse(databaseExcercise ?? "{}");
    if (objectValue !== undefined || objectValue !== null) {
      /** Reset database */
      const initialValues: IProgressData = {
        progressName: "excercise",
        totalProgress: steps.length,
        completedProgress: 0,
        stepsValues: [],
        questionnaire: {
          total: steps.length,
          correct: 0,
        },
      };
      console.log("🚀 REINICIANDO VALORES DE EXCERCISE:", initialValues);
      setDatabaseExcercise(JSON.stringify(initialValues));
      dispatch(setExcercises(initialValues));
    }
  }, [isLoadingExcercise]);

  return {
    excercise,
    indexStep,
    renderStep,
    typeAnswers,
    responseAnswer,
    handleBackStep,
    handleNextStep,
  };
};
