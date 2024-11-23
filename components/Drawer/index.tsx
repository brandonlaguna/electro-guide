import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Button } from "react-native-paper";
import { useTheme } from "styled-components/native";

const CustomDrawerContent = (props: any) => {
  const theme = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.drawer.backgroundColor }}
    >
      <View style={{ flex: 1, paddingTop: 0, alignItems: "flex-start" }}>
        <DrawerItem
          label=""
          onPress={() => router.push("/(app)")}
          icon={({ color, size }) => (
            <Button icon="home" textColor={theme.drawer.color}>
              Home
            </Button>
          )}
        />
        <DrawerItem
          label=""
          onPress={() => router.push("/about")}
          icon={({ color, size }) => (
            <Button icon="information-outline" textColor={theme.drawer.color}>
              Acerca de
            </Button>
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
