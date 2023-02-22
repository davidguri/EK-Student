import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

import NewsCardElement from "./NewsCardElement";
import Card from "../../Other/Global/Card";

// const DATA = [
//   {
//     publisher: "Principal's Office",
//     title: "Back to School Folks",
//     date: "September 09, 2022", // Date format is: Month DD, YYYY
//     id: "item1",
//   },
// ];

export default function NewsTodayCard(props): any {

  const [items, setItems] = useState([
    {
      id: "12",
      publisher: "Pricipal's Office",
      title: "Back to School Folks!",
      date: "September 09, 2022",
    },
    {
      id: "123",
      publisher: "Pricipal's Office",
      title: "Back to School Folks!",
      date: "September 09, 2022",
    },
    {
      id: "1234",
      publisher: "Pricipal's Office",
      title: "Back to School Folks!",
      date: "September 09, 2022",
    }
  ])

  const Item = ({ title, publisher, date }) => {
    return (
      <TouchableOpacity>
        <NewsCardElement title={title} publisher={publisher} date={date} />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <Item title={item.title} publisher={item.publisher} date={item.date} />;

  /* 
  "Old News" card will have the title on the left (50-65%) and a day counter (eg: 2 days) with the number over the text on the right.
  "Old News" will be considered every news that has been more than 2 days since its publishment. 

  The modals will be the same for all of the different types of news (in order):
  - Back arrow (upper left, inline) that closes the modal
  - Small tag (upper left, inline) that shows type of news (color determined by type of news)
  - Date (upper right, inline)
  - Title (below the other components) full width
  - Publisher info (below title, left)
  - Description/body (rest of page)

  For the news from the Ministry of Education, use a python web scraper to first fetch the data (this needs to be running on a server though)
  and then a python script to dump that data into firebase to then be read by the react native side of the project.
  */

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>News For Today</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
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
    width: "95%",
    marginHorizontal: "2.5%",
  },

  cardTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    paddingLeft: 2,
  },

});
