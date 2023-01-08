import React from "react";
import { View, Text } from "react-native";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <View>
      <View>
        <Text>Macros</Text>
        <View>
          <Text>Calories: {nutrients.calories.toFixed(0)}</Text>
          <Text>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</Text>
          <Text>Fat: {nutrients.fat.toFixed(0)}</Text>
          <Text>Protein: {nutrients.protein.toFixed(0)}</Text>
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
