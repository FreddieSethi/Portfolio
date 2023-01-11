import React from "react";
import themeContext from "../Theme/themeContext";
import theme from "../Theme/theme";
import { StyleSheet } from "react-native";
import colours from "../config/colours";

export default function TextInputComponent(props) {
  const { style, placeholderTextColor = "#FFCCCB", keyboardType } = props;
  return (
    <TextInputComponent
      style={[styles.input, { color: theme.color }]}
      placeholderTextColor={colours.pink}
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
    borderColor: colours.pink,
  },
});
