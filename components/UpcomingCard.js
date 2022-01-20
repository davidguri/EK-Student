import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import Card from "./Card";
import EventElement from "./EventElement";

import Colors from "../constants/colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "THIS",
    eventType: {
      color: "white",
      type: "class",
    }
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "IS",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "SPARTA",
  },
];

const Item = ({ title }) => {
  <EventElement title={title} />;
};

const UpcomingCard = (props) => {
  const renderItem = ({ item }) => {
    <Item title={item.title} />;
  };

  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>Today's Events</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      ></FlatList>
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

export default UpcomingCard;
