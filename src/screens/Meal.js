import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  let apiKey = "4cd90a9367d54d1d9c12324a662c5590";

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?${apiKey}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <View>
      <Text>{meal.title}</Text>
      <Image source={{ uri: imageUrl }} />
      <View>
        <Text>Preparation time: {meal.readyInMinutes} minutes</Text>
        <Text>Number of servings: {meal.servings}</Text>
      </View>

      {/* Links are not supported in React Native, so you will need to find an alternative way to display the recipe source */}
    </View>
  );
}
