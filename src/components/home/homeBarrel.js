import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";
import WorkoutCardWithPressMenu from "./WorkoutCardWithPressMenu";
import { getFormData } from "../../data/firestopreRealTime";
import Boxes from "./Boxes";

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
};
