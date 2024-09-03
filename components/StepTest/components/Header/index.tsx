import { H3, P } from "@/components/Common/Typography";
import { FC } from "react";
import { View } from "react-native";

interface ITitle {
  title: string;
}

interface ISubTitle {
  subTitle: string;
}
export const Title: FC<ITitle> = ({ title }) => {
  return (
    <View>
      <H3>{title}</H3>
    </View>
  );
};

export const SubTitle: FC<ISubTitle> = ({ subTitle }) => {
  return (
    <View>
      <P>{subTitle}</P>
    </View>
  );
};
