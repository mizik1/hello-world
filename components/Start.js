import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Start({ navigation }) {
  // State for user input and background color
  const [name, setName] = useState("");
  const [background, setBackground] = useState(""); // State to store selected color

  // Array of color options
  const colors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/BackgroundImage.png")} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome to the Chat App</Text>
          <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text) => setName(text)} value={name} />

          {/* Add Text and Color Options Below TextInput */}
          <Text style={styles.chooseColorText}>Choose Background Color</Text>
          <View style={styles.colorsContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                accessibilityLabel="Color Button"
                accessibilityHint="Choose a background color for the chat."
                accessibilityRole="button"
                key={index}
                style={[styles.colorButton, { backgroundColor: color }, background === color && styles.selected]}
                onPress={() => setBackground(color)}
              />
            ))}
          </View>

          {/* Navigate to Chat Screen */}
          <Button title="Enter Chat Room" onPress={() => navigation.navigate("Chat", { userName: name, background })} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  chooseColorText: {
    fontSize: 18,
    marginVertical: 10,
    color: "white",
  },
  colorsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "80%",
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selected: {
    borderWidth: 3,
    borderColor: "white",
  },
});
