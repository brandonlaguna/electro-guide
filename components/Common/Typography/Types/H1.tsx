import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledH1 = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base * 2.5}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "MontserratBold";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const H1: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledH1 style={style}>{children}</StyledH1>
    </Wrapper>
  );
};
