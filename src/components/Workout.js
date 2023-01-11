import { TextInput, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import colours from "../config/colours";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScrollPicker from "react-native-wheel-scrollview-picker";

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
          <Text style={styles.setWeightReps}>Set</Text>
          <Text style={styles.setWeightReps}>Weight</Text>
          <Text style={styles.setWeightReps}>Reps</Text>
        </View>
        {sets.map((set, setIndex) => {
          return (
            <TouchableOpacity
              key={setIndex}
              workoutIndex={workoutIndex}
              setIndex={setIndex}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  {setIndex + 1}
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInputSmall}
                    placeholder="Weight"
                    onChangeText={handleChange(
                      `weight Workout: ${workoutIndex}, S: ${setIndex}`
                    )}
                    onBlur={handleBlur(
                      `weight Workout: ${workoutIndex} S: ${setIndex}`
                    )}
                  />
                </View>

                <View style={styles.scrollPickerContainer}>
                  <ScrollPicker
                    dataSource={Array.from({ length: 101 }, (_, i) => i)}
                    selectedIndex={0}
                    renderItem={(data, index) => {
                      return <Text>{data}</Text>;
                    }}
                    onValueChange={(data, selectedIndex) => {
                      setFieldValue(
                        `reps Workout: ${workoutIndex}, S: ${setIndex}`,
                        data
                      );
                    }}
                    wrapperHeight={90}
                    highlightBorderWidth={1}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View>
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
            <Text>Add Set</Text>
          </TouchableOpacity>

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
            <Text>Add Set</Text>
          </TouchableOpacity>
        </View>
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

  setWeightReps: {
    flex: 1,
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
    justifyContent: "center",
    // paddingVertical: 16,
  },
  textInputSmall: {
    backgroundColor: colours.white,
    borderRadius: 4,
    padding: 2,
    width: 70,
    marginBottom: 6,
    textAlign: "center",
  },
  scrollPickerContainer: { width: 60, margin: 5, flex: 1 },
});
export default Workout;
