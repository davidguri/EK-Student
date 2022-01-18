import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Card from "./Card";
import Colors from "../constants/colors";

import { weatherConditions } from "./WeatherConditions";

const TemperatureCardSmall = (props) => {
  var apiKey = "02d60f9f68d161477b8d81a069ac7d31";

  var temp;
  var min;
  var max;
  var desc;

  var weather = "Drizzle";
  var temperature = "11";

  return (
    <Card style={styles.card}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Ionicons
            size={45}
            style={styles.conditionIcon}
            name={weatherConditions[weather].icon}
            color={"#fff"}
          />
        </View>
        <View style={styles.currentContainer}>
          <Text style={styles.currentText}>{temperature}&deg;</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.conditionText}>
            {weatherConditions[weather].title}
          </Text>
          <View>
            <Text style={styles.subtitleText}>
              {weatherConditions[weather].subtitle}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "47.75%",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 22,
  },

  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 17.5,
    paddingTop: 5,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingTop: 10,
  },

  textContainer: {
    flex: 1,
  },

  temperatureText: {
    flexDirection: "row",
  },

  conditionIcon: {
    marginRight: 15,
  },

  conditionText: {
    color: Colors.primary,
    fontSize: 21.5,
    fontWeight: "600",
  },

  subtitleText: {
    color: "#8c8c8c",
    fontSize: 13,
    fontWeight: "600",
    paddingTop: 2.55,
  },

  currentText: {
    color: "#8c8c8c",
    fontSize: 38,
  },
});

export default TemperatureCardSmall;
