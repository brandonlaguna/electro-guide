import { IData } from "@/components/Questionnaire/models/questionnaireModel";
import { evaluationSelector } from "@/store/slices/evaluationSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useExcercise = () => {
  const { excercise } = useSelector(evaluationSelector);
  const [indexStep, setIndexStep] = useState<number>(0);
  const [renderStep, setRenderStep] = useState<IData | null>(null);
  const [typeAnswers, setTypeAnswers] = useState<number>(1);
  const [responseAnswer, setResponseAnswer] = useState<number>(0);

  const handleBackStep = () => {};
  const handleNextStep = () => {};

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
