import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

import { Stack } from '../estructurasDatas/Stack';
import { Queue } from '../estructurasDatas/Queue';
import { WellnessItem } from '../models/WellnessItem';

export default function HomeScreen() {

  // -----------------------------
  // Data Structures
  // -----------------------------

  // Stack to store user actions (LIFO)
  const [actionStack] = useState(new Stack<string>());

  // Queue to store wellness items (FIFO)
  const [wellnessQueue] = useState(new Queue<WellnessItem>());

  // -----------------------------
  // UI State
  // -----------------------------

  const [currentItem, setCurrentItem] = useState<WellnessItem | null>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [idCounter, setIdCounter] = useState(100);

  // -----------------------------
  // Initial Data Load
  // -----------------------------

  useEffect(() => {
    const initialItems: WellnessItem[] = [
      {
        id: 1,
        title: 'Morning Stretch',
        description: 'Do 5 minutes of full body stretching.',
        type: 'Fitness',
      },
      {
        id: 2,
        title: 'Hydration Reminder',
        description: 'Drink at least 2 liters of water today.',
        type: 'Nutrition',
      },
      {
        id: 3,
        title: 'Mindfulness Break',
        description: 'Take 3 minutes to breathe and relax.',
        type: 'Mental Health',
      },
    ];

    initialItems.forEach(item => wellnessQueue.enqueue(item));
    actionStack.push('Initialized wellness queue');
  }, []);

  // -----------------------------
  // Queue Operations (FIFO)
  // -----------------------------

  const showNextTip = () => {
    const item = wellnessQueue.dequeue();

    if (item) {
      setCurrentItem(item);
      actionStack.push(`Viewed: ${item.title}`);
    } else {
      setCurrentItem(null);
      actionStack.push('Tried to view item but queue was empty');
    }
  };

  const addWellnessItem = () => {
    if (newTitle.trim() === '') return;

    const newItem: WellnessItem = {
      id: idCounter,
      title: newTitle,
      description: 'User added wellness item',
      type: 'Fitness',
    };

    wellnessQueue.enqueue(newItem);
    actionStack.push(`Added: ${newItem.title}`);

    setIdCounter(prev => prev + 1);
    setNewTitle('');
  };

  // -----------------------------
  // Stack Operations (LIFO)
  // -----------------------------

  const undoLastAction = () => {
    const action = actionStack.pop();

    if (action) {
      setLastAction(action);
    } else {
      setLastAction('No actions to undo');
    }
  };

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellness Data Structures App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter wellness item title"
        value={newTitle}
        onChangeText={setNewTitle}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Item to Queue" onPress={addWellnessItem} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Show Next Item (Queue)" onPress={showNextTip} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Undo Last Action (Stack)" onPress={undoLastAction} />
      </View>

      {currentItem && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{currentItem.title}</Text>
          <Text>{currentItem.description}</Text>
          <Text style={styles.type}>{currentItem.type}</Text>
        </View>
      )}

      {lastAction && (
        <Text style={styles.actionText}>Last action: {lastAction}</Text>
      )}
    </View>
  );
}

// -----------------------------
// Styles
// -----------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 5,
    width: '80%',
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  actionText: {
    marginTop: 15,
    fontSize: 14,
  },
});