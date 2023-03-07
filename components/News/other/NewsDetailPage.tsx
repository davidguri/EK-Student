import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";

import Colors from "../../../constants/colors";

const NewsDetailPage = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.imageContainer}>
                <Image source={props.image} style={styles.image} />
              </View>
              <View style={styles.headContainer}>
                <Text style={styles.publisher}>{props.publisher}</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bodyText}>Lorem Ipsum Dolor Sit Amet</Text>
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  buttonText: {
    color: Colors.red,
    fontSize: 18,
    fontWeight: "800",
    padding: 5,
    paddingHorizontal: 10,
  },

  button: {
    borderWidth: 3,
    borderColor: Colors.red,
    borderRadius: 50,
    backgroundColor: Colors.redOpacity,
    marginRight: 5,
    marginBottom: 5,
  },

  body: {
    width: "100%",
  },

  imageContainer: {
    paddingTop: 15,
  },

  image: {
    width: "100%",
    height: 275,
    borderWidth: 5,
    borderColor: Colors.primary,
    borderRadius: 25,
  },

  headContainer: {
    marginHorizontal: 10,
  },

  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "900",
    paddingBottom: 6.5,
  },

  publisher: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "500",
    paddingVertical: 10,
    paddingBottom: 17.5,
    opacity: 0.75,
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

export default NewsDetailPage;
