import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
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
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            header: ({ navigation, route, options }) => {
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
            name="evaluation" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Evaluation",
              title: "Evaluation",
            }}
          />
          <Drawer.Screen
            name="introduction/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Introduccion",
              title: "Introduccion",
            }}
          />
        </Drawer>
        {/* <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "home" : "home-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Explore",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="evaluation"
            options={{
              title: "Evaluation",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="introduction/index"
            options={{
              title: "Introduccion",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs> */}
      </NativePaperProvider>
    </Provider>
  );
}
