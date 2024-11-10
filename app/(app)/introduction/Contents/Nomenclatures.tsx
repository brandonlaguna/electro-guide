import { H6 } from "@/components/Common/Typography";
import React from "react";
import { Linking } from "react-native";
import { Text } from "react-native-paper";

export const Nomenclatures = () => {
  return (
    <>
      <H6>
        q: Es la carga fuente, que crea un campo eléctrico a su alrededor.
      </H6>
      <H6>
        q₀: Es una carga de prueba, una carga pequeña que utilizamos para medir
        el efecto del campo eléctrico generado por la carga q.{" "}
      </H6>
      <H6>
        E: Es el campo eléctrico generado por la carga q. Las líneas representan
        la dirección y la magnitud del campo, que apunta radialmente hacia
        afuera en el caso de una carga positiva.
      </H6>
      <H6>
        F: Es la fuerza eléctrica que actúa sobre la carga de prueba q₀ debido
        al campo eléctrico E. Esta fuerza está relacionada por F = q₀E.{" "}
      </H6>
      <H6>
        r: Es la distancia desde la carga fuente q hasta un punto en el espacio.
        Las distancias rₐ y rᵦ indican las posiciones de los puntos a y b.
      </H6>
      <H6>
        dr: Es un pequeño cambio diferencial en la posición radial desde la
        carga fuente, representando un desplazamiento en la dirección radial.{" "}
      </H6>
      <H6>
        dl: Es un pequeño cambio diferencial en la posición a lo largo de una
        trayectoria curvada entre los puntos a y b.
      </H6>
      <H6>
        a y b: Son dos puntos a lo largo de una trayectoria curvada en el campo
        eléctrico. La trayectoria azul punteada: Es la trayectoria que sigue la
        carga de prueba q₀ entre los puntos a y b.
      </H6>
      <H6>
        ϕ: Representa el ángulo entre el vector de desplazamiento radial dr y el
        diferencial de longitud dl.
      </H6>
      <H6>Webgrafía:</H6>
      <Text
        style={{ color: "blue", fontSize: 8 }}
        onPress={() =>
          Linking.openURL(
            "https://electropreguntas.com/potencial-electrico-conceptos-basicos-y-aplicaciones/"
          )
        }
      >
        https://electropreguntas.com/potencial-electrico-conceptos-basicos-y-aplicaciones/
      </Text>
    </>
  );
};
