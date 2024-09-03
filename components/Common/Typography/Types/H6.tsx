import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledH6 = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "Montserrat";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const H6: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledH6 style={style}>{children}</StyledH6>
    </Wrapper>
  );
};
