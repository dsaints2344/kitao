import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Landing, Login, SignUpOptions } from "./src/scenes";
import { SignUp, EmployeeSignUp, EmployerSignUp } from "./src/scenes/SignUp";

// Redux

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// Store

import { persistor, store } from "./src/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { lightGray } from "./src/styles/colors";

const StackNavigator = createStackNavigator();

export default function App() {
  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, backgroundColor: lightGray }}>
            <StackNavigator.Navigator
              headerMode="none"
              initialRouteName="Landing"
            >
              <StackNavigator.Screen name="Landing" component={Landing} />
              <StackNavigator.Screen name="Login" component={Login} />
              <StackNavigator.Screen
                name="SignUpOptions"
                component={SignUpOptions}
              />
              <StackNavigator.Screen name="SignUp" component={SignUp} />
              <StackNavigator.Screen
                name="EmployeeSignUp"
                component={EmployeeSignUp}
              />
              <StackNavigator.Screen
                name="EmployerSignUp"
                component={EmployerSignUp}
              />
            </StackNavigator.Navigator>
          </SafeAreaView>
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
