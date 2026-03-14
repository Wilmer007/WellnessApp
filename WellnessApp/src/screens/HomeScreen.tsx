import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Wellness Tracker</Text>

      <Button
        title="Browse Wellness Content"
        onPress={() => navigation.navigate('Content')}
      />

      <Button
        title="View Activity Queue"
        onPress={() => navigation.navigate('Queue')}
      />

      <Button
        title="Action History (Stack)"
        onPress={() => navigation.navigate('Stack')}
      />

      <Button
        title="Saved Activities"
        onPress={() => navigation.navigate('SavedItems')}
      />

      <Button
        title="About the App"
        onPress={() => navigation.navigate('About')}
      />
      <Button
  title="View Data Structure History"
  onPress={() => navigation.navigate("History")}
/>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  }

});