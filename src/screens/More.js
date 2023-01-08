import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";
import colours from "../config/colours";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          style={{ marginTop: 20 }}
        >
          <Icon name="Person2" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BMI")}
          style={{ marginTop: 20 }}
        >
          <Icon name="More" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            BMI Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Pace")}
          style={{ marginTop: 20 }}
        >
          <Icon name="DirectionRun" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Pace Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Waist to Hip")}
          style={{ marginTop: 20 }}
        >
          <Icon
            name="Waist to Hip Calculator"
            size={60}
            color={colours.black}
          />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Waist to Hip Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Gyms Nearby")}
          style={{ marginTop: 20 }}
        >
          <Icon name="Room" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Gyms Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Meal Planner")}
          style={{ marginTop: 20 }}
        >
          <Icon name="BMI" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Meal Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Newsfeed")}
          style={{ marginTop: 20 }}
        >
          <Icon name="BMI" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Newsfeed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Reminders")}
          style={{ marginTop: 20 }}
        >
          <Icon name="BMI" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dark Mode")}
          style={{ marginTop: 20 }}
        >
          <Icon name="map" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Authentication")}
          style={{ marginTop: 20 }}
        >
          <Icon name="BMI" size={60} color={colours.black} />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Authentication
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
