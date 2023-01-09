import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import themeContext from "../config/themeContext";
import theme from "../config/theme";
import colours from "../config/colours";

import { Table, Row, Rows } from "react-native-table-component";

const WaistToHipCalculator = () => {
  const theme = useContext(themeContext);
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [ratio, setRatio] = useState("");

  const calculateRatio = () => {
    if (waist && hip) {
      const waistToHipRatio = waist / hip;
      setRatio(waistToHipRatio.toFixed(2));
    }
  };

  const data = [
    ["Low", "<0.80", "<0.95"],
    ["Moderate", "0.81-0.85", "0.96-1.0"],
    ["High", ">0.86", ">1.0"],
  ];

  const tableHead = ["Health Risk", "Women", "Men"];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <TextInput
        style={[styles.input, { borderColor: theme.color }]}
        placeholder="Waist (inches)"
        keyboardType="numeric"
        value={waist}
        onChangeText={(waist) => setWaist(waist)}
        placeholderTextColor={theme.color}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.color }]}
        placeholder="Hip (inches)"
        keyboardType="numeric"
        value={hip}
        onChangeText={(hip) => setHip(hip)}
        placeholderTextColor={theme.color}
      />

      <TouchableOpacity
        style={[styles.button, { borderColor: theme.color }]}
        onPress={calculateRatio}
      >
        <Text style={[styles.buttonText, { color: theme.color }]}>
          Calculate Ratio
        </Text>
      </TouchableOpacity>

      <View style={[styles.resultView, { color: theme.color }]}>
        {ratio && (
          <Text style={[styles.result, { color: theme.color }]}>
            Waist to Hip Ratio: {ratio}
          </Text>
        )}
      </View>
      <View>
        <Table borderStyle={{ borderWidth: 2, borderColor: theme.color }}>
          <Row
            data={tableHead}
            style={[styles.head, { color: theme.color }]}
            textStyle={styles.text}
          />
          <Rows data={data} textStyle={[styles.text, { color: theme.color }]} />
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 20,
  },
  title: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    borderColor: colours.border,
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colours.border,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resultView: {
    margin: 15,
  },
  result: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
});

export default WaistToHipCalculator;
