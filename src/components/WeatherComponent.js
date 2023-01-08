import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colours from "../config/colours";

export default function App() {
  let KEY = "1c33a2c342d2362b76d7c3b3b24e3ae9";
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  function fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemperature(data.main.temp);
        setCondition(data.weather[0].main);
      });
  }
  useEffect(() => {
    async function getData() {
      try {
        fetchWeather(50.714003, -1.8767287);
      } catch (e) {
        console.warn(e);
      }
    }
    getData();
  }, []);

  return (
    <View>
      <Text style={styles.bigText}>
        {temperature} {"\u00B0"} C
      </Text>
      <Text style={styles.bigText}>{condition}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  bigText: {
    fontSize: 30,
  },
});
