import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from "react-native";

export default function Start({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Chat App</Text>
      <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text) => setName(text)} value={name} />
      <Button title="Enter Chat Room" onPress={() => navigation.navigate("Chat", { userName: name })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
