import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { darkOrange, lightGray } from "../../styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextLabel } from "../../components/atoms";
import { NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

interface SignUpProps {
  navigation: NavigationProp<any, any>;
}

const { width } = Dimensions.get("window");

const SignUp = ({ navigation }: SignUpProps) => {
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
        ¿Qué quieres hacer?
      </TextLabel>

      <Button
        label={"Trabajar"}
        onPress={() => navigation.navigate("EmployeeSignUp")}
        style={styles.button}
        variant="primary"
      />

      <Button
        label={"Contratar"}
        onPress={() => navigation.navigate("EmployerSignUp")}
        style={styles.button}
        variant="primary"
      />
    </View>
  );
};

export default SignUp;

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
