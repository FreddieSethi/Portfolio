import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { firebase } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import colours from "../config/colours";
import Icon from "react-native-vector-icons/Ionicons";
import themeContext from "../config/themeContext";

function Dashboard({ route }) {
  const theme = useContext(themeContext);
  // const { selectedItem } = route.params;
  // console.log(selectedItem);

  const navigation = useNavigation();
  //const [name, setName] = useState("");
  const [name, setName] = useState({ firstName: "" });

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
          setName({ firstName: snapshot.data().firstName });
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <ScrollView>
        <Text style={[styles.text, { color: theme.color }]}>
          Hello, {name.firstName}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Add Food")}
              style={{ marginTop: 20 }}
            >
              <Icon name="fast-food-outline" size={60} color={theme.color} />
              <Text style={[styles.iconText, { color: theme.color }]}>
                Food
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ marginTop: 20 }}
            >
              <Icon name="fitness-outline" size={60} color={theme.color} />
              <Text style={[styles.iconText, { color: theme.color }]}>
                Workout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={{ marginTop: 20 }}
            >
              <Icon
                name="ellipsis-horizontal-outline"
                size={60}
                color={theme.color}
              />
              <Text style={[styles.iconText, { color: theme.color }]}>
                More
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={[styles.subText, { color: theme.color }]}>
            Calories:{" "}
          </Text>
          <Text style={[styles.subText, { color: theme.color }]}>
            Protein:{" "}
          </Text>
          <Text style={[styles.subText, { color: theme.color }]}>
            Carbohydrates:{" "}
          </Text>
          <Text style={[styles.subText, { color: theme.color }]}>Fat: </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Edit Macros")}
          style={styles.button}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Edit Macros</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                changePassword();
              }}
              style={styles.button}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                firebase.auth().signOut();
              }}
              style={styles.button}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    marginTop: 30,
    height: 70,
    width: 140,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    fontSize: 30,
    marginLeft: 32,
    marginBottom: 10,
    color: colours.black,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,

    marginLeft: 24,
    marginBottom: 16,
  },
  iconText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
