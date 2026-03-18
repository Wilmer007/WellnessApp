import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>About This App</Text>

      <Text style={styles.text}>
        This app helps users manage wellness activities using data structures.
      </Text>

      <Text style={styles.text}>
        Stack (LIFO): Last activity added is completed first.
      </Text>

      <Text style={styles.text}>
        Queue (FIFO): First activity added is completed first.
      </Text>

      <Text style={styles.text}>
        The app allows tracking and managing daily healthy habits.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:10 },
  text:{ marginBottom:10 }
});