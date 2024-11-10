import { H6 } from "@/components/Common/Typography";
import { notacionCientifica } from "@/utilities/numbers";
import React from "react";
import { Linking } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { Text } from "react-native-paper";
import { useTheme } from "styled-components/native";

export const Distribution = () => {
  const theme = useTheme();

  return (
    <>
      <H6>
        Esta ecuación nos dice que el potencial eléctrico total en un punto es
        igual a la suma de las contribuciones de todas las cargas
        infinitesimales que componen la distribución. Cada carga infinitesimal
        dq genera un potencial eléctrico proporcional a su valor y inversamente
        proporcional a la distancia al punto donde se está calculando el
        potencial.
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = \\int \\frac{kdq}{r'}$$`}
      </MathJaxSvg>
      <H6>
        Esta es un derivado de la formula comun del calculo de potencial
        electrico donde:
      </H6>
      <H6>
        -V: Potencial eléctrico en un punto debido a una distribución de carga.
      </H6>
      <H6>-k: Constante de Coulomb </H6>
      <H6>-dq: Un elemento diferencial de carga en la distribución.</H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$r' = \\sqrt{b^2 + r^2}$$`}
      </MathJaxSvg>
      <H6>
        -r′: La distancia desde el elemento de carga dq hasta el punto donde se
        quiere calcular el potencial.
      </H6>
      <H6>Tambien conocer que </H6>
      <H6>
        Donde b seria la distancia del objeto a la particula de prueba y r el
        radio esto aplica para objeto con forma circular.{" "}
      </H6>
    </>
  );
};
