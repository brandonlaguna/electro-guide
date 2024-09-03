import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useTheme } from "styled-components/native";

export interface IAction {
  onBack: () => void;
  onNext: () => void;
  disableBack: boolean;
  disableNext: boolean;
}

export const Action: FC<IAction> = ({
  onBack,
  onNext,
  disableBack = false,
  disableNext = false,
}) => {
  const theme = useTheme();
  const styles = getStyles({ theme });
  return (
    <View style={styles.buttonContainer}>
      <IconButton
        style={styles.buttons}
        icon="chevron-left"
        iconColor={theme.stepButtonArrow.color}
        size={30}
        onPress={onBack}
        mode={"contained"}
        disabled={disableBack}
      />
      <IconButton
        style={styles.buttons}
        icon="chevron-right"
        iconColor={theme.stepButtonArrow.color}
        size={30}
        onPress={onNext}
        mode={"contained"}
        disabled={disableNext}
      />
    </View>
  );
};

const getStyles = ({ theme }: { theme: any }) =>
  StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
    },
    buttons: {
      backgroundColor: theme.stepButtonArrow.backgroundColor,
    },
  });
