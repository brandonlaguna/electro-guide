import { P } from "@/components/Common/Typography";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

interface IContent {
  content: JSX.Element;
}
export const Content: FC<IContent> = ({ content }) => {
  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
