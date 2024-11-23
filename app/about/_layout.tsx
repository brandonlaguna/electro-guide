import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { Provider as NativePaperProvider } from "react-native-paper";
import { useColorScheme } from "@/hooks/useColorScheme";
import store from "@/store/store";
import useThemeProvider from "@/hooks/useTheme";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/Drawer";
import { getHeaderTitle } from "@react-navigation/elements";
import AppHeader from "@/components/AppHeader";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = useThemeProvider();

  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    Montserrat: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratThin: require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    MontserratItalic: require("@/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    MontserratMedium: require("@/assets/fonts/Montserrat-Medium.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
      </Drawer>
      </NativePaperProvider>
      </Provider>
  );
}
