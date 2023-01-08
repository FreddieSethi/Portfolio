import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
//import Icon from "react-native-vector-icons/MaterialIcons";
import colours from "../config/colours";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const Dashboard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  // change the password
  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password resest email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Hello, {name.firstName}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Food")}
              style={{ marginTop: 20 }}
            >
              <Icon name="fast-food-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Food</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flex: 2 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ marginTop: 20 }}
            >
              <Icon name="fitness-outline" size={60} color={colours.black} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Workout</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse", flex: 3 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={{ marginTop: 20 }}
            >
              <Icon name="ellipsis-horizontal-outline" size={60} />
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.text}>Calories: </Text>
          <Text style={styles.text}>Protein: </Text>
          <Text style={styles.text}>Carbohydrates: </Text>
          <Text style={styles.text}>Fat: </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            changePassword();
          }}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Edit Calories
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            changePassword();
          }}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Change Password
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={styles.button}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 400,
    fontSize: 20,
    borderBottomColor: colours.black,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
