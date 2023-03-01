import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import firebase from "firebase/compat";

import Colors from "../../../constants/colors";

import Modal from "react-native-modal";

export default function AddGoalModal(props): any {
  const [text, onChangeText] = useState("");

  const writeData = (status: boolean, title: string) => { //email and full name
    firebase.database().ref('GoalsList/').push({
      status,
      title
    }).then((data) => {
      //success callback
      // console.log('data ' , data)
    }).catch((error) => {
      //error callback
      console.log('error ', error)
    })
  }

  const addElement = () => {
    writeData(false, text)
  }

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      avoidKeyboard
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>

          <View style={styles.body}>
            <TextInput
              style={[styles.input, styles.titleInput]}
              value={text}
              onChangeText={onChangeText}
              placeholderTextColor="#777"
              placeholder="Title"
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={addElement}
              style={styles.submitContainer}
            >
              <Text style={styles.inputButtonText}>{props.title}</Text>
              {/* onSubmit, send out importance, title */}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    borderWidth: 4,
    borderTopColor: Colors.primary,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  header: {
    width: "95%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    paddingVertical: 18,
  },

  buttonCancelText: {
    color: "rgb(255, 69, 58)",
    fontSize: 21,
    fontWeight: "700",
    padding: 12.25,
    textAlign: "center",
  },

  button: {
    width: "95%",
    backgroundColor: Colors.redOpacity,
    borderRadius: 25,
    borderColor: Colors.red,
    borderWidth: 4,
    marginVertical: 10,
  },

  body: {
    width: "100%",
  },

  footer: {
    paddingBottom: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 12,
    marginVertical: 10,
    color: "white",
  },

  titleInput: {
    padding: 16,
  },

  inputButton: {
    backgroundColor: Colors.opacity,
  },

  inputButtonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.primary,
  },

  submitContainer: {
    width: "95%",
    backgroundColor: Colors.opacity,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginBottom: 10,
    padding: 13,
    marginTop: 35,
  },
});
