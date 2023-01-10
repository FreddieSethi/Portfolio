import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
  container: {
    marginBottom: 16,
  },
});
