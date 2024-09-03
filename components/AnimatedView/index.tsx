import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  BounceOut,
  ReduceMotion,
  Easing,
  BounceIn,
} from "react-native-reanimated";

interface AppProps {
  width: number;
}

const AnimatedView = ({ width }: AppProps) => {
  BounceOut.duration(500)
    .delay(500)
    .randomDelay()
    .reduceMotion(ReduceMotion.Never)
    .withInitialValues({ transform: [{ translateY: -420 }] })
    .withCallback((finished) => {
      console.log(`finished without interruptions: ${finished}`);
    })
    .easing(Easing.ease);

  // React.useEffect(() => {
  //   offset.value = withRepeat(
  //     // highlight-next-line
  //     withTiming(-offset.value, { duration: 1750 }),
  //     -1,
  //     true
  //   );
  // }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.box}
        entering={BounceIn}
        exiting={BounceOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});

export default AnimatedView;
