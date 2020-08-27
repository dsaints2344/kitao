import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageProperties,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { darkOrange, mediumOrange } from "../../styles/colors";

const { width } = Dimensions.get("window");

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
  style?: object;
  logo?: ImageProperties;
}

const Button = ({ variant, label, onPress, style, logo }: ButtonProps) => {
  const backgroundColor = variant === "primary" ? darkOrange : mediumOrange;
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }, style]}
      {...{ onPress }}
    >
      {logo ? (
        <View style={styles.logo}>
          <Text style={[styles.label, { color }]}>{label}</Text>
          <Image source={logo} resizeMode="contain" />
        </View>
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    textAlign: "center",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
});
