import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledH3 = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base * 1.75}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "MontserratBold";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const H3: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledH3 style={style}>{children}</StyledH3>
    </Wrapper>
  );
};
