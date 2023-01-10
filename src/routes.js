// react native installs
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useContext } from "react";

// config
import colours from "./config/colours";
import themeContext from "./config/themeContext";
import { Picker } from "@react-native-picker/picker";

// screens
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import BMI from "./screens/BMI";
import AddFood from "./screens/AddFood";
import Camera from "./screens/Camera";
import More from "./screens/More";
import Pace from "./screens//Pace";
import WaistToHip from "./screens/WaistToHip";
import GymsNearby from "./screens/GymsNearby";
import MealPlanner from "./screens/MealPlanner";
import Newsfeed from "./screens/Newsfeed";
import DarkMode from "./screens/DarkMode";
import StopWatch from "./components/shared/StopWatch";
import Authentication from "./screens/Authentication";
import CreateTemplateScreen from "./screens/workoutContainer/CreateTemplateScreen";
import HistoryScreen from "./screens/workoutContainer/HistoryScreen";
import WorkoutHome from "./screens/workoutContainer/WorkoutHome";
import EditMacros from "./screens/EditMacros";
import ItemList from "./components/ItemList";
import DetailsScreen from "./components/DetailsScreen";
import WorkoutCardWithPressMenu from "./components/home/WorkoutCardWithPressMenu";
import { getFormData } from "./data/firestopreRealTime";
import WorkoutTabs from "./components/home/WorkoutTabs";

export {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useNavigation,
  useEffect,
  useState,
  WorkoutCardWithPressMenu,
  getFormData,
  WorkoutTabs,
  StyleSheet,
  colours,
  Login,
  Registration,
  Dashboard,
  Header,
  BMI,
  AddFood,
  Camera,
  More,
  Pace,
  WaistToHip,
  GymsNearby,
  MealPlanner,
  Newsfeed,
  DarkMode,
  StopWatch,
  Authentication,
  CreateTemplateScreen,
  HistoryScreen,
  WorkoutHome,
  EditMacros,
  ItemList,
  DetailsScreen,
  themeContext,
  Picker,
  useContext,
};
