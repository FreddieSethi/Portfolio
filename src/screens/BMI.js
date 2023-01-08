// It allows a user to input their weight and height and calculates the BMI.
// The BMI and a description of the BMI are then displayed to the user.

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { useState, useContext } from "react";
import { Constants } from "expo-constants";

import themeContext from "../config/themeContext";
import colours from "../config/colours";

import { Table, Rows } from "react-native-table-component";

// Calculate the BMI and set the value in the state
const BmiCalc = () => {
  const theme = useContext(themeContext);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [desciption, setDesciption] = useState("");

  const calcBmi = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi.toFixed(1));

    // Determine the BMI category based on the calculated BMI
    if (bmi < 18.5) {
      setDesciption("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDesciption("Normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setDesciption("Overweight");
    } else if (bmi >= 30) {
      setDesciption("Obese");
    }
  };

  const data = [
    ["Low", "<18.5"],
    ["Healthy", "18.5-24.9"],
    ["Overweigth", "25-29.9"],
    ["Obese", ">30"],
  ];

  return (
    // Allows user to dismiss keyboard
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TextInput
        style={[styles.input, { color: theme.color }]}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        placeholder="Weight in KG" // Placeholder text to display when the input is empty
        placeholderTextColor={colours.placholder}
        keyboardType="numeric" // Display a numeric keyboard
      />
      <TextInput
        style={[styles.input, { color: theme.color }]}
        value={height}
        onChangeText={(text) => setHeight(text)}
        placeholder="Height in cm"
        placeholderTextColor={colours.placholder}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={[styles.button, { color: theme.color }]}
        onPress={calcBmi}
      >
        <Text style={[styles.buttonText, { color: theme.color }]}>
          Calculate
        </Text>
      </TouchableOpacity>
      <View style={[styles.resultView, { color: theme.color }]}>
        <Text style={[styles.result, { color: theme.color }]}>{bmi}</Text>
        <Text style={[styles.result, { color: theme.color }]}>
          {desciption}
        </Text>
      </View>
      <View>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Rows data={data} textStyle={[styles.text, { color: theme.color }]} />
        </Table>
      </View>
    </ScrollView>
  );
};

export default BmiCalc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 20,
  },
  title: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    borderColor: colours.border,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colours.border,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resultView: {
    margin: 15,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
});
