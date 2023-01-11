import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colours } from "../routes";

export default function EndFormButtons({ handleSubmit, setWorkoutsNum }) {
  const addField = () => {
    setWorkoutsNum((workoutsNum) => {
      let newWorkouts = workoutsNum.slice();
      newWorkouts.push(1);
      console.log(newWorkouts);
      return newWorkouts;
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addField}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 16,
    height: 70,
    width: 140,
    backgroundColor: colours.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: colours.black,
  },
});
