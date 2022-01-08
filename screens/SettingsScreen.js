import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import Card from "../components/Card";

import AboutDevModal from "../components/AboutDevModal";

const SettingsScreen = (props) => {
  const DATA = {
    aboutTheDeveloper: {
      title: "About the Developer",
      description: "Lorem Ipsum Dolor Sit Amet",
    },

    feedback: {
      title: "Feedback",
      description: "Lorem Ipsum Dolor Sit Amet",
    },

    privacy: {
      title: "Privacy",
      description: "Lorem Ipsum Dolor Sit Amet",
    },
  };

  var username = "David Guri";
  var email = "dguri@ernestkoliqi.com";
  var account = "Developer";

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const alertConst = () =>
    Alert.alert("HAH!", "No light mode allowed.", [
      { text: "OK", onPress: () => setIsEnabled(true), style: "done" },
    ]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openAboutDevHandler = () => {
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountContainer}>
            <Ionicons
              name="person-circle-outline"
              color={Colors.primary}
              size={93}
            />
            <View style={{ paddingLeft: 17.5 }}>
              <Text style={styles.profileUsername}>{username}</Text>
              <Text style={styles.profileEmail}>{email}</Text>
            </View>
          </View>

          <ScrollView style={{ width: "100%" }}>
            <View style={{ alignItems: "center" }}>
              <Card style={styles.container}>
                <Text style={styles.containerTitle}>Account Type</Text>
                <Text style={styles.accountType}>{account}</Text>
              </Card>

              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openAboutDevHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="code-slash"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>
                      About the Developer
                    </Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
                <AboutDevModal
                  visible={isOpenModal}
                  onCancel={closeModalHandler}
                />
              </Card>

              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openAboutDevHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="alert-circle"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>Feedback</Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
              </Card>

              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openAboutDevHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="lock-closed"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>Privacy</Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
              </Card>

              <Card style={styles.container}>
                <View style={styles.row}>
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="contrast-sharp"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>Dark Mode</Text>
                  </View>
                  <Switch
                    trackColor={{ false: "#767577", true: "#30d158" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    onChange={alertConst}
                  />
                </View>
              </Card>

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
    height: "100%",
    alignItems: "center",
    padding: 7.5,
  },

  header: {
    width: "90%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingBottom: 0,
  },

  buttonText: {
    color: "rgb(255, 69, 58)",
    fontSize: 18,
    fontWeight: "800",
    padding: 5,
    paddingHorizontal: 10,
  },

  button: {
    borderWidth: 3,
    borderColor: Colors.red,
    borderRadius: 50,
    backgroundColor: Colors.redOpacity,
  },

  container: {
    marginVertical: 10,
    width: "90%",
    borderRadius: 18,
    paddingVertical: 15,
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "90%",
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

  accountContainer: {
    marginTop: 24,
    marginBottom: 24,
    width: "90%",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },

  profileUsername: {
    color: "#fff",
    fontSize: 25,
    paddingBottom: 2,
    fontWeight: "600",
  },

  profileEmail: {
    paddingTop: 2,
    fontSize: 17,
    fontWeight: "500",
    color: "#8c8c8c",
  },

  accountTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    paddingBottom: 2,
  },

  containerTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 12,
  },

  accountType: {
    paddingTop: 4,
    color: "#8c8c8c",
    fontSize: 15,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SettingsScreen;