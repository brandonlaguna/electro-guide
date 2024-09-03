import { FC } from "react";
import { ImageSourcePropType, ScrollView, View } from "react-native";
import { SubTitle, Title } from "./components/Header";
import { IImages, Images } from "./components/Images";
import { Content } from "./components/Content";
import { Action } from "./components/Action";
import Animated, {
  BounceIn,
  BounceOut,
  SlideInLeft,
  SlideOutLeft,
  ZoomInLeft,
  ZoomInRight,
  ZoomOutLeft,
  ZoomOutRight,
} from "react-native-reanimated";

export interface IStepTest {
  id: number;
  title: string;
  subTitle: string;
  content: JSX.Element;
  images: {
    source: ImageSourcePropType;
    title?: string;
  }[];
  onBack: () => void;
  onNext: () => void;
  disableBack: boolean;
  disableNext: boolean;
}
export const StepTest: FC<IStepTest> = (props) => {
  const {
    id,
    title,
    subTitle,
    content,
    images,
    disableBack,
    disableNext,
    onBack,
    onNext,
  } = props;

  return (
    <View key={id}>
      <Animated.View exiting={SlideOutLeft}>
        <ScrollView>
          <Title title={title} />
          <SubTitle subTitle={subTitle} />
          <Images images={images} />
          <Content content={content} />
          <Action
            onBack={onBack}
            onNext={onNext}
            disableBack={disableBack}
            disableNext={disableNext}
          />
        </ScrollView>
      </Animated.View>
    </View>
  );
};
