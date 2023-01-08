import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";

import { SearchBar } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

import nutrientAPI from "../data/nutrientAPI.json";

import Icon from "react-native-vector-icons/MaterialIcons";

import colours from "../config/colours";

const DATA = Object.values(nutrientAPI);
console.log(DATA);

const Item = ({
  food,
  calories,
  protein,
  carbs,
  fats,
  sugar,
  sodium,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.food}>{food}</Text>
    <Text>Calories: {calories}</Text>
    <Text>Protein: {protein} grams</Text>
    <Text>Carbs: {carbs} grams</Text>
    <Text>Fats: {fats} grams</Text>
    <Text>Sugar: {sugar} grams</Text>
    <Text>Sodium: {sodium} milligrams</Text>
  </TouchableOpacity>
);

const handlePress = (item) => {
  // Navigate to the Details screen and pass the item as a parameter
  const navigation = useNavigation();
  navigation.navigate("Details", { item });
};

const AddFoodScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Icon name="photo-camera" size={60} color={colours.black} />
        </TouchableOpacity>
        <SearchBar
          placeholder="Search for food..."
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
      </View>
      <View>
        <FlatList
          //data={DATA}
          data={DATA.filter((item) => item.food.includes(searchTerm))}
          renderItem={({ item }) => (
            <Item
              food={item.food}
              calories={item.calories}
              protein={item.protein}
              carbs={item.carbs}
              fats={item.fats}
              sugar={item.sugar}
              sodium={item.sodium}
              onPress={() => handlePress(item)}
            />
          )}
          keyExtractor={(item) => item.food}
          // renderItem={({ item }) => (
          //   <Item
          //     food={item.food}
          //     calories={item.calories}
          //     protein={item.protein}
          //     carbs={item.carbs}
          //     fats={item.fats}
          //     sugar={item.sugar}
          //     sodium={item.sodium}
          //     onPress={() => handlePress(item)}
          //   />
          // )}
          // keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colours.white,
  },

  list: {
    backgroundColor: "#eee",
    paddingTop: 100,
  },
  item: {
    backgroundColor: colours.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  food: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
