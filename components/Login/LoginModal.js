import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Input from "../Other/Global/Input";
import Colors from "../../constants/colors";
import LoginHead from "./LoginHead";

import Modal from "react-native-modal";

const LoginModal = (props) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <Modal
      isVisible={props.visible}
      backgroundColor={"#000"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationIn={"slideInRight"}
      animationInTiming={350}
      animationOutTiming={350}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.screen}>
          <LoginHead title="SIGN IN" />
          <View style={styles.loginForm}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Sign In</Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                placeholder="jdoe@ernestkoliqi.com"
                placeholderTextColor="#666"
              />
              <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                placeholder="Class (ex: X-3)"
                placeholderTextColor="#666"
              />
              <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                placeholder="Password"
                placeholderTextColor="#666"
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
                  <Text
                    style={{ color: "white", fontSize: 17, paddingRight: 5 }}
                  >
                    Forgot Password?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 75,
    paddingBottom: 25,
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
    padding: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    borderWidth: 4,
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
    paddingVertical: 8.7,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 17.5,
  },

  forgotBtn: {
    width: "100%",
    padding: 5,
    paddingRight: 7.5,
    opacity: 0.5,
  },
});

export default LoginModal;
