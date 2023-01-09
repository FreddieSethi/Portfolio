import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Button } from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import gymData from "../data/gymData.json";

import themeContext from "../config/themeContext";
import theme from "../config/theme";
import colours from "../config/colours"; // used so can import colours, which is more maintainable -- better not to hard code colours
import MarkerComponent from "../components/MarkerComponent";

export default function App() {
  // fetching data
  const data = Object.values(gymData);

  //setting intial location, before getting user location
  const navigation = useNavigation();
  // intial region
  const [mapRegion, setMapRegion] = useState({
    latitude: 50.743748,
    longitude: -1.898455,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // getting user location and checking if allowed
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to acess location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* loads generic map */}
      <MapView
        style={styles.map}
        region={mapRegion}
        // blue user location dot
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker region={mapRegion} />

        {data.map((item) => (
          // loads all marker from component from gymData
          <MarkerComponent
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.description}
          ></MarkerComponent>
        ))}
        {console.log("Markers: ", data?.gyms?.latitude)}
      </MapView>
      <View>
        {/* location button */}
        <Button
          color={colours.black}
          style={styles.button}
          title="Get Location"
          onPress={userLocation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "95%",
  },
  marker: {
    color: colours.marker,
  },
  button: {
    flex: "1",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    color: colours.text,
  },
});
