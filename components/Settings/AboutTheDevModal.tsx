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
  Linking
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";

export default function AboutTheDevModal(props): any {
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

          <ScrollView style={{ width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>About The Developer</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bodyText}>I, David Guri, a student of this school, currently in 11th grade (as of writing this), developed this app for two reasons: first, I saw a problem that some students were facing, such as keeping track of tests, assignments etc, and second, this app acted as a project for my Computer Sciences subject.</Text>
                <Text style={styles.bodyText}>For more information, you can either talk to me irl (don't email me please, although if you want to, you can do it here: davidguri2006@gmail.com) or visit my GitHub account down below for more projects of mine 😊</Text>
              </View>
              <View style={styles.buttons}>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("https://github.com/davidguri").catch((error) => { console.log(error, " ek(0069)") })}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="logo-github"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>GitHub</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
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
  },

  description: {
    color: "#777",
    fontSize: 24,
    fontWeight: "800",
  },

  content: {
    paddingTop: 30,
    width: "95%",
    marginHorizontal: "2.5%",
  },

  bodyText: {
    color: "white",
    fontSize: 18,
    paddingBottom: 32,
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