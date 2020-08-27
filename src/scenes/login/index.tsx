import React from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { darkOrange, lightGray, black } from "../../styles/colors";
import {
  RectButton,
  TouchableOpacity,
  TextInput,
} from "react-native-gesture-handler";
import { Button } from "../../components/atoms";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");

interface LoginProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: LoginProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        label={"Reiniciar contraseña"}
        onPress={() => Alert.alert("Crear cuenta")}
        style={styles.resetPasswordButton}
        variant="primary"
      />

      <Text style={styles.text}>Iniciar Sesión</Text>

      {/* CREATE INPUT COMPONENT */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Correo Electronico" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} />
      </View>

      <Button
        variant="primary"
        label="Iniciar Sesión"
        onPress={() => Alert.alert("Iniciar Sesión")}
        style={styles.loginButton}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray,
    alignItems: "center",
  },
  resetPasswordButton: {
    backgroundColor: black,
    alignSelf: "flex-end",
    marginRight: 10,
    width: 145,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 10,
    fontSize: 25,
  },
  inputContainer: {
    marginTop: 60,
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: black,
    width: width * 0.9,
    marginTop: 20,
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 50,
  },
});
