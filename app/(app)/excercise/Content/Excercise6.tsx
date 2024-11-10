import { P } from "@/components/Common/Typography";
import React from "react";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";

export const Excercise6 = () => {
  const theme = useTheme();
  return (
    <>
      <P style={{ fontSize: 12 }}>
        Se tiene una esfera dieléctrica sólida con radio R = 2.5 cm y carga
        total Q = 8.0 × 10^-10 C distribuida uniformemente en su volumen. Se
        requiere calcular el potencial eléctrico V en un punto a una distancia r
        = 5.0 cm desde el centro de la esfera.{" "}
      </P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>
        Cálculo del Campo Eléctrico 𝐸
      </P>
      <P style={{ fontSize: 12 }}>
        -Para calcular el potencial eléctrico en un punto fuera de la esfera,
        primero se debe determinar el campo eléctrico en esa región. Según la
        ley de Gauss, el campo eléctrico de una esfera cargada uniformemente
        fuera de su superficie se comporta como si toda la carga estuviera
        concentrada en su centro. El campo eléctrico en un punto a una distancia
        𝑟 de una carga 𝑄 es:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$E = \\frac{Q}{4\\pi\\epsilon_0 r^2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Cálculo del Campo Eléctrico 𝐸 fuera de la Esfera:
      </P>
      <P style={{ fontSize: 12 }}>
        Para puntos fuera de la esfera ({`𝑟>𝑅`}), el campo eléctrico es:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Esto se obtiene aplicando la ley de Gauss y considerando que la esfera
        se comporta como si toda la carga estuviera concentrada en su centro
        para puntos fuera de la esfera
      </P>
      <P style={{ fontSize: 12 }}>Diferencia de Potencial: </P>
      <P style={{ fontSize: 12 }}>
        La diferencia de potencial entre dos puntos se obtiene integrando el
        campo eléctrico.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\Delta V = -\\int_a^b \\vec{E} \\cdot d\\vec{r}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>-Definición del Potencial 𝑉: </P>
      <P style={{ fontSize: 12 }}>
        El potencial eléctrico en un punto a una distancia 𝑟 desde el centro de
        la esfera se define como la diferencia de potencial respecto a la
        superficie de la esfera, donde se toma{" "}
      </P>
      <P style={{ fontSize: 12 }}>𝑉(𝑅)como referencia. </P>
      <P style={{ fontSize: 12 }}>
        Aquí se integra desde el radio de la esfera 𝑅 hasta el punto 𝑟 El signo
        negativo proviene de la convención de que el campo eléctrico apunta en
        la dirección de disminución del potencial.
      </P>
      <P style={{ fontSize: 12 }}>Integración: </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = -\\frac{1}{4\\pi\\epsilon_0} Q \\left[-\\frac{1}{r'}\\right]_R^r$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = \\frac{1}{4\\pi\\epsilon_0} \\left(\\frac{Q}{R} - \\frac{Q}{r}\\right)$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        Integrando el campo eléctrico desde 𝑅 hasta 𝑟:
      </P>
      <P style={{ fontSize: 12 }}>-Diferencia de Potencial 𝑉: </P>
      <P style={{ fontSize: 12 }}>
        El potencial eléctrico se calcula como la diferencia de potencial entre
        dos puntos. Aquí se toma como referencia el potencial en la superficie
        de la esfera, y se integra el campo eléctrico desde la superficie (radio
        𝑅) hasta el punto deseado a 𝑟 = 5.0 cm.
      </P>
      <P style={{ fontSize: 12 }}>
        El potencial eléctrico V en un punto se define como el trabajo necesario
        para mover una carga de prueba desde la superficie de la esfera (donde
        V=V(R)) hasta el punto de interés sin que haya aceleración. Se elige
        V(R) como referencia porque simplifica la integración.
      </P>
      <P style={{ fontSize: 12 }}>Integración del Campo Eléctrico: </P>
      <P style={{ fontSize: 12 }}>
        La integral para calcular el potencial es:{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = -\\int_R^r \\vec{E} \\cdot d\\vec{r}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>-Al integrar el campo eléctrico</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$E = \\frac{Q}{4\\pi\\epsilon_0 r'^2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>-Desde R hasta r, se obtiene:</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = -\\int_R^r \\frac{Q}{4\\pi\\epsilon_0 r'^2} dr'$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -La integral toma en cuenta que el campo eléctrico cambia con la
        distancia 𝑟 ′y se está sumando el cambio de potencial a lo largo del
        camino desde la superficie de la esfera hasta el punto de interés.
      </P>
      <P style={{ fontSize: 12 }}>Resultado de la Integración:</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$ \\frac{1}{r'^2} es - \\frac{1}{r'} $$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Evaluando está integral entre los límites R y r:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = \\frac{Q}{4\\pi\\epsilon_0} \\left(\\frac{1}{R} - \\frac{1}{r}\\right)$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -El signo positivo aparece al evaluar los límites de la integral,
        indicando que el potencial disminuye cuando uno se aleja del centro de
        la esfera, considerando el punto de referencia en la superficie.{" "}
      </P>
      <P style={{ fontSize: 12 }}>Sustitución de Valores </P>
      <P style={{ fontSize: 12 }}>
        -Procedemos a sustituir los valores en la anterior fórmula
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = \\frac{8.0 \\times 10^{-10}}{4\\pi \\times 8.854 \\times 10^{-12}} \\left(\\frac{1}{0.025} - \\frac{1}{0.05}\\right)$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Primero calculamos el valor de la constante:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = \\frac{8.0 \\times 10^{-10}}{4\\pi \\times 8.854 \\times 10^{-12}} \\approx 7.2 \\text{ V}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Luego la diferencia dentro de los paréntesis
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\left(\\frac{1}{0.025} - \\frac{1}{0.05}\\right) = 40 - 20 = 20 \\text{ m}^{-1} $$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>-El potencial final es:</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V=7.2\\times 20 = 144 \\text{V} $$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V=-144\\text{V} $$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -El signo negativo indica que el potencial se está midiendo desde un
        punto de mayor potencial (superficie de la esfera) hacia un punto de
        menor potencial (el punto externo).
      </P>
    </>
  );
};
