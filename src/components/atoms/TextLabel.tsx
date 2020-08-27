import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

// Constants

import { moderateScale } from "../../utils/ScalingScreen";
import { black } from "_styles";
import { white } from "_styles";

interface TextLabelProps {
  color?: string;
  font?: string;
  transform?: string;
  align?: string;
  children: string;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "tail" | "middle" | "clip";
  size?: number;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  heading?: number;
  style?: {};
}

const colors = {
  grey: black,
  darkOrange: "#F79812",
  mediumOrange: "#CE913B",
  lightGray: "#F4F1DE",
  black: "#000000",
  white: "rgb(255, 255, 255)",
};

// Font & Weight

// const font = {
//   primary: "Lato-Regular",
//   primarylight: "Lato-Light",
//   primarybold: "Lato-Bold",
//   secondary: "Roboto-Regular",
//   secondarybold: "Roboto-Bold",
// };

// Text Transform

const transform = {
  lowercase: "lowercase",
  uppercase: "uppercase",
  capitalize: "capitalize",
  default: "none",
};

// Text align

const align = {
  default: "left",
  right: "right",
  center: "center",
};

const TextLabel = (props: TextLabelProps) => {
  const styles = StyleSheet.create({
    textStyles: {
      //   fontFamily: props.font ? font[props.font] : font.primary,
      fontSize: props.size ? props.size : moderateScale(16),
      color: props.color ? colors[props.color] : colors.default,
      textTransform: props.transform
        ? transform[props.transform]
        : transform.default,
      textAlign: props.align ? align[props.align] : align.default,
      fontWeight: props.weight || "normal",
    },
    sectionHeading: props.heading ? { marginBottom: 15 } : {},
    additionalStyles: props.style ? props.style : {},
  });

  return (
    <Text
      style={[
        styles.textStyles,
        styles.sectionHeading,
        styles.additionalStyles,
      ]}
      numberOfLines={props.numberOfLines ? props.numberOfLines : 0}
      ellipsizeMode={props.ellipsizeMode ? props.ellipsizeMode : "tail"}
    >
      {props.children}
    </Text>
  );
};

export default TextLabel;
