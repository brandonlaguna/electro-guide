import { H3, H6 } from "@/components/Common/Typography";
import React from "react";
import { Linking } from "react-native";
import { Text } from "react-native-paper";

export const BasicDefinition = () => {
  return (
    <>
      <H6>
        El potencial eléctrico es un concepto fundamental en el estudio del
        electromagnetismo y es esencial para entender cómo interactúan las
        cargas eléctricas se define como la cantidad de trabajo requerida por
        unidad de carga para trasladar dicha carga a través de un campo
        electrostático, partiendo de un punto de referencia hasta el punto en
        cuestión. Webgrafía img1:
      </H6>
      <Text
        style={{ color: "blue", fontSize: 8 }}
        onPress={() =>
          Linking.openURL(
            "https://es.quora.com/En-qu%C3%A9-se-parecen-y-en-qu%C3%A9-se-diferencian-el-potencial-de-campo-el%C3%A9ctrico-y-la-intensidad-del-campo-el%C3%A9ctrico"
          )
        }
      >
        https://es.quora.com/En-qu%C3%A9-se-parecen-y-en-qu%C3%A9-se-diferencian-el-potencial-de-campo-el%C3%A9ctrico-y-la-intensidad-del-campo-el%C3%A9ctrico
      </Text>
    </>
  );
};
