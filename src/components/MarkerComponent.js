import React from "react";
import gymData from "../data/gymData.json";

import { Marker } from "react-native-maps";
export default function MarkerComponent(props) {
  const { coordinate, title, description } = props;
  const { latitude, longitude } = coordinate;
  const data = Object.values(gymData);

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      title={title}
      description={description}
    ></Marker>
  );
}
