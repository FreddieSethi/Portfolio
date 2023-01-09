import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import themeContext from "../config/themeContext";
import colours from "../config/colours";

export default function DetailsScreen({ navigation, route }) {
  const theme = useContext(themeContext);
  const item = route.params.data;
  const { name, date } = item;

  //this coverts out unix timestamp number into a human readable date
  let newDate = new Date();
  newDate.setTime(date);
  let dateString = newDate.toUTCString();

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Reminder created on {dateString}</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={styles.button}
      >
        <Text style={[styles.calcButtons, { color: theme.color }]}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  text: {
    padding: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 200,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  calcButtons: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
