import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Card from "../Global/Card";
import Colors from "../../../constants/colors";

import { weatherConditions } from "./WeatherConditions";

export default function TemperatureCardSmall(props): any {
  var weather = "Clear";
  return (
    <Card style={{ ...styles.tempCard, ...props.styles }}>
      <View style={styles.topContainer}>
        <View>
          <Ionicons
            size={45}
            style={styles.conditionIcon}
            name={weatherConditions[weather].icon}
            color={"#fff"}
          />
        </View>
        <View>
          <Text style={styles.currentText}>12&deg;</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.conditionText}>
            {weatherConditions[weather].title}
          </Text>
          <View>
            <Text style={styles.subtitleText}>H: 13&deg; L: 10&deg;</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  tempCard: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 22,
  },

  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 18.5,
    paddingTop: 5,
  },

  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 9,
    paddingTop: 6.5,
  },

  textContainer: {
    flex: 1,
  },

  temperatureText: {
    flexDirection: "row",
  },

  conditionIcon: {
    marginRight: 10,
  },

  conditionText: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: "600",
  },

  subtitleText: {
    color: "#fff",
    fontSize: 13.55,
    fontWeight: "600",
    paddingTop: 3.2,
  },

  currentText: {
    color: "#fff",
    fontSize: 38,
  },
});
