import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

export default function CalendarHeader(props): any {

  const [selected, setSelected] = useState(1);

  let iconColor1: string, iconColor2: string;

  if (selected == 1) {
    iconColor1 = "black";
    iconColor2 = Colors.primary;
  } else {
    iconColor2 = "black";
    iconColor1 = Colors.primary;
  }

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
    days[dt.getDay()] + ", " + months[dt.getMonth()] + " " + dt.getDate() + nth(dt.getDate());

  return (
    <View style={styles.header}>
      <View style={{}}>
        <Text style={styles.headerTitle}>Today,</Text>
        <Text style={styles.headerSubtitle}>{date}</Text>
      </View>
      <View style={styles.headerButtonContainer}>
        <TouchableHighlight
          onPress={() => setSelected(1)}
          style={[
            styles.buttonLeftContainer,
            selected === 1 ? { backgroundColor: Colors.primary } : null,
          ]}
        >
          <Ionicons
            name="calendar"
            color={iconColor1}
            size={25}
            style={{ padding: 5 }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelected(2)}
          style={[
            styles.buttonRightContainer,
            selected === 2 ? { backgroundColor: Colors.primary } : null,
          ]}
        >
          <Ionicons
            name="apps"
            color={iconColor2}
            size={25}
            style={{ padding: 5 }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  headerButtonContainer: {
    width: "auto",
    flexDirection: "row",
    height: "auto",
  },

  buttonLeftContainer: {
    borderWidth: 2.5,
    borderRightWidth: 1.35,
    borderColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 4.75,
    paddingHorizontal: 5.3,
  },

  buttonRightContainer: {
    borderWidth: 2.5,
    borderLeftWidth: 1.35,
    borderColor: Colors.primary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 4.75,
    paddingHorizontal: 5.3,
  },
});
