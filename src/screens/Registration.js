import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { firebase } from "../config/firebase";
import colours from "../config/colours";
import themeContext from "../config/themeContext";

const Registration = () => {
  const theme = useContext(themeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://test-93783.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ScrollView>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <View style={{ marginTop: 40 }}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCorrect={false}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-adress"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          onPress={() => registerUser(email, password, firstName, lastName)}
          style={styles.button}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },

  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 300,
    fontSize: 20,
    borderColor: colours.black,
    borderWidth: 1,
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
});
