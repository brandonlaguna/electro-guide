import { LargeCard } from "@/components/Common/Cards";
import { H1, H2, H3, H5, H6, P } from "@/components/Common/Typography";
import MainLayout from "@/components/MainLayout";
import { ThemedText } from "@/components/ThemedText";
import {
  danger,
  fancyColorLight,
  greyLight,
  success,
  whiteColor,
} from "@/theme/colors";
import { router } from "expo-router";
import { FC } from "react";
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Modal, IconButton, Portal, Button } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { DefaultTheme, useTheme } from "styled-components/native";
import { useHome } from "@/hooks/useHome";

interface IIconText {
  icon: IconSource;
  text: string;
}
interface IModuleCardView {
  styles: DefaultTheme;
  title: string;
  iconText: IIconText[];
  onPressNext: () => void;
  backgroundColor: string;
  source: ImageSourcePropType;
  disabled: boolean;
}

const ModuleCardView: FC<IModuleCardView> = (props) => {
  const {
    styles,
    title,
    iconText,
    onPressNext,
    backgroundColor,
    source,
    disabled = true,
  } = props;
  return (
    <LargeCard source={source} backgroundColor={backgroundColor}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <H3 style={styles.textTitle}>{title}</H3>
        </View>
        <View style={styles.subtitleContainer}>
          {iconText.map((it, index) => (
            <View style={styles.progressIconText} key={index}>
              <IconButton
                icon={it.icon}
                iconColor="white"
                size={15}
                style={{ margin: 1 }}
              />
              <P style={styles.subtitleText}>{it.text}</P>
            </View>
          ))}
        </View>
        <View style={styles.actionContainer}>
          <IconButton
            icon={disabled ? "lock" : "chevron-right"}
            iconColor={"white"}
            size={20}
            onPress={onPressNext}
            mode={"contained"}
            containerColor={whiteColor[300]}
            disabled={disabled}
          />
        </View>
      </View>
    </LargeCard>
  );
};

const Home = () => {
  const theme = useTheme();
  const styles = getStyles({ theme });
  const {
    introduction,
    excercise,
    evaluation,
    disableIntroduction,
    disableExcercise,
    disableEvaluation,
    visible,
    handleHideModal,
    modalMessage,
    handleNavigateIntroduction,
    handleClearIntroductionDatabase,
    handleNavigateEvaluation,
    handleNavigateExcercise,
    whichErase,
  } = useHome();

  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <MainLayout>
      <ScrollView>
        <H5>Evalúa tu conocimiento</H5>
        <ModuleCardView
          styles={styles}
          title={"Introduccion"}
          source={require("@/assets/images/ing1.png")}
          backgroundColor={fancyColorLight.indigo}
          disabled={disableIntroduction}
          iconText={[
            {
              icon: "progress-star",
              text: `${
                introduction !== null && introduction.totalProgress > 0
                  ? Intl.NumberFormat("es-Co", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(
                      (introduction.completedProgress /
                        introduction.totalProgress) *
                        100
                    )
                  : "0"
              }% progreso`,
            },
            {
              icon: "clipboard-text-outline",
              text: `${introduction?.questionnaire.correct} / ${introduction?.questionnaire.total} preguntas`,
            },
          ]}
          onPressNext={handleNavigateIntroduction}
        />

        <ModuleCardView
          styles={styles}
          title={"Ejercicios"}
          source={require("@/assets/images/ing2.png")}
          backgroundColor={fancyColorLight.green}
          disabled={disableExcercise}
          iconText={[
            {
              icon: "progress-star",
              text: `${
                excercise !== null && excercise.totalProgress > 0
                  ? Intl.NumberFormat("es-Co", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(
                      (excercise.completedProgress / excercise.totalProgress) *
                        100
                    )
                  : "0"
              }% progreso`,
            },
            {
              icon: "clipboard-text-outline",
              text: `${excercise?.completedProgress} / ${excercise?.totalProgress} actividades`,
            },
          ]}
          onPressNext={handleNavigateExcercise}
        />

        <ModuleCardView
          styles={styles}
          title={"Evaluacion"}
          source={require("@/assets/images/img3.png")}
          backgroundColor={fancyColorLight.blue}
          disabled={disableEvaluation}
          iconText={[
            {
              icon: "progress-star",
              text: `${
                evaluation !== null && evaluation.totalProgress > 0
                  ? Intl.NumberFormat("es-Co", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(
                      (evaluation.completedProgress /
                        evaluation.totalProgress) *
                        100
                    )
                  : "0"
              }% progreso`,
            },
            {
              icon: "clipboard-text-outline",
              text: `${evaluation?.questionnaire.correct} / ${evaluation?.questionnaire.total} preguntas`,
            },
          ]}
          onPressNext={handleNavigateEvaluation}
        />
      </ScrollView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={handleHideModal}
          contentContainerStyle={styles.modalStyle}
          style={styles.containerModal}
        >
          <View>
            <H6>{modalMessage}</H6>
            <View style={styles.actionModal}>
              <Button
                icon="check"
                mode="contained"
                onPress={() => handleClearIntroductionDatabase(whichErase)}
                style={styles.checkButtonModal}
                textColor={whiteColor.main}
              >
                Si
              </Button>
              <Button
                icon="close"
                mode="contained"
                onPress={handleHideModal}
                style={styles.closeButtonModal}
                textColor={whiteColor.main}
              >
                No
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </MainLayout>
  );
};

const getStyles = ({ theme }: { theme: any }) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    containerModal: { paddingHorizontal: 20 },
    modalStyle: { backgroundColor: "white", padding: 20 },
    actionModal: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    checkButtonModal: {
      backgroundColor: success.light,
    },
    closeButtonModal: {
      backgroundColor: danger.light,
    },
    titleContainer: {},
    subtitleContainer: {},
    actionContainer: {},
    textTitle: {
      color: "white",
    },
    subtitleText: {
      color: "white",
      margin: 0,
      fontSize: 13,
    },
    progressIconText: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconText: {
      fontSize: 13,
    },
  });

export default Home;
