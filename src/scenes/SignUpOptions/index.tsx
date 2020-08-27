import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { darkOrange, lightGray } from "../../styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "../../components/atoms";
import { NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TextLabel from "../../components/atoms/TextLabel";

interface SignUpOptionsProps {
  navigation: NavigationProp<any, any>;
}

const { width } = Dimensions.get("window");

const SignUpOptions = ({ navigation }: SignUpOptionsProps) => {
  const state = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo_vectorized.png")}
      />

      <TextLabel
        style={{
          textAlign: "left",
          fontSize: 25,
          alignSelf: "flex-start",
          marginLeft: 20,
          marginBottom: 10,
          fontWeight: "500",
        }}
      >
        Crear una Cuenta
      </TextLabel>

      <Button
        label={"Usar Gmail"}
        logo={require("../../assets/images/google-icon.png")}
        onPress={() => Alert.alert("Crear cuenta con Gmail")}
        style={styles.button}
        variant="primary"
      />

      <Button
        label={"Crear cuenta"}
        onPress={() => navigation.navigate("SignUp")}
        style={styles.button}
        variant="primary"
      />
      <TouchableOpacity>
        <Text style={styles.text}>
          ¿Ya tienes una cuenta?{" "}
          <Text style={{ color: "blue" }}>Iniciar Sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpOptions;

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
