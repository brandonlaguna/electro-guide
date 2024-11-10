import { P } from "@/components/Common/Typography";
import { CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import { View } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import Montserrat from "@/assets/fonts/Montserrat-Bold.ttf";
import { useTheme } from "styled-components/native";
import { useEffect, useState } from "react";
import { notacionCientifica } from "@/utilities/numbers";
import Slider from "@react-native-community/slider";
import { greyLight } from "@/theme/colors";
import ScatterGraph from "@/app/(app)/excercise/components/ScatterGraph";
import React from "react";

export const Excercise2 = () => {
  const theme = useTheme();
  const font = useFont(Montserrat, 12);

  const [r1, setR1] = useState<number>(2);
  const [k1, setK1] = useState<number>(8990000000);
  const [q1, setQ1] = useState<number>(0.000003);
  const [v1, setV1] = useState<number>(0);

  const [r2, setR2] = useState<number>(2);
  const [k2, setK2] = useState<number>(8990000000);
  const [q2, setQ2] = useState<number>(0.000003);
  const [v2, setV2] = useState<number>(0);

  const [positions1, setPositions1] = useState<any>({ y: 0, x: -r1 });

  const [positions2, setPositions2] = useState<any>({ y: 0, x: r2 });

  useEffect(() => {
    setV1((k1 * q1) / r1);
  }, [q1, r1]);

  useEffect(() => {
    setV2((k2 * -q2) / r2);
  }, [q2, r2]);

  useEffect(() => {
    setPositions1({ y: 0, x: -r1 });
  }, [r1]);

  useEffect(() => {
    setPositions2({ y: 0, x: r2 });
  }, [r2]);

  return (
    <>
      <P style={{ fontSize: 10, color: greyLight[500] }}>
        Puedes ajustar los valores y ver el cambio en potencial electrico
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$q1=${notacionCientifica(q1, 0)}C$$`}
      </MathJaxSvg>

      <Slider
        value={q1}
        onValueChange={(value: number) => setQ1(value)}
        minimumValue={0.00000001}
        maximumValue={0.00001}
        step={0.0000001}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$q2=-${notacionCientifica(q2, 0)}C$$`}
      </MathJaxSvg>

      <Slider
        value={q2}
        onValueChange={(value: number) => setQ2(value)}
        minimumValue={0.00000001}
        maximumValue={0.00001}
        step={0.0000001}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r1=${r1}m$$`}
      </MathJaxSvg>

      <Slider
        value={r1}
        onValueChange={(value: number) => setR1(value)}
        minimumValue={1}
        maximumValue={100}
        step={1}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r2=${r2}m$$`}
      </MathJaxSvg>

      <Slider
        value={r2}
        onValueChange={(value: number) => setR2(value)}
        minimumValue={1}
        maximumValue={100}
        step={1}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V=V1 + V2 = {k*q1 \\over r1} + {k*q2 \\over r2}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V1={${notacionCientifica(
          k1,
          2
        )} {Nm²\\over C² } *${notacionCientifica(
          q1,
          1
        )}C \\over ${r1}m} = ${notacionCientifica(v1, 2)}V $$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V2={${notacionCientifica(
          k2,
          2
        )} {Nm²\\over C² } * -${notacionCientifica(
          q2,
          1
        )}C \\over ${r2}m} = ${notacionCientifica(v2, 2)}V$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V= ${notacionCientifica(v1, 2)} + (${notacionCientifica(
          v2,
          2
        )}) = ${notacionCientifica(v1 + v2, 2)}V$$`}
      </MathJaxSvg>
      <View style={{ height: 300 }}>
        <CartesianChart
          data={[positions1, positions2]}
          xKey="x"
          yKeys={["y"]}
          axisOptions={{ font }}
          domainPadding={{ left: 20, right: 20 }}
        >
          {/* 👇 pass a PointsArray to our custom component */}
          {({ points }) => <ScatterGraph points={points.y} />}
        </CartesianChart>
      </View>
      <P style={{ fontSize: 12 }}>
        A diferencia de anteriores fórmulas está es la que sirve para este
        ejercicio ya que estamos tratando con dos cargas y dos distancias por
        estos factores podemos saber que formula debemos usar.
      </P>
      <P style={{ fontSize: 12 }}>
        Este resultado en específico se debe a que las magnitudes de los
        potenciales generados por las cargas son iguales pero estos poseen
        signos opuestos, lo que conlleva a su cancelación exacta en el punto
        medio. Esto es una clara demostración de cómo las simetrías en la
        distribución de cargas pueden dar lugar a regiones con potencial
        eléctrico nulo.
      </P>
    </>
  );
};
