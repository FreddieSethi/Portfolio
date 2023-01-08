import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function LogoComponent(props) {
  //return image through component - get link
  return (
    <Image
      style={styles.Image}
      source={require("../../../assets/loadingScreen.png")}
    />
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 150,
    height: 35,
    resizeMode: "contain",
  },
});
