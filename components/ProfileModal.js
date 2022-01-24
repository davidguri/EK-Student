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
  StatusBar,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import Card from "./Card";

var account = "Developer";

const ProfileModal = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>&lt; </Text>
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>Profile</Text>
              </View>
              <View style={styles.content}>
                <Card style={styles.container}>
                  <Text style={styles.containerTitle}>Account Type</Text>
                  <Text style={styles.accountType}>{account}</Text>
                </Card>
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

  accountType: {
    paddingTop: 4,
    color: "#8c8c8c",
    fontSize: 15,
  },

  content: {
    marginHorizontal: 10,
    paddingTop: 30,
    width: "90%",
  },

  container: {
    marginVertical: 10,
    width: "90%",
    borderRadius: 18,
    paddingVertical: 15,
  },

  containerTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default ProfileModal;
