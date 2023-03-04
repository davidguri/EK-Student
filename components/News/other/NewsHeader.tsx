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
import WeatherWidget from "../../Other/Weather/WeatherWidget";

export default function NewsHeader(props): any {

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{props.sub}</Text>
      </View>
      <WeatherWidget />
    </View>
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
});
