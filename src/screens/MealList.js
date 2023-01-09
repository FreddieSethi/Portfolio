import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Meal from "./Meal";
import themeContext from "../config/themeContext";

export default function MealList({ mealData }) {
  const theme = useContext(themeContext);
  const nutrients = mealData.nutrients;

  return (
    <View>
      <View>
        <Text style={[styles.title, { color: theme.color }]}>Macros</Text>
        <View>
          <Text style={[styles.text, { color: theme.color }]}>
            Calories: {nutrients.calories.toFixed(0)} grams
          </Text>
          <Text style={[styles.text, { color: theme.color }]}>
            Carbohydrates: {nutrients.carbohydrates.toFixed(0)} grams
          </Text>
          <Text style={[styles.text, { color: theme.color }]}>
            Fat: {nutrients.fat.toFixed(0)} grams
          </Text>
          <Text style={[styles.text, { color: theme.color }]}>
            Protein: {nutrients.protein.toFixed(0)} grams
          </Text>
        </View>
      </View>

      <View>
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
