import React, { useMemo, useState, useEffect } from "react";
import { View } from "react-native";
import { NewCalendarList } from "react-native-calendars";
import { getWorkoutDays } from "../../data/firestopreRealTime";
import { colours } from "../../routes";

const initialDate = getTodaysDate();

const NewCalendarScreen = () => {
  const [selected] = useState(initialDate);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    getWorkoutDaysFormatted(setMarkedDates);
  }, []);

  const calendarProps = useMemo(() => {
    return {
      markedDates: markedDates,
    };
  }, [selected, markedDates]);

  return (
    <View style={{ flex: 1 }}>
      <NewCalendarList staticHeader calendarProps={calendarProps} />
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
        selectedColor: colours.lightBlue,
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
