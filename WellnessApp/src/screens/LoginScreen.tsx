import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

export default function LoginScreen({ navigation }: any) {

  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [reminder, setReminder] = useState("");

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    navigation.replace("Home", {
      userName: name,
      goal,
      reminder
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to WellnessApp</Text>

      <Text style={styles.subtitle}>
        Let's personalize your experience
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your wellness goal (ex: Relaxation)"
        value={goal}
        onChangeText={setGoal}
      />

      <TextInput
        style={styles.input}
        placeholder="Reminder preference (ex: Morning)"
        value={reminder}
        onChangeText={setReminder}
      />

      <Button
        title="Start Wellness Journey"
        onPress={handleLogin}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: "gray"
  },

  input: {
    borderWidth: 1,
    borderColor: "rgba(16, 3, 3, 1)",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15
  }

});