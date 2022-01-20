import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const EventElement = (props) => {
  return (
    <TouchableOpacity onPress={props.event}>
      <View style={{ ...styles.eventElement, ...props.style }}>
        <Text style={styles.eventTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventElement: {
    padding: 10,
    backgroundColor: "rgba(79, 255, 227, 0.2)",
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 12,
    marginRight: 5,
    minWidth: "20%",
    maxWidth: "35%"
  },

  eventTitle: {
    fontSize: 15.2,
    color: "white",
    fontWeight: "600",
  },
});

export default EventElement;
