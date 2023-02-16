import React, { useState, useContext } from "react";
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
import Colors from "../../constants/colors";
import Modal from "react-native-modal";
import { AppContext } from "../../App";

import Input from "../Other/Global/Input";
import LoginHead from "./LoginHead";
import ForgotModal from "./Forgot";

import Background from "../../assets/background.png";

import { auth } from "../../firebase";

export default function LoginModal(props): any {
  const [isOpenForgot, setIsOpenForgot] = useState(false);

  const toggleForgotHandler = () => {
    setIsOpenForgot(!isOpenForgot);
  };
  // Login Shizz

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsSignedIn }: any = useContext(AppContext);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        setIsSignedIn(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Modal
      isVisible={props.visible}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationIn={"slideInRight"}
      animationInTiming={350}
      animationOutTiming={350}
      avoidKeyboard={true}
      onSwipeComplete={props.onCancel}
      swipeDirection="right"
    >
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.media}>
            <LoginHead title="LOG IN" />
            <View style={styles.loginForm}>
              <View style={styles.titleContainerModal}>
                <Text style={styles.titleModal}>Log In</Text>
              </View>
              <View style={styles.inputContainer}>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="jdoe@ernestkoliqi.com"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  selectTextOnFocus
                  keyboardType="email-address"
                />
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  bool={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  selectTextOnFocus
                />
              </View>
              <View style={styles.buttonContainerModal}>
                <TouchableOpacity onPress={handleLogin}>
                  <View style={styles.ctaBtnModal}>
                    <Text style={styles.loginBtn}>Log In</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleForgotHandler}>
                  <View style={styles.forgotBtn}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 17,
                        paddingRight: 5,
                        fontWeight: "500",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <ForgotModal visible={isOpenForgot} onCancel={toggleForgotHandler} />
    </Modal>

  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
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