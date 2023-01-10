import React, { useMemo, useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Switch,
  Text,
  ActivityIndicator,
} from "react-native";
import { NewCalendarList } from "react-native-calendars";
import { getWorkoutDays } from "../../data/firestopreRealTime";

const initialDate = getTodaysDate();

const NewCalendarScreen = () => {
  const [selected, setSelected] = useState(initialDate);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getWorkoutDaysFormatted(setMarkedDates, setLoaded);
  }, []);
  const onValueChange = useCallback(
    (value) => {
      setIsHorizontal(value);
    },
    [isHorizontal]
  );

  const onDayPress = useCallback(
    (day) => {
      console.warn("dayPress: ", day);
      setSelected(day.dateString);
    },
    [setSelected]
  );

  const calendarProps = useMemo(() => {
    return {
      markedDates: markedDates,
      onDayPress: onDayPress,
    };
  }, [selected, markedDates, onDayPress]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.switchView}>
        <Text style={styles.switchText}>Horizontal</Text>
        <Switch value={isHorizontal} onValueChange={onValueChange} />
      </View>
      <NewCalendarList
        key={Number(isHorizontal)}
        horizontal={isHorizontal}
        staticHeader
        calendarProps={calendarProps}
      />
    </View>
  );
};

export default NewCalendarScreen;

function getWorkoutDaysFormatted(setMarkedDates, setLoaded) {
  const workoutDays = getWorkoutDays();
  let formattedData = {};
  setTimeout(function () {
    workoutDays.forEach((date) => {
      formattedData[date] = {
        selected: true,
        selectedColor: "rgb(0, 200, 254)",
      };
    });
    setMarkedDates(formattedData);
    setLoaded(true);
    return formattedData;
  }, 1000);
}

function getTodaysDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchView: {
    flexDirection: "row",
    height: 70,
    padding: 10,
    paddingBottom: 30,
    backgroundColor: "white",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 100,
  },
  switchText: {
    marginRight: 20,
    fontSize: 16,
  },
});
