import { P } from "@/components/Common/Typography";
import { maskOnAxis } from "@/utilities/numbers";
import { FC, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import styled from "styled-components/native";

const StyledTextInput = styled.TextInput`
  border-color: #d1d1d1;
  border-width: 0.5px;
  height: 30px;
  width: 50px;
  text-align:center;
  border-radius:6px;
`;
export interface IAxisTextInputProps {
  x: number;
  y: number;
  label: string;
  changeAxis: (x: number, y: number) => void;
}
export const AxisTextInput: FC<IAxisTextInputProps> = (props) => {
  const { x, y, label, changeAxis } = props;
  const [text, onChangeText] = useState(`${x},${y}`);

  const handleChangeAxis = (value: string) => {
    const axis = value.split(",");
    if (axis[0] != undefined && axis[1] != undefined) {
      changeAxis(parseInt(axis[0]), parseInt(axis[1]));
    }
  };
  return (
    <View style={styles.labelContainer}>
      <P style={{ fontSize: 9, marginBottom: -5 }}>{label}</P>
      <View style={styles.container}>
        <StyledTextInput
          onChangeText={(val: string) => maskOnAxis(val, onChangeText)}
          value={text}
          placeholder="X,Y"
          onEndEditing={() => handleChangeAxis(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "column",
  },
  container: {
    height: 30,
    width: 50,
    backgroundColor: "white",
    shadowColor: "#3d3d3d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 6,
  },
});
