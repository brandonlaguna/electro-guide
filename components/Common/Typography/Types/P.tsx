import { FC } from "react";
import { TextProps } from "react-native-paper";
import styled from "styled-components/native";
import useThemeProvider from "@/hooks/useTheme";

const StyledP = styled.Text`
  font-size: ${(props) => `${props.theme.fontSize.base}px`};
  color: ${(props) => `${props.theme.typography.color}`};
  font-family: "Montserrat";
`;

const Wrapper = styled.View`
  padding: 5px;
`;

export const P: FC<TextProps<any>> = ({ children, style }) => {
  const { fontSize } = useThemeProvider();
  return (
    <Wrapper>
      <StyledP style={style}>{children}</StyledP>
    </Wrapper>
  );
};
