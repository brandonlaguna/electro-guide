import { H3, H6 } from "@/components/Common/Typography";
import React from "react";

export const PotentialElectricRectBar = () => {
  return (
    <>
      <H6>
        Se utiliza para calcular el potencial eléctrico V en un punto debido a
        una barra cargada uniformemente de longitud.
      </H6>
      <H6>- L : Longitud total de la barra en metros, m .</H6>
      <H6>
        - d : Distancia perpendicular desde el punto donde se calcula el
        potencial hasta el centro de la barra en metros, m .
      </H6>
      <H6>- x : Posición de un elemento diferencial a lo largo de la barra.</H6>
    </>
  );
};
