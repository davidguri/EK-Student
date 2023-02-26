import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import NewsCardElement from "./NewsCardElement";
import EventModal from "../../Home/today-tomorrow-card/EventModal";

import Colors from "../../../constants/colors";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "wiejiwefqijwfowjeiguoqwjrojef",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "iejiwefqijwfowjeiguoqwjrojef",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "ejiwefqijwfowjeiguoqwjrojef",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
];

export default function NewsTodayCard(props): any {
  // const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ title, publisher, date }) => (
    <TouchableOpacity onPress={() => { }}>
      <NewsCardElement title={title} publisher={publisher} date={date} />
    </TouchableOpacity>
  );

  // const toggleModalHandler = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const renderItem = ({ item }) => (
    <Item title={item.title} publisher={item.publisher} date={item.date} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>News for Today</Text>
      <FlatList
        data={DATA_TDY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {/* <EventModal isVisible={isModalVisible} onBackdropPress={toggleModalHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 32,
    color: "white",
    paddingVertical: 15,
    fontWeight: "bold",
  },
});
