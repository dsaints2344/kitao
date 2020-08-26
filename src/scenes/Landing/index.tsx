import React from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { darkOrange, lightGray } from "../../styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/atoms";
import { NavigationProp } from "@react-navigation/native";

interface LandingProps {
  navigation: NavigationProp<any, any>;
}

const { width } = Dimensions.get("window");

const Landing = ({ navigation }: LandingProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo_vectorized.png")}
      />

      <Button
        label={"Crear cuenta"}
        onPress={() => Alert.alert("Crear cuenta")}
        style={styles.button}
        variant="primary"
      />
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>
          ¿Ya tienes una cuenta?{" "}
          <Text style={{ color: "blue" }}>Iniciar Sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray,
    alignItems: "center",
  },
  logo: {
    height: 285,
    width: 166,
    resizeMode: "contain",
    top: 176,
    marginBottom: 100,
  },
  button: {
    width: width * 0.9,
  },
  text: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
