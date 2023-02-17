import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";
import LoginHead from "../components/Login/LoginHead";
import LoginModal from "../components/Login/LoginModal";
import SignupModal from "../components/Login/SignupModal";
import ForgotModal from "../components/Login/Forgot";

import Background from "../assets/background.png";

export default function LoginScreen(props): any {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const toggleLoginHandler = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  const [isOpenSignup, setIsOpenSignup] = useState(false);

  const toggleSignupHandler = () => {
    setIsOpenSignup(!isOpenSignup);
  };

  const [isOpenForgot, setIsOpenForgot] = useState(false);

  const toggleForgotHandler = () => {
    setIsOpenForgot(!isOpenForgot);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
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
                onPress={toggleLoginHandler}
                style={styles.buttonContainer}
              >
                <View style={styles.ctaButton}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleSignupHandler}
                style={styles.buttonContainer}
              >
                <View style={styles.ctaButton}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <LoginModal visible={isOpenLogin} onCancel={toggleLoginHandler} />
          <SignupModal visible={isOpenSignup} onCancel={toggleSignupHandler} />
          <ForgotModal visible={isOpenForgot} onCancel={toggleForgotHandler} />
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  image: {
    flex: 1,
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
    textAlign: "center",
  },

  actionsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 7.5,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  ctaButton: {
    width: "95%",
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

  container: {
    flex: 1,
  },

  media: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  titleContainerModal: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  titleModal: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 20,
    textAlign: "center",
  },

  loginForm: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "85%",
    padding: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    borderWidth: 4,
    color: "white",
    textAlign: "left",
  },

  buttonContainerModal: {
    width: "85%",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  ctaBtnModal: {
    width: "100%",
    backgroundColor: Colors.primary,
    fontWeight: "600",
    borderRadius: 18,
    padding: 4,
    paddingHorizontal: 30,
    marginHorizontal: 0,
  },

  loginBtn: {
    fontWeight: "600",
    paddingVertical: 8.7,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 17.5,
  },

  forgotBtn: {
    width: "100%",
    paddingVertical: 5,
    opacity: 0.65,
  },
});
