import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/colors";
import Input from "../Other/Global/Input";

import firebase from "firebase/compat";

export default function ForgotModal(props): any {
  const [email, setEmail] = useState("");

  const handlePasswordReset = (): any => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Check your email and then come back to the app!")
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Modal
        isVisible={props.visible}
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
        style={{ margin: 0 }}
        hideModalContentWhileAnimating={true}
        avoidKeyboard={true}
      >
        <SafeAreaView style={{ backgroundColor: "black" }}>
          <View style={styles.screen}>
            <View style={styles.headContainer}>
              <TouchableOpacity onPress={props.onCancel} style={styles.button}>
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <View style={styles.topContainer}>
                <Text style={styles.title}>Forgot Password? You're not the only one!</Text>
                <Text style={styles.subTitle}>Trust me, I get a lot of these requests. Just enter your email below to receive our reset password email and you'll be up and running in no time!</Text>
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.text}>Recovery Email</Text>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="jdoe@ernestkoliqi.com"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={(text): any => setEmail(text)}
                  selectTextOnFocus
                  keyboardType="email-address"
                />
              </View>
              <TouchableOpacity style={styles.continueContainer} onPress={handlePasswordReset}>
                <Text style={styles.continueText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "95%",
    height: "100%",
    marginHorizontal: "2.5%",
    alignItems: "center",
  },

  buttonText: {
    color: "rgb(255, 69, 58)",
    fontSize: 18,
    fontWeight: "800",
    padding: 8,
    paddingHorizontal: 12,
  },

  continueContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    backgroundColor: Colors.opacity,
    borderRadius: 22,
    borderWidth: 4,
    borderColor: Colors.primary,
    marginTop: 5,
  },

  continueText: {
    fontSize: 21,
    fontWeight: "800",
    paddingVertical: 5,
    textAlign: "center",
    color: Colors.primary,
  },

  button: {
    borderWidth: 3,
    borderColor: Colors.red,
    borderRadius: 50,
    backgroundColor: Colors.redOpacity,
  },

  topContainer: {
    marginBottom: 30,
  },

  middleContainer: {
    marginTop: 30,
  },

  body: {
    width: "95%",
    height: "90%",
    marginHorizontal: "2.5%",
    flexDirection: "column",
    justifyContent: "center",
  },

  text: {
    color: "white",
    opacity: 0.7,
  },

  input: {
    width: "100%",
    padding: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    borderWidth: 4,
    color: "white",
    textAlign: "left",
  },

  headContainer: {
    width: "95%",
    marginHorizontal: "2.5%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "900",
    marginBottom: 4,
  },

  subTitle: {
    color: "#4a4a4a",
    fontSize: 20,
    fontWeight: "700",
  },
});
