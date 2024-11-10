import { PointsArray, Scatter } from "victory-native";

const ScatterGraph = ({ points }: { points: PointsArray }) => {
  return (
    <Scatter
      points={points}
      shape="circle"
      radius={5}
      style="fill"
      color="red"
    />
  );
};

export default ScatterGraph;
