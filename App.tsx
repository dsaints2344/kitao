import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Landing, Login } from "./src/scenes";

// Redux

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// Store

import { persistor, store } from "./src/store";

const StackNavigator = createStackNavigator();

export default function App() {
  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <NavigationContainer>
          <StackNavigator.Navigator
            headerMode="none"
            initialRouteName="Landing"
          >
            <StackNavigator.Screen name="Landing" component={Landing} />
            <StackNavigator.Screen name="Login" component={Login} />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
