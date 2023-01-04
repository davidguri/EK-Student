import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../constants/colors";

const FeedbackModal = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onSwipeComplete={props.onCancel}
      swipeDirection="right"
    >
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
                <Text style={styles.title}>Feedback</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bodyText}>Feedback shizz</Text>
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
  },

  description: {
    color: "#777",
    fontSize: 24,
    fontWeight: "800",
  },

  content: {
    marginHorizontal: 10,
    paddingTop: 30,
    width: "90%",
    marginHorizontal: "5%",
  },

  bodyText: {
    color: "white",
    fontSize: 18,
    paddingBottom: 32,
    width: "98%",
    marginHorizontal: "1%",
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 12,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default FeedbackModal;