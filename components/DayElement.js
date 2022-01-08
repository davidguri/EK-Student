import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const DayElement = (props) => {
  return (
    <TouchableOpacity onPress={props.event}>
      <View style={{ ...styles.dayElement, ...props.style }}>
        <Text style={styles.dayTitle}>{props.dayNum}</Text>
        <Text style={styles.dayText}>{props.dayText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dayElement: {
    padding: 10,
    backgroundColor: "rgba(79, 255, 227, 0.2)",
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 10,
    marginRight: 8,
  },

  dayTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },

  dayText: {
    fontSize: 10,
    color: "white",
    fontWeight: "400",
  },
});

export default DayElement;
