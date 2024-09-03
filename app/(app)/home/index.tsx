import { LargeCard } from "@/components/Common/Cards";
import { H1, H2, H3, H5, P } from "@/components/Common/Typography";
import MainLayout from "@/components/MainLayout";
import { ThemedText } from "@/components/ThemedText";
import { fancyColorLight, greyLight, whiteColor } from "@/theme/colors";
import { router } from "expo-router";
import { FC } from "react";
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { DefaultTheme, useTheme } from "styled-components/native";
import QuestionnaireView from "../introduction/Contents/QuestionnaireView";
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
  const { introduction } = useHome();
  return (
    <MainLayout>
      <ScrollView>
        <H5>Evalúa tu conimiento</H5>
        <ModuleCardView
          styles={styles}
          title={"Introduccion"}
          source={require("@/assets/images/ing1.png")}
          backgroundColor={fancyColorLight.indigo}
          disabled={false}
          iconText={[
            {
              icon: "progress-star",
              text: `${
                introduction !== null
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
          onPressNext={() => router.navigate("/introduction")}
        />

        <ModuleCardView
          styles={styles}
          title={"Ejercicios"}
          source={require("@/assets/images/ing2.png")}
          backgroundColor={fancyColorLight.green}
          disabled={
            introduction !== null
              ? (introduction.questionnaire.correct /
                  introduction.questionnaire.total) *
                  100 <
                50
              : false
          }
          iconText={[
            { icon: "progress-star", text: "100% progreso" },
            { icon: "clipboard-text-outline", text: "10/10 actividades" },
          ]}
          onPressNext={() => router.navigate("excercise")}
        />

        <ModuleCardView
          styles={styles}
          title={"Evaluacion"}
          source={require("@/assets/images/ing1.png")}
          backgroundColor={fancyColorLight.blue}
          disabled={true}
          iconText={[
            { icon: "progress-star", text: "100% progreso" },
            { icon: "clipboard-text-outline", text: "10/10 actividades" },
          ]}
          onPressNext={() => console.log("Introduccion Selected")}
        />
      </ScrollView>
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
