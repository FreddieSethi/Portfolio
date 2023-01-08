import React from "react";
import themeContext from "../Theme/themeContext";
import theme from "../Theme/theme";
import { StyleSheet } from "react-native";
//theme colours, size, faded

export default function TextInputComponent(props) {
  const { style, placeholderTextColor = "#FFCCCB", keyboardType } = props;
  return (
    <TextInputComponent
      style={[styles.input, { color: theme.color }]}
      placeholderTextColor={"#FFCCCB"}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    borderColor: "#FF0000",
  },
});
