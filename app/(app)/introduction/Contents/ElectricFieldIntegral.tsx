import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";
import { H6 } from "@/components/Common/Typography";
import React from "react";

export const ElectricFieldIntegral = () => {
  const theme = useTheme();
  return (
    <>
      <H6>
        Potencial eléctrico: El potencial en un punto a una distancia r desde
        una referencia r0 se calcula integrando el campo eléctrico a lo largo de
        una trayectoria. Formula: V(r) es igual a menos la integral
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$V(r) = -\\int_{r_0}^r \\vec{E} \\cdot d\\vec{r}$$`}
      </MathJaxSvg>
      <H6>desde r0 hasta r de E punto dr. </H6>
      <H6>Donde: </H6>
      <H6>-E: es el campo eléctrico. </H6>
      <H6>-Dr: es un pequeño diferencial a lo largo de la trayectoria. </H6>
      <H6>
        El signo negativo indica que el potencial disminuye en la dirección{" "}
      </H6>
    </>
  );
};
