import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function NewsCardElement(props): any {
  return (
    <Card style={styles.newsCard}>
      <Text style={styles.newsTitle}>{props.title}</Text>
      <Text style={styles.newsDesc}>Hello there I am david guri</Text>
      <View style={styles.infoContainer}>
        <View style={styles.newsSourceContainer}>
          <Ionicons name={props.iconName} color={Colors.primary} size={20} />
          <Text style={styles.newsSource}>{props.publisher}</Text>
        </View>
        <Text style={styles.newsInfo}>{props.date}</Text>
      </View>
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

  newsSourceContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center"
  },

  newsSource: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    paddingLeft: 10,
  },

  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
