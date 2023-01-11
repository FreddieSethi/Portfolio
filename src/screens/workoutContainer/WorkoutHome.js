import { TouchableOpacity } from "react-native-gesture-handler";

import {
  View,
  Text,
  ScrollView,
  useEffect,
  useState,
  getFormData,
  WorkoutTabs,
  StyleSheet,
  colours,
} from "../../routes";

const WorkoutHome = () => {
  const [name] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [itemChange, SetItemChange] = useState(false);
  const [, setLoadedData] = useState(false);

  useEffect(() => {
    setDataFromDB(setWorkouts);
    setLoadedData(true);
  }, [itemChange]);

  return (
    <View style={styles.home}>
      <ScrollView>
        <Text style={styles.text}>
          What are we hitting today {name.firstName}?
        </Text>

        <WorkoutTabs setWorkouts={setWorkouts} />

        {workouts.map((workout) => {
          return (
            <TouchableOpacity
              key={workout.key}
              workout={workout}
              SetItemChange={SetItemChange}
            >
              <Text>Workout submitted should be here</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    color: colours.black,
    marginLeft: 24,
    marginBottom: 16,
    marginTop: 30,
    fontWeight: "bold",
  },
});

export default WorkoutHome;

export function setDataFromDB(setWorkouts) {
  const data = getFormData();
  setTimeout(async function () {
    let actualData = data["_z"];
    const workoutObjectsArray = createWorkoutObjects(actualData);
    setWorkouts(workoutObjectsArray);
  }, 1000);
}

export function createWorkoutObjects(actualData) {
  let workoutObjectsArray = [];
  for (let index = 0; index < actualData.length; index++) {
    let workoutObject = {};
    workoutObject.name = actualData[index].name;
    workoutObject.exercises = actualData[index].exercises;
    workoutObject.lastPerformed = actualData[index].lastPerformed;
    workoutObject.key = actualData[index].key;
    workoutObjectsArray.push(workoutObject);
  }
  return workoutObjectsArray;
}
