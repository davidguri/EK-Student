import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";
import { Ionicons } from "@expo/vector-icons";

export default function AchievementsModal(props: any) {
  const alertConst = () =>
    Alert.alert("Achievements", "This is a feature that allows you to earn badges throught the school year for things such as attendence, grades, how often you've handed in projects on time etc. These badges are ranked from bronze to diamond, meaning you can compete with your friends on who has the most badges!", [
      { text: "Ok", onPress: () => { }, style: "default" },
    ]);

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel}>
              <Ionicons
                name="chevron-back"
                size={32}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Achievements</Text>
            <TouchableOpacity onPress={alertConst}>
              <Ionicons
                name="information-circle-outline"
                size={28}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
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

  body: {
    width: "95%",
    marginHorizontal: "2.5%",
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 22,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
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
    marginLeft: 15,
  },

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    paddingVertical: 5,
    paddingBottom: 15,
  },

  gradeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderRadius: 15,
    marginRight: 12,
  },

  leftBox: {
    paddingRight: 24,
  },

  subjectText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 2,
  },

  noteText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    paddingVertical: 2,
    width: "100%",
  },

  gradeText: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    paddingVertical: 2,
    paddingLeft: 24,
  },

  reportCard: {
    borderRadius: 15,
    width: "100%",
    padding: 0,
    borderColor: Colors.primary,
    borderWidth: 3.5
  },

  textContainer: {
    padding: 15,
  },

  reportText: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
  },
});