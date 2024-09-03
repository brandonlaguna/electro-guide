import { ImageSourcePropType } from "react-native";
import {
  BasicDefinition,
  CargaDistribuida,
  Coulomb,
  DensidadLinearCarga,
  Nomenclatures,
  Nomenclatures2,
  PotentialElectricCenterCircle,
  PotentialElectricEquiTriangle,
  RelacionCargaLongitud,
} from "../Contents";
import { IData } from "@/components/Questionnaire/models/questionnaireModel";
import { PotentialElectricRectBar } from "../Contents/PotentialElectricRectBar";

export const data: IData[] = [
  {
    id: 1,
    title:
      "Fundamentos del Potencial Eléctrico: La Energía detrás de las Interacciones Electroestáticas",
    subTitle: "¿Qué es el potencial eléctrico?",
    content: <BasicDefinition />,
    images: [
      {
        source: require("@/assets/images/introduction/introduction-1.jpg"),
      },
    ],
    disableBack: true,
    disableNext: false,
  },
  {
    id: 2,
    title: "¿Cuál es la constante de Coulomb?",
    subTitle: "",
    content: <Coulomb />,
    images: [
      {
        source: require("@/assets/images/introduction/coulomb.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 3,
    title: "¿Que nomenclaturas se utilizan?",
    subTitle: "",
    content: <Nomenclatures />,
    images: [
      {
        source: require("@/assets/images/introduction/nomenclature.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 4,
    title: "¿Que nomenclaturas se utilizan?",
    subTitle: "",
    content: <Nomenclatures2 />,
    images: [],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 5,
    title: "¿puedo encontrar el potencial eléctrico en figuras geométricas?",
    subTitle: "",
    content: <CargaDistribuida />,
    images: [
      {
        source: require("@/assets/images/introduction/carga-distribuida.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 6,
    title: "Relación entre la Carga dq y la Longitud dx",
    subTitle: "",
    content: <RelacionCargaLongitud />,
    images: [
      {
        source: require("@/assets/images/introduction/relacion-carga-longitud.jpg"),
      },
      {
        source: require("@/assets/images/introduction/relacion-carga-longitud-2.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 7,
    title: "Potencial Eléctrico de una Barra Recta (Integración)",
    subTitle: "",
    content: <PotentialElectricRectBar />,
    images: [
      {
        source: require("@/assets/images/introduction/electric-potential-rect-bar-integration.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 8,
    title: "Potencial Eléctrico en el Centro de un Triángulo Equilátero:",
    subTitle: "",
    content: <PotentialElectricEquiTriangle />,
    images: [
      {
        source: require("@/assets/images/introduction/electric-potential-equi-triangle.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 9,
    title: "Potencial Eléctrico en el Centro de un Círculo:",
    subTitle: "",
    content: <PotentialElectricCenterCircle />,
    images: [
      {
        source: require("@/assets/images/introduction/electric-potential-center-circle.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
  {
    id: 10,
    title: "densidad lineal de carga:",
    subTitle: "",
    content: <DensidadLinearCarga />,
    images: [
      {
        source: require("@/assets/images/introduction/linear-charge-density.jpg"),
      },
    ],
    disableBack: false,
    disableNext: false,
  },
];
