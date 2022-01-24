import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Header title="Home" />
      </View>
      <View style={styles.smallCardContainer}>
        <View style={styles.leftContainer}>
          <TemperatureCardSmall />
          <Card style={styles.teamsCard}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://youtube.com")}
              style={styles.buttonContainer}
            >
              <View style={styles.section}>
                <Ionicons name="logo-tumblr" size={28} color={Colors.primary} />
                <Text style={styles.buttonText}>Teams</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
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
    padding: 10,
  },

  teamsCard: {
    width: "100%",
    paddingVertical: 8.75,
    borderRadius: 22,
    borderColor: Colors.primary,
    borderWidth: 4,
    backgroundColor: Colors.opacity,
  },

  smallCardContainer: {
    margin: 10,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "47.75%",
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
    paddingLeft: 10,
    fontSize: 19,
    color: Colors.primary,
    fontWeight: "600",
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
