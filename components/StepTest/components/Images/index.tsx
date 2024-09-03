import { H6 } from "@/components/Common/Typography";
import { FC, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Animated, {
  AnimatedRef,
  DerivedValue,
  useAnimatedProps,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from "react-native-reanimated";

export interface IImages {
  images: {
    source: ImageSourcePropType;
    title?: string;
  }[];
}
export const Images: FC<IImages> = ({ images }) => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const offset = useScrollViewOffset(animatedRef);
  const [isScrollHorizontal, setIsScrollHorizontal] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {images !== undefined && images.length > 0 && (
        <Animated.ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          ref={animatedRef}
          horizontal={isScrollHorizontal}
        >
          {images.map((image, index) => (
            <View style={styles.imageContainer} key={index}>
              <Image
                source={image.source}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          ))}
        </Animated.ScrollView>
      )}
      {images === undefined ||
        (images.length === 0 && (
          <Animated.ScrollView ref={animatedRef}></Animated.ScrollView>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scroll: {
    height: 300,
    width: "100%",
    margin: 20,
  },
  scrollContent: {
    alignItems: "center",
  },
  center: {
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1, // Puedes ajustar este valor para controlar el tamaño inicial del contenedor
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    margin: 12,
    borderRadius: 30,
  },
});

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({ text: true });

function AnimatedText({ text, ...props }: { text: DerivedValue<string> }) {
  const animatedProps = useAnimatedProps(() => ({
    text: text.value,
    defaultValue: text.value,
  }));

  return (
    <AnimatedTextInput
      editable={false}
      {...props}
      value={text.value}
      animatedProps={animatedProps}
    />
  );
}
