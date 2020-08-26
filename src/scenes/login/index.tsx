import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";

interface LoginProps {
  navigation: any;
}

const Login = ({ navigation }: LoginProps) => {
  return (
    <SafeAreaView>
      <Text>Screen: Login</Text>

      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
