import { H6 } from "@/components/Common/Typography";
import React from "react";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";

export const GaussLaw = () => {
  const theme = useTheme();
  return (
    <>
      <H6>
        La Ley de Gauss dice que el flujo eléctrico a través de una superficie
        cerrada es proporcional a la carga encerrada dentro de esa superficie.
        El círculo en el símbolo de la integral en la Ley de Gauss (∮) indica
        que es una integral de superficie cerrada. A diferencia de una integral
        común, que puede ser sobre una línea o una superficie abierta, este
        símbolo se usa para señalar que la integral se realiza sobre una
        superficie que envuelve completamente un volumen.
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$$`}
      </MathJaxSvg>
      <H6>Donde: </H6>
      <H6>-E: es el campo eléctrico. </H6>
      <H6>-dA: es un pequeño diferencial de área. </H6>
      <H6>-Q: encerrada: es la carga total dentro de la superficie. </H6>
      <H6>-epsilon cero:es la permitividad del vacío. </H6>
    </>
  );
};
