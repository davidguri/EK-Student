import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import Card from "../../Other/Global/Card";
import EventElement from "./EventElement";
import EventModal from "./EventModal";

import Colors from "../../../constants/colors";

const DATA = [
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

const UpcomingCard = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ title, colors }) => (
    <TouchableOpacity onPress={toggleModalHandler}>
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
    <Card style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>For Today</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <EventModal isVisible={isModalVisible} onBackdropPress={toggleModalHandler} />
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
    paddingBottom: 18,
    fontWeight: "bold",
  },
});

export default UpcomingCard;
