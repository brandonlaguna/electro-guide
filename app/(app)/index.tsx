import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MainLayout from "@/components/MainLayout";
import { H2, H3, H6 } from "@/components/Common/Typography";
import { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import { fancyColorLight } from "@/theme/colors";
import { router } from "expo-router";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

export default function HomeScreen() {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/electric-man.jpg")}
            style={{
              width: dimensions.window.width,
              height: dimensions.window.width,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <H3>Aprende potencial electrico</H3>
          <H6>desde un solo lugar</H6>
          <IconButton
            icon="chevron-right"
            iconColor={"white"}
            size={20}
            onPress={() => router.push("/home")}
            mode={"contained"}
            containerColor={fancyColorLight.green}
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  imageContainer: {},
  textContainer: {},
});
