import React, { useMemo, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { NewCalendarList } from "react-native-calendars";
import { getWorkoutDays } from "../../data/firestopreRealTime";

const initialDate = getTodaysDate();

const NewCalendarScreen = () => {
  const [selected, setSelected] = useState(initialDate);
  const [horizontal, setHorizontal] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    getWorkoutDaysFormatted(setMarkedDates);
  }, []);
  const onValueChange = useCallback(
    (value) => {
      setHorizontal(value);
    },
    [horizontal]
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

  return (
    <View style={styles.container}>
      <View style={styles.switchView}>
        <Text style={styles.switchText}>Horizontal</Text>
        <Switch value={horizontal} onValueChange={onValueChange} />
      </View>
      <NewCalendarList
        key={Number(horizontal)}
        horizontal={horizontal}
        staticHeader
        calendarProps={calendarProps}
      />
    </View>
  );
};

export default NewCalendarScreen;

function getWorkoutDaysFormatted(setMarkedDates) {
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
