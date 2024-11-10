import { Button, StyleSheet, View } from "react-native";
import { Question } from "../../model/IEvaluation";
import QuestionnaireView from "@/app/(app)/introduction/Contents/QuestionnaireView";

interface IMultipleChoice {
  question: Question;
  onSubmit: (data: any) => void;
}
export const MultipleChoice = ({ question, onSubmit }: IMultipleChoice) => {
  return (
    <View style={styles.root}>
      {question.options && (
        <QuestionnaireView
          answers={question.options}
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
