import { P } from "@/components/Common/Typography";
import { CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import { View } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import Montserrat from "@/assets/fonts/Montserrat-Bold.ttf";
import { useTheme } from "styled-components/native";
import { useState } from "react";
import { notacionCientifica } from "@/utilities/numbers";
import Slider from "@react-native-community/slider";
import { greyLight } from "@/theme/colors";
import ScatterGraph from "@/app/(app)/excercise/components/ScatterGraph";
import React from "react";

export const Excercise1 = () => {
  const theme = useTheme();
  const font = useFont(Montserrat, 12);

  const [r, setR] = useState<number>(2);
  const [k, setK] = useState<number>(8990000000);
  const [q, setQ] = useState<number>(0.000005);
  const [positions, setPositions] = useState<any[]>([
    { y: 0, x: -(r / 2) },
    { y: 0, x: r / 2 },
  ]);

  const handleChangePositions = (value: number) => {
    setR(value);
    setPositions([
      { y: 0, x: -(value / 2) },
      { y: 0, x: value / 2 },
    ]);
  };

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
        {`$$q=${notacionCientifica(q, 0)}C$$`}
      </MathJaxSvg>

      <Slider
        value={q}
        onValueChange={(value: number) => setQ(value)}
        minimumValue={0.000001}
        maximumValue={0.0001}
        step={0.0000001}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r=${r}m$$`}
      </MathJaxSvg>

      <Slider
        value={r}
        onValueChange={(value: number) => handleChangePositions(value)}
        minimumValue={1}
        maximumValue={100}
        step={1}
      />

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$k=${notacionCientifica(k, 2)} {Nm² \\over C²}$$`}
      </MathJaxSvg>

      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {"$$V={k*q\\over r}$$"}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V={(${notacionCientifica(
          k,
          2
        )} {Nm²\\over C² }) * (${notacionCientifica(q, 0)})\\over ${r}m}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V={${notacionCientifica(k * q, 2)} \\over ${r}}$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V={${notacionCientifica((k * q) / r, 2)}} V$$`}
      </MathJaxSvg>
      <View style={{ height: 300 }}>
        <CartesianChart
          data={positions}
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
