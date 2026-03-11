import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Wellness Data Structures App
      </Text>

      <Text style={styles.subtitle}>
        Manage wellness activities using Queue and Stack data structures.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="View Wellness Queue"
          onPress={() => navigation.navigate('Queue')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="View Action Stack"
          onPress={() => navigation.navigate('Stack')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Browse Wellness Content"
          onPress={() => navigation.navigate('Content')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="About This App"
          onPress={() => navigation.navigate('About')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center'
  },

  buttonContainer: {
    width: '80%',
    marginVertical: 8
  }

});