import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";
import { H6 } from "@/components/Common/Typography";
import React from "react";

export const UniformlyChargedSphere = () => {
  const theme = useTheme();
  return (
    <>
      <H6>
        El campo eléctrico a una distancia r desde el centro de una esfera
        uniformemente cargada se calcula usando la siguiente formula. Formula:
        E(r) es igual a uno sobre 4 pi epsilon cero por Q sobre r al cuadrado.
        Donde:
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$E(r) = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$$`}
      </MathJaxSvg>
      <H6>-Q: es la carga total en la esfera.</H6>
      <H6>-R: es la distancia desde el centro de la esfera.</H6>
      <H6>-épsilon cero: es la permitividad del vacío. </H6>
    </>
  );
};
