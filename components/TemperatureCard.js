import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Card from "./Card";
import Colors from "../constants/colors";

import { weatherConditions } from "./WeatherConditions";

const TemperatureCard = (props) => {
  var apiKey = "02d60f9f68d161477b8d81a069ac7d31";

  var current;
  var min;
  var max;
  var desc;

  var weather = "Drizzle";
  var temperature = "11";

  return (
    <Card style={styles.card}>
      <View style={styles.imageContainer}>
        <Ionicons
          size={40}
          style={styles.conditionIcon}
          name={weatherConditions[weather].icon}
          color={"#fff"}
        />
      </View>
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
      <View style={styles.currentContainer}>
        <Text style={styles.currentText}>{temperature}&deg;</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 16,
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
    fontSize: 20,
    fontWeight: "600",
  },

  subtitleText: {
    color: "#8c8c8c",
    fontSize: 15,
    fontWeight: "600",
  },

  currentText: {
    color: "#8c8c8c",
    fontSize: 35,
    paddingLeft: 5,
  },
});

export default TemperatureCard;
