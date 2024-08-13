import * as React from "react";
import { Appbar, Button } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { Platform, View } from "react-native";

interface IAppHeader {
  onPressMenu: Function;
  title: string;
}
const AppHeader: React.FC<IAppHeader> = (props) => {
  const theme = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: theme.tabBar.backgroundColor }}>
      <Button
        onPress={() => props.onPressMenu()}
        icon={({ size, color }) => <View></View>}
        children={<></>}
      />
      {/* <Appbar.BackAction onPress={() => props.onPressMenu()} iconColor={theme.tabBar.color} /> */}
      <Appbar.Content title={props.title} color={theme.tabBar.color} />
      {/* <Appbar.Action icon={MORE_ICON} color={theme.tabBar.color} onPress={() => {}} /> */}
    </Appbar.Header>
  );
};
export default AppHeader;
