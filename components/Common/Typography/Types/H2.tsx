import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledH2 = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base * 2}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "MontserratBold";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const H2: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledH2 style={style}>{children}</StyledH2>
    </Wrapper>
  );
};
