import { H3, H5, P } from "@/components/Common/Typography";
import MainLayout from "@/components/MainLayout"
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native"

const About = () => {
  return (
    <MainLayout>
      <View style={styles.root}>
      <Image
          style={styles.images}
          source={require("@/assets/images/coding.png")}
          contentFit="cover"
        />
        <P style={{ fontWeight: "bold"}}>Diseñado y Desarrollado por</P>
        <P>Jose David Otero Solano</P>
        <P>Miguel Angel Pedraza Herazo</P>
      </View>
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  images:{
    height: 100,
    width: 100
  }
});

export default About;