import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";

import Colors from "../constants/colors";
import Card from "./Card";

const AboutDevModal = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>&lt; </Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>About the Developer</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bodyText}>{props.bodyContent}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 8.5,
  },

  header: {
    width: "100%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    color: Colors.blue,
    fontSize: 21,
    fontWeight: "500",
  },

  button: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  body: {
    width: "100%",
  },

  headContainer: {
    marginHorizontal: 10,
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
    paddingBottom: 7.5,
    textAlign: "center",
  },

  description: {
    color: "#777",
    fontSize: 24,
    fontWeight: "800",
  },

  content: {
    marginHorizontal: 10,
    paddingTop: 30,
  },

  bodyText: {
    color: "white",
    fontSize: 17,
  },
});

export default AboutDevModal;
