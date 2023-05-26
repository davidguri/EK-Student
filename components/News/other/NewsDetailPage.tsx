import React from "react";
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
import { Ionicons } from "@expo/vector-icons";

export default function NewsDetailPage(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <View style={styles.publisherContainer}>
              <Ionicons name={props.iconName} color={Colors.primary} size={20} />
              <Text style={styles.publisher}>{props.publisher}</Text>
            </View>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bodyText}>{props.body}</Text>
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
    backgroundColor: "transparent",
    paddingBottom: 20,
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
    paddingBottom: 20,
    marginHorizontal: 10,
    borderBottomColor: Colors.opacity,
    borderBottomWidth: 3,
  },

  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "900"
  },

  publisher: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    paddingLeft: 10,
  },

  description: {
    color: "#4a4a4a",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },

  content: {
    marginHorizontal: 10,
    paddingTop: 25,
  },

  bodyText: {
    color: "white",
    fontSize: 18.5,
    letterSpacing: 0.5,
  },

  publisherContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",

  },
});
