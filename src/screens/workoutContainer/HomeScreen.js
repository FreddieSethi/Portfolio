import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
  useEffect,
  useState,
  WorkoutCardWithPressMenu,
  getFormData,
  Boxes,
  StyleSheet,
} from "../../components/home/homeBarrel";
import colours from "../../config/colours";
import { firebase } from "../../config/firebase";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [itemChange, SetItemChange] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
  });

  useEffect(() => {
    setDataFromDB(setWorkouts);
    setDataLoaded(true);
  }, [itemChange]);

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

  if (fontsLoaded && dataLoaded) {
    return (
      <>
        <View style={styles.home}>
          <ScrollView>
            <Text style={styles.subText}>
              What are we hitting today {name.firstName}?
            </Text>

            <Boxes setWorkouts={setWorkouts} />

            {workouts.map((workout) => {
              return (
                <WorkoutCardWithPressMenu
                  key={workout.key}
                  workout={workout}
                  SetItemChange={SetItemChange}
                />
              );
            })}
          </ScrollView>
        </View>
        {/* <BottomBar /> */}
      </>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  home: { flex: 1, backgroundColor: "white" },
  text: {
    fontSize: 30,
    fontFamily: "LexendDeca_700Bold",
    marginLeft: 24,
    marginTop: 32,
    marginBottom: 16,
    color: colours.black,
  },
  subText: {
    fontSize: 16,
    fontFamily: "LexendDeca_400Regular",
    color: colours.black,
    marginLeft: 24,
    marginBottom: 16,
    marginTop: 30,
  },
});

export default HomeScreen;

export function setDataFromDB(setWorkouts) {
  const data = getFormData();
  // The time out is for the data to load
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
