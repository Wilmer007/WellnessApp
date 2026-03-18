import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Wellness App</Text>
      <Text style={styles.subtitle}>Manage your healthy habits</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>Stack (LIFO)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Queue")}
      >
        <Text style={styles.buttonText}>Queue (FIFO)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SavedItems")}
      >
        <Text style={styles.buttonText}>Completed Activities</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "gray"
  },
  button: {
    backgroundColor: "#327ed5ff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
});