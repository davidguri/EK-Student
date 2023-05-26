import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import EventElement from "./EventElement";

import Colors from "../../../constants/colors";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Math",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.classes.main,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "English",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.events.main,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Albanian",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.daysOff.main,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Exam History",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.primary,
  },
];

const DATA_TMR = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Class Item",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.classes.main,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Event Item",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.events.main,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Day Off Item",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.daysOff.main,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Test Item",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    colors: Colors.primary,
  },
];

export default function UpcomingCard(props): any {

  const Item = ({ title, colors, description }) => (
    <EventElement title={title} color={colors} description={description} />
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} colors={item.colors} description={item.description} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Timetable</Text>
      <FlatList
        data={DATA_TDY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }}></View>}
      />
      <Text style={styles.cardTitle}>For Tomorrow</Text>
      <FlatList
        data={DATA_TMR}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 25,
  },

  cardTitle: {
    fontSize: 32,
    color: "white",
    paddingVertical: 18,
    fontWeight: "bold",
  },

  eventElement: {
    marginRight: 12,
  },
});
