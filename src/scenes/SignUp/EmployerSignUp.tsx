import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { darkOrange, lightGray, black } from "../../styles/colors";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Button, TextLabel } from "../../components/atoms";
import { NavigationProp } from "@react-navigation/native";
import FormInput from "../../components/atoms/FormInput";
import { useSelector } from "react-redux";

interface EmployerSignUpProps {
  navigation: NavigationProp<any, any>;
}

const { width } = Dimensions.get("window");

const EmployerSignUp = ({ navigation }: EmployerSignUpProps) => {
  const state = useSelector((state) => state);
  const [steps, setSteps] = useState(0);
  const [formInput, setFormInput] = useState({
    cedula: "",
  });

  return (
    <View style={styles.container}>
      <TextLabel style={styles.text}>Crear cuenta de contratación</TextLabel>
      <View style={styles.inputContainer}>
        {steps === 0 ? (
          <React.Fragment>
            <FormInput
              onChangeText={() => {}}
              withLabel={true}
              label="Nombre"
            />

            <FormInput
              onChangeText={() => {}}
              withLabel={true}
              label="Apellido"
            />

            <FormInput
              onChangeText={() => {}}
              withLabel={true}
              label="Correo Electronico"
              additionalStyles={{ marginTop: 10 }}
            />

            <FormInput
              onChangeText={() => {}}
              withLabel={true}
              label="Contraseña"
              type="password"
            />
          </React.Fragment>
        ) : steps === 1 ? (
          <FormInput
            onChangeText={(value) =>
              setFormInput({ ...formInput, cedula: value })
            }
            withLabel={true}
            label="Cedula"
            value={formInput.cedula}
          />
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        {steps > 0 && (
          <Button
            label={"Volver"}
            onPress={() => setSteps(steps - 1)}
            style={[styles.button, { alignSelf: "flex-start" }]}
            variant="primary"
          />
        )}

        <Button
          label={steps !== 1 ? "Continuar" : "Finalizar"}
          onPress={steps !== 1 ? () => setSteps(steps + 1) : () => {}}
          style={styles.button}
          variant="primary"
        />
      </View>
    </View>
  );
};

export default EmployerSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGray,
    // justifyContent: "space-between",
    // marginTop: 73,
    padding: 20,
  },
  text: {
    marginTop: 73,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  inputContainer: {
    marginTop: 60,
  },
  input: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: { marginTop: 30, width: 102 },
});
