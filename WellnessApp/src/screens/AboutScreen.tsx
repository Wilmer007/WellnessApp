import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        About This App
      </Text>

      <Text style={styles.paragraph}>
        The Wellness Data Structures App is designed to demonstrate how
        fundamental computer science data structures can be applied in a
        practical mobile application. The app focuses on helping users manage
        simple wellness activities while showcasing the behavior of Stack and
        Queue data structures.
      </Text>

      <Text style={styles.sectionTitle}>
        Queue Data Structure (FIFO)
      </Text>

      <Text style={styles.paragraph}>
        A Queue follows the principle of First-In, First-Out (FIFO). This means
        that the first item added to the queue is the first one to be removed.
        In this application, the Queue is used to manage wellness activities
        that the user plans to complete. When an activity is added, it is placed
        at the end of the queue. When the user processes the next activity, the
        item at the front of the queue is removed and displayed.
      </Text>

      <Text style={styles.sectionTitle}>
        Stack Data Structure (LIFO)
      </Text>

      <Text style={styles.paragraph}>
        A Stack follows the Last-In, First-Out (LIFO) principle. The most
        recently added item is the first one to be removed. In this application,
        the Stack is used to track user actions. Each action is pushed onto the
        stack, and users can undo their most recent action by popping the stack.
        This behavior simulates common undo functionality used in many software
        systems.
      </Text>

      <Text style={styles.sectionTitle}>
        Purpose of the Application
      </Text>

      <Text style={styles.paragraph}>
        The goal of this application is to demonstrate how abstract data
        structures can be integrated into a real-world software interface.
        Instead of simply implementing these structures in a console program,
        this mobile app provides an interactive experience where users can
        directly interact with Stack and Queue operations.
      </Text>

      <Text style={styles.sectionTitle}>
        Technologies Used
      </Text>

      <Text style={styles.paragraph}>
        This application was built using React Native and TypeScript. Navigation
        between screens is handled using a stack navigator, allowing users to
        move between different sections of the app such as the home screen,
        queue management, stack operations, and wellness content browsing.
      </Text>

      <Text style={styles.footer}>
        Educational Project – Data Structures Demonstration
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 22
  },

  footer: {
    marginTop: 30,
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic'
  }

});