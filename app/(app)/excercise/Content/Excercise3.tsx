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

export const Excercise3 = () => {
  const theme = useTheme();
  const font = useFont(Montserrat, 12);

  const [k, setK] = useState<number>(8990000000);

  const [r1, setR1] = useState<number>(0);
  const [q1, setQ1] = useState<number>(0.000002);
  const [v1, setV1] = useState<number>(0);

  const [r2, setR2] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0.000004);
  const [v2, setV2] = useState<number>(0);

  const [vp, setVP] = useState<number>(0);

  const [positions1, setPositions1] = useState<any>({ x: 0, y: 0 });

  const [positions2, setPositions2] = useState<any>({ x: 4, y: 0 });

  const [positions3, setPositions3] = useState<any>({ x: 2, y: 2 });

  useEffect(() => {
    setR1(
      Math.sqrt(
        Math.pow(positions3.x - positions1.x, 2) +
          Math.pow(positions3.y - positions1.y, 2)
      )
    );
  }, [positions1, positions3]);

  useEffect(() => {
    setR2(
      Math.sqrt(
        Math.pow(positions3.x - positions2.x, 2) +
          Math.pow(positions3.y - positions2.y, 2)
      )
    );
  }, [positions2, positions3]);

  useEffect(() => {
    setV1((k * q1) / r1);
  }, [q1, r1]);

  useEffect(() => {
    setV2((k * -q2) / r2);
  }, [q2, r2]);

  useEffect(() => {
    setVP(v1 + v2);
  }, [v1, v2]);
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
        onValueChange={(value: number) => {
          setQ1(value);
        }}
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
        onValueChange={(value: number) => {
          setQ2(value);
        }}
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
      </View>

      <P style={{ fontSize: 12 }}>
        Distancia de q1 en ({positions1.x}, {positions1.y}) hasta P(
        {positions3.x},{positions3.y})
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r1=\\sqrt{(${positions3.x} - ${positions1.x})^2 + (${positions3.y} - ${positions1.y})^2}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r1=\\sqrt{${Math.pow(positions3.x - positions1.x, 2)}+${Math.pow(
          positions3.y - positions1.y,
          2
        )}} = \\sqrt{${
          Math.pow(positions3.x - positions1.x, 2) +
          Math.pow(positions3.y - positions1.y, 2)
        }} = ${notacionCientifica(r1, 2)}m$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        Distancia de q2 en ({positions2.x}, {positions2.y}) hasta P(
        {positions3.x},{positions3.y})
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r2=\\sqrt{(${positions3.x} - ${positions2.x})^2 + (${positions3.y} - ${positions2.y})^2}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r2=\\sqrt{${Math.pow(positions3.x - positions2.x, 2)}+${Math.pow(
          positions3.y - positions2.y,
          2
        )}} = \\sqrt{${
          Math.pow(positions3.x - positions2.x, 2) +
          Math.pow(positions3.y - positions2.y, 2)
        }} = ${notacionCientifica(r2, 2)}m$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        Después de haber encontrado el valor de las distancias procedemos a
        reemplazar en la formula del potencial
      </P>
      <P style={{ fontSize: 12 }}>
        Para esto primero lo haremos con la carga q1
      </P>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v1={k*q1\\over r1}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v1={${notacionCientifica(
          k,
          2
        )} {Nm^2\\over C^2 } * ${notacionCientifica(q1, 2)}\\over ${r1.toFixed(
          3
        )}m} = {${notacionCientifica(k * q1, 2)} \\over ${r1.toFixed(3)}m}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v1=${notacionCientifica(v1, 2)}V$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        Hacemos el mismo procedimiento con la carga q2
      </P>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v2={k*q2\\over r2}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v2={${notacionCientifica(
          k,
          2
        )} {Nm^2\\over C^2 } * -${notacionCientifica(q2, 1)}\\over ${r2.toFixed(
          2
        )}m} = {${notacionCientifica(k * -q2, 2)} \\over ${r2.toFixed(2)}m}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$v2=${notacionCientifica(v2, 2)}V$$`}
      </MathJaxSvg>

      <P style={{ fontSize: 12 }}>
        El potencial eléctrico en el punto P({positions3.x},{positions3.y})
        vendría siendo la suma de los potenciales debido a cada carga de tal
        forma que la respuesta sería:
      </P>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$Vp= V1 + V2$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$Vp= ${notacionCientifica(v1, 2)} + (${notacionCientifica(
          v2,
          2
        )}) = ${notacionCientifica(vp, 2)}V$$`}
      </MathJaxSvg>

      <View style={{ height: 300 }}>
        <CartesianChart
          data={[positions1, positions2, positions3]}
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
