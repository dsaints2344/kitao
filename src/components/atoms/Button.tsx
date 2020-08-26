import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { darkOrange, mediumOrange } from "../../styles/colors";

const { width } = Dimensions.get("window");

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
  style?: object;
}

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const backgroundColor = variant === "primary" ? darkOrange : mediumOrange;
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }, style]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    // fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  },
});
