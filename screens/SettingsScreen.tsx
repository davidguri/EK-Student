import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
  ScrollView,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Colors from "../constants/colors";
import { AppContext } from "../App";

import Card from "../components/Other/Global/Card";
import AboutTheDevModal from "../components/Settings/AboutTheDevModal";
import FeedbackModal from "../components/Settings/FeedbackModal";
import PrivacyModal from "../components/Settings/PrivacyModal";
import ProfileModal from "../components/Settings/ProfileModal";

import { auth } from "../firebase";
import firebase from "firebase/compat";

const SettingsScreen = (props) => {
  var username = "David Guri";
  var email = "dguri@ernestkoliqi.com";

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const alertConst = () =>
    Alert.alert("HAH!", "No light mode allowed.", [
      { text: "OK", onPress: () => setIsEnabled(true), style: "done" },
    ]);

  const [isOpenAboutModal, setIsOpenAboutModal] = useState(false);
  const [isOpenFeedbackModal, setIsOpenFeedbackModal] = useState(false);
  const [isOpenPrivacyModal, setIsOpenPrivacyModal] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  const toggleProfileModalHandler = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  const openAboutDevHandler = () => {
    setIsOpenAboutModal(true);
  };

  const openFeedbackHandler = () => {
    setIsOpenFeedbackModal(true);
  };

  const openPrivacyHandler = () => {
    setIsOpenPrivacyModal(true);
  };

  const closeAboutHandler = () => {
    setIsOpenAboutModal(false);
  };

  const closeFeedbackHandler = () => {
    setIsOpenFeedbackModal(false);
  };

  const closePrivacyHandler = () => {
    setIsOpenPrivacyModal(false);
  };

  // Login shizz

  let user = firebase.auth().currentUser;

  const { setIsSignedIn } = useContext(AppContext);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsSignedIn(false);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            {/* about container */}
            <View style={styles.accountContainer}>
              <Ionicons
                name="person-circle-outline"
                color={Colors.primary}
                size={125}
              />
              <View>
                <Text style={styles.profileUsername}>{username}</Text>
                <Text style={styles.profileEmail}>{user.email}</Text>
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              {/* profile card */}
              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={toggleProfileModalHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="person-circle-outline"
                      size={27}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>Profile</Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
                <ProfileModal
                  visible={isOpenProfileModal}
                  onCancel={toggleProfileModalHandler}
                />
              </Card>
              {/* about card */}
              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openAboutDevHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="code-slash"
                      size={23}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>
                      About the Developer
                    </Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
                <AboutTheDevModal
                  visible={isOpenAboutModal}
                  onCancel={closeAboutHandler}
                />
              </Card>
              {/* feedback card */}
              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openFeedbackHandler}
                  style={styles.containerButton}
                >
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="thumbs-up"
                      size={24}
                      color={Colors.primary}
                    />
                    <Text style={styles.containerRowTitle}>Feedback</Text>
                  </View>
                  <Text style={styles.modalArrow}>&gt; </Text>
                </TouchableOpacity>
                <FeedbackModal
                  visible={isOpenFeedbackModal}
                  onCancel={closeFeedbackHandler}
                />
              </Card>
              {/* privacy card */}
              <Card style={styles.containerRow}>
                <TouchableOpacity
                  onPress={openPrivacyHandler}
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
                <PrivacyModal
                  visible={isOpenPrivacyModal}
                  onCancel={closePrivacyHandler}
                />
              </Card>
              {/* dark-mode switch */}
              <Card style={styles.container}>
                <View style={styles.row}>
                  <View style={styles.leftContainer}>
                    <Ionicons
                      name="contrast-sharp"
                      size={25}
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
              {/* sign-out button */}
              <Card style={styles.containerSignOut}>
                <TouchableOpacity onPress={handleSignOut}>
                  <View style={styles.rowSignOut}>
                    <Text style={styles.containerRowTitleSignOut}>Log Out</Text>
                  </View>
                </TouchableOpacity>
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
    marginTop: 12,
    marginBottom: 7.5,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
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
    width: "95%",
    borderRadius: 18,
    paddingVertical: 13,
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "95%",
    borderRadius: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7.5,
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
    marginBottom: 12,
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
    marginLeft: 15,
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

  containerSignOut: {
    marginVertical: 10,
    width: "95%",
    borderRadius: 18,
    paddingVertical: 13,
    borderColor: Colors.red,
    borderWidth: 5,
    backgroundColor: Colors.redOpacity,
  },

  rowSignOut: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerRowTitleSignOut: {
    color: Colors.red,
    fontWeight: "700",
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default SettingsScreen;
