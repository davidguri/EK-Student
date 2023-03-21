import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import NewsCardElement from "./NewsCardElement";


const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Back to School, folks",
    publisher: "School",
    date: "September 14, 2022",
    iconName: "school"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back to School, folks!",
    publisher: "School",
    date: "September 14, 2022",
    iconName: "school"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Back to School, folks!",
    publisher: "mEDU",
    date: "September 14, 2022",
    iconName: "business"
  },
];

export default function NewsTodayCard(props): any {

  const Item = ({ title, publisher, date, iconName }) => (
    <TouchableOpacity onPress={() => { }}>
      <NewsCardElement title={title} publisher={publisher} date={date} iconName={iconName} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} publisher={item.publisher} date={item.date} iconName={item.iconName} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>News for The Week</Text>
      <FlatList
        data={DATA_TDY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    marginHorizontal: "2.5%"
  },

  cardTitle: {
    fontSize: 32,
    color: "white",
    paddingVertical: 15,
    fontWeight: "bold",
  },
});
