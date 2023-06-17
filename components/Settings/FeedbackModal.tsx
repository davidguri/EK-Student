import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
import Card from "../Other/Global/Card";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors";

export default function FeedbackModal(props): any {
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
        <ScrollView style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel}>
              <Ionicons
                name="chevron-back"
                size={32}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Feedback</Text>
          </View>

          <View style={{ width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.content}>
                <Text style={styles.bodyText}>If you have any opinions, good or bad, or any suggestions on what you would like me to add or remove from the app, you're welcome to talk to me irl or email me using the first link below. If you're an advanced programmer, then open an issue at the second link below. If you don't feel like doing any of these, then you can get a friend to do it idk.</Text>
              </View>
              <View style={styles.buttons}>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("mailto:davidguri2006@gmail.com").catch((error) => { console.log(error, "ek(0069)") })}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="mail"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>Send an Email</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("https://github.com/davidguri/EK-Student/issues/new/choose").catch((error) => { console.log(error, " ek(0069)") })}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="logo-github"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>Open issue on Github</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    padding: 8.5,
  },

  header: {
    width: "95%",
    marginHorizontal: "2.5%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginBottom: 20,
  },

  headerTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 8,
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

  content: {
    paddingBottom: 25,
    width: "95%",
    marginHorizontal: "2.5%",
  },

  bodyText: {
    color: "white",
    fontSize: 18,
    width: "98%",
    marginHorizontal: "1%",
  },

  buttons: {
    alignItems: "center",
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 15,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
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

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "95%",
    borderRadius: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7.5,
  },
});