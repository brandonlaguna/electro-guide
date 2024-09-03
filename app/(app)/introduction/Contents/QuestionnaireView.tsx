import { H6, P } from "@/components/Common/Typography";
import { IAnswers } from "@/components/Questionnaire/models/questionnaireModel";
import { primary, whiteColor } from "@/theme/colors";
import { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useTheme } from "styled-components/native";

interface IQuestionnaireView {
  answers: IAnswers[];
  handleAnswer: (answer: number, value: number) => void;
  idQuestion: number;
}

const QuestionnaireView: FC<IQuestionnaireView> = ({
  answers,
  handleAnswer,
  idQuestion,
}) => {
  const theme = useTheme();
  const styles = getStyles({ theme });
  const [buttonSelected, setButtonSelected] = useState<number | null>(null);
  return (
    <View style={styles.container}>
      {answers.map((a, index) => (
        <TouchableOpacity
          style={[
            styles.answerContainer,
            buttonSelected === index
              ? styles.buttonSelected
              : styles.buttonUnselected,
          ]}
          key={index}
          onPress={() => {
            setButtonSelected(index);
            handleAnswer(idQuestion, a.value);
          }}
        >
          <IconButton
            icon={
              buttonSelected === index ? "circle-slice-8" : "circle-outline"
            }
            iconColor={
              buttonSelected === index
                ? styles.iconSelected.color
                : styles.icon.color
            }
            size={20}
          />
          <View style={{ paddingRight: 50 }}>
            <P
              style={
                buttonSelected === index
                  ? styles.textAnswerSelected
                  : styles.textAnswer
              }
            >
              {a.answer}
            </P>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const getStyles = ({ theme }: { theme: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    answerContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      marginVertical: 4,
      paddingVertical: 3,
    },
    buttonSelected: {
      backgroundColor: primary.main,
    },
    buttonUnselected: {
      backgroundColor: theme.buttonAnswerStep.backgroundColor,
    },
    textAnswer: {
      color: theme.buttonAnswerStep.color,
    },
    textAnswerSelected: {
      color: whiteColor.main,
    },
    icon: {
      color: theme.buttonAnswerStep.color,
    },
    iconSelected: {
      color: whiteColor.main,
    },
  });

export default QuestionnaireView;
