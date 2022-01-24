import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Touchable,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import TomorrowCard from "../components/TomorrowCard";
import UpcomingCard from "../components/UpcomingCard";
import TemperatureCardSmall from "../components/TemperatureCardSmall";
import NewsTodayCard from "../components/NewsTodayCard";
import GoalsCard from "../components/GoalsCard";

import Colors from "../constants/colors";
import Card from "../components/Card";

import Logo from "../assets/Images/teamsIcon.png";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Header title="Home" />
      </View>
      <View style={styles.smallCardContainer}>
        <TemperatureCardSmall />
        <Card style={styles.teamsCard}>
          <View style={styles.topContainer}>
            <Image source={Logo} style={{ width: 67.5, height: 67.5 }} />
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.microsoft.com/en-ww/microsoft-teams/log-in"
                )
              }
              style={styles.buttonContainer}
            >
              <Text style={styles.title}>Teams</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      <View style={styles.goalsContainer}>
        <GoalsCard />
      </View>
      <View>
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

  teamsCard: {
    width: "47.75%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderRadius: 22,
  },

  buttonContainer: {},

  smallCardContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  topContainer: {
    paddingTop: 5,
  },

  bottomContainer: {
    paddingBottom: 5,
  },

  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "600",
  },
});

export default HomeScreen;
