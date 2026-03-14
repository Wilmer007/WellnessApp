import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { DataContext } from '../Context/DataContext';

export default function SavedItemsScreen() {

  const context = useContext(DataContext);
  if (!context) return null;

  const { savedItems, setSavedItems } = context;

  const deleteItem = (id: number) => {

    setSavedItems(
      savedItems.filter(item => item.id !== id)
    );

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Saved Activities</Text>

      <FlatList
        data={savedItems}
keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>

            <Button
              title="Delete"
              onPress={() => deleteItem(item.id)}
            />

          </View>

        )}
      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: { flex: 1, padding: 20 },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 10
  },

  cardTitle: {
    fontWeight: 'bold'
  }

});