import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Header from "../components/Header";
import TomorrowCard from "../components/TomorrowCard";
import UpcomingCard from "../components/UpcomingCard";
import TemperatureCard from "../components/TemperatureCard";
import NewsTodayCard from "../components/NewsTodayCard";
import GoalsCard from "../components/GoalsCard";

import Colors from "../constants/colors";
import Card from "../components/Card";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Header title="Home" />
      </View>
      <View style={styles.tempContainer}>
        <TemperatureCard />
      </View>
      <View>
        <GoalsCard />
        <UpcomingCard />
        <TomorrowCard />
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
  },

  events: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  eventElement: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginRight: 8,
  },

  eventTitle: {
    fontSize: 15,
    color: "black",
  },

  eventType: {
    fontSize: 15,
    color: "white",
  },

  span: {
    color: Colors.primary,
  },
});

export default HomeScreen;
