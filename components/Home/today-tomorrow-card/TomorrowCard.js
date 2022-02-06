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

import Card from "../../Other/Global/Card";
import EventElement from "./EventElement";

import Colors from "../../../constants/colors";

const TomorrowCard = (props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Tomorrow</Text>
      </View>
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

  cardTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79, 255, 227, 0.2)",
    paddingBottom: 10,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },

  content: {
    paddingTop: 5,
  },

  section: {
    flexDirection: "column",
    paddingTop: 10,
  },

  sectionHeader: {
    fontSize: 17,
    color: "white",
    fontWeight: "600",
    paddingBottom: 5,
  },
});

export default TomorrowCard;
