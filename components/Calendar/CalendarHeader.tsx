import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

import Colors from "../../constants/colors";

const CalendarHeader = (props) => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dt = new Date();
  var date =
    days[dt.getDay()] + ", " + months[dt.getMonth()] + " " + dt.getDate() + nth(dt.getDate());

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Today,</Text>
      <Text style={styles.headerSubtitle}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "75%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    justifyContent: "center",
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 12,
  },

  headerSubtitle: {
    color: "#666",
    fontSize: 21,
    fontWeight: "bold",
    paddingBottom: 12,
  },

  prevNextBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  btnText: {
    color: Colors.primary,
    padding: 12,
    fontSize: 23,
    fontWeight: "bold",
    opacity: 0.75,
  },
});

export default CalendarHeader;
