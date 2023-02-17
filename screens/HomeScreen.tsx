import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "../components/Home/other/Header";
import UpcomingCard from "../components/Home/today-tomorrow-card/UpcomingCard";
import WeatherWidget from "../components/Other/Weather/WeatherWidget";
import NewsTodayCard from "../components/News/todayInNews/NewsTodayCard";
import GoalsCard from "../components/Home/goals-more-card/GoalsCard";

import Colors from "../constants/colors";
import Card from "../components/Other/Global/Card";

export default function HomeScreen(props): any {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Header title="Home" />
      </View>
      <View style={styles.smallCardContainer}>
        <WeatherWidget />
        <GoalsCard />
      </View>
      <View>
        <UpcomingCard />
        <NewsTodayCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingBottom: 10,
  },

  header: {
    alignItems: "center",
  },

  smallCardContainer: {
    margin: 10,
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
  },
});
