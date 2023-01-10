import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colours from "../config/colours";
import Icon from "react-native-vector-icons/Ionicons";

export default function IconsComponent(props) {
  const { name, size, color } = props;
  return <Icon name={name} size={size} color={theme.color} />;
}
