import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DataContext } from '../Context/DataContext';

export default function HistoryScreen() {

const context = useContext(DataContext);

if (!context) {
  throw new Error("DataContext must be used inside DataProvider");
}

const { stackItems, queueItems } = context;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Data Structure Visualization</Text>

      {/* STACK SECTION */}

      <Text style={styles.section}>Stack (LIFO)</Text>
      <Text style={styles.label}>Top</Text>

      <FlatList
        data={[...stackItems].reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <Text style={styles.label}>Bottom</Text>


      {/* QUEUE SECTION */}

      <Text style={styles.section}>Queue (FIFO)</Text>
      <Text style={styles.label}>First</Text>

      <FlatList
        data={queueItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <Text style={styles.label}>Last</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  section: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },

  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5
  },

  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
    borderRadius: 5
  }

});