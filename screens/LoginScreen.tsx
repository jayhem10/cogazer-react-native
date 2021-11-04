import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = (props: { navigation: string[] }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goTo = () => {
    props.navigation.push("ForgotPass");
  };
  const goTo2 = () => {
    props.navigation.push("Signup");
  };
  const goToMain = () => {
    props.navigation.push("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => useState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => useState({ password: text })}
        />
      </View>
      <TouchableOpacity onPress={goTo}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMain} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goTo2}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: "black",
    color: "white",
    borderWidth: 2,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "grey",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
  },
  loginText: {
    color: "white",
  },
  signupText: {
    color: "black",
  },
});

export default LoginScreen;
