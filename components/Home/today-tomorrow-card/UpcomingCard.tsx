import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import EventElement from "./EventElement";
import EventModal from "./EventModal";

import Colors from "../../../constants/colors";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Class Item",
    colors: Colors.classes.main,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Event Item",
    colors: Colors.events.main,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Day Off Item",
    colors: Colors.daysOff.main,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Test Item",
    colors: Colors.tests.main,
  },
];

const DATA_TMR = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Class Item",
    colors: Colors.classes.main,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Event Item",
    colors: Colors.events.main,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Day Off Item",
    colors: Colors.daysOff.main,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Test Item",
    colors: Colors.tests.main,
  },
];

export default function UpcomingCard(props): any {
  const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ title, colors }) => (
    <TouchableOpacity onPress={toggleModalHandler} style={styles.eventElement}>
      <EventElement title={title} />
    </TouchableOpacity>
  );

  const toggleModalHandler = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <Item title={item.title} colors={item.colors} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Next Today</Text>
      <FlatList
        data={DATA_TDY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.cardTitle}>For Tomorrow</Text>
      <FlatList
        data={DATA_TMR}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <EventModal isVisible={isModalVisible} onBackdropPress={toggleModalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginTop: 0,
    borderRadius: 18,
  },

  cardTitle: {
    fontSize: 30,
    color: "white",
    paddingVertical: 12,
    fontWeight: "bold",
  },

  eventElement: {
    marginRight: 12,
  },
});
