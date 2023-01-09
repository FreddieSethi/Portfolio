import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

import React, { useState, useContext } from "react";
import { firebase } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

import themeContext from "../config/themeContext";
import colours from "../config/colours";

// Login screen where users can enter their email and password to log in
const Login = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to log in the user with their email and password
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  // Function to send a password reset email to the user's email address
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password resest email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    // Allows user to dismiss keyboard
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.backgroundColor },
        { flexGrow: 1 },
      ]}
    >
      {/* Email input field */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Password input field */}
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      {/* Button to log in the user */}
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Login</Text>
      </TouchableOpacity>

      {/* Button to navigate to the registration screen */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={{ marginTop: 20 }}
      >
        <Text style={styles.subText}>Don't have an account? Register Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          forgetPassword();
        }}
        style={{ marginTop: 20 }}
      >
        <Text style={styles.subText}>Forget Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 300,
    fontSize: 20,
    borderColor: colours.black,
    borderWidth: 1.5,
    borderStyle: "solid",
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 10,
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
  subText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
