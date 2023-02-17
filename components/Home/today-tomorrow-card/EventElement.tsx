import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";

export default function EventElement(props): any {
  return (
    <View style={styles.eventElement}>
      <Text style={styles.eventTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventElement: {
    padding: 17,
    backgroundColor: Colors.opacity,
    borderColor: Colors.primary,
    borderWidth: 3.5,
    borderRadius: 15,
    width: "100%",
  },

  eventTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
