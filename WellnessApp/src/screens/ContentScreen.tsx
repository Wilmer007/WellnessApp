import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

import { DataContext } from "../Context/DataContext";

export default function ContentScreen() {

  const context = useContext(DataContext);

  if (!context) {
    throw new Error("DataContext not found");
  }

  const {
    addStackItem,
    addQueueItem
  } = context;

  const [input, setInput] = useState("");

  const handleAddToStack = () => {
    if (!input.trim()) return;

    addStackItem(input);
    setInput("");
  };

  const handleAddToQueue = () => {
    if (!input.trim()) return;

    addQueueItem(input);
    setInput("");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add Wellness Activity
      </Text>

      <Text style={styles.description}>
        Enter a wellness activity such as meditation,
        stretching, journaling, or breathing exercises.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter activity..."
        value={input}
        onChangeText={setInput}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Add to Stack (LIFO)"
          onPress={handleAddToStack}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Add to Queue (FIFO)"
          onPress={handleAddToQueue}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "gray"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    marginBottom: 20
  },

  buttonContainer: {
    marginBottom: 10
  }

});