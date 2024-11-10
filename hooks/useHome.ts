import {
  evaluationSelector,
  setExcercises,
  setIntroduction,
  setEvaluation,
  setTypeQuestions
} from "@/store/slices/evaluationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useStorageState } from "./useStorageState";
import { useEffect, useState } from "react";
import { IProgressData } from "@/store/models/progressModel";
import { router } from "expo-router";
import { evaluationInitialState } from "@/store/state/evaluationInitialState";


const getRandomTypeAnswer = (exclude: number) => {
  let newTypeAnswer;
  do {
    newTypeAnswer = Math.floor(Math.random() * 3);
  } while (newTypeAnswer === exclude);
  return newTypeAnswer;
};

export const useHome = () => {
  const dispatch = useDispatch();
  const { introduction, excercise, evaluation, typeQuestions } =
    useSelector(evaluationSelector);

  const [disableIntroduction, setDisableIntroduction] =
    useState<boolean>(false);
  const [disableExcercise, setDisableExcercise] = useState<boolean>(true);
  const [disableEvaluation, setDisableEvaluation] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [whichErase, setWhichErase] = useState<
    "introduction" | "excercise" | "evaluation"
  >("introduction");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [
    [isLoadingIntroduction, databaseIntroduction],
    setDatabaseIntroduction,
  ] = useStorageState("introduction");

  const [[isLoadingExcercise, databaseExcercise], setDatabaseExcercise] =
    useStorageState("excercise");

  const [[isLoadingEvaluation, databaseEvaluation], setDatabaseEvaluation] =
    useStorageState("evaluation");

  const handleHideModal = () => {
    setModalMessage("");
    hideModal();
  };

  const handleClearIntroductionDatabase = (
    route: "introduction" | "excercise" | "evaluation"
  ) => {
    console.log("🚀 ERASE ####### ~ useHome ~ route:", route)
    if (route === "introduction") {
      if (evaluationInitialState.introduction != null) {
        setDatabaseIntroduction(
          JSON.stringify(evaluationInitialState.introduction)
        );
        dispatch(setIntroduction(evaluationInitialState.introduction));
        handleHideModal();
        router.navigate("/introduction");
      }
    } else if (route === "excercise") {
      if (evaluationInitialState.excercise != null) {
        setDatabaseExcercise(JSON.stringify(evaluationInitialState.excercise));
        dispatch(setExcercises(evaluationInitialState.excercise));
        handleHideModal();
        router.navigate("/excercise");
      }
    } else if (route === "evaluation") {
      console.log("🚀 ~ useHome ~ evaluation:", evaluationInitialState.evaluation)
      if (evaluationInitialState.evaluation != null) {
        setDatabaseEvaluation(
          JSON.stringify(evaluationInitialState.evaluation)
        );
        dispatch(setEvaluation(evaluationInitialState.evaluation));
        handleHideModal();
        router.navigate("/evaluation");
      }
    }
  };

  const handleClearExcerciseDatabase = () => {};

  const handleNavigateIntroduction = () => {
    dispatch(setTypeQuestions(getRandomTypeAnswer(typeQuestions)));
    setWhichErase("introduction");
    if (introduction) {
      if (introduction?.questionnaire.correct > 0) {
        setModalMessage(
          `Existe registro de avance en el modulo de introduccion, desea continuar y borrar la informacion?`
        );
        showModal();
      } else {
        router.navigate("/introduction");
      }
    } else {
      router.navigate("/introduction");
    }
  };

  const handleNavigateExcercise = () => {
    setWhichErase("excercise");
    dispatch(setTypeQuestions(getRandomTypeAnswer(typeQuestions)));
    if (excercise) {
      if (excercise?.completedProgress > 0) {
        setModalMessage(
          `Existe registro de avance en el modulo de ejercicios, desea continuar y borrar la informacion?`
        );
        showModal();
      } else {
        router.navigate("/excercise");
      }
    } else {
      router.navigate("/excercise");
    }
  };

  const handleNavigateEvaluation = () => {
    setWhichErase("evaluation");
    dispatch(setTypeQuestions(getRandomTypeAnswer(typeQuestions)));
    if (evaluation) {
      if (evaluation?.questionnaire.correct > 0) {
        setModalMessage(
          `Existe registro de avance en el modulo de evaluacion, desea continuar y borrar la informacion?`
        );
        showModal();
      } else {
        router.navigate("/evaluation");
      }
    } else {
      router.navigate("/evaluation");
    }
  };

  useEffect(() => {
    try {
      const objectValue: IProgressData = JSON.parse(
        databaseIntroduction ?? "{}"
      );
      // console.log("🚀 ~ useEffect ~ objectValue:", introduction);
      if (objectValue.progressName !== undefined) {
        dispatch(setIntroduction(objectValue));
      }
    } catch (error) {}
  }, [isLoadingIntroduction]);

  useEffect(() => {
    const objectValue: IProgressData = JSON.parse(databaseExcercise ?? "{}");
    if (objectValue.progressName !== undefined) {
      dispatch(setExcercises(objectValue));
    }
  }, [isLoadingExcercise]);

  useEffect(() => {
    try {
      const objectValue: IProgressData = JSON.parse(databaseEvaluation ?? "{}");
      if (objectValue.progressName !== undefined) {
        dispatch(setEvaluation(objectValue));
      }
    } catch (error) {}
  }, [isLoadingEvaluation]);

  useEffect(() => {
    const objectValueIntroduction: IProgressData = JSON.parse(
      databaseIntroduction ?? "{}"
    );
    const objectValueExcercise: IProgressData = JSON.parse(
      databaseExcercise ?? "{}"
    );
    const objectValueEvaluation: IProgressData = JSON.parse(
      databaseEvaluation ?? "{}"
    );

    if (introduction?.questionnaire) {
      const { correct, total } = introduction.questionnaire;
      if (total > 0) {
        setDisableExcercise((correct / total) * 100 < 50);
      } else {
        setDisableExcercise(true);
      }
    }

    if (excercise) {
      const { totalProgress, completedProgress } = excercise;
      if (totalProgress > 0) {
        setDisableEvaluation((completedProgress / totalProgress) * 100 < 50);
      } else {
        setDisableEvaluation(true);
      }
    }
  }, [introduction, excercise, evaluation]);

  return {
    introduction,
    excercise,
    evaluation,
    disableIntroduction,
    disableExcercise,
    disableEvaluation,
    visible,
    showModal,
    handleHideModal,
    modalMessage,
    handleNavigateIntroduction,
    handleClearIntroductionDatabase,
    handleClearExcerciseDatabase,
    handleNavigateExcercise,
    handleNavigateEvaluation,
    whichErase,
  };
};
