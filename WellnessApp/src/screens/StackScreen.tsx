import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";
import { DataContext } from "../Context/DataContext";

export default function StackScreen() {
  const {
    stackItems,
    pushToStack,
    removeStackAt,
    completeActivity
  } = useContext(DataContext);

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Low");
  const [seconds, setSeconds] = useState("");

  const getColor = (priority: string) => {
    if (priority === "High") return "#f44336";
    if (priority === "Medium") return "#ff9800";
    return "#4CAF50";
  };

  const handleAdd = () => {
    if (!input) return;

    const item = { title: input, priority };

    pushToStack(item);

    // ⏱ REMINDER
    if (seconds) {
      setTimeout(() => {
        Alert.alert("Reminder 🔔", `Time for: ${input}`);
      }, parseInt(seconds) * 1000);
    }

    setInput("");
    setSeconds("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack (LIFO)</Text>

      <TextInput
        placeholder="Activity..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <TextInput
        placeholder="Reminder (seconds)"
        value={seconds}
        onChangeText={setSeconds}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.priorityRow}>
        {["Low", "Medium", "High"].map(p => (
          <TouchableOpacity
            key={p}
            onPress={() => setPriority(p)}
            style={[
              styles.priorityButton,
              priority === p && styles.activePriority
            ]}
          >
            <Text>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>

      {stackItems.length === 0 ? (
        <Text style={styles.emptyText}>No activities yet 💪</Text>
      ) : (
        <FlatList
          data={stackItems}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.card,
                { borderLeftColor: getColor(item.priority) }
              ]}
            >
              <Text>
                {item.title} ({item.priority})
              </Text>

              <View style={styles.smallRow}>
                <TouchableOpacity
                  style={styles.completeBtn}
                  onPress={() => completeActivity(item)}
                >
                  <Text style={styles.smallText}>✓</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => removeStackAt(index)}
                >
                  <Text style={styles.smallText}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f6f8" },
  title: { fontSize: 24, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  priorityRow: { flexDirection: "row" },
  priorityButton: {
    padding: 8,
    backgroundColor: "#ddd",
    marginRight: 5,
    borderRadius: 6
  },
  activePriority: { backgroundColor: "#4CAF50" },
  emptyText: { textAlign: "center", marginTop: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderLeftWidth: 5
  },
  smallRow: { flexDirection: "row", marginTop: 10 },
  completeBtn: {
    backgroundColor: "#4CAF50",
    padding: 6,
    borderRadius: 6,
    marginRight: 10
  },
  deleteBtn: {
    backgroundColor: "#f44336",
    padding: 6,
    borderRadius: 6
  },
  smallText: { color: "#fff", fontSize: 12 }
});

// AQUIIIIIIII

/*

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { Stack } from '../estructurasDatas/Stack';

export default function StackScreen() {
  const [stack] = useState(new Stack<string>());
  const [action, setAction] = useState('');
  const [stackItems, setStackItems] = useState<string[]>([]);
  const [lastRemoved, setLastRemoved] = useState<string | null>(null);

  const addAction = () => {
    if (action.trim() === '') return;
    stack.push(action);
    setStackItems([...stackItems, action]);
    setAction('');
  };

  const undoAction = () => {
    const removed = stack.pop();
    if (removed !== null) {
      setLastRemoved(removed);
      setStackItems(stackItems.slice(0, -1));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Action Stack (LIFO)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter an action"
        value={action}
        onChangeText={setAction}
      />
      <View style={styles.buttonContainer}>
        <Button title="Push Action" onPress={addAction} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Undo Last Action" onPress={undoAction} />
      </View>

      {lastRemoved ? (
        <Text style={styles.result}>Last Removed: {lastRemoved}</Text>
      ) : null}

      <Text style={styles.sectionTitle}>Stack History</Text>
      {stackItems.slice().reverse().map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, width: '100%', padding: 10, borderRadius: 6, marginBottom: 15 },
  buttonContainer: { width: '80%', marginVertical: 5 },
  result: { marginTop: 20 },
  sectionTitle: { marginTop: 20, fontWeight: 'bold' }
});

*/