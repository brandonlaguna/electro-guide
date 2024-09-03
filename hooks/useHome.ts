import {
  evaluationSelector,
  setIntroduction,
} from "@/store/slices/evaluationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useStorageState } from "./useStorageState";
import { useEffect } from "react";
import { IProgressData } from "@/store/models/progressModel";

export const useHome = () => {
  const dispatch = useDispatch();
  const { introduction } = useSelector(evaluationSelector);

  const [
    [isLoadingIntroduction, databaseIntroduction],
    setDatabaseIntroduction,
  ] = useStorageState("introduction");

  useEffect(() => {
    const objectValue: IProgressData = JSON.parse(databaseIntroduction ?? "{}");
    if (objectValue.progressName !== undefined) {
      dispatch(setIntroduction(objectValue));
    }
  }, [isLoadingIntroduction]);

  return { introduction };
};
