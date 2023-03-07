import React from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function NewsCardElement(props): any {
  return (
    <Card style={styles.newsCard}>
      <Text style={styles.newsTitle}>{props.title}</Text>
      <Text style={styles.newsDesc}>Hello there I am david guri</Text>
      <Text style={styles.newsInfo}>{props.publisher}, {props.date}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  newsCard: {
    alignItems: "flex-start",
    justinfyContent: "center",
    paddingVertical: 25,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    width: "100%"
  },

  newsTitle: {
    fontSize: 39,
    fontWeight: "900",
    marginBottom: 5,
  },

  newsDesc: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  newsInfo: {
    fontSize: 14,
    fontWeight: "600",
  },
});
