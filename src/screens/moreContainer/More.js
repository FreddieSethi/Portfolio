import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import colours from "../../config/colours";
import themeContext from "../../config/themeContext";

const Dashboard = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <View
          style={[styles.profile, { backgroundColor: theme.backgroundColor }]}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Icon name="person-circle-outline" size={100} color={theme.color} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BMI")}
              style={styles.button}
            >
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                BMI
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Pace")}
              style={styles.button}
            >
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Pace
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Waist to Hip Calculator")}
              style={styles.button}
            >
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                WTH
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Gyms Nearby")}
              style={{ marginTop: 20 }}
            >
              <Icon name="pin-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Gyms Nearby
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Meal Planner")}
              style={{ marginTop: 20 }}
            >
              <Icon name="pizza-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Meal Planner
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Newsfeed")}
              style={{ marginTop: 20 }}
            >
              <Icon name="newspaper-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Newsfeed
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Reminders")}
              style={{ marginTop: 20 }}
            >
              <Icon name="list-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Reminders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Dark Mode")}
              style={{ marginTop: 20 }}
            >
              <Icon name="moon-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Dark Mode
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Authentication")}
              style={{ marginTop: 20 }}
            >
              <Icon name="finger-print-outline" size={60} color={theme.color} />
              <Text style={[styles.calcButtons, { color: theme.color }]}>
                Biometrics
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
  calcButtons: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
