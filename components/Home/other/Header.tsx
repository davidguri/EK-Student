import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

import WeatherWidget from "../../Other/Weather/WeatherWidget";

import firebase from "firebase/compat";
import { auth } from "../../../firebase";

export default function Header(props): any {

  const [usernameVal, setUsernameVal] = useState("")

  let username: string;

  function readUserData() {
    firebase.database().ref("/UsersList").child(auth.currentUser.uid).orderByChild(auth.currentUser.uid).once("value", snapshot => {
      username = snapshot.val().username.split(" ")[0];
      setUsernameVal(username);
    }).catch((error) => {
      console.log("error:", error);
    })
  };

  readUserData();

  let objDate = new Date();
  let hours = objDate.getHours();
  let HelloText: string;
  if (hours >= 0 && hours < 12) {
    HelloText = "Good Morning," + " " + usernameVal;
  } else if (hours >= 12 && hours < 18) {
    HelloText = "Good 'Noon," + " " + usernameVal;
  } else {
    HelloText = "Good Evening," + " " + usernameVal;
  }

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{HelloText}</Text>
      </View>
      <WeatherWidget />
    </View >
  );
};

const styles = StyleSheet.create({
  header: {
    width: "92%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 12,
  },

  headerSubtitle: {
    color: "#666",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 12,
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
