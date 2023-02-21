import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Card from "../Global/Card";
import Colors from "../../../constants/colors";

import { weatherConditions } from "./WeatherConditions";

export default function WeatherWidget(props): any {
  var weather = "Clear";

  // const APIKey = "5ef20fd863163abbd8e6a39edee11718";
  // const lat = "41.35656308348034";
  // const lon = "19.73590479245462";

  // const URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIKey}";

  // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`)
  //   .then(response => response.json())
  //   .then(json => {
  //     if
  //   })

  return (
    <Card style={{ ...styles.tempCard, ...props.styles }}>
      <View style={styles.main}>
        <View style={styles.leftContainer}>
          <Ionicons
            size={40}
            style={styles.conditionIcon}
            name={weatherConditions[weather].icon}
            color={Colors.primary}
          />
          <View style={styles.weatherData}>
            <Text style={styles.conditionText}>{weatherConditions[weather].title}</Text>
            <Text style={styles.subtitleText}>H: 13&deg; L: 10&deg;</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.currentText}>12&deg;</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  tempCard: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 14,
  },

  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  conditionIcon: {
    marginRight: 16,
  },

  weatherData: {
    flexDirection: "column",
    justifyContent: "center"
  },

  conditionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 1.5,
  },

  subtitleText: {
    color: "#fff",
    fontSize: 15,
    marginTop: 1.8,
    fontWeight: "600",
  },

  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },

  currentText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700"
  },
});
