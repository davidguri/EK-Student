import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Card from "./Card";
import NewsTabCard from "../components/NewsTabCard";

const DATA = {
  item1: {
    publisher: "Principal's Office",
    title: "Back to School Folks",
    description:
      "Our school, unlike every other school, starts on the 13th of September.",
    image: "https://i.ytimg.com/vi/RXma-bHU1WE/maxresdefault.jpg",
    id: "item1",
  },

  item2: {
    publisher: "Principal's Office",
    title: "Winter Break",
    description: "Bad news, it's been cut short, only 9 days!",
    image: "https://i.ytimg.com/vi/RXma-bHU1WE/maxresdefault.jpg",
    id: "item2",
  },

  item3: {
    publisher: "Principal's Office",
    title: "Something Else",
    description: "Some other description.",
    image: "https://i.ytimg.com/vi/RXma-bHU1WE/maxresdefault.jpg",
    id: "item3",
  },
};

const Item = ({ title, publisher, description, image }) => (
  <NewsTabCard
    publisher={publisher}
    title={title}
    desc={description}
    image={image}
  />
);

const NewsTodayCard = (props) => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      publisher={item.publisher}
      desc={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Today in News</Text>
      <Item
        publisher={DATA.item1.publisher}
        title={DATA.item1.title}
        description={DATA.item1.description}
        image={DATA.item1.image}
      />
      <Item
        publisher={DATA.item2.publisher}
        title={DATA.item2.title}
        description={DATA.item2.description}
        image={DATA.item2.image}
      />
      <Item
        publisher={DATA.item3.publisher}
        title={DATA.item3.title}
        description={DATA.item3.description}
        image={DATA.item3.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    marginBottom: 0,
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    fontWeight: "700",
    paddingBottom: 0,
  },
});

export default NewsTodayCard;
