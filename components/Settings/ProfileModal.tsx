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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";
import Input from "../Other/Global/Input";

import GradesModal from "./GradesModal";
import firebase from "firebase/compat";
import { auth } from "../../firebase";

export default function ProfileModal(props): any {

  const [usernameVal, setUsernameVal] = useState("")
  const [emailVal, setEmailVal] = useState("")

  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false)

  const toggleChangePasswordHandler = () => {
    setIsOpenChangePassword(!isOpenChangePassword)
  }

  function readUserData() {
    firebase.database()
      .ref("/UsersList")
      .child(auth.currentUser.uid)
      .orderByChild(auth.currentUser.uid)
      .once("value", snapshot => {
        setUsernameVal(snapshot.val().username);
        setEmailVal(snapshot.val().email);
      }).catch((error) => {
        console.log("error:", error);
      })
  };

  readUserData();

  const alertConst = () =>
    Alert.alert("Sorry!", "That feature is still under development 😢. Come back soon to try again!", [
      { text: "Ok", onPress: () => { }, style: "default" },
    ]);

  const [isOpenGradesModal, setIsOpenGradesModal] = useState(false);

  const toggleGradesModalHandler = () => {
    setIsOpenGradesModal(!isOpenGradesModal);
  };

  // Change password stuff

  const [isCurrentPassword, setIsCurrentPassword] = useState("");
  const [isNewPassword, setIsNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  function emptyFields() {
    setIsCurrentPassword("")
    setIsNewPassword("")
    setConfirmedPassword("")
  }

  function changePassword() {
    if (isNewPassword === confirmedPassword) {
      // Change password idk
    } else {
      Alert.alert("Sorry!", "The new passwords entered need to match in order to change your original password.", [
        { text: "Try Again", onPress: () => { emptyFields() }, style: "default" },
      ]);
    }
  };

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
              <Text style={styles.buttonText}>&lt; Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={alertConst} style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
              <Ionicons
                name="pencil"
                color={Colors.blue}
                size={20}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.content}>
                <View style={styles.accountContainer}>
                  <Ionicons
                    name="person-circle"
                    color={Colors.primary}
                    size={160}
                  />
                  <View>
                    <Text style={styles.profileUsername}>{usernameVal}</Text>
                    <Text style={styles.profileEmail}>{emailVal}</Text>
                  </View>
                </View>
                <Text style={styles.sectionHeader}>Personal</Text>
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
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={toggleGradesModalHandler}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="school"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>My Grades</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
                <Text style={styles.sectionHeader}>Account</Text>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={toggleChangePasswordHandler}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="refresh-circle"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>Change Password</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
          </ScrollView>
        </View>
        <GradesModal
          visible={isOpenGradesModal}
          onCancel={toggleGradesModalHandler}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Modal
            isVisible={isOpenChangePassword}
            animationIn={"slideInRight"}
            animationOut={"slideOutRight"}
            style={{ margin: 0 }}
            hideModalContentWhileAnimating={true}
          >
            <SafeAreaView style={styles.changePasswordContainer}>
              <View style={styles.changePasswordHead}>
                <TouchableOpacity onPress={toggleChangePasswordHandler} style={[styles.button, { paddingHorizontal: 0 }]}>
                  <Text style={styles.buttonText}>&lt; Profile</Text>
                </TouchableOpacity>
                <Text style={styles.changePasswordTitle}>Change Password</Text>
                <Text style={styles.changePasswordText}>If for whatever reason you want to change your password,
                  you can do it here. But first, we have to confirm it's you:</Text>
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.sectionHeader}>Current Password</Text>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="Current password"
                  placeholderTextColor="#999"
                  selectTextOnFocus
                  bool={true}
                  value={isCurrentPassword}
                  onChangeText={(text) => setIsCurrentPassword(text)}
                />
                <Text style={styles.sectionHeader}>New Password</Text>
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="New password"
                  placeholderTextColor="#999"
                  selectTextOnFocus
                  bool={true}
                  value={isNewPassword}
                  onChangeText={(text) => setIsNewPassword(text)}
                />
                <Input
                  style={styles.input}
                  blurOnSubmit
                  autoCorrect={false}
                  placeholder="Confirm password"
                  placeholderTextColor="#999"
                  selectTextOnFocus
                  bool={true}
                  value={confirmedPassword}
                  onChangeText={(text) => setConfirmedPassword(text)}
                />
              </View>
              <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.submitButton} onPress={() => { }}>
                  <Text style={styles.submitButtonText}>Change Password</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </Modal>
        </TouchableWithoutFeedback>
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
    justifyContent: "space-between",
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
    fontSize: 32,
    paddingBottom: 2,
    fontWeight: "800",
    textAlign: "center",
  },

  profileEmail: {
    paddingTop: 2,
    fontSize: 18,
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

  sectionHeader: {
    color: "#4a4a4a",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 5,
  },

  editIcon: {
    paddingLeft: 12,
  },

  changePasswordContainer: {
    width: "92%",
    marginHorizontal: "4%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "space-between",
  },

  changePasswordHead: {
    backgroundColor: "black",
    flex: 1,
    height: "33%",
  },

  changePasswordTitle: {
    color: "white",
    fontSize: 38,
    fontWeight: "900",
    marginBottom: 15,
  },

  changePasswordText: {
    color: "#4a4a4a",
    fontSize: 21,
    fontWeight: "700",
  },

  text: {
    color: "white",
    opacity: 0.7,
  },

  middleContainer: {
    height: "33%",
    flex: 1,
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

  bottomContainer: {
    flex: 1,
    height: "33%",
    justifyContent: "flex-end",
  },

  submitButton: {
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.opacity,
    borderWidth: 4,
    borderColor: Colors.primary,
    borderRadius: 22,
    marginBottom: 18,
  },

  submitButtonText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
