import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DataContext } from "../Context/DataContext";

export default function HomeScreen({ navigation }: any) {
  const { stackItems, queueItems, historyItems } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellness Tracker</Text>

      {/* Dashboard */}
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.statNumber}>{stackItems.length}</Text>
          <Text>Stack</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.statNumber}>{queueItems.length}</Text>
          <Text>Queue</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.statNumber}>{historyItems.length}</Text>
          <Text>Completed</Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>Go to Stack</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Queue")}
      >
        <Text style={styles.buttonText}>Go to Queue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SavedItems")}
      >
        <Text style={styles.buttonText}>View Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
    justifyContent: "center"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center"
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 3
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50"
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});