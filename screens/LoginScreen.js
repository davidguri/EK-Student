import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";

import Input from "../components/Input";
import LoginHead from "../components/LoginHead";

import Colors from "../constants/colors";

const LoginScreen = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.screen}>
        <LoginHead title="LOGIN" />
        <View style={styles.loginForm}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome To </Text>
            <Text style={styles.titleAlt}>EK Student!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              placeholder="jdoe@ernestkoliqi.com"
              placeholderTextColor="#555"
            />
            <Input
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              placeholder="Class (ex: X-3)"
              placeholderTextColor="#555"
            />
            <Input
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="#555"
              bool={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={props.loginPress}>
              <View style={styles.ctaBtn}>
                <Text style={styles.loginBtn}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.forgotBtn}>
                <Text style={{ color: "white", fontSize: 17, paddingRight: 5, }}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  titleAlt: {
    color: Colors.primary,
    fontSize: 48,
    fontWeight: "bold",
    paddingVertical: 40,
    paddingTop: 0,
    textAlign: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 75,
    paddingBottom: 0,
    textAlign: "center",
  },

  loginForm: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 75,
  },

  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "85%",
    textAlign: "center",
    padding: 8.5,
    paddingHorizontal: 12,
    fontSize: 13.25,
    borderWidth: 2.35,
    color: "white",
    textAlign: "left",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  ctaBtn: {
    width: "100%",
    backgroundColor: Colors.primary,
    fontWeight: "600",
    borderRadius: 18,
    padding: 4,
    paddingHorizontal: 22,
    marginHorizontal: 12,
  },

  loginBtn: {
    fontWeight: "600",
    padding: 8.75,
    textAlign: "center",
    fontSize: 17.8,
  },

  forgotBtn: {
    width: "100%",
    padding: 5,
    paddingRight: 7.5,
    opacity: 0.5,
  },
});

export default LoginScreen;
