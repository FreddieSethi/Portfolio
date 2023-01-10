import { TextInput, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import SetsAddSection from "./SetsAddSection";
import colours from "../../config/colours";
import { TouchableOpacity } from "react-native-gesture-handler";

const Workout = ({
  index: workoutIndex,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const [sets, setSets] = useState(Array(1).fill(0));
  return (
    <View>
      <View style={styles.set}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`Exercise ${workoutIndex + 1}`}</Text>
        </View>
        <TextInput
          placeholder="Exercise Name"
          style={styles.textInput}
          onChangeText={handleChange(`exercise${workoutIndex}`)}
          onBlur={handleBlur(`exercise${workoutIndex}`)}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            marginRight: 8,
            marginBottom: 8,
          }}
        >
          {/* Margins are to align headers with content better */}
          {/* Should find a better way of doing so */}
          <Text style={styles.setWeightReps}>Set</Text>
          <Text style={styles.setWeightReps}>Weight</Text>
          <Text style={styles.setWeightReps}>Reps</Text>
        </View>
        {sets.map((set, setIndex) => {
          return (
            <SetsAddSection
              key={setIndex}
              workoutIndex={workoutIndex}
              setIndex={setIndex}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />
          );
        })}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSets((sets) => {
              let newSets = sets.slice();
              newSets.push(1);
              return newSets;
            });
          }}
        >
          <Text style={styles.buttonText}>Add Set</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colours.lightBlue,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 5,
    fontSize: 25,
    marginBottom: 16,
  },
  textInputSmall: {
    backgroundColor: colours.lightBlue,
    borderRadius: 4,
    padding: 3,
    width: 80,
    marginBottom: 16,

    textAlign: "center",
  },
  set: {
    backgroundColor: colours.white,
    marginBottom: 16,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: colours.black,
    borderRadius: 22,
    paddingBottom: 16,
  },
  title: {
    color: colours.black,
    fontWeight: "bold",
    fontSize: 22,
  },
  titleContainer: {
    height: 48,
    backgroundColor: colours.lightBlue,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingLeft: 8,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 17,
    color: "rgb(0, 122,225)",
  },
  setWeightReps: {
    flex: 1,
    textAlign: "center",
  },
});
export default Workout;
