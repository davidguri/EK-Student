import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "../constants/colors";

var months = [
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

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dt = new Date();
var date =
  days[dt.getDay()] +
  ", " +
  months[dt.getMonth()] +
  " " +
  dt.getDate() +
  nth(dt.getDate());

import NewsHeader from "../components/News/other/NewsHeader";
import TemperatureCardSmall from "../components/Other/Weather/WeatherWidget";
import NewsTodayCard from "../components/News/todayInNews/NewsTodayCard";
import NewsProjectCard from "../components/News/other/NewsProjectCard";

export default function NewsScreen(props): any {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <NewsHeader title="News" sub={date} />
      </View>
      <View style={styles.smallCardContainer}>
        <TemperatureCardSmall />
        <NewsProjectCard />
      </View>
      <View style={{ margin: 3, marginBottom: 12 }}>
        <NewsTodayCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 7.5,
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
