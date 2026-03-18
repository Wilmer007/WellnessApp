import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { DataContext } from "../Context/DataContext";

export default function QueueScreen() {

  const context = useContext(DataContext);
  if (!context) throw new Error("Context error");

  const { queueItems, addQueueItem, removeQueueItem, completeActivity } = context;

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addQueueItem(input);
    setInput("");
  };

  const handleComplete = () => {
    if (queueItems.length === 0) return;

    const item = queueItems[0];
    completeActivity(item.title, "Queue (FIFO)");
    removeQueueItem();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Queue (FIFO)</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter activity"
        value={input}
        onChangeText={setInput}
      />

      <Button title="Enqueue Activity" onPress={handleAdd} />
      <Button title="Complete First Activity" onPress={handleComplete} />


<Text style={{ marginTop: 10, fontWeight: "bold" }}>
  First →
</Text>

      <FlatList
        data={queueItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>
  ← Last
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:24, fontWeight:"bold" },
  input:{ borderWidth:1, marginVertical:10, padding:10 },
  item:{ padding:10, borderWidth:1, marginVertical:5 },
  itemCard: {
  padding: 12,
  borderRadius: 10,
  backgroundColor: "white",
  marginVertical: 5,
  elevation: 2
}
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

