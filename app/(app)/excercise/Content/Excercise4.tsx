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
import { AxisTextInput } from "../components/AxistTextInput";
import React from "react";

export const Excercise4 = () => {
  const theme = useTheme();
  const font = useFont(Montserrat, 12);

  const [k, setK] = useState<number>(8990000000);

  const [r1, setR1] = useState<number>(0);
  const [q1, setQ1] = useState<number>(0.000001);
  const [v1, setV1] = useState<number>(0);

  const [r2, setR2] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0.000002);
  const [v2, setV2] = useState<number>(0);

  const [r3, setR3] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0.000003);
  const [v3, setV3] = useState<number>(0);

  const [vp, setVP] = useState<number>(0);

  const [positions1, setPositions1] = useState<any>({ x: 0, y: 0 });

  const [positions2, setPositions2] = useState<any>({ x: 3, y: 0 });

  const [positions3, setPositions3] = useState<any>({ x: 0, y: 4 });

  const [positions4, setPositions4] = useState<any>({ x: 3, y: 4 });

  useEffect(() => {
    setR1(
      Math.sqrt(
        Math.pow(positions4.x - positions1.x, 2) +
          Math.pow(positions4.y - positions1.y, 2)
      )
    );
  }, [positions1, positions4]);

  useEffect(() => {
    setR2(
      Math.sqrt(
        Math.pow(positions4.x - positions2.x, 2) +
          Math.pow(positions4.y - positions2.y, 2)
      )
    );
  }, [positions2, positions4]);

  useEffect(() => {
    setR3(
      Math.sqrt(
        Math.pow(positions4.x - positions3.x, 2) +
          Math.pow(positions4.y - positions3.y, 2)
      )
    );
  }, [positions3, positions4]);

  useEffect(() => {
    setV1((k * q1) / r1);
  }, [q1, r1]);

  useEffect(() => {
    setV2((k * -q2) / r2);
  }, [q2, r2]);

  useEffect(() => {
    setV3((k * q3) / r3);
  }, [q3, r3]);

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
        {`$$q3=${notacionCientifica(q3, 0)}C$$`}
      </MathJaxSvg>

      <Slider
        value={q3}
        onValueChange={(value: number) => setQ3(value)}
        minimumValue={0.00000001}
        maximumValue={0.00001}
        step={0.0000001}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AxisTextInput
          x={positions1.x}
          y={positions1.y}
          label="r1"
          changeAxis={(x, y) => setPositions1({ x, y })}
        />
        <AxisTextInput
          x={positions2.x}
          y={positions2.y}
          label="r2"
          changeAxis={(x, y) => setPositions2({ x, y })}
        />
        <AxisTextInput
          x={positions3.x}
          y={positions3.y}
          label="r3"
          changeAxis={(x, y) => setPositions3({ x, y })}
        />
        <AxisTextInput
          x={positions4.x}
          y={positions4.y}
          label="r4?"
          changeAxis={(x, y) => setPositions4({ x, y })}
        />
      </View>

      <P style={{ fontSize: 12 }}>
        Primero empezamos calculando las distancias con Pitágoras en cada carga
      </P>

      <P style={{ fontSize: 12 }}>
        Para la carga q1 = {notacionCientifica(q1, 0)} ubicada en (
        {positions1.x}, {positions1.y}):
      </P>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r1=\\sqrt{(${positions4.x} - ${positions1.x})^2 + (${
          positions4.y
        } - ${positions1.y})^2} =\\sqrt{${
          Math.pow(positions4.x - positions1.x, 2) +
          Math.pow(positions4.y - positions1.y, 2)
        }} = ${notacionCientifica(r1, 2)}m$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        Para la carga q2 = -{notacionCientifica(q2, 0)} ubicada en (
        {positions2.x}, {positions2.y}):
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r2=\\sqrt{(${positions4.x} - ${positions2.x})^2 + (${
          positions4.y
        } - ${positions2.y})^2} =\\sqrt{${
          Math.pow(positions4.x - positions2.x, 2) +
          Math.pow(positions4.y - positions2.y, 2)
        }}= ${notacionCientifica(r2, 2)}m$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        Para la carga q3 = {notacionCientifica(q3, 0)} ubicada en (
        {positions3.x}, {positions3.y}):
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r3=\\sqrt{(${positions4.x} - ${positions3.x})^2 + (${
          positions4.y
        } - ${positions3.y})^2} =\\sqrt{${
          Math.pow(positions4.x - positions3.x, 2) +
          Math.pow(positions4.y - positions3.y, 2)
        }}= ${notacionCientifica(r3, 2)}m$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        Ya que tenemos las distancias empezamos a calcular el potencial
        eléctrico reemplazando valores.
      </P>
      <P style={{ fontSize: 12 }}>
        Calcular el potencial debido a cada carga en ({positions4.x},
        {positions4.y}):
      </P>
      <P style={{ fontSize: 12 }}>Para q1</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V1={k*q1 \\over r1} = {${notacionCientifica(
          k,
          1
        )}*${notacionCientifica(q1, 1)}\\over ${notacionCientifica(
          r1,
          2
        )}} = { ${notacionCientifica(k * q1, 2)}\\over ${notacionCientifica(
          r1,
          2
        )}}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V1= ${notacionCientifica(v1, 2)}V$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>Para q2</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V2={k*q2 \\over r2} = {${notacionCientifica(
          k,
          1
        )}*-${notacionCientifica(q2, 1)}\\over ${notacionCientifica(
          r2,
          2
        )}} = { ${notacionCientifica(k * -q2, 2)}\\over ${notacionCientifica(
          r2,
          2
        )}}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V2= ${notacionCientifica(v2, 2)}V$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>Para q3</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V3={k*q3 \\over r3} = {${notacionCientifica(
          k,
          1
        )}*${notacionCientifica(q3, 1)}\\over ${notacionCientifica(
          r3,
          2
        )}} = { ${notacionCientifica(k * q3, 2)}\\over ${notacionCientifica(
          r3,
          2
        )}}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V3= ${notacionCientifica(v3, 2)}V$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        Y finalmente sumamos los potenciales de cada carga de tal manera que
        este sería el resultado:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$Vtotal= V1 + V2 + V3$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$Vtotal= ${notacionCientifica(v1, 2)}V ${notacionCientifica(
          v2,
          2
        )}V + ${notacionCientifica(v3, 2)}V$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$Vtotal= ${notacionCientifica(v1 + v3 + v2, 2)}V$$`}
      </MathJaxSvg>

      <View style={{ height: 300 }}>
        <CartesianChart
          data={[positions1, positions2, positions3, positions4]}
          xKey="x"
          yKeys={["y"]}
          axisOptions={{ font }}
          domainPadding={{ left: 30, right: 30, top: 30, bottom: 30 }}
        >
          {({ points }) => <ScatterGraph points={points.y} />}
        </CartesianChart>
      </View>
    </>
  );
};
