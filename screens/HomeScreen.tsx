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
        <Card style={styles.card}>
          <NewsTodayCard />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 7.5,
    paddingBottom: 10,
  },

  header: {
    alignItems: "center",
  },

  helloText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    paddingTop: 8,
    textAlign: "center",
  },

  tempContainer: {
    marginVertical: 10,
    alignItems: "center",
  },

  card: {
    margin: 10,
    marginBottom: 15,
    borderRadius: 15,
    padding: 10,
  },

  teamsCard: {
    width: "100%",
    paddingVertical: 9,
    borderRadius: 21,
    borderColor: Colors.primary,
    borderWidth: 4,
    backgroundColor: Colors.opacity,
    padding: 15,
  },

  smallCardContainer: {
    margin: 10,
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
  },

  leftContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "48%",
  },

  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonText: {
    paddingLeft: 12,
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "600",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 35,
    height: 35,
  }
});
