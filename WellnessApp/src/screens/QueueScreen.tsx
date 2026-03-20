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

export default function QueueScreen() {
  const {
    queueItems,
    enqueue,
    removeQueueAt,
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

    enqueue(item);

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

      {queueItems.length === 0 ? (
        <Text style={styles.emptyText}>No activities yet 💪</Text>
      ) : (
        <FlatList
          data={queueItems}
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
                  onPress={() => removeQueueAt(index)}
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

// AQUIIIIIIIIIII

/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { Queue } from '../estructurasDatas/Queue';
import { WellnessItem } from '../models/WellnessItem';

export default function QueueScreen() {
  const [queue] = useState(new Queue<WellnessItem>());
  const [title, setTitle] = useState('');
  const [queueItems, setQueueItems] = useState<WellnessItem[]>([]);
  const [currentItem, setCurrentItem] = useState<WellnessItem | null>(null);
  const [idCounter, setIdCounter] = useState(1);

  const addItem = () => {
    if (title.trim() === '') return;
    const newItem: WellnessItem = {
      id: idCounter,
      title: title,
      description: 'User added wellness activity',
      type: 'Fitness'
    };
    queue.enqueue(newItem);
    setQueueItems([...queueItems, newItem]);
    setIdCounter(prev => prev + 1);
    setTitle('');
  };

  const processNextItem = () => {
    const item = queue.dequeue();
    if (item) {
      setCurrentItem(item);
      setQueueItems(queueItems.slice(1));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wellness Queue (FIFO)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter wellness activity"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Item to Queue" onPress={addItem} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Process Next Item" onPress={processNextItem} />
      </View>

      {currentItem ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Activity</Text>
          <Text>{currentItem.title}</Text>
        </View>
      ) : null}

      <Text style={styles.sectionTitle}>Current Queue</Text>
      {queueItems.map((item) => (
        <Text key={item.id}>• {item.title}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, width: '100%', padding: 10, borderRadius: 6, marginBottom: 15 },
  buttonContainer: { width: '80%', marginVertical: 5 },
  card: { marginTop: 20, padding: 15, borderWidth: 1, borderRadius: 8, width: '100%', alignItems: 'center' },
  cardTitle: { fontWeight: 'bold' },
  sectionTitle: { marginTop: 20, fontWeight: 'bold' }
});

*/

