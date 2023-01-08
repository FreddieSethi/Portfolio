import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import MealList from "./MealList";

import themeContext from "../config/themeContext";
import theme from "../config/theme";

function App() {
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
          style={[styles.input, { color: theme.color }]}
          placeholderTextColor={"#FFCCCB"}
        />
        <Button onPress={getMealData} title="Get Daily Meal Plan" />
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
});