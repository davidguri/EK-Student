import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const EventElement = (props) => {
  return (
    <View style={styles.eventElement}>
      <Text style={styles.eventTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventElement: {
    padding: 12,
    backgroundColor: Colors.opacity,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 16,
    marginRight: 12,
    marginBottom: 5,
  },

  eventTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
});

export default EventElement;
