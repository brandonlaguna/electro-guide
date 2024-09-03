import { H3, H6 } from "@/components/Common/Typography";

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
    </>
  );
};
