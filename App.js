import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./components/Start";
import Chat from "./components/Chat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Hello World!</Text>
      <Text style={styles.bigRed}>How are you?</Text>
      <Text style={styles.bigRedBold}>I'm feeling blue!</Text>

      <View style={styles.box}></View>
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
  blue: {
    color: "blue",
    fontWeight: "600",
  },
  bigRed: {
    color: "red",
    fontSize: 30,
  },
  bigRedBold: {
    color: "red",
    fontSize: 30,
    fontWeight: "600",
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "blue",
    marginTop: 20, // Adds spacing between the text and the box
  },
});
