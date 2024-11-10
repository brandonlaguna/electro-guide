import { useEffect, useState } from "react";
import { data } from "../data";
import { useStorageState } from "@/hooks/useStorageState";
import { IProgressData } from "@/store/models/progressModel";
import {
  IData,
  IQuestionnaire,
} from "@/components/Questionnaire/models/questionnaireModel";
import QuestionnaireView from "../Contents/QuestionnaireView";
import { questionnaire } from "../data/questionnaire";
import { useDispatch, useSelector } from "react-redux";
import {
  evaluationSelector,
  setIntroduction,
  setLoading,
} from "@/store/slices/evaluationSlice";
import { router } from "expo-router";

const getRandomTypeAnswer = (exclude: number) => {
  let newTypeAnswer;
  do {
    newTypeAnswer = Math.floor(Math.random() * 3) + 1;
  } while (newTypeAnswer === exclude);
  return newTypeAnswer;
};

const useIntroduction = () => {
  const dispatch = useDispatch();
  const [indexStep, setIndexStep] = useState<number>(0);
  const [renderStep, setRenderStep] = useState<IData | null>(null);
  const [typeAnswers, setTypeAnswers] = useState<number>(
    Math.floor(Math.random() * 3) + 1
  );
  const [responseAnswer, setResponseAnswer] = useState<number>(0);
  const { introduction, typeQuestions } = useSelector(evaluationSelector);

  const [
    [isLoadingIntroduction, databaseIntroduction],
    setDatabaseIntroduction,
  ] = useStorageState("introduction");

  const steps: IData[] = data;
  const questionnaireQuestions: IQuestionnaire[] = questionnaire.filter(
    (q) => q.type === typeAnswers
  );

  const handleSaveData = async () => {
    if (introduction !== null) {
      let progressData: IProgressData = {
        ...introduction,
        totalProgress: steps.length + questionnaireQuestions.length - 1,
        completedProgress: indexStep,
        questionnaire: {
          total: questionnaireQuestions.length,
          correct: responseAnswer,
        },
      };
      dispatch(setIntroduction(progressData));
      setDatabaseIntroduction(JSON.stringify(progressData));
    }
  };

  const getRenderView = (indexView: number) => {
    const questionStep = getQuestionnaireView(
      questionnaireQuestions,
      typeAnswers,
      steps.length + 1
    );
    const localView = [...steps, ...questionStep];
    if (indexView >= 0 && indexView <= localView.length) {
      return localView[indexView];
    } else {
      return localView[0];
    }
  };

  const handleBackStep = () => {
    dispatch(setLoading(true));
    if (introduction) {
      let localIntroduction = introduction;
      setIndexStep(indexStep - 1);
      setRenderStep(getRenderView(indexStep - 1));
    }
    dispatch(setLoading(false));
  };

  const handleNextStep = async () => {
    dispatch(setLoading(true));
    const limitStep = steps.length + questionnaireQuestions.length - 1;
    if (indexStep < limitStep) {
      if (introduction) {
        let localIntroduction = introduction;
        setIndexStep(indexStep + 1);
        setRenderStep(getRenderView(indexStep + 1));
      }
    } else {
      await handleSaveData().then(() => {
        console.log("vamos a gurdar todo a la bd", responseAnswer);
        setIndexStep(0);
        setResponseAnswer(0);
        setRenderStep(getRenderView(0));
        router.push("/home");
      });
    }
    dispatch(setLoading(false));
  };

  // metodo que crea una lista de vistas de steps con las preguntas y respuestas seleccionada
  const getQuestionnaireView = (
    questions: IQuestionnaire[],
    type: number,
    sequence: number
  ) => {
    const questionnaireViews: IData[] = [];
    const totalQuestionnaire: number = questions.length - 1;
    questions.map((q, index) => {
      if (q.type === type) {
        questionnaireViews.push({
          id: sequence + index,
          title: q.question,
          subTitle: "",
          content: (
            <QuestionnaireView
              answers={q.answers}
              handleAnswer={(answer, value) => {
                setResponseAnswer(responseAnswer + value);
              }}
              idQuestion={sequence + index}
            />
          ),
          images: [],
          disableBack: true,
          disableNext: false,
        });
      }
    });
    return questionnaireViews;
  };

  useEffect(() => {
    console.log("primera carga de introduccion", introduction?.questionnaire);
    if (introduction != undefined) {
      dispatch(setIntroduction(introduction));
    }
    setRenderStep(getRenderView(indexStep));
    return () => {};
  }, []);

  useEffect(() => {
    const objectValue: IProgressData = JSON.parse(databaseIntroduction ?? "{}");
    if (objectValue !== undefined || objectValue !== null) {
      /** Reset database */
      const initialValues: IProgressData = {
        progressName: "introduction",
        totalProgress: steps.length,
        completedProgress: 0,
        stepsValues: [],
        questionnaire: {
          total: steps.length,
          correct: 0,
        },
      };
      console.log("🚀 REINICIANDO VALORES DE INTRODUCTION:", initialValues);
      setDatabaseIntroduction(JSON.stringify(initialValues));
      dispatch(setIntroduction(initialValues));
      setTypeAnswers(getRandomTypeAnswer(typeAnswers));
    }
  }, [isLoadingIntroduction]);

  useEffect(() => {
    setTypeAnswers(typeQuestions +1);
    console.log("🚀 ~ useEffect ~ typeQuestions:{{{{{{{{{{{{{{{{{{{{", typeQuestions)
  }, [typeQuestions]);

  return {
    indexStep,
    handleBackStep,
    handleNextStep,
    renderStep,
    introduction,
    responseAnswer,
  };
};

export default useIntroduction;
