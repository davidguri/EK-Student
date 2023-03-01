import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/colors";
import WeatherWidget from "../../Other/Weather/WeatherWidget";

import firebase from "firebase/compat";

export default function Header(props): any {

  const [usernameVal, setUsernameVal] = useState("")

  const readUserData = () => {
    firebase.database().ref("UsersList/").once('child_added', function (snapshot) {
      var username = snapshot.val().username.split(" ")[0]
      setUsernameVal(username)
    });
  }

  readUserData()

  var objDate = new Date();
  var hours = objDate.getHours();
  if (hours >= 0 && hours < 12) {
    var HelloText = "Good Morning," + " " + usernameVal;
  } else if (hours >= 12 && hours < 18) {
    var HelloText = "Good 'Noon," + " " + usernameVal;
  } else {
    var HelloText = "Good Evening," + " " + usernameVal;
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
