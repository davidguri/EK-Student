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
  // const [email, setEmail] = useState("");

  // function forgotPassword(setEmail): any {
  //   firebase.auth().sendPasswordResetEmail(setEmail)
  //     .then(function (user) {
  //       alert('Please check your email...')
  //     }).catch(function (error) {
  //       console.log(error)
  //     });
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Modal
        isVisible={props.visible}
        animationIn={"slideInDown"}
        animationOut={"slideOutDown"}
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
                  // value={email}
                  // onChangeText={(text): any => setEmail(text)}
                  selectTextOnFocus
                  keyboardType="email-address"
                />
                <TouchableOpacity style={styles.continueContainer} onPress={() => {}}>
                  <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
              </View>
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
    margin: "2.5%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginHorizontal: "2.5%",
    height: "65%",
  },

  text: {
    color: "white"
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
    height: "20%",
    marginHorizontal: "2.5%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
    marginBottom: 4,
  },

  subTitle: {
    color: "#4a4a4a",
    fontSize: 18,
    fontWeight: "700",
  },
});
