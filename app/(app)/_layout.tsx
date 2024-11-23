import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider } from "react-redux";
import { Provider as NativePaperProvider } from "react-native-paper";
import { Drawer } from "expo-router/drawer";
import store from "@/store/store";
import CustomDrawerContent from "@/components/Drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import AppHeader from "@/components/AppHeader";
import { useTheme } from "styled-components/native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  return (
    <Provider store={store}>
      <NativePaperProvider>
        <Drawer
          drawerContent={(props: any) => <CustomDrawerContent {...props} />}
          screenOptions={{
            header: ({
              navigation,
              route,
              options,
            }: {
              navigation: any;
              route: any;
              options: any;
            }) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <AppHeader
                  onPressMenu={() => navigation.toggleDrawer()}
                  title={title}
                />
              );
            },
            headerTitleStyle: {
              color: theme.tabBar.color,
            },
            headerStyle: {
              backgroundColor: theme.tabBar.backgroundColor,
            },
          }}
        >
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="explore" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Explore",
              title: "Explore",
            }}
          />
          <Drawer.Screen
            name="introduction/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Introduccion",
              title: "Introduccion",
            }}
          />
          <Drawer.Screen
            name="home/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="excercise/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Ejercicios",
              title: "Ejercicios",
            }}
          />
          <Drawer.Screen
            name="evaluation/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Evaluacion",
              title: "Evaluacion",
            }}
          />
        </Drawer>
      </NativePaperProvider>
    </Provider>
  );
}
