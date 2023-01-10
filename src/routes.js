import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";
import WorkoutCardWithPressMenu from "./components/home/WorkoutCardWithPressMenu";
import { getFormData } from "./data/firestopreRealTime";
import Boxes from "./components/home/Boxes";

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
  Boxes,
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
  HomeScreen,
  TimerScreen,
  WorkoutScreen,
  EditMacros,
  ItemList,
  DetailsScreen,
};
