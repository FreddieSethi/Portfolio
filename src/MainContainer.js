import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config/firebase";
import { StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import colours from "./config/colours";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import BMI from "./screens/BMI";
import AddFood from "./screens/AddFood";
import Camera from "./screens/Camera";
import More from "./screens/More";
import Pace from "./screens/Pace";
import WaistToHip from "./screens/WaistToHip";
import GymsNearby from "./screens/GymsNearby";
import MealPlanner from "./screens/MealPlanner";
import Newsfeed from "./screens/Newsfeed";
import DarkMode from "./screens/DarkMode";
import StopWatch from "./components/shared/StopWatch";
import Authentication from "./screens/Authentication";
import CreateTemplateScreen from "./screens/workoutContainer/CreateTemplateScreen";
import HistoryScreen from "./screens/workoutContainer/HistoryScreen";
import HomeScreen from "./screens/workoutContainer/HomeScreen";
import TimerScreen from "./screens/workoutContainer/TimerScreen";
import WorkoutScreen from "./screens/workoutContainer/WorkoutScreen";
import EditMacros from "./screens/EditMacros";

import ItemList from "./components/ItemList";
import DetailsScreen from "./components/DetailsScreen";

import themeContext from "./config/themeContext";
import theme from "./config/theme";
import { MenuProvider } from "react-native-popup-menu";

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="Fitness Buddy" />,
            headerStyle: styles.headerStyle,
            headerBackTitleVisible: false,
            headerTintColor: colours.black,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Fitness Buddy" />,
            headerStyle: styles.headerStyle,
            headerBackTitleVisible: false,
            headerTintColor: colours.black,
          }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => <Header name="Dashboard" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />

      <Stack.Screen
        name="Add Food"
        component={AddFood}
        options={{
          headerTitle: () => <Header name="Add Food" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTitle: () => <Header name="Camera" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Header name="Home " />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          headerTitle: () => <Header name={<StopWatch />} />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          headerTitle: () => <Header name="Rest " />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerTitle: () => <Header name="Timer " />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="CreateTemplate"
        component={CreateTemplateScreen}
        options={{
          headerTitle: () => <Header name="Create Template " />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitle: () => <Header name="History" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Edit Macros"
        component={EditMacros}
        options={{
          headerTitle: () => <Header name="Edit Macros" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />

      <Stack.Screen
        name="More"
        component={More}
        options={{
          headerTitle: () => <Header name="More" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={Registration}
        options={{
          headerTitle: () => <Header name="Edit Profile" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="BMI"
        component={BMI}
        options={{
          headerTitle: () => <Header name="Calculate BMI" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Pace"
        component={Pace}
        options={{
          headerTitle: () => (
            <Header name="Calculate Pace" headerTitleAlign="center" />
          ),
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Waist to Hip Calculator"
        component={WaistToHip}
        options={{
          headerTitle: () => (
            <Header
              name="Calculate Waist to Hip Ratio"
              headerTitleAlign="center"
            />
          ),

          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Gyms Nearby"
        component={GymsNearby}
        options={{
          headerTitle: () => <Header name="Gyms Nearby" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Meal Planner"
        component={MealPlanner}
        options={{
          headerTitle: () => <Header name="Meal Planner" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={{
          headerTitle: () => <Header name="Newsfeed" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />

      <Stack.Screen
        name="Reminders"
        component={ItemList}
        options={{
          headerTitle: () => <Header name="Reminders" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Details View"
        component={DetailsScreen}
        options={({ route }) => ({
          headerTitle: () => <Header name={route.params.name} />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        })}
      />

      <Stack.Screen
        name="Dark Mode"
        component={DarkMode}
        options={{
          headerTitle: () => <Header name="Dark Mode" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{
          headerTitle: () => <Header name="Authentication" />,
          headerStyle: styles.headerStyle,
          headerBackTitleVisible: false,
          headerTintColor: colours.black,
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <MenuProvider>
      <themeContext.Provider
        value={darkMode === true ? theme.dark : theme.light}
      >
        <NavigationContainer
          theme={darkMode === true ? DarkTheme : DefaultTheme}
        >
          <App />
        </NavigationContainer>
      </themeContext.Provider>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },

  headerStyle: {
    height: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colours.lightBlue,

    shadowColor: colours.black,
    elevation: 25,
  },
});
