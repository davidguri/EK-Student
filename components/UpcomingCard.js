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

const UpcomingCard = (props) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>Today's Events</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Instead of a ScrollView and the elements inside of it, have a flatlist that scrolls horizontally, 
        and have the elements in a const DATA = () => [] above */}
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    paddingVertical: 5,
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

export default UpcomingCard;
