import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import nutrientAPI from "../../data/nutrientAPI.json";
import Icon from "react-native-vector-icons/MaterialIcons";
import colours from "../../config/colours";
import { TextInput } from "react-native-gesture-handler";
import themeContext from "../../config/themeContext";
import theme from "../../config/theme";

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

function MyFlatList({ DATA, onItemPress }) {
  const theme = useContext(themeContext);
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
          <View>
            <Text style={styles.food}>{food}</Text>
            <Text>Calories: {calories}</Text>
            <Text>Protein: {protein} grams</Text>
            <Text>Carbs: {carbs} grams</Text>
            <Text>Fats: {fats} grams</Text>
            <Text>Sugar: {sugar} grams</Text>
            <Text>Sodium: {sodium} milligrams</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

function App() {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
    // You can navigate to another screen here using the `navigate` function
    // of a navigation object.
    navigation.navigate("Dashboard", { selectedItem });
  };

  return <MyFlatList data onItemPress={handleItemPress} />;
}

const AddFoodScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for food..."
            onChangeText={setSearchTerm}
            value={searchTerm}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <Icon name="photo-camera" size={60} color={theme.color} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
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
            />
          )}
          keyExtractor={(item) => item.food}
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
  searchBar: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    width: 300,
    height: 50,
    paddingLeft: 10,
  },
});
