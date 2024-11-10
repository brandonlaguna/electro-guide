import { H6 } from "@/components/Common/Typography";
import React from "react";
import { Linking } from "react-native";
import { Text } from "react-native-paper";

export const Coulomb = () => {
  return (
    <>
      <H6>
        La constante de coulomb denotada como K = 8.99*10 9 Nm2/C2 utilizada
        para realizar de manera eficiente el calculo de potencial eléctrico
        siendo una base fundamental para la resolución de ejercicios
        relacionados al este tema. Webgrafía img2:
      </H6>
      <Text
        style={{ color: "blue", fontSize: 8 }}
        onPress={() =>
          Linking.openURL(
            "https://www.eletricatotal.com/espagina8/problemas8/problesol72-1.htm"
          )
        }
      >
        https://www.eletricatotal.com/espagina8/problemas8/problesol72-1.htm
      </Text>
    </>
  );
};
