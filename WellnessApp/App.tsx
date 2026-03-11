import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import StackScreen from './src/screens/StackScreen';
import QueueScreen from './src/screens/QueueScreen';
import ContentScreen from './src/screens/ContentScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Queue"
          component={QueueScreen}
          options={{ title: "Wellness Queue" }}
        />

        <Stack.Screen
          name="Stack"
          component={StackScreen}
          options={{ title: "Action Stack" }}
        />

        <Stack.Screen
          name="Content"
          component={ContentScreen}
          options={{ title: "Wellness Content" }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About the App" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}