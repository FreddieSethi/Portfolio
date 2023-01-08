import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState, useContext } from "react";
//import { Switch } from "react-native-gesture-handler";
import { EventRegister } from "react-native-event-listeners";

import themeContext from "../config/themeContext";

const DarkMode = () => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.color }]}>Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit("ChangeTheme", value);
        }}
      />
    </View>
  );
};

export default DarkMode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
