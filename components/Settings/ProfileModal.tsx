import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";

import firebase from "firebase/compat";
import { auth } from "../../firebase";

export default function ProfileModal(props): any {

  const [usernameVal, setUsernameVal] = useState("")
  const [emailVal, setEmailVal] = useState("")

  function readUserData() {
    firebase.database().ref("/UsersList").child(auth.currentUser.uid).orderByChild(auth.currentUser.uid).once("value", snapshot => {
      setUsernameVal(snapshot.val().username);
      setEmailVal(snapshot.val().email);
    }).catch((error) => {
      console.log("error:", error);
    })
  };

  readUserData();

  const alertConst = () =>
    Alert.alert("Sorry!", "That feature is still under development. 😢 Come back soon to try again!", [
      { text: "Ok", onPress: () => { }, style: "default" },
    ]);

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onSwipeComplete={props.onCancel}
      swipeDirection="right"
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>&lt; </Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={alertConst} style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.content}>
                <View style={styles.accountContainer}>
                  <Ionicons
                    name="person-circle-outline"
                    color={Colors.primary}
                    size={125}
                  />
                  <View>
                    <Text style={styles.profileUsername}>{usernameVal}</Text>
                    <Text style={styles.profileEmail}>{emailVal}</Text>
                  </View>
                </View>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => { }}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="briefcase"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>My Projects</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 8.5,
  },

  header: {
    width: "100%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    color: Colors.blue,
    fontSize: 21,
    fontWeight: "500",
  },

  button: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  body: {
    width: "100%",
  },

  headContainer: {
    marginHorizontal: 10,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
    paddingBottom: 7.5,
    textAlign: "center",
  },

  accountType: {
    paddingTop: 4,
    color: "#8c8c8c",
    fontSize: 15,
  },

  content: {
    marginHorizontal: 10,
    width: "95%",
  },

  container: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 22,
    paddingVertical: 15,
  },

  containerTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },

  accountContainer: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  profileUsername: {
    color: "#fff",
    fontSize: 26,
    paddingBottom: 2.25,
    fontWeight: "600",
    textAlign: "center",
  },

  profileEmail: {
    paddingTop: 2.25,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primary,
    textAlign: "center",
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 22,
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
    marginLeft: 15,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },
});
