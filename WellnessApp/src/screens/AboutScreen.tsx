import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>About Wellness Tracker</Text>

      <Text>
This application helps users manage wellness activities
like hydration, meditation, and exercise.
      </Text>

      <Text style={styles.subtitle}>Data Structures Used</Text>

      <Text>
Queue (FIFO) processes activities in the order added.
      </Text>

      <Text>
Stack (LIFO) records the most recent user actions.
      </Text>

      <Text>
These structures demonstrate how computer science
concepts power real applications.
      </Text>

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

  subtitle: {
    marginTop: 20,
    fontWeight: 'bold'
  }

});