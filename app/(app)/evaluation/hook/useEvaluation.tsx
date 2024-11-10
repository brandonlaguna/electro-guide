import { IData } from "@/components/Questionnaire/models/questionnaireModel";
import { useStorageState } from "@/hooks/useStorageState";
import {
  evaluationSelector,
  setEvaluation,
} from "@/store/slices/evaluationSlice";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionsData } from "../data";
import { MultipleChoice } from "../components/TypesQuestions/MultipleChoice";
import { TrueFalse } from "../components/TypesQuestions/TrueFalse";
import { OpenEnded } from "../components/TypesQuestions/OpenEnded";
import { Question } from "../model/IEvaluation";
import { IProgressData } from "@/store/models/progressModel";
import { router } from "expo-router";
import { evaluationInitialState } from "@/store/state/evaluationInitialState";

interface IMultipleChoice {
  question: Question;
  onSubmit: (data: any) => void;
}
const getRandomTypeAnswer = (exclude: number) => {
  let newTypeAnswer;
  do {
    newTypeAnswer = Math.floor(Math.random() * 3) + 1;
  } while (newTypeAnswer === exclude);
  return newTypeAnswer;
};

const QuizQuestion: FC<IMultipleChoice> = ({ question, onSubmit }) => {
  if (question != null) {
    switch (question.type) {
      case "multiple":
        return <MultipleChoice question={question} onSubmit={onSubmit} />;
      case "trueFalse":
        return <TrueFalse question={question} onSubmit={onSubmit} />;
      case "open":
        return <OpenEnded question={question} onSubmit={onSubmit} />;
      default:
        return null;
    }
  }
  return null;
};

export const useEvaluation = (initialLevel: number) => {
  const dispatch = useDispatch();
  const { evaluation, typeQuestions } = useSelector(evaluationSelector);
  const [indexStep, setIndexStep] = useState<number>(0);
  const [renderStep, setRenderStep] = useState<IData | null>(null);
  const [typeAnswers, setTypeAnswers] = useState<number>(
    Math.floor(Math.random() * 3)
  );
  const [currentLevel, setCurrentLevel] = useState(typeAnswers);
  const [questions, setQuestions] = useState(
    questionsData[typeQuestions]?.questions || []
  );
  const [responseAnswer, setResponseAnswer] = useState<number>(0);


  const [[isLoadingEvaluation, databaseEvaluation], setDatabaseEvaluation] =
    useStorageState("evaluation");

  const handleBackStep = () => {};
  const handleNextStep = () => {
    setIndexStep((prev) => prev + 1);
    setQuestions(questionsData[currentLevel + 1]?.questions || []);
  };

  const roundToDecimals = (value: number, decimals: number) => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  };

  const handleSaveData = async () => {
    if (evaluation !== null) {
      let evaluationData: IProgressData = {
        ...evaluation,
        progressName: "evaluation",
        completedProgress: indexStep + 1,
        totalProgress: questions.length,
        stepsValues: [],
        questionnaire: {
          total: questions.length,
          correct: responseAnswer,
        },
      };
      console.log("🚀 ~ handleSaveData ~ evaluationData:", evaluationData)
      setDatabaseEvaluation(JSON.stringify(evaluationData));
      dispatch(setEvaluation(evaluationData));
    }
  };

  const submitAnswer = async (questionId: string, answer: string | boolean) => {
    const question: Question | undefined = questions.find(
      (q) => q.id === questionId
    );

    if (!question) return;

    if (question != undefined && evaluation) {
      let statusAnswer: number = 0;
      /** Answer type multiple */
      if (question.type === "multiple") {
        if (answer == "1") {
          statusAnswer = 1;
        }
        /** Answer type open */
      } else if (question.type === "open") {
        const correctAnswer = Number(question.answer);
        const userAnswerNumber = Number(answer);
        if (!isNaN(userAnswerNumber)) {
          // 5% tolerance
          const difference = roundToDecimals(
            Math.abs(correctAnswer - userAnswerNumber),
            2
          );
          const tolerance = roundToDecimals(Math.abs(correctAnswer) * 0.05, 2);
          statusAnswer = difference <= tolerance ? 1 : 0;
        }
        /** Answer type true or false */
      } else if (question.type === "trueFalse") {
        if (Boolean(answer) === question.answer) {
          statusAnswer = 1;
        }
      }
      setResponseAnswer((prev) => prev + statusAnswer);
      if (indexStep + 1 == questions.length) {
        await handleSaveData().then(() => {
          setIndexStep(0);
          getRenderView();
          setResponseAnswer(0);
          router.navigate("/home");
        });
      } else {
        setIndexStep((prev) => prev + 1);
      }
    }
  };

  const getRenderView = () => {
    if (indexStep <= questions.length) {
    }
    setRenderStep({
      id: indexStep,
      title: `Pregunta #${indexStep + 1}`,
      subTitle: questions[indexStep]?.questionText,
      content: (
        <QuizQuestion
          question={questions[indexStep]}
          onSubmit={(answer: string | boolean) =>
            submitAnswer(questions[indexStep].id, answer)
          }
        />
      ),
      images: [],
      disableBack: true,
      disableNext: true,
    });
  };

  useEffect(() => {
    if (evaluation != undefined) {
      dispatch(setEvaluation(evaluation));
    } else {
      dispatch(
        setEvaluation({
          progressName: "",
          totalProgress: questions.length,
          completedProgress: 0,
          stepsValues: [],
          questionnaire: {
            total: questions.length,
            correct: 0,
          },
        })
      );
    }
    getRenderView();
  }, []);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>> ~ useEvaluation ~ evaluation:", evaluation)
    return () => {
    };
  }, [evaluation]);

  useEffect(() => {
    // ignore first render
    getRenderView();
  }, [indexStep, questions]);

  useEffect(() => {
    const objectValue: IProgressData = JSON.parse(databaseEvaluation ?? "{}");
    if (objectValue !== undefined || objectValue !== null) {
      /** Reset database */
      const initialValues: IProgressData = {
        progressName: "evaluation",
        totalProgress: questions.length,
        completedProgress: 0,
        stepsValues: [],
        questionnaire: {
          total: questions.length,
          correct: 0,
        },
      };
      console.log("🚀 REINICIANDO VALORES DE EVALUATION:", initialValues);
      setDatabaseEvaluation(JSON.stringify(initialValues));
      dispatch(setEvaluation(initialValues));
      setResponseAnswer(0);
    }
  }, [isLoadingEvaluation]);

  useEffect(() => {
    setTypeAnswers(typeQuestions);
    setCurrentLevel(typeQuestions);
    setQuestions(questionsData[typeQuestions]?.questions || []);
    console.log("🚀 ~ useEffect ~ typeQuestions:{{{{{{{{{{{{{{{{{{{{", typeQuestions)
  }, [typeQuestions]);

  useEffect(() => {
    console.log("🚀 ~ typeQuestions:", questionsData[typeQuestions].levelId);
  }, [typeQuestions]);

  return {
    evaluation,
    indexStep,
    renderStep,
    typeAnswers,
    handleBackStep,
    handleNextStep,
  };
};
