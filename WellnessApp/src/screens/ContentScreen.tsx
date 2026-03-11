import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const wellnessItems = [
  { id: 1, title: "Drink Water", description: "Stay hydrated throughout the day.", type: "Health" },
  { id: 2, title: "Meditation", description: "Practice mindfulness for 5 minutes.", type: "Mental" },
  { id: 3, title: "Stretching", description: "Stretch to improve flexibility.", type: "Fitness" },
  { id: 4, title: "Short Walk", description: "Take a 10 minute walk outside.", type: "Fitness" },
  { id: 5, title: "Deep Breathing", description: "Relax with controlled breathing.", type: "Mental" }
];

export default function ContentScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Wellness Activities</Text>

      <FlatList
        data={wellnessItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.type}>{item.type}</Text>

            <Button
              title="Add to Queue"
              onPress={() => alert(item.title + " added to queue (demo)")}
            />

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  type: {
    marginTop: 5,
    fontStyle: 'italic'
  }

});