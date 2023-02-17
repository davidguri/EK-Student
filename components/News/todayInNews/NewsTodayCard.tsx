import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const DATA = [
  {
    publisher: "Principal's Office",
    title: "Back to School Folks",
    description:
      "Our school, unlike every other school, starts on the 13th of September.",
    image: "https://i.ytimg.com/vi/RXma-bHU1WE/maxresdefault.jpg",
    id: "item1",
  },
];

export default function NewsTodayCard(props): any {
  const Item = ({ title, publisher, description, image }) => (
    <View>
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      publisher={item.publisher}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Today in News</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    marginBottom: 0,
    borderRadius: 18,
  },

  cardTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    paddingLeft: 2,
  },
});
