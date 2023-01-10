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

// components
import Header from "./components/Header";

// screens
import Login from "./screens/Login";
import Registration from "./screens/Registration";

import Dashboard from "./screens/Dashboard";
import BMI from "./screens/moreContainer/BMI";

import AddFood from "./screens/foodContainer/AddFood";
import Camera from "./screens/foodContainer/Camera";

import More from "./screens/moreContainer/More";
import Pace from "./screens/moreContainer/Pace";
import WaistToHip from "./screens/moreContainer/WaistToHip";
import GymsNearby from "./screens/moreContainer/GymsNearby";
import MealPlanner from "./screens/moreContainer/MealPlanner";
import Newsfeed from "./screens/moreContainer/Newsfeed";
import DarkMode from "./screens/moreContainer/DarkMode";
import Authentication from "./screens/moreContainer/Authentication";
import CreateTemplateScreen from "./screens/workoutContainer/CreateTemplateScreen";
import HistoryScreen from "./screens/workoutContainer/HistoryScreen";
import WorkoutHome from "./screens/workoutContainer/WorkoutHome";
import EditMacros from "./screens/EditMacros";
import ItemList from "./components/ItemList";
import DetailsScreen from "./components/DetailsScreen";
import WorkoutProgram from "./components/WorkoutProgram";
import { getFormData } from "./data/firestopreRealTime";
import WorkoutTabs from "./components/WorkoutTabs";

export {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useNavigation,
  useEffect,
  useState,
  WorkoutProgram,
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
