import { IQuestionnaire } from "@/components/Questionnaire/models/questionnaireModel";

export const questionnaire: IQuestionnaire[] = [
  {
    question: "¿Qué es el potencial eléctrico?",
    type: 1,
    answers: [
      {
        answer: "La cantidad de energía cinética de una carga.",
        value: 0,
      },
      {
        answer:
          "La cantidad de trabajo requerido por unidad de carga para trasladar una carga a través de un campo electrostático.",
        value: 1,
      },
      {
        answer: "La fuerza ejercida por una carga sobre otra.",
        value: 0,
      },
      {
        answer: "La distancia entre dos cargas.",
        value: 0,
      },
    ],
  },
  {
    question: "¿Cuál es el valor de la constante de Coulomb, K?",
    type: 1,
    answers: [
      {
        answer: "9.81 m/s²",
        value: 0,
      },
      {
        answer: "6.02 × 10²³ mol⁻¹",
        value: 0,
      },
      {
        answer: "8.99 × 10⁹ Nm²/C²",
        value: 1,
      },
      {
        answer: "3.00 × 10⁸ m/s",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué representa el símbolo q₀ en el estudio del potencial eléctrico?",
    type: 1,
    answers: [
      {
        answer: "La carga fuente que genera el campo eléctrico.",
        value: 0,
      },
      {
        answer: "Una carga de prueba utilizada para medir el campo eléctrico.",
        value: 1,
      },
      {
        answer: "El campo eléctrico generado por la carga.",
        value: 0,
      },
      {
        answer: "La distancia entre dos puntos en el campo eléctrico.",
        value: 0,
      },
    ],
  },
  {
    question: "¿Qué describe mejor el campo eléctrico E?",
    type: 1,
    answers: [
      {
        answer: "La cantidad de trabajo realizado por una carga en movimiento.",
        value: 0,
      },
      {
        answer: "La fuerza eléctrica que actúa sobre una carga de prueba.",
        value: 0,
      },
      {
        answer:
          "La dirección y magnitud de la fuerza que actúa sobre una carga de prueba en un punto en el espacio.",
        value: 1,
      },
      {
        answer: "El desplazamiento radial desde la carga fuente.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué representa el signo ϕ en el contexto del potencial eléctrico?",
    type: 1,
    answers: [
      {
        answer: "La distancia entre dos cargas.",
        value: 0,
      },
      {
        answer: "La diferencia de potencial entre dos puntos.",
        value: 0,
      },
      {
        answer:
          "El ángulo entre el vector de desplazamiento radial dr y el diferencial de longitud dl.",
        value: 1,
      },
      {
        answer:
          "El número de líneas de campo eléctrico que atraviesan una superficie.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué describe el potencial eléctrico en términos de trabajo y carga?",
    type: 2,
    answers: [
      {
        answer: "La energía potencial por unidad de carga.",
        value: 1,
      },
      {
        answer: "El trabajo realizado por una carga en movimiento.",
        value: 0,
      },
      {
        answer: "La fuerza entre dos cargas.",
        value: 0,
      },
      {
        answer:
          "La distancia desde una carga fuente hasta un punto en el espacio.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué función cumple la constante de Coulomb K en las ecuaciones del potencial eléctrico?",
    type: 2,
    answers: [
      {
        answer: "Permite calcular la fuerza gravitatoria entre dos cuerpos.",
        value: 0,
      },
      {
        answer:
          "Proporciona la relación entre campo eléctrico y potencial eléctrico.",
        value: 0,
      },
      {
        answer:
          "Escala la magnitud del potencial eléctrico en función de las cargas y la distancia.",
        value: 1,
      },
      {
        answer: "Determina la velocidad de la luz en el vacío.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué sucede con la magnitud del campo eléctrico E a medida que la distancia r desde la carga fuente q aumenta?",
    type: 2,
    answers: [
      {
        answer: "Aumenta.",
        value: 0,
      },
      {
        answer: "Disminuye.",
        value: 1,
      },
      {
        answer: "Permanece constante",
        value: 0,
      },
      {
        answer: "Se invierte.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué relación existe entre la fuerza F y el campo eléctrico E sobre una carga de prueba q₀?",
    type: 2,
    answers: [
      {
        answer: "F = E/q₀",
        value: 0,
      },
      {
        answer: "F = q₀/E",
        value: 0,
      },
      {
        answer: "q₀E",
        value: 1,
      },
      {
        answer: "F = E²/q₀",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué representa la trayectoria azul punteada en el contexto del potencial eléctrico?",
    type: 2,
    answers: [
      {
        answer: "La dirección de las líneas de campo eléctrico.",
        value: 0,
      },
      {
        answer:
          "La trayectoria que sigue una carga de prueba entre dos puntos.",
        value: 1,
      },
      {
        answer:
          "La diferencia de potencial entre dos puntos en el campo eléctrico.",
        value: 0,
      },
      {
        answer: "El ángulo entre dos vectores de desplazamiento.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué mide el potencial eléctrico en un punto específico dentro de un campo eléctrico?",
    type: 3,
    answers: [
      {
        answer: "La cantidad de energía cinética de una carga.",
        value: 0,
      },
      {
        answer: "La fuerza sobre una carga de prueba en ese punto.",
        value: 0,
      },
      {
        answer:
          "El trabajo por unidad de carga necesario para mover una carga desde un punto de referencia.",
        value: 1,
      },
      {
        answer: "La velocidad de la carga en ese punto.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Qué simboliza la distancia r en las fórmulas relacionadas con el potencial eléctrico?",
    type: 3,
    answers: [
      {
        answer:
          "La distancia desde la carga fuente hasta un punto en el espacio.",
        value: 1,
      },
      {
        answer: "La distancia entre dos cargas iguales.",
        value: 0,
      },
      {
        answer: "La distancia que recorre una carga en movimiento.",
        value: 0,
      },
      {
        answer: "La distancia entre el campo eléctrico y la carga de prueba.",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Cómo se define la fuerza eléctrica F que actúa sobre una carga de prueba q₀ en un campo eléctrico E?",
    type: 3,
    answers: [
      {
        answer: "F = E/q₀",
        value: 0,
      },
      {
        answer: "F = q₀/E",
        value: 0,
      },
      {
        answer: "F = q₀E",
        value: 1,
      },
      {
        answer: "F = E²/q₀",
        value: 0,
      },
    ],
  },
  {
    question: "¿Qué representa dr en el estudio del potencial eléctrico?",
    type: 3,
    answers: [
      {
        answer: "Un pequeño cambio en la carga eléctrica.",
        value: 0,
      },
      {
        answer:
          "Un pequeño cambio diferencial en la posición radial desde la carga fuente.",
        value: 1,
      },
      {
        answer: "La dirección de la fuerza en un campo eléctrico.",
        value: 0,
      },
      {
        answer: "El trabajo realizado por una carga en movimiento.",
        value: 0,
      },
    ],
  },
  {
    question: "¿Qué se mide en unidades de Nm²/C²?",
    type: 3,
    answers: [
      {
        answer: "El potencial eléctrico.",
        value: 0,
      },
      {
        answer: "La carga eléctrica.",
        value: 0,
      },
      {
        answer: "El campo eléctrico.",
        value: 0,
      },
      {
        answer: "La constante de Coulomb K.",
        value: 1,
      },
    ],
  },
];
