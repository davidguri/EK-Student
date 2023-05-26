import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import NewsCardElement from "./NewsCardElement";
import Colors from "../../../constants/colors";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "As finals are nearing, students share their opinions on the school year.",
    publisher: "School",
    date: "September 14, 2022",
    iconName: "school",
    description: "Here are the 10 questions we asked them:",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back to School!",
    publisher: "School",
    date: "September 14, 2022",
    iconName: "school",
    description: "Here are the 10 questions we asked them:",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Back to!",
    publisher: "mEDU",
    date: "September 14, 2022",
    iconName: "business",
    description: "Here are the 10 questions we asked them:",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

const Item = ({ title, publisher, date, iconName, description, body }) => (
  <NewsCardElement title={title} publisher={publisher} date={date} iconName={iconName} description={description} body={body} />
);

export default function NewsTodayCard(props): any {

  const renderItem = ({ item }) => (
    <Item title={item.title} publisher={item.publisher} date={item.date} iconName={item.iconName} description={item.description} body={item.body} />
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
        ListEmptyComponent={<Text style={{ color: Colors.primary, fontSize: 21, fontWeight: "600", textAlign: "center", paddingBottom: 20 }}>You seem to be all caught up!{"\n"}Check back in later.</Text>}
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
