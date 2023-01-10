import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function IconsComponent(props) {
  const { name, size } = props;
  return <Icon name={name} size={size} color={theme.color} />;
}
