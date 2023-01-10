import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import themeContext from "../config/themeContext";

export default function Meal({ meal }) {
  const theme = useContext(themeContext);
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
      <Text style={[styles.title, { color: theme.color }]}>{meal.title}</Text>
      <View>
        <Text style={[styles.text, { color: theme.color }]}>
          Preparation time: {meal.readyInMinutes} minutes
        </Text>
        <Text style={[styles.text, { color: theme.color }]}>
          Number of servings: {meal.servings}
        </Text>
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
    fontSize: 12,
    marginBottom: 10,
  },
});
