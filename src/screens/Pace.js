import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import themeContext from "../config/themeContext";
import colours from "../config/colours";
import theme from "../config/theme";

function PaceCalculator() {
  const theme = useContext(themeContext);
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [pace, setPace] = useState("");
  const [unit, setUnit] = useState("km"); // added state variable for unit

  function calculatePace() {
    const distanceInUnits = parseFloat(distance);
    const hoursInMinutes = parseInt(hours) * 60;
    const minutesInMinutes = parseInt(minutes);
    const secondsInMinutes = parseInt(seconds) / 60;
    const timeInMinutes = hoursInMinutes + minutesInMinutes + secondsInMinutes;
    if (isNaN(distanceInUnits) || isNaN(timeInMinutes)) {
      return;
    }
    let paceInMinutesPerUnit;
    if (unit === "km") {
      paceInMinutesPerUnit = timeInMinutes / distanceInUnits;
    } else if (unit === "miles") {
      paceInMinutesPerUnit = timeInMinutes / (distanceInUnits * 0.62137);
    } else if (unit === "meters") {
      paceInMinutesPerUnit = timeInMinutes / (distanceInUnits * 0.001);
    }
    const paceInMinutes = Math.floor(paceInMinutesPerUnit);
    const paceInSeconds = Math.round(
      (paceInMinutesPerUnit - paceInMinutes) * 60
    );
    setPace(`${paceInMinutes} minutes ${paceInSeconds} seconds`);
  }

  return (
    // Allows user to dismiss keyboard
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.buttonText, { color: theme.color }]}>Time:</Text>
      <TextInput
        style={[styles.input, { color: theme.color }]}
        placeholder="Hours"
        keyboardType="numeric"
        onChangeText={(text) => setHours(text)}
        placeholderTextColor={colours.placholder}
      />

      <TextInput
        style={[styles.input, { color: theme.color }]}
        keyboardType="numeric"
        onChangeText={(text) => setMinutes(text)}
        placeholder="Minutes"
        placeholderTextColor={colours.placholder}
      />

      <TextInput
        style={[styles.input, { color: theme.color }]}
        keyboardType="numeric"
        onChangeText={(text) => setSeconds(text)}
        placeholder="Seconds"
        placeholderTextColor={colours.placholder}
      />

      <Text style={[styles.buttonText, { color: theme.color }]}>Distance:</Text>
      <TextInput
        style={[styles.input, { color: theme.color }]}
        placeholder="Distance"
        keyboardType="numeric"
        onChangeText={(text) => setDistance(text)}
        placeholderTextColor={colours.placholder}
      />
      <Text style={[styles.buttonText, { color: theme.color }]}>Unit:</Text>

      <TouchableOpacity style={[styles.result, { color: theme.color }]}>
        <Picker
          style={{ color: "#fff", placeholderTextColor: "#fff" }}
          selectedValue={unit}
          onValueChange={(itemValue) => setUnit(itemValue)}
        >
          <Picker.Item style={styles.picker} label="Kilometers" value="km" />
          <Picker.Item label="Miles" value="miles" />
          <Picker.Item label="Meters" value="meters" />
        </Picker>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { color: theme.color }]}
        onPress={calculatePace}
      >
        <Text style={[styles.buttonText, { color: theme.color }]}>
          Calculate
        </Text>
        {pace && (
          <Text>
            Pace: {pace} per {unit}
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PaceCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 20,
  },
  input: {
    height: 45,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    borderColor: colours.border,
    placeholderTextColor: colours.placholder,
  },
  button: {
    height: 45,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colours.border,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
  },
  picker: {
    color: theme.color,
  },
});
