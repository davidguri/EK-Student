import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../../constants/colors";
import SettingsScreen from "../../../screens/SettingsScreen";

import firebase from "firebase/compat";

export default function Header(props): any {
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSettings(false);
  };

  var user = firebase.auth().currentUser;
  var email: any;

  if (user != null) {
    email = user.email;
  }

  var username = email.split("@")[0];

  var objDate = new Date();
  var hours = objDate.getHours();
  if (hours >= 0 && hours < 12) {
    var HelloText = "Good Morning," + " " + username;
  } else if (hours >= 12 && hours < 18) {
    var HelloText = "Good Afternoon," + " " + username;
  } else {
    var HelloText = "Good Evening," + " " + username;
  }

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{HelloText}</Text>
      </View>
      <TouchableOpacity onPress={() => setIsOpenSettings(true)}>
        <Ionicons
          name="person-circle-outline"
          color={Colors.primary}
          size={75}
        />
      </TouchableOpacity>
      <SettingsScreen visible={isOpenSettings} onCancel={closeModalHandler} />
    </View >
  );
};

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 12,
  },

  headerSubtitle: {
    color: "#666",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 12,
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
});
