import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
      <View style={styles.inputContainer}>
        {!isLogin && <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" />}
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        {!isLogin && <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log(isLogin ? "Login" : "Register")}>
        <Text style={styles.buttonText}>{isLogin ? "Login" : "Register"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchMode}>
        <Text style={styles.switchText}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FC"
  },
  logoContainer: {
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  switchMode: {
    marginTop: 15
  },
  switchText: {
    color: "#007BFF"
  }
});
export default LoginScreen;