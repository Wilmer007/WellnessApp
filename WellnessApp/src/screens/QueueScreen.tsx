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

  const [timeValue, setTimeValue] = useState("");
  const [timeType, setTimeType] = useState("seconds");

  const getColor = (priority: string) => {
    if (priority === "High") return "#f44336";
    if (priority === "Medium") return "#ff9800";
    return "#4CAF50";
  };

  const scheduleReminder = (title: string) => {
    if (!timeValue) return;

    let delay = parseInt(timeValue);

    if (timeType === "minutes") delay *= 60;
    if (timeType === "hours") delay *= 3600;

    delay *= 1000;

    setTimeout(() => {
      Alert.alert("Reminder 🔔", `Time for: ${title}`);
    }, delay);
  };

  const handleAdd = () => {
    if (!input) return;

    const item = { title: input, priority };

    enqueue(item);
    scheduleReminder(input);

    setInput("");
    setTimeValue("");
  };

  // ⭐ FIFO COMPLETE
  const handleComplete = () => {
    if (queueItems.length === 0) return;

    const firstItem = queueItems[0];
    completeActivity(firstItem);
    removeQueueAt(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Queue (FIFO)</Text>

      <TextInput
        placeholder="Activity..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter time..."
        value={timeValue}
        onChangeText={setTimeValue}
        keyboardType="numeric"
        style={styles.input}
      />

      {/* TIME TYPE */}
      <View style={styles.row}>
        {["seconds", "minutes", "hours"].map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => setTimeType(type)}
            style={[
              styles.smallBtn,
              timeType === type && styles.activeBtn
            ]}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PRIORITY */}
      <View style={styles.row}>
        {["Low", "Medium", "High"].map(p => (
          <TouchableOpacity
            key={p}
            onPress={() => setPriority(p)}
            style={[
              styles.smallBtn,
              priority === p && styles.activeBtn
            ]}
          >
            <Text>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>

      {/* ⭐ COMPLETE BUTTON */}
      <TouchableOpacity style={styles.completeMainBtn} onPress={handleComplete}>
        <Text style={styles.buttonText}>Complete Activity (FIFO)</Text>
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

              {/* DELETE ONLY */}
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => removeQueueAt(index)}
              >
                <Text style={styles.smallText}>Delete</Text>
              </TouchableOpacity>
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

  row: { flexDirection: "row", marginVertical: 5 },

  smallBtn: {
    padding: 8,
    backgroundColor: "#ddd",
    marginRight: 5,
    borderRadius: 6
  },

  activeBtn: { backgroundColor: "#4CAF50" },

  addButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10
  },

  completeMainBtn: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10
  },

  buttonText: { color: "#fff", fontWeight: "bold" },

  emptyText: { textAlign: "center", marginTop: 20 },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderLeftWidth: 5
  },

  deleteBtn: {
    backgroundColor: "#f44336",
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: "flex-start"
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

