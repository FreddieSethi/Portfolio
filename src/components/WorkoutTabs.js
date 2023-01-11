import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colours from "../config/colours";
import Icon from "react-native-vector-icons/Ionicons";
import themeContext from "../config/themeContext";
import React, { useContext } from "react";

export default function Boxes({ setWorkouts }) {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  return (
    <View style={styles.boxesContainer}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("CreateTemplate", { setWorkouts })}
      >
        <View>
          <Icon name="folder-outline" size={100} color={theme.color} />
        </View>
        <Text style={styles.textStyles}>Create New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("Calendar")}
      >
        <View style={styles.heroBox}>
          <Icon name="hourglass-outline" size={100} color={theme.color} />
        </View>
        <Text style={styles.textStyles}>History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxesContainer: {
    margin: 24,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: { width: 32, height: 32 },
  textStyles: {},
});
