import { StyleSheet, View } from "react-native";
import { Question } from "../../model/IEvaluation";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { H2, H3, H6 } from "@/components/Common/Typography";

interface IOpenEnded {
  question: Question;
  onSubmit: (data: any) => void;
}

export const OpenEnded = ({ question, onSubmit }: IOpenEnded) => {
  const [text, setText] = useState("");
  const theme = useTheme();
  const styles = getStyles({ theme });
  return (
    <View style={styles.root}>
      <View style={styles.containerInput}>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          label="Respuesta"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          cursorColor={theme.textInput.borderColor}
          activeOutlineColor={theme.textInput.borderColor}
          textColor={theme.textInput.color}
        />
        <View style={styles.nomenclatureText}>
          <H3>V</H3>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => onSubmit(text)}
          textColor={theme.mainButton.color}
        >
          Enviar respuesta
        </Button>
      </View>
    </View>
  );
};

const getStyles = ({ theme }: { theme: any }) =>
  StyleSheet.create({
    root: {},
    containerInput: {
      marginVertical: 10,
      flexDirection: "row",
      width: "100%",
    },
    containerButton: {
      marginVertical: 10,
    },
    textInput: {
      backgroundColor: "white",
      width: "85%",
    },
    button: {
      backgroundColor: theme.mainButton.backgroundColor,
      color: theme.mainButton.color,
    },
    nomenclatureText: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      width: "15%",
    },
  });
