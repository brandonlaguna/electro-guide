import { ImageSourcePropType } from "react-native";

export interface IQuestionnaire {
  question: string;
  type: number;
  answers: IAnswers[];
}

export interface IAnswers {
  answer: string;
  value: number;
}

export interface IData {
  id: number;
  title: string;
  subTitle: string;
  content: JSX.Element;
  images: {
    source: ImageSourcePropType;
    title?: string;
  }[];
  disableBack: boolean;
  disableNext: boolean;
}
