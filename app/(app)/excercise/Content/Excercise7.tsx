import { P } from "@/components/Common/Typography";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Excercise7 = () => {
  return (
    <>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Materiales:</P>
      <P style={{ fontSize: 12 }}>4 Limones</P>
      <P style={{ fontSize: 12 }}>Cable de cobre</P>
      <P style={{ fontSize: 12 }}>Cuatro tornillos o clavos</P>
      <P style={{ fontSize: 12 }}>Multímetro</P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Pasos:</P>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Primer paso:</P>
      <P style={{ fontSize: 12 }}>
        -tendremos que enrollar los cuatros tornillos o clavos con el cobre
        debería quedar de la siguiente manera:
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise7/step1.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Segundo paso:</P>
      <P style={{ fontSize: 12 }}>
        -a cada limón se le tendrán que hacer dos incisiones, en la primera
        pondremos el tornillo o clavo para que el segundo se conecte el cable
        del tornillos posterior realizando un circuito como se ve a continuación
        también tener en cuenta que dos extensiones del cable de cobre deben
        quedar libres:
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise7/step2.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <P style={{ fontSize: 12, fontWeight: "bold" }}>Tercer paso:</P>
      <P style={{ fontSize: 12 }}>
        -Ahora tendremos que utilizar el multímetro para poder observar el
        voltaje el cual esta relacionado directamente con el potencial
        eléctrico. el experimento del limón demuestra cómo se puede generar una
        diferencia de potencial eléctrico utilizando materiales cotidianos a
        través de una reacción química entre metales y un ácido.
      </P>
      <View style={styles.containerImage}>
        <Image
          style={styles.images}
          source={require("@/assets/images/excercise/excercise7/step3.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
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
