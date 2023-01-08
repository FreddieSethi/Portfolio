import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import colours from "../config/colours";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Icon
              name="person-circle-outline"
              size={100}
              color={colours.black}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BMI")}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>BMI</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flex: 2 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Pace")}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Pace</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse", flex: 3 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Waist to Hip Calculator")}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>WTH</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Gyms Nearby")}
              style={{ marginTop: 20 }}
            >
              <Icon name="pin-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Gyms Nearby
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flex: 2 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Meal Planner")}
              style={{ marginTop: 20 }}
            >
              <Icon name="pizza-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Meal Planner
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse", flex: 3 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Newsfeed")}
              style={{ marginTop: 20 }}
            >
              <Icon name="newspaper-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Newsfeed</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Reminders")}
              style={{ marginTop: 20 }}
            >
              <Icon name="list-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Reminders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flex: 2 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Dark Mode")}
              style={{ marginTop: 20 }}
            >
              <Icon name="moon-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dark Mode
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse", flex: 3 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Authentication")}
              style={{ marginTop: 20 }}
            >
              <Icon
                name="finger-print-outline"
                size={60}
                color={colours.black}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Authentication
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },

  button: {
    marginTop: 50,
    height: 70,
    width: 110,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
