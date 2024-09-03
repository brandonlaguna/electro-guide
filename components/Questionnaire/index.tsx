import { StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import { H4, H6 } from "../Common/Typography";
import { FC } from "react";
import { IQuestionnaire } from "./models/questionnaireModel";

export const Questionnaire: FC<IQuestionnaire> = ({ question, answers }) => {
  const theme = useTheme();
  const styles = getStyles({ theme });
  return (
    <View style={styles.container}>
      <View>
        <H4>{question}</H4>
      </View>
      <View>
        {answers.map((a) => (
          <H6>
            {a.answer} {a.value}
          </H6>
        ))}
      </View>
    </View>
  );
};

const getStyles = ({ theme }: { theme: any }) =>
  StyleSheet.create({
    container: {},
  });
