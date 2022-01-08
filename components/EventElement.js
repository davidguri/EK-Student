import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

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
    borderRadius: 10,
    marginRight: 8,
  },

  eventTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
  },
});

export default EventElement;
