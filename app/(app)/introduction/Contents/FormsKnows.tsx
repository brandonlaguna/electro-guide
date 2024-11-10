import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";
import { H6 } from "@/components/Common/Typography";
import React from "react";

export const FormsKnows = () => {
  const theme = useTheme();
  return (
    <>
      <H6>
        El cálculo preciso del potencial eléctrico es fundamental en el diseño y
        análisis de circuitos eléctricos, dispositivos electrónicos y sistemas
        electromagnéticos en general por lo que fisicos matematicos e ingenieron
        crearon relaciones en formulas que actualmente podemos usar para
        calcular y comprender el potencial electrico.
      </H6>
      <H6>A continuacion algunas de estas formulas:</H6>
      <H6 style={{ fontWeight: "bold" }}>Densidad de Carga Superficial (σ):</H6>
      <H6>
        Esta fórmula se utiliza para describir la distribución de carga
        eléctrica sobre una superficie. Nos indica cuánta carga eléctrica se
        encuentra concentrada en cada unidad de área de esa superficie.
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$\\sigma = \\frac{Q}{A}$$`}
      </MathJaxSvg>
      <H6>
        -σ: Densidad de carga superficial, medida en coulombs por metro cuadrado
        (C/m²).
      </H6>
      <H6>
        -Q: Carga eléctrica total en la superficie, medida en coulombs (C).
      </H6>
      <H6>-Dr: es un pequeño diferencial a lo largo de la trayectoria. </H6>
      <H6>-A: Área de la superficie, medida en metros cuadrados (m²).</H6>
      <H6>
        Otra relacion importante a tener en cuenta derivada de esta formula es:
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$dq=\\sigma dA$$`}
      </MathJaxSvg>
      <H6>
        -dq: Representa una cantidad infinitesimal de carga eléctrica. Es decir,
        una pequeña porción de la carga total distribuida en una superficie.
      </H6>
      <MathJaxSvg
        fontSize={theme.fontSize.base + 10}
        color="black"
        fontCache={true}
      >
        {`$$dA= 2\\pi r dr$$`}
      </MathJaxSvg>
      <H6>
        -dA: Representa un elemento infinitesimal de área. Es decir, un pedacito
        muy pequeño de la superficie total donde se distribuye la carga.
      </H6>
      <H6>también dada por la igualdad de:</H6>
      <H6>-dr: es un pequeño incremento en el radio.</H6>
    </>
  );
};
