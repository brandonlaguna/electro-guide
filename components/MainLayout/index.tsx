import { FC } from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import styled, { useTheme } from "styled-components/native";

const StyledLayout = styled.View`
  padding: 5px;
  background-color: ${(props) => `${props.theme.mainLayout.backgroundColor}`};
`;

const MainLayout: FC<ViewProps> = (props) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.mainLayout.backgroundColor },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    //paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default MainLayout;
