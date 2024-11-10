import { Level } from "../model/IEvaluation";

export const questionsData: Level[] = [
  {
    levelId: "1",
    questions: [
      {
        id: "q1",
        type: "multiple",
        questionText:
          "En el experimento con limones, ¿qué función tiene el cable de cobre?",
        options: [
          {
            answer: "Sirve como una fuente de carga. ",
            value: 0,
          },
          {
            answer:
              "Actúa como un electrodo que permite la transferencia de electrones.",
            value: 1,
          },
          {
            answer: "Genera el ácido necesario para el experimento.",
            value: 0,
          },
          {
            answer: "Aumenta la resistencia del circuito.",
            value: 0,
          },
        ],
        answer:
          "Actúa como un electrodo que permite la transferencia de electrones.",
      },
      {
        id: "q2",
        type: "multiple",
        questionText:
          "Cuál es el propósito principal de usar un multímetro en los experimentos de potencial eléctrico?",
        options: [
          {
            answer: "Medir la corriente en un circuito.",
            value: 0,
          },
          {
            answer: "Calcular la carga de una batería.",
            value: 0,
          },
          {
            answer: "Determinar la diferencia de potencial entre dos puntos.",
            value: 1,
          },
          {
            answer: "Medir la temperatura del agua. ",
            value: 0,
          },
        ],
        answer: "Determinar la diferencia de potencial entre dos puntos.",
      },
      {
        id: "q3",
        type: "multiple",
        questionText:
          "Qué sucede con el potencial eléctrico generado por un disco uniformemente cargado a medida que aumenta la distancia 'b' sobre su eje?",
        options: [
          {
            answer: "Aumenta de forma proporcional a 'b'.",
            value: 0,
          },
          {
            answer: "Disminuye a medida que 'b' aumenta. ",
            value: 1,
          },
          {
            answer: "Se mantiene constante.",
            value: 0,
          },
          {
            answer: "Es independiente de 'b'.",
            value: 0,
          },
        ],
        answer: "Disminuye a medida que 'b' aumenta. ",
      },
      {
        id: "q4",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) En el experimento con limones, el potencial eléctrico se genera debido a una reacción química entre los metales y el ácido presente en los limones.",
        answer: true,
      },
      {
        id: "q5",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) El potencial eléctrico en el eje de un disco uniformemente cargado es siempre constante, independientemente de la distancia al disco.",
        answer: false,
      },
      {
        id: "q6",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) La densidad de carga superficial se mide en C/m² y describe la distribución de carga sobre una superficie.",
        answer: true,
      },
      {
        id: "q7",
        type: "open",
        questionText:
          "¿ Un carga puntual de q=10 μCq  está ubicada en el origen de un sistema de coordenadas. Determina el potencial eléctrico a una distancia de 0.5 metros de dicha carga?.",
        answer: "179800",
      },
      {
        id: "q8",
        type: "open",
        questionText:
          "¿ Dos cargas puntuales, q1= 7 C y q2​= -4 C, se encuentran separadas por una distancia de 6 metros. Determina el potencial eléctrico en el punto equidistante entre ambas cargas Considerando la constate K =9G N⋅m2/C2?.",
        answer: "9000000000",
      },
      {
        id: "q9",
        type: "open",
        questionText:
          "Se tiene una esfera dieléctrica sólida con radio R = 3.0 cm y carga total Q = 6.0 x 10^(-10) C. Calcula el potencial eléctrico V en un punto a una distancia r = 6.0 cm desde el centro de la esfera.",
        answer: "-89.9",
      },
      {
        id: "q10",
        type: "trueFalse",
        questionText: "¿El potencial eléctrico se mide en voltios?.",
        answer: true,
      },
    ],
  },
  {
    levelId: "2",
    questions: [
      {
        id: "q1",
        type: "multiple",
        questionText:
          "Qué representa la constante ϵ0 en las fórmulas relacionadas con el potencial eléctrico?",
        options: [
          {
            answer: "La permitividad del vacío.",
            value: 1,
          },
          {
            answer: "La constante de gravitación.",
            value: 0,
          },
          {
            answer: "La resistencia eléctrica de un conductor.",
            value: 0,
          },
          {
            answer: "La velocidad de la luz.",
            value: 0,
          },
        ],
        answer: "La permitividad del vacío.",
      },
      {
        id: "q2",
        type: "multiple",
        questionText:
          "En un sistema de tres cargas dispuestas en un triángulo, ¿cómo se calcula el potencial en un punto específico?",
        options: [
          {
            answer: "Sumando los potenciales generados por cada carga.",
            value: 1,
          },
          {
            answer: "Multiplicando las cargas entre sí.",
            value: 0,
          },
          {
            answer: "Restando los potenciales más cercanos.",
            value: 0,
          },
          {
            answer: "Dividiendo la carga total entre la distancia.",
            value: 0,
          },
        ],
        answer: "Sumando los potenciales generados por cada carga.",
      },
      {
        id: "q3",
        type: "multiple",
        questionText:
          "¿Qué tipo de integral se utiliza para calcular el potencial eléctrico debido a una distribución continua de carga?",
        options: [
          {
            answer: "Integral de línea.",
            value: 0,
          },
          {
            answer: "Integral de superficie.",
            value: 1,
          },
          {
            answer: "Integral de volumen.",
            value: 0,
          },
          {
            answer: "Integral de carga.",
            value: 0,
          },
        ],
        answer: "Integral de superficie.",
      },
      {
        id: "q4",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) En el experimento con la cuchilla de cúter, el agua actúa como un conductor que permite la creación de un campo eléctrico.",
        answer: true,
      },
      {
        id: "q5",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) El potencial eléctrico disminuye cuando se integra el campo eléctrico desde un punto cercano a una carga hacia un punto más lejano.",
        answer: true,
      },
      {
        id: "q6",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) Al realizar una integral para calcular el potencial de una carga distribuida, los límites de integración no afectan el resultado final.",
        answer: false,
      },
      {
        id: "q7",
        type: "open",
        questionText:
          "¿Una carga puntual de q=15 μCq está ubicada en el origen de un sistema de coordenadas. Determina el potencial eléctrico a una distancia de 0.3 metros de dicha carga?",
        answer: "449500",
      },
      {
        id: "q8",
        type: "open",
        questionText:
          "¿Dos cargas puntuales, q1= 5 C y q2​= -1 C, se encuentran separadas por una distancia de 6 metros. Determina el potencial eléctrico en el punto equidistante entre ambas cargas Considerando la constate K =9G N⋅m2/C2?",
        answer: "12000000000",
      },
      {
        id: "q9",
        type: "open",
        questionText:
          "Se tiene una esfera dieléctrica sólida con radio R = 4.0 cm y carga total Q = 5.0 x 10^(-10) C. Calcula el potencial eléctrico V en un punto a una distancia r = 8.0 cm desde el centro de la esfera.",
        answer: "-56.2",
      },
      {
        id: "",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) ¿El potencial eléctrico es una medida de la energía cinética de una carga?.",
        answer: false,
      },
    ],
  },
  {
    levelId: "3",
    questions: [
      {
        id: "q1",
        type: "multiple",
        questionText:
          "¿Cuál es el efecto de una esfera cargada en un punto exterior, según la Ley de Gauss?",
        options: [
          {
            answer: "El potencial depende únicamente de la densidad de carga.",
            value: 0,
          },
          {
            answer:
              "El campo eléctrico se comporta como si toda la carga estuviera concentrada en el centro de la esfera.",
            value: 1,
          },
          {
            answer: "El potencial es constante en todo el espacio.",
            value: 0,
          },
          {
            answer: "El campo eléctrico es nulo fuera de la esfera.",
            value: 0,
          },
        ],
        answer:
          "El campo eléctrico se comporta como si toda la carga estuviera concentrada en el centro de la esfera.",
      },
      {
        id: "q2",
        type: "multiple",
        questionText:
          "¿Qué propiedad del potencial eléctrico se utiliza para explicar que no haya variación de potencial en una línea equipotencial?",
        options: [
          {
            answer: "La simetría de la carga.",
            value: 0,
          },
          {
            answer: "La perpendicularidad con el campo eléctrico.",
            value: 1,
          },
          {
            answer: "La densidad de la carga.",
            value: 0,
          },
          {
            answer: "La variación de temperatura.",
            value: 0,
          },
        ],
        answer: "La perpendicularidad con el campo eléctrico.",
      },
      {
        id: "q3",
        type: "multiple",
        questionText:
          "¿Qué es lo que permite simplificar una integral al calcular el potencial de un disco cargado?",
        options: [
          {
            answer: "Cambiar el radio del disco. ",
            value: 0,
          },
          {
            answer: "Usar el método de sustitución.",
            value: 1,
          },
          {
            answer: "Aumentar la densidad de carga.",
            value: 0,
          },
          {
            answer: "Usar una carga de prueba más pequeña.",
            value: 0,
          },
        ],
        answer: "Usar el método de sustitución.",
      },
      {
        id: "q4",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) Una esfera cargada uniformemente presenta un potencial eléctrico igual en todos los puntos de su superficie.",
        answer: true,
      },
      {
        id: "q5",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) Al aumentar la distancia entre una carga y un punto de interés, el potencial eléctrico generado por la carga disminuye.",
        answer: true,
      },
      {
        id: "q6",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) En un campo eléctrico generado por una esfera, el potencial dentro de la esfera es el mismo que en cualquier punto exterior a la esfera.",
        answer: false,
      },
      {
        id: "q7",
        type: "open",
        questionText:
          "¿Un carga puntual de q=18μCq está ubicada en el origen de un sistema de coordenadas. Determina el potencial eléctrico a una distancia de 0.1 metros de dicha carga?.",
        answer: "1618200",
      },
      {
        id: "q8",
        type: "open",
        questionText:
          "¿Dos cargas puntuales, q1= 4 C y q2=-8 C, ¿se encuentran separadas por una distancia de 6 metros? Determina el potencial eléctrico en el punto equidistante entre ambas cargas Considerando la constate K =9G N⋅m2/C2?",
        answer: "-9000000000",
      },
      {
        id: "q9",
        type: "open",
        questionText:
          "Se tiene una esfera dieléctrica sólida con radio R = 5.0 cm y carga total Q = 9.0 x 10^(-10) C. Calcula el potencial eléctrico V en un punto a una distancia r = 7.0 cm desde el centro de la esfera.",
        answer: "-115.7",
      },
      {
        id: "q10",
        type: "trueFalse",
        questionText:
          "(Verdadero o Falso) ¿La diferencia de potencial entre dos puntos se conoce como voltaje?.",
        answer: true,
      },
    ],
  },
];
