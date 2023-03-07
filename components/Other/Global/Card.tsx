import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";

export default function Card(props): any {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: Colors.back,
    padding: 20,
    borderRadius: 10,
  },
});
