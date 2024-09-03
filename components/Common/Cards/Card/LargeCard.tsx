import { fancyColorLight } from "@/theme/colors";
import { FC, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "styled-components/native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

interface ILargeCard {
  children: JSX.Element;
  source?: ImageSourcePropType;
  backgroundColor: string;
}
export const LargeCard: FC<ILargeCard> = ({
  children,
  source,
  backgroundColor,
}) => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const theme = useTheme();
  const styles = getStyles({ theme, dimensions });

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
    <View style={[styles.cardContainer, { backgroundColor: backgroundColor }]}>
      {source !== undefined && (
        <ImageBackground
          source={source}
          resizeMode="cover"
          style={styles.image}
        >
          {children}
        </ImageBackground>
      )}
      {source === undefined && children}
    </View>
  );
};

const getStyles = ({ theme, dimensions }: { theme: any; dimensions: any }) =>
  StyleSheet.create({
    cardContainer: {
      width: dimensions.window.width - 10,
      height: dimensions.window.width / 2,
      borderRadius: 20,
      flexDirection: "row",
      paddingHorizontal: 10,
      marginVertical: 6,
    },
    leftContainer: {
      // width: (dimensions.window.width - 10) / 3,
    },
    image: {
      flex: 1,
    },
  });
