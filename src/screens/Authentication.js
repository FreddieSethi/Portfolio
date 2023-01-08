import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [authEnabled, setAuthEnabled] = useState(true);

  useEffect(() => {
    async function authenticate() {
      if (!authEnabled) return;
      const result = await LocalAuthentication.authenticateAsync();
      setIsAuthenticated(result.success);
    }
    authenticate();
  }, [authEnabled]);

  return (
    <View style={styles.container}>
      <Switch value={authEnabled} onValueChange={setAuthEnabled} />
      {authEnabled ? (
        <Text>
          {isAuthenticated
            ? "Authentication is turned on"
            : "Uh oh! Access Denied"}
        </Text>
      ) : (
        <Text>Authentication is turned off</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
