import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config/firebase";

import { EventRegister } from "react-native-event-listeners";

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

import Authentication from "./screens/Authentication";

import CreateTemplateScreen from "./screens/workoutContainer/CreateTemplateScreen";
import HistoryScreen from "./screens/workoutContainer/HistoryScreen";
import HomeScreen from "./screens/workoutContainer/HomeScreen";
import TimerScreen from "./screens/workoutContainer/TimerScreen";
import WorkoutScreen from "./screens/workoutContainer/WorkoutScreen";

import ItemList from "./components/ItemList";
import DetailsScreen from "./components/DetailsScreen";

import themeContext from "./config/themeContext";
import theme from "./config/theme";

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
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Fitness Buddy" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
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
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />

      <Stack.Screen
        name="Add Food"
        component={AddFood}
        options={{
          headerTitle: () => <Header name="Add Food" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTitle: () => <Header name="Camera" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: (props) => <StopWatch />,
        }}
      />
      <Stack.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          headerTitleAlign: "center",
          title: "Timer",
        }}
      />
      <Stack.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerTitleAlign: "center",
          title: "Timer",
        }}
      />
      <Stack.Screen
        name="CreateTemplate"
        component={CreateTemplateScreen}
        options={{
          headerTitleAlign: "center",
          title: "🔨 Create Template 🔨",
        }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerTitleAlign: "center",
          title: "History",
        }}
      />

      <Stack.Screen
        name="More"
        component={More}
        options={{
          headerTitle: () => <Header name="More" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={Registration}
        options={{
          headerTitle: () => <Header name="Edit Profile" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="BMI"
        component={BMI}
        options={{
          headerTitle: () => <Header name="BMI" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Pace"
        component={Pace}
        options={{
          headerTitle: () => <Header name="Pace" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Waist to Hip Calculator"
        component={WaistToHip}
        options={{
          headerTitle: () => <Header name="Waist to Hip Calculator" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Gyms Nearby"
        component={GymsNearby}
        options={{
          headerTitle: () => <Header name="Gyms Nearby" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Meal Planner"
        component={MealPlanner}
        options={{
          headerTitle: () => <Header name="Meal Planner" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Newsfeed"
        component={Newsfeed}
        options={{
          headerTitle: () => <Header name="Newsfeed" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />

      <Stack.Screen name="Reminders" component={ItemList} />
      <Stack.Screen
        name="Details View"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />

      <Stack.Screen
        name="Dark Mode"
        component={DarkMode}
        options={{
          headerTitle: () => <Header name="Dark Mode" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{
          headerTitle: () => <Header name="Authentication" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
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
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <App />
      </NavigationContainer>
    </themeContext.Provider>
  );
};
