/*import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

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

    if (removed) {
      setLastRemoved(removed);
      setStackItems(stackItems.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Action Stack (LIFO)</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter an action"
        value={action}
        onChangeText={setAction}
      />

      <View style={styles.buttonContainer}>
        <Button title="Push Action" onPress={addAction}/>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Undo Last Action" onPress={undoAction}/>
      </View>

      {lastRemoved && (
        <Text style={styles.result}>
          Last Removed: {lastRemoved}
        </Text>
      )}

      <Text style={styles.sectionTitle}>Stack History</Text>

      {stackItems.slice().reverse().map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15
  },

  buttonContainer: {
    width: '80%',
    marginVertical: 5
  },

  result: {
    marginTop: 20
  },

  sectionTitle: {
    marginTop: 20,
    fontWeight: 'bold'
  }

}); */

// AQUIIIIIIII

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

      {/* FIX: Explicit boolean check using ternary */}
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