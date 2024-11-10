import { StyleSheet, View } from "react-native";
import { Question } from "../../model/IEvaluation";
import { P } from "@/components/Common/Typography";
import QuestionnaireView from "@/app/(app)/introduction/Contents/QuestionnaireView";
import { IAnswers } from "@/components/Questionnaire/models/questionnaireModel";

interface ITrueFalse {
  question: Question;
  onSubmit: (data: any) => void;
}

const options: IAnswers[] = [
  {
    answer: "Verdadero",
    value: 1,
  },
  {
    answer: "Falso",
    value: 0,
  },
];

export const TrueFalse = ({ question, onSubmit }: ITrueFalse) => {
  return (
    <View style={styles.root}>
      {options && (
        <QuestionnaireView
          answers={options}
          handleAnswer={(answer, value) => onSubmit(value)}
          idQuestion={0}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
});
