import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import Colors from "../constants/colors";
import NewsHeader from "../components/News/other/NewsHeader";
import NewsTodayCard from "../components/News/todayInNews/NewsToday";
import NewsOldCard from "../components/News/oldNews/NewsOld";
import QuoteCard from "../components/News/todayInNews/quoteCard";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dt = new Date();
let date =
  days[dt.getDay()] +
  ", " +
  months[dt.getMonth()] +
  " " +
  dt.getDate() +
  nth(dt.getDate());

export default function NewsScreen(props): any {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <View style={styles.header}>
        <NewsHeader title="News" sub={date} />
      </View>
      <View style={styles.smallCardContainer}>
        <QuoteCard />
      </View>
      <View style={{ width: "100%" }}>
        <NewsTodayCard />
        <NewsOldCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },

  header: {
    alignItems: "center",
  },

  card: {
    margin: 10,
    borderRadius: 15,
  },

  cardTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 5,
  },

  span: {
    color: Colors.primary,
  },

  smallCardContainer: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  leftConatiner: {
    flexDirection: "column",
    justifyContent: "center",
    width: "48%",
    alignItems: "center",
  },
});
