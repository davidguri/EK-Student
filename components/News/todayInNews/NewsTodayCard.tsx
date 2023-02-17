import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const DATA = [
  {
    publisher: "Principal's Office",
    title: "Back to School Folks",
    date: "September 09, 2022", // Date format is: Month DD, YYYY
    id: "item1",
  },
];

export default function NewsTodayCard(props): any {
  const Item = ({ title, publisher, date }) => (
    <View style={styles.newsCard}>
      <Text style={styles.newsTitle}>{title}</Text>
      <View style={styles.newsInfoContainer}>
        <Text style={styles.newsInfo}>{publisher}</Text>
      </View>
    </View>
    /* 
    There will be two flatlists: One with the "News"(Horizontal) and one with "Old news"(only in NewsScreen.tsx)(Vertical)
    The "News" card will be fully one color (either Colors.primary or different color based on type) and small (35-40vh ; 100vw)
    It only contains: title(big, roughly 75-80% of the card), and the info below it (20-25% of the card)
    "News" types will be considered: Announcements(.primary), Events(.events), !!Test/Project postponements!!(.tests), daysOff(.daysOff)
    "Old News" card will have the title on the left (50-65%) and a day counter (eg: 2 days) with the number over the text on the right.
    "Old News" will be considered every news that has been more than 2 days since its publishment. 

    The modals will be the same for all of the different types of news (in order):
    - Back arrow (upper left, inline) that closes the modal
    - Small tag (upper left, inline) that shows type of news (color determined by type of news)
    - Date (upper right, inline)
    - Title (below the other components) full width
    - Publisher info (below title, left)
    - Description/body (rest of page)

    For the news from the Ministry of Education, use a python web scraper to first fetch the data (this needs to be running on a server though) and then a python script to dump that data into firebase to then be read by the react native side of the project.
    */
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      publisher={item.publisher}
      date={item.date}
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

  newsCard: {
    alignItems: "flex-start",
    justinfyContent: "center",
  },

  newsTitle: {
    fontSize: 28,
    fontWeight: "800",
  },

  newsInfoContainer: {
    flexDirection: "row",
    justtifyContent: "center"
  },

  newsInfo: {
    fontSize: 14,
    fontWeight: "600"
  },

  cardTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    paddingLeft: 2,
  },
});
