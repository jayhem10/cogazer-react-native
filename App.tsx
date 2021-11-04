import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import MainScreen from "./screens/MainScreen";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Cogazer" component={HomeScreen}></Screen>
        <Screen name="Login" component={LoginScreen}></Screen>
        <Screen name="Signup" component={SignupScreen}></Screen>
        <Screen name="ForgotPass" component={ForgotPassScreen}></Screen>
        <Screen name="Main" component={MainScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
