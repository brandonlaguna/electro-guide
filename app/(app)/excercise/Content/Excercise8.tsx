import { P } from "@/components/Common/Typography";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Excercise8 = () => {
  return (
    <>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Materiales:</P>
      <P style={{ fontSize: 12 }}>Multímetro</P>
      <P style={{ fontSize: 12 }}>Cable de cobre</P>
      <P style={{ fontSize: 12 }}>
        Platina de cobre(se pueden utilizar las platinas de los cúter){" "}
      </P>
      <P style={{ fontSize: 12 }}>Un recipiente</P>
      <P style={{ fontSize: 12 }}>Bateria 9V</P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Pasos:</P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Primer paso:</P>
      <P style={{ fontSize: 12 }}>
        -Coloca la cuchilla de cúter en el recipiente de plástico de manera
        perpendicular y casi a la misma altura, seguido esto conecta un extremo
        del cable positivo a un extremo de la cuchilla y el otro extremo del
        cable negativo al otro extremo de la cuchilla.
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise8/step1.png")}
          contentFit="fill"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Segundo paso:</P>
      <P style={{ fontSize: 12 }}>
        -Conecta el otro extremo del cable positivo al polo positivo de la
        batería y el otro extremo del cable negativo al polo negativo de la
        batería.
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise8/step2.png")}
          contentFit="fill"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12 }}>
        Si la pila no especifica cuál es el positivo o negativo solo necesitas
        colocar el multímetro en la escala de voltaje continuo y medir, si el
        valor da negativo es porque están invertidas las polaridades.
      </P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Tercer paso:</P>
      <P style={{ fontSize: 12 }}>
        -Configura el multímetro en modo voltaje continuo.
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise8/step3.png")}
          contentFit="fill"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12 }}>
        Si no ves valores varia la escala, ya que si es muy alta no se verá
        reflejado.
      </P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Cuarto paso:</P>
      <P style={{ fontSize: 12 }}>
        Coloca la parte positiva del multímetro en el agua en diferentes puntos
        a lo largo de la cuchilla y la parte negativa en la otra cuchilla
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise8/step4.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Quinto paso:</P>
      <P style={{ fontSize: 12 }}>
        Mide el voltaje en varios puntos del agua, desde el extremo negativo
        hasta el extremo positivo de la cuchilla.
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise8/step5.png")}
          contentFit="fill"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12 }}>
        El potencial eléctrico es la cantidad de energía que una carga eléctrica
        posee en un punto dentro de un campo eléctrico, medido en voltios (V).
        En el experimento con la cuchilla de cúter, la batería crea un campo
        eléctrico en el agua, generando una diferencia de potencial entre los
        extremos de la cuchilla. Al medir el voltaje en distintos puntos del
        agua con un multímetro, se observa cómo el potencial eléctrico aumenta a
        medida que nos acercamos al extremo positivo de la cuchilla. Esto
        demuestra la existencia y variación del potencial eléctrico dentro del
        campo generado por la batería.
      </P>
    </>
  );
};

const styles = StyleSheet.create({
  images: {
    flex: 1,
    width: "100%",
  },
  containerImage: {
    width: "100%",
    height: 200,
  },
});
