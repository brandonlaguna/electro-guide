import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledH4 = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base * 1.5}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "Montserrat";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const H4: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledH4 style={style}>{children}</StyledH4>
    </Wrapper>
  );
};
