import React, { useState, useContext } from "react";
import {
  View,
  Text,
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
import Colors from "../constants/colors";
import { AppContext } from "../App";

import Card from "../components/Other/Global/Card";
import AboutTheDevModal from "../components/Settings/AboutTheDevModal";
import FeedbackModal from "../components/Settings/FeedbackModal";
import PrivacyModal from "../components/Settings/PrivacyModal";
import ProfileModal from "../components/Settings/ProfileModal";

import firebase from "firebase/compat";
import { auth } from "../firebase";
import { CalendarContext } from "react-native-calendars";

export default function SettingsScreen(props): any {

  const [usernameVal, setUsernameVal] = useState("")
  const [emailVal, setEmailVal] = useState("")

  function readUserData() {
    firebase.database().ref("/UsersList").child(auth.currentUser.uid).orderByChild(auth.currentUser.uid).once("value", snapshot => {
      //console.log(snapshot.val().username, snapshot.val().email);
      setUsernameVal(snapshot.val().username);
      setEmailVal(snapshot.val().email);
    }).catch((error) => {
      console.log("error:", error);
    })
  };

  readUserData();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const alertConst = () =>
    Alert.alert("HAH!", "No light mode allowed.", [
      { text: "OK", onPress: () => setIsEnabled(true), style: "default" },
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

  const { setIsSignedIn }: any = useContext(AppContext);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsSignedIn(false);
      })
      .catch((error) => alert(error.message));
  };

  // Countdown shtuff
  let endOfSchool = (new Date("06/14/2023")).getTime()
  let currentDay = (new Date()).getTime()
  let diff = endOfSchool - currentDay
  let daysUntil = (Math.ceil(diff / (1000 * 3600 * 24))).toString()
  let daysUntilInt = Math.ceil(diff / (1000 * 3600 * 24))
  let countdownText = "Only " + daysUntil + " left!"
  let progressWidth = (100 - ((daysUntilInt / 235) * 100))

  // turn these cards below into a seperate component cause this file is to big
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
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
                <Text style={styles.profileUsername}>{usernameVal}</Text>
                <Text style={styles.profileEmail}>{emailVal}</Text>
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <Card style={styles.containerRow}>
                <View style={styles.leftContainer}>
                  <Text style={styles.containerRowTitle}>{countdownText}</Text>
                </View>
                <View style={{ width: "100%" }}>
                  <View style={{ width: `${progressWidth}%` }}>
                    {/* Check if this works for the progress bar thingy */}
                  </View>
                </View>
              </Card>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    height: "100%",
    alignItems: "center",
    padding: 5,
  },

  header: {
    width: "92%",
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
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 5,
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
    fontWeight: "700",
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

  progressBar: {
    // width: `100% - {daysUntil}`
  },
});
