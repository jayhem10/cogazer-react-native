import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = (props: { navigation: string[] }) => {
  const goTo = () => {
    props.navigation.push("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome on <Text style={styles.cogazer}>Cogazer</Text>
      </Text>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  cogazer: {
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 50,
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    color: "white",
    padding: 20,
    textAlign: "center",
    borderRadius: 16,
    borderWidth: 2,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
  },
});

export default HomeScreen;
