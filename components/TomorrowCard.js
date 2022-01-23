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
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Classes</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Projects</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Tests</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Events</Text>
        </View>
      </View>
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

  section: {
    flexDirection: "column",
    paddingTop: 10,
  },

  sectionHeader: {
    fontSize: 17,
    color: Colors.primary,
    fontWeight: "600",
    paddingBottom: 5,
  },
});

export default TomorrowCard;
