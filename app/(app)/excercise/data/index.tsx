import { IData } from "@/components/Questionnaire/models/questionnaireModel";
import {
  Excercise1,
  Excercise2,
  Excercise3,
  Excercise4,
  Excercise5,
  Excercise6,
  Excercise7,
} from "../Content";
import { Excercise8 } from "../Content/Excercise8";

export const data: IData[] = [
  {
    id: 0,
    title: "Ejercicio 1: Facil",
    subTitle:
      "Una carga puntual q = 5 mC se coloca en el origen. Calcula el potencial eléctrico a una distancia de 2m de la carga.",
    content: <Excercise1 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 1,
    title: "Ejercicio 2: Medio",
    subTitle:
      "Dos cargas puntuales q1 = 3 mC y q2 = -3 mC están separadas por una distancia de 4m. Calcula el potencial eléctrico en el punto medio entre las dos cargas.",
    content: <Excercise2 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 2,
    title: "Ejercicio 3: Alto",
    subTitle:
      "Una carga q1 = 2 mC. está situada en el origen y otra carga q2 = -4 mC. está situada en el punto (4,0)m. Calcula el potencial eléctrico en el punto (2,2)m.",
    content: <Excercise3 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 3,
    title: "Ejercicio 4: Muy Alto",
    subTitle:
      "Tres cargas puntuales q1 = 1 mC, q2 = -2 mC, y q3 = 3 mC están situadas en los puntos (0,0)m, (3,0)m, y (0,4)m, respectivamente. Calcula el potencial eléctrico en el punto (3,4)m.",
    content: <Excercise4 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 4,
    title: "Ejercicio 5: Medio",
    subTitle: "Problema",
    content: <Excercise5 />,
    images: [
      {
        source: require("@/assets/images/excercise/excercise5.png"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 5,
    title: "Ejercicio 6: Alto",
    subTitle: "Problema",
    content: <Excercise6 />,
    images: [
      {
        source: require("@/assets/images/excercise/excercise6.png"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 6,
    title: "Experimento 1: Facil",
    subTitle: "Potencial eléctrico generado a partir de limones.",
    content: <Excercise7 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 7,
    title: "Experimento 2: Medio",
    subTitle: "Potencial eléctrico transmitido a partir de un liquido.",
    content: <Excercise8 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
];
