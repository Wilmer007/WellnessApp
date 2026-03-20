import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DataProvider } from "./src/Context/DataContext";

import HomeScreen from "./src/screens/HomeScreen";
import StackScreen from "./src/screens/StackScreen";
import QueueScreen from "./src/screens/QueueScreen";
import SavedItemsScreen from "./src/screens/SavedItemsScreen";
import AboutScreen from "./src/screens/AboutScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Stack" component={StackScreen} />
          <Stack.Screen name="Queue" component={QueueScreen} />
          <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}