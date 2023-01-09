import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import MealList from "./MealList";

import themeContext from "../config/themeContext";
import theme from "../config/theme";
import colours from "../config/colours";

function App() {
  const theme = useContext(themeContext);
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    let apiKey = "4cd90a9367d54d1d9c12324a662c5590";

    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <ScrollView>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <TextInput
          keyboardType="numeric"
          placeholder="Calories (e.g. 2000)"
          onChangeText={(text) => setCalories(text)}
          style={[styles.input, { borderColor: theme.color }]}
          placeholderTextColor={theme.color}
        />

        <TouchableOpacity onPress={getMealData} style={styles.button}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Get Daily Meal Plan
          </Text>
        </TouchableOpacity>
      </View>
      {mealData && <MealList mealData={mealData} />}
    </ScrollView>
  );
}

export default App;

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
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    borderColor: "#FF0000",
  },
  button: {
    marginTop: 30,
    marginBottom: 40,
    height: 70,
    width: 250,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
