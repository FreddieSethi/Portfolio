import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colours from "../config/colours";

const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>{props.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    height: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colours.lightBlue,
    shadowColor: colours.black,
    elevation: 25,
    fontWeight: "bold",
    fontSize: 28,
  },
});
