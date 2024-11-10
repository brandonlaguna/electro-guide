import { P } from "@/components/Common/Typography";
import React from "react";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import { useTheme } from "styled-components/native";

export const Excercise5 = () => {
  const theme = useTheme();
  return (
    <>
      <P style={{ fontSize: 12 }}>
        Dado un disco de espesor despreciable, radio R y uniformemente cargado
        con densidad de carga superficial σ. Calcular el potencial eléctrico
        generado en un punto que esta sobre el eje del disco a una distancia "b"
        como se muestra en la figura
      </P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Explicacion:</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = \\int \\frac{k dq}{r'}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        Con el propósito de reducir la complejidad analítica de la expresión
        integral, introduciremos las siguientes igualdades.
      </P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Sabemos que:</P>
      <P style={{ fontSize: 12 }}>
        - dq es igual a la Densidad de Carga Superficial multiplicado por una
        pequeña parte de la carga.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$dq = \\sigma dA$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -r′ que es igual a la raiz cuadrada de La distancia entre el objeto y la
        particula de prueba mas El radio los dos elevados al cuadrado como
        podemos ver
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$r' = \\sqrt{b^2 + r^2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -dA que es igual a 2 veces pi multiplicado por r y todo esto
        multiplicado por dr como podemos ver en la siguiente ecuación.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$dA= 2 \\pi r dr$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -al final de esta igualación nuestra integral debería verse de esta
        forma.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = \\int \\frac{\\sigma 2\\pi r dr}{\\sqrt{b^2 + r^2}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -lo siguiente es definir los limites de nuestra integral en este
        problema tomaremos como limites r y 0 como vemos a continuación.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = \\int_0^R \\frac{\\sigma 2\\pi r dr}{\\sqrt{b^2 + r^2}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -ahora procederemos a organizar la ecuación este paso es importante para
        no cometer errores.{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = 2 \\pi \\sigma \\int_0^R \\frac{r dr}{\\sqrt{b^2 + r^2}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -es importante conocer el método de sustitución para la resolución de
        este ejercicio en caso de no conocerla esta seria una breve explicación:{" "}
      </P>
      <P style={{ fontSize: 12 }}>
        -El método de sustitución en integrales se utiliza para simplificar la
        resolución de integrales complicadas. Consiste en cambiar una parte de
        la función original por una nueva variable (u), de modo que la integral
        sea más fácil de calcular. Una vez que se realiza la sustitución, se
        integra respecto a la nueva variable, y al final se deshace la
        sustitución para regresar a la variable original. Este método es
        especialmente útil cuando la integral contiene una función y su
        derivada.{" "}
      </P>
      <P style={{ fontSize: 12 }}>
        -Diremos que lo que se encuentra dentro de la raíz ubicada en el
        denominador es Z{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$z=b^2 + r^2$$`}
      </MathJaxSvg>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$z'=(b^2 + r^2)'$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -quedaría de la siguiente forma sabiendo que b al ser una distancia
        resulta ser constante y da derivada de cualquier constante es 0.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$(1)dz=0+2rdr$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -procedemos a despejar rdr respecto a la igualdad anterior.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$ {dz \\over 2}=rdr$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -con esto podemos devolvernos a nuestra integral y reemplazar rdr
        gracias a que ahora sabemos que es igual a dz sobre 2 y recodando que z
        es el valor de sustitución quedando de la siguiente manera.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = 2\\pi\\sigma \\int \\frac{dz}{2 \\over \\sqrt{z}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>-simplificando nos queda asi:</P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$\\int dV = {{2\\pi\\sigma} \\over 2 } \\int {dz \\over \\sqrt{z}} $$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -en este punto podemos resolver la primera integral dV y cancelar los 2
        quedando la siguiente ecuacion:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = {\\pi \\sigma} \\int {dz \\over \\sqrt{z}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -ahora por las propiedades de la potenciacion podemo convertir la raiz
        en una potencia de la siguiente forma.{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = {\\pi \\sigma} \\int {dz \\over z^{1/2}}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -con esta ecuacion planteada podemos subir pasar el denominador al
        numerador de la siguiente forma:{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = {\\pi \\sigma} \\int {z^{-1/2} dz}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        - Las integrales de potencias son consideradas las más básicas y se
        resuelven de manera directa. Este tipo de integral, comúnmente llamada
        'de tabla', se calcula sumando una unidad al exponente de la variable y
        dividiendo toda la expresión por el nuevo exponente.{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = \\pi \\sigma \\frac{z^{-\\frac{1}{2} + 1}}{-\\frac{1}{2} + 1}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -Procedemos a realizar estas operaciones y a simplificar para obtener el
        siguiente resultado:
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = 2 \\pi \\sigma z^{1/2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -no olvidar que debemos regresar el cambio y tenemos que evaluarle los
        limites de la integral.
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = 2\\pi\\sigma \\int_0^R (b^2 + r^2)^{1/2}$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -en esta ultima expresion obtenida resultado de la integral sustituyo
        los limites de integracion colocamos el limite superior donde esta la r
        minuscula y luego restamos el mismo resultado pero donde esta r
        minuscula ponemos el limite inferior{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = 2\\pi\\sigma \\left[(b^2 + R^2)^{1/2} - (b^2 + 0^2)^{1/2}\\right]$$`}
      </MathJaxSvg>
      <P style={{ fontSize: 12 }}>
        -y al simplificar tendriamos el siguiente resultado:{" "}
      </P>
      <MathJaxSvg
        fontSize={theme.fontSize.base - 1}
        color="black"
        fontCache={true}
      >
        {`$$V = 2\\pi\\sigma \\left[(b^2 + R^2)^{1/2} - b\\right]$$`}
      </MathJaxSvg>
    </>
  );
};
