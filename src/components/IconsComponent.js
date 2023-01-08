import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colours from "../Theme/colours";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IconsComponent(props) {
  const { name, size, color } = props;
  return <Ionicons name={name} size={size} color={colours.icons} />;
}
