import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

export default function CalendarHeader(props): any {

  let months = [
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

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dt = new Date();
  let date =
    months[dt.getMonth()] + " " + dt.getDate() + nth(dt.getDate()) + ", " + dt.getFullYear();

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{days[dt.getDay()]}</Text>
      <Text style={styles.headerSubtitle}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "flex-start",
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
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
});
