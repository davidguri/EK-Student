import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";

import LoginHead from "../components/Login/LoginHead";
import LoginModal from "../components/Login/LoginModal";

import Colors from "../constants/colors";

const LoginScreen = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.screen}>
        <LoginHead title="WELCOME" />
        <View style={styles.loginForm}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome To</Text>
            <Text style={styles.titleAlt}>EK Student!</Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              onPress={toggleModalHandler}
              style={styles.buttonContainer}
            >
              <View style={styles.ctaButton}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <LoginModal
          visible={isOpenModal}
          onCancel={toggleModalHandler}
          loginPress={props.loginPress}
        />
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
    fontSize: 54,
    fontWeight: "bold",
    paddingBottom: 18,
    paddingTop: 0,
    textAlign: "center",
  },

  title: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 45,
    paddingBottom: 0,
    textAlign: "center",
  },

  loginForm: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },

  actionsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 25,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    paddingHorizontal: 25,
  },

  ctaButton: {
    width: "95%",
    marginHorizontal: "2.5%",
    backgroundColor: Colors.opacity,
    fontWeight: "600",
    borderRadius: 30,
    borderColor: Colors.primary,
    borderWidth: 4,
    padding: 5,
    marginHorizontal: 12,
  },

  buttonText: {
    fontWeight: "600",
    padding: 5.75,
    textAlign: "center",
    fontSize: 23,
    color: "#fff",
  },
});

export default LoginScreen;
