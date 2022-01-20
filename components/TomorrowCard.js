import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Card from "./Card";
import EventElement from "./EventElement";

import Colors from "../constants/colors";

const TomorrowCard = (props) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>Tomorrow</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 18,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    paddingBottom: 15,
    fontWeight: "bold",
  },

  events: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  eventElement: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginRight: 8,
  },

  eventTitle: {
    fontSize: 15,
    color: "black",
  },

  eventType: {
    fontSize: 15,
    color: "white",
  },
});

export default TomorrowCard;
