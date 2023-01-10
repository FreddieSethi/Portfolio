import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colours from "../config/colours";
import { TouchableOpacity } from "react-native-gesture-handler";

//this is a functional component that renders a looking input box
function AppTextInput({ icon, onSubmitEditing, ...otherProps }) {
  return (
    <View style={styles.inputSection}>
      <TextInput
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
        {...otherProps}
      />
      <TouchableOpacity onPress={onSubmitEditing}>
        {icon && (
          <AntDesign
            name={icon}
            size={30}
            color={"dodgerblue"}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    paddingHorizontal: 15,
    height: 60,
    width: "100%",
    borderWidth: 2,
    borderColor: colours.lightWarmGray,
  },
  input: {
    flex: 1,
    fontSize: 22,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: colours.white,
  },
});

export default AppTextInput;
