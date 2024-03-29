import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Card from "../Global/Card";

import { weatherConditions } from "./WeatherConditions";

export default function WeatherWidget(props): any {
  let temp: any;

  const [tempVal, setTempVal] = useState();
  const [conditionVal, setConditionVal] = useState("Loading");

  const APIKey = "d85a5fbcd7e99247c549168f81153b34"; // this might change sometimes so beware!
  const lat = "41.35656308348034";
  const lon = "19.73590479245462";

  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === "404") {
          console.log("!!404!!");
        };

        let round: any; // rrumbullakimi

        temp = json.main.temp;
        round = temp.toString().split(".")[1]
        if (round.length >= 2) {
          if (parseInt(round) > 50) {
            temp = Math.ceil(parseFloat(json.main.temp))
            setTempVal(temp)
          } else {
            temp = Math.floor(parseFloat(json.main.temp))
            setTempVal(temp)
          }
        } else {
          if (parseInt(round) > 5) {
            temp = Math.ceil(parseFloat(json.main.temp))
            setTempVal(temp)
          } else {
            temp = Math.floor(parseFloat(json.main.temp))
            setTempVal(temp)
          }
        };
        setTempVal(temp)
        setConditionVal(json.weather[0].main)
        // console.log(conditionVal)
      })
  };

  setInterval(fetchData, 300000) // 5 minutes
  fetchData();

  return (
    <Card style={styles.tempCard}>
      <Text style={styles.currentText}>{tempVal}&deg;</Text>
      <Ionicons
        size={32}
        name={weatherConditions[conditionVal].icon}
        style={styles.currentIcon}
        color={weatherConditions[conditionVal].color}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  tempCard: {
    paddingVertical: 10,
    padding: 13,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  currentIcon: {
    marginHorizontal: "1.3%",
  },

  currentText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "800",
    marginHorizontal: "1.3%",
  },
});
