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

  function forgotPassword(Email): any {
    firebase.auth().sendPasswordResetEmail(Email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (error) {
        console.log(error)
      });
  };

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
        onSwipeComplete={props.onCancel}
        swipeDirection="right"
      >
        <SafeAreaView style={{ backgroundColor: "black" }}>
          <View style={styles.screen}>
            <View style={styles.headContainer}>
              <Text style={styles.title}>Forgot Password?</Text>
              <TouchableOpacity onPress={props.onCancel} style={styles.button}>
                <Text style={styles.buttonText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                placeholder="jdoe@ernestkoliqi.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={(text) => setEmail(text)}
                selectTextOnFocus
                keyboardType="email-address" />
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

  button: {
    borderWidth: 3,
    borderColor: Colors.red,
    borderRadius: 50,
    backgroundColor: Colors.redOpacity,
  },

  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
  },

  description: {
    color: "#777",
    fontSize: 24,
    fontWeight: "800",
  },

  content: {
    paddingTop: 30,
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyText: {
    color: "white",
    fontSize: 18,
    paddingBottom: 32,
    width: "98%",
    marginHorizontal: "1%",
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 12,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },
});
