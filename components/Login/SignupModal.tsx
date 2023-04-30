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

import Input from "../Other/Global/Input";
import LoginHead from "./LoginHead";

import { auth } from "../../firebase";
import firebase from "firebase/compat";

import Background from "../../assets/background.png";

import { AppContext } from "../../App";

const SignupModal = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClass, setIsClass] = useState("");

  const { setIsSignedIn }: any = useContext(AppContext);

  let emailDomain: string;

  const handleSignup = (): any => {
    Keyboard.dismiss();
    emailDomain = (email.split("@")[1]).split(".")[0]
    console.log("Email Domain: ", emailDomain);
    if (emailDomain == "ernestkoliqi" && password.length >= 8) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          firebase.database().ref("UsersList").child(userCredentials.user.uid).set({
            email: email,
            username: username,
            class: isClass,
          }).then((data) => {
            console.log('data ', data)
          }).catch((error) => {
            console.log('error ', error)
          })
          console.log("Registered with:", user.email);
          console.log("Registered with:", user.uid);
          setIsSignedIn(true);
        })
        .catch((error) => alert(error.message));
    } else if (emailDomain !== "ernestkoliqi.com") {
      alert("Use an '@ernestkoliqi' email domain! ek(0003)")
    } else {
      alert("Password must be more than or equal to 8 characters! ek(0004)")
    }
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
            <LoginHead title="SIGN UP" />
            <View style={styles.loginForm}>
              <View style={styles.titleContainerModal}>
                <Text style={styles.titleModal}>Sign Up</Text>
              </View>
              <View style={styles.inputContainer}>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="Jean Doe"
                  placeholderTextColor="#999"
                  value={username}
                  onChangeText={(text: string) => setUsername(text)}
                  selectTextOnFocus
                  keyboardType="default"
                  autoCapitalize="words"
                />
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="X-1"
                  placeholderTextColor="#999"
                  value={isClass}
                  onChangeText={(text: string) => setIsClass(text)}
                  selectTextOnFocus
                  keyboardType="default"
                  autoCapitalize="words"
                />
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="jdoe@ernestkoliqi.com"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={(text: string) => setEmail(text)}
                  selectTextOnFocus
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  bool={true}
                  value={password}
                  onChangeText={(text: string) => setPassword(text)}
                  selectTextOnFocus
                />
              </View>
              <View style={styles.buttonContainerModal}>
                <TouchableOpacity onPress={handleSignup}>
                  <View style={styles.ctaBtnModal}>
                    <Text style={styles.loginBtn}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  media: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  image: {
    flex: 1,
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
    paddingTop: 10,
    width: "85%",
  },

  ctaBtnModal: {
    backgroundColor: Colors.primary,
    fontWeight: "600",
    borderRadius: 21,
    paddingVertical: 15,
    paddingHorizontal: 34,
  },

  loginBtn: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
  },
});

export default SignupModal;
